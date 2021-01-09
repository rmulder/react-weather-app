import { ChangeEvent, MouseEvent } from 'react';
import * as S from './styles';
import { Button, Table } from '../';
import { CountryType } from '../../types';

interface ITogglerProps {
  onSectionClick: (event: MouseEvent<HTMLButtonElement>) => void;
  currentSection: number;
  buttonTitles: {
    primary: string;
    secondary: string;
  };
  searchInputValue: string;
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  countries: CountryType[];
  onCountryPress: (country: CountryType) => void;
  selectedCountry?: CountryType;
}

const Toggler: React.FC<ITogglerProps> = ({
  onSectionClick,
  currentSection,
  buttonTitles: { primary, secondary },
  countries,
  searchInputValue,
  onSearchInputChange,
  onCountryPress,
  selectedCountry,
}) => {
  return (
    <S.Container>
      <S.ButtonWrapper>
        <Button id="0" title={primary} active={currentSection === 0} onClick={onSectionClick} />
        <Button id="1" title={secondary} active={currentSection === 1} onClick={onSectionClick} />
      </S.ButtonWrapper>
      {currentSection === 0 && (
        <Table
          data={countries}
          onCellClick={onCountryPress}
          searchInputValue={searchInputValue}
          onSearchInputChange={onSearchInputChange}
          selectedValue={selectedCountry}
        />
      )}
    </S.Container>
  );
};

export default Toggler;
