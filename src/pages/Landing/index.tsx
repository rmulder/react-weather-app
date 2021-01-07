import { Fragment } from 'react';
import * as S from './styles';
import { Header, Footer } from '../../components';

const Landing: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <S.Container />
      <Footer />
    </Fragment>
  );
};

export default Landing;
