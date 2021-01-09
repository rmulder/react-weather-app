import * as S from './styles';
import { CountryType } from '../../types';

interface ICardProps {
  item: CountryType;
  onClick: (data: CountryType) => void;
}

const Card: React.FC<ICardProps> = ({ item, onClick }) => {
  return (
    <S.Container
      onClick={() => {
        onClick(item);
      }}
    >
      <div>
        <span>{item.name}</span>
        <span>{item.isoCode}</span>
      </div>
    </S.Container>
  );
};

export default Card;
