import * as S from './styles';

interface ICardProps {
  title: string;
  subtitle?: string;
}

const Card: React.FC<ICardProps> = ({ title, subtitle }) => {
  return (
    <S.Container>
      <div>
        <span>{title}</span>
        {subtitle && <span>{subtitle}</span>}
      </div>
    </S.Container>
  );
};

export default Card;
