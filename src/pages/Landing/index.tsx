import { Fragment, useState, MouseEvent, ChangeEvent } from 'react';
import * as S from './styles';
import { Header, Footer, Toggler } from '../../components';
import csc from 'country-state-city';
import { CountryType } from '../../types';

const Landing: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<CountryType>();

  const countries = csc.getAllCountries().filter((country) => {
    return country.name.toLowerCase().includes(searchInputValue.toLowerCase());
  });

  const handleSectionClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentSection(Number(event.currentTarget.id));
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.currentTarget.value);
  };

  const handleOnCountryPress = (country: CountryType) => {
    setSelectedCountry(country);
    setSearchInputValue(country.name);
  };

  return (
    <Fragment>
      <Header />
      <S.Container>
        <Toggler
          onSectionClick={handleSectionClick}
          currentSection={currentSection}
          buttonTitles={{ primary: 'Choose by Country', secondary: 'Search by City' }}
          onSearchInputChange={handleSearchInputChange}
          searchInputValue={searchInputValue}
          countries={countries}
          onCountryPress={handleOnCountryPress}
          selectedCountry={selectedCountry}
        />
      </S.Container>
      <Footer />
    </Fragment>
  );
};

export default Landing;
