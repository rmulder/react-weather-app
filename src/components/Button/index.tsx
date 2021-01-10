import * as S from './styles';
import { MouseEvent } from 'react';

interface IButtonProps {
  title?: string;
  active?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  withIcon?: string;
}

const Button: React.FC<IButtonProps> = ({ id, title, active, onClick, withIcon }) => {
  return !withIcon ? (
    <S.Wrapper active={active} onClick={onClick} id={id}>
      {title}
    </S.Wrapper>
  ) : (
    <S.IconWrapper onClick={onClick} id={id}>
      {withIcon}
    </S.IconWrapper>
  );
};

export default Button;
