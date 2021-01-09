import * as S from './styles';
import { CountryType } from '../../types';
import { Card, SearchInput } from '../';
import { ChangeEvent } from 'react';

interface ITableProps {
  data: CountryType[];
  onCellClick: (data: CountryType) => void;
  searchInputValue: string;
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedValue?: CountryType;
}

const Table: React.FC<ITableProps> = ({
  data,
  onCellClick,
  searchInputValue,
  onSearchInputChange,
  selectedValue,
}) => {
  return (
    <S.Container>
      <thead>
        <tr>
          <th>Countries</th>
        </tr>
        <tr>
          <td>
            <SearchInput value={searchInputValue} onChange={onSearchInputChange} />
          </td>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((item) => {
            return (
              <S.SpecialRow key={item.isoCode} selected={item.name === selectedValue?.name}>
                <td>
                  <Card item={item} onClick={onCellClick} />
                </td>
              </S.SpecialRow>
            );
          })
        ) : (
          <S.NoResultsRow>
            <td>No results found...</td>
          </S.NoResultsRow>
        )}
      </tbody>
    </S.Container>
  );
};

export default Table;
