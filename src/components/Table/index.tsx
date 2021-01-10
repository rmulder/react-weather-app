import * as S from './styles';
import { Card, SearchInput } from '../';
import { Fragment } from 'react';

interface ITableProps {
  data: any[];
  title: string;
  onCellClick: (value: any) => void;
  searchInputValue: string;
  onSearchInputChange: (value: string) => void;
  selectedValue?: any;
}

const Table: React.FC<ITableProps> = ({
  data,
  title,
  onCellClick,
  searchInputValue,
  onSearchInputChange,
  selectedValue,
}) => {
  return (
    <S.Container>
      <S.TableHead>
        <h4>{title}</h4>
      </S.TableHead>
      <Fragment>
        <S.SearchWrapper>
          <SearchInput
            value={searchInputValue}
            onChange={(event) => onSearchInputChange(event.target.value)}
          />
        </S.SearchWrapper>
        <S.ContentWrapper>
          {data.length <= 250 && data.length !== 0 ? (
            data.map((item, index) => (
              <S.SpecialRow
                key={index}
                selected={
                  item.name === selectedValue?.name && item.stateCode === selectedValue?.stateCode
                }
                onClick={() => onCellClick(item)}
              >
                <Card title={item.name} subtitle={item.isoCode} />
              </S.SpecialRow>
            ))
          ) : (
            <S.NoResults>
              <span>
                {data.length > 250
                  ? `Too much results. Please narrow your search.`
                  : 'No results found...'}
              </span>
            </S.NoResults>
          )}
        </S.ContentWrapper>
      </Fragment>
    </S.Container>
  );
};

export default Table;

{
  /* <div>
        {!withGoogleAutoComplete ? (
          <Fragment>
            <S.SearchWrapper>
              <SearchInput
                value={searchInputValue}
                onChange={(event) => onSearchInputChange(event.target.value)}
              />
            </S.SearchWrapper>
            <S.ContentWrapper>
              {data.length <= 250 && data.length !== 0 ? (
                data?.map((item) => {
                  return (
                    <S.SpecialRow
                      key={item.isoCode}
                      selected={item.name === selectedValue?.name}
                      onClick={() => onCellClick(item)}
                    >
                      <Card title={item.name} subtitle={item.isoCode} />
                    </S.SpecialRow>
                  );
                })
              ) : (
                <S.NoResults>
                  <span>
                    {data.length > 250
                      ? `Too many cities. Please narrow your search.`
                      : 'No results found...'}
                  </span>
                </S.NoResults>
              )}
            </S.ContentWrapper>
          </Fragment>
        ) : (
          <PlacesAutocomplete
            value={searchInputValue}
            onChange={onSearchInputChange}
            searchOptions={{ types: ['(cities)'] }}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
              // The onKeyDown property had to be removed from the getInputProps due to conflict with the input tag and TS not excepting the prop.
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { onKeyDown, ...inputProps } = getInputProps({
                placeholder: 'Search Cities...',
              });

              return (
                <Fragment>
                  <S.AutocompleteWrapper>
                    <input {...inputProps}></input>
                  </S.AutocompleteWrapper>
                  {loading && <S.Loading>Loading...</S.Loading>}
                  {suggestions.map((suggestion) => {
                    return (
                      <S.SpecialRow
                        {...(getSuggestionItemProps(suggestion), { key: suggestion.placeId })}
                        selected={suggestion.placeId === selectedValue?.place_id}
                        onClick={async () => {
                          onCellClick(await geocodeByPlaceId(suggestion.placeId));
                        }}
                      >
                        <Card title={suggestion.description} />
                      </S.SpecialRow>
                    );
                  })}
                </Fragment>
              );
            }}
          </PlacesAutocomplete>
        )}
      </div> */
}
