import { Fragment, useState, MouseEvent } from 'react';
import * as S from './styles';
import { Header, Footer, Button, Table } from '../../components';
import csc from 'country-state-city';
import { CityType, CountryType } from '../../types';

const Landing: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const isChooseByCountrySection = currentSection === 0;

  const [selectedValue, setSelectedValue] = useState<any>({});

  const countries = isChooseByCountrySection
    ? csc.getAllCountries().filter((country) => {
        return country.name.toLowerCase().includes(searchInputValue.toLowerCase());
      })
    : [];

  const handleSectionClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedValue({});
    setCurrentSection(Number(event.currentTarget.id));
    setSearchInputValue('');
  };

  const handleSearchInputChange = (value: string) => {
    setSearchInputValue(value);
  };

  const handleOnCountryPress = (country: CountryType) => {
    setSelectedValue(country);
    setSearchInputValue(country.name);
  };

  const handleOnCityPress = (city: CityType[]) => {
    setSelectedValue(city[0]);
    setSearchInputValue(city[0].formatted_address);
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
          <Button
            id="1"
            title="Search by city"
            active={!isChooseByCountrySection}
            onClick={handleSectionClick}
          />
        </S.ButtonWrapper>
        {Object.keys(selectedValue).length === 0 ? (
          <S.TableWrapper>
            <Table
              data={isChooseByCountrySection ? countries : undefined}
              title={isChooseByCountrySection ? 'Countries' : 'Cities'}
              onCellClick={isChooseByCountrySection ? handleOnCountryPress : handleOnCityPress}
              searchInputValue={searchInputValue}
              onSearchInputChange={handleSearchInputChange}
              selectedValue={selectedValue}
              withGoogleAutoComplete={!isChooseByCountrySection}
            />
          </S.TableWrapper>
        ) : (
          <h3>{`You have selected ${
            selectedValue?.name
              ? `${selectedValue.name} as a country of interest.`
              : `${selectedValue.formatted_address} as a city of interest.`
          }`}</h3>
        )}
      </S.Container>
      <Footer />
    </Fragment>
  );
};

export default Landing;
