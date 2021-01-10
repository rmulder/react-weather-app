import { Fragment, useState, MouseEvent, useEffect } from 'react';
import * as S from './styles';
import { Header, Footer, Button, Table, Popup, List } from '../../components';
import csc from 'country-state-city';
import { CountryType, CityType, WeatherType } from '../../types';
import { isObjectEmpty } from '../../utils/helpers';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import { getWeatherByCoordinates } from '../../api/weather';

const mapContainerStyle = {
  width: '70vw',
  height: '562px',
};

// Default Kaunas City coordinates
const defaultCoordinates = {
  latitude: 54.8985,
  longitude: 23.9036,
};

const Landing: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);

  const [primaryInputValue, setPrimaryInputValue] = useState<string>('');
  const [secondaryInputValue, setSecondaryInputValue] = useState<string>('');

  const isChooseByCountrySection = currentSection === 0;

  const [selectedCountry, setSelectedCountry] = useState<CountryType>({} as CountryType);
  const [selectedCity, setSelectedCity] = useState<CityType>({} as CityType);

  const [weather, setWeather] = useState<WeatherType>({} as WeatherType);

  const [location, setLocation] = useState<{ latitude: number; longitude: number }>(
    defaultCoordinates
  );

  const [favoriteCities, setFavoriteCities] = useState<any[]>(
    JSON.parse(localStorage.getItem('fav-cities') || '[]')
  );

  const handleDeviceGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setWeather(
          await getWeatherByCoordinates(position.coords.latitude, position.coords.longitude)
        );
      },
      () => alert('Geolocation is not supported by this browser.'),
      { enableHighAccuracy: true, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    if (location === defaultCoordinates) handleDeviceGeolocation();
  }, []);

  const countries = isChooseByCountrySection
    ? csc.getAllCountries().filter((country) => {
        return country.name.toLowerCase().includes(primaryInputValue.toLowerCase());
      })
    : [];

  const cities =
    isChooseByCountrySection && selectedCountry?.name
      ? csc.getCitiesOfCountry(selectedCountry.isoCode).filter((city) => {
          return city.name.toLowerCase().includes(secondaryInputValue.toLowerCase());
        })
      : !isChooseByCountrySection
      ? csc.getAllCities().filter((city) => {
          return city.name.toLowerCase().includes(primaryInputValue.toLowerCase());
        })
      : [];

  const handleOnCellClick = async (value: any, type: string) => {
    if (type === 'country') {
      setWeather({} as WeatherType);
      setSelectedCountry(value);
      setPrimaryInputValue(value.name);
      // This exception handles the problem when a country doesn't have cities that have > 1000 population.
      if (csc.getCitiesOfCountry(value.isoCode).length === 0) {
        setWeather(await getWeatherByCoordinates(value.latitude, value.longitude));
        setSelectedCity(value);
      }
    } else if (!isChooseByCountrySection) {
      setWeather(await getWeatherByCoordinates(value.latitude, value.longitude));
      setSelectedCity(value);
      setPrimaryInputValue(value.name);
    } else {
      setWeather(await getWeatherByCoordinates(value.latitude, value.longitude));
      setSelectedCity(value);
      setSecondaryInputValue(value.name);
    }
  };

  const handleSectionClick = async (event: MouseEvent<HTMLButtonElement>) => {
    setToDefaultInputs();
    setCurrentSection(+event.currentTarget.id);
  };

  const handleOnGeolocationClick = () => {
    setToDefaultObjects();
    setToDefaultInputs();
    handleDeviceGeolocation();
  };

  const handleAddRemoveCityFromFavorites = () => {
    const favoriteCitiesCopy = [...favoriteCities];

    const index = favoriteCitiesCopy.findIndex((city: any) => {
      return city.name === weather.name;
    });

    if (index < 0) {
      const newCity = {
        name: weather.name,
        coordinates: { latitude: weather.coord.lat, longitude: weather.coord.lon },
      };
      favoriteCitiesCopy.push(newCity);
    } else favoriteCitiesCopy.splice(index, 1);
    favoriteCitiesCopy.sort((lhs, rhs) => (lhs.name > rhs.name ? 1 : rhs.name > lhs.name ? -1 : 0));
    setFavoriteCities(favoriteCitiesCopy);
    localStorage.setItem('fav-cities', JSON.stringify(favoriteCitiesCopy));
  };

  // For checking if a city is already added as a favorite in the cache.
  const cityExistsInStorage = () => {
    return !!favoriteCities.some((city) => {
      return weather.name === city.name;
    });
  };

  const handleOnFavoriteCityPress = async (value: any) => {
    const {
      coordinates: { latitude, longitude },
    } = value;
    setToDefaultObjects();
    setToDefaultInputs();
    setWeather(await getWeatherByCoordinates(latitude, longitude));
    setLocation({
      latitude,
      longitude,
    });
  };

  // Variable that handles the position of the Google Map, so that the country/city is always in the center.
  const centerForMap =
    isObjectEmpty(selectedCountry) && isObjectEmpty(selectedCity)
      ? { lat: location.latitude, lng: location.longitude }
      : !isObjectEmpty(selectedCountry) && isObjectEmpty(selectedCity)
      ? { lat: +selectedCountry.latitude, lng: +selectedCountry.longitude }
      : !isObjectEmpty(selectedCountry) && !isObjectEmpty(selectedCity)
      ? { lat: +selectedCity.latitude, lng: +selectedCity.longitude }
      : isObjectEmpty(selectedCountry) && !isObjectEmpty(selectedCity)
      ? { lat: +selectedCity.latitude, lng: +selectedCity.longitude }
      : { lat: defaultCoordinates.latitude, lng: defaultCoordinates.longitude };

  const zoomForMap =
    isObjectEmpty(selectedCountry) && isObjectEmpty(selectedCity)
      ? 16
      : !isObjectEmpty(selectedCountry) && isObjectEmpty(selectedCity)
      ? 8
      : 16;

  // Methods for basic utility
  const setToDefaultInputs = () => {
    setPrimaryInputValue('');
    setSecondaryInputValue('');
  };

  const setToDefaultObjects = () => {
    setSelectedCity({} as CityType);
    setSelectedCountry({} as CountryType);
  };

  return (
    <Fragment>
      <Header />
      <S.Container>
        <S.ButtonWrapper>
          <Button
            id="0"
            title="Choose by country"
            active={isChooseByCountrySection}
            onClick={handleSectionClick}
          />
          <Button onClick={handleOnGeolocationClick} withIcon="🧭" />
          <Button
            id="1"
            title="Search by city"
            active={!isChooseByCountrySection}
            onClick={handleSectionClick}
          />
        </S.ButtonWrapper>
        {favoriteCities.length > 0 && (
          <S.FavoriteCityListWrapper>
            <h4>Your favorite cities:</h4>
            <List data={favoriteCities} onCellClick={handleOnFavoriteCityPress} />
          </S.FavoriteCityListWrapper>
        )}
        <S.MainSectionWrapper>
          <S.TableWrapper>
            <Table
              data={isChooseByCountrySection ? countries : cities}
              title={isChooseByCountrySection ? 'Countries' : 'Cities'}
              onCellClick={(value) => {
                handleOnCellClick(value, isChooseByCountrySection ? 'country' : 'city');
              }}
              searchInputValue={primaryInputValue}
              onSearchInputChange={(value: string) => {
                if (secondaryInputValue !== '') setSecondaryInputValue('');
                setPrimaryInputValue(value);
              }}
              selectedValue={isChooseByCountrySection ? selectedCountry : selectedCity}
            />
            {isChooseByCountrySection && !isObjectEmpty(selectedCountry) && (
              <Table
                data={cities}
                title={`${selectedCountry?.name}'s cities`}
                onCellClick={(value) => {
                  handleOnCellClick(value, 'city');
                }}
                searchInputValue={secondaryInputValue}
                onSearchInputChange={(value: string) => setSecondaryInputValue(value)}
                selectedValue={selectedCity}
              />
            )}
          </S.TableWrapper>
          <S.MapWrapper>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={zoomForMap}
              center={centerForMap}
            >
              <Marker
                position={centerForMap}
                onClick={async () => {
                  setWeather(await getWeatherByCoordinates(centerForMap.lat, centerForMap.lng));
                }}
              />
              {!isObjectEmpty(weather) && (
                <Fragment>
                  <InfoWindow
                    position={centerForMap}
                    onCloseClick={() => {
                      setWeather({} as WeatherType);
                    }}
                  >
                    <Popup
                      weather={weather}
                      onButtonClick={handleAddRemoveCityFromFavorites}
                      buttonTitle={
                        !cityExistsInStorage() ? 'Add to favorites' : 'Remove from favorites'
                      }
                    />
                  </InfoWindow>
                </Fragment>
              )}
            </GoogleMap>
          </S.MapWrapper>
        </S.MainSectionWrapper>
      </S.Container>
      <Footer />
    </Fragment>
  );
};

export default Landing;
