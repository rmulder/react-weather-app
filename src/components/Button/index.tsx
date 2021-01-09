import * as S from './styles';
import { MouseEvent } from 'react';

interface IButtonProps {
  title: string;
  active?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  id: string;
}

const Button: React.FC<IButtonProps> = ({ id, title, active, onClick }) => {
  return (
    <S.Wrapper active={active} onClick={onClick} id={id}>
      {title}
    </S.Wrapper>
  );
};

export default Button;
