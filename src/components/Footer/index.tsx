import * as S from './styles';

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <S.Container>
      <small>Copyright &copy; {year} Weather Application. All Rights Reserved</small>
    </S.Container>
  );
};

export default Footer;
