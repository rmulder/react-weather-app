import * as S from './styles';
import { ChangeEvent } from 'react';

interface ISearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ value, onChange }) => {
  return (
    <S.Container>
      <input placeholder="Search Countries..." value={value} onChange={onChange}></input>
    </S.Container>
  );
};

export default SearchInput;
