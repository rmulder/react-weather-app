import styled from 'styled-components';

const breakpoint1 = '1026px';
const breakpoint2 = '761px';

const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  h4 {
    color: black;
    text-align: center;
    margin: 0 5%;
    font-weight: 400;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  button {
    margin: 0.3rem;
    height: 30px;
  }
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: space-between;
  @media (max-width: ${breakpoint1}) {
    flex-direction: row;
    width: 70vw;
    margin-bottom: 16px;
  }
  @media (max-width: ${breakpoint2}) {
    flex-direction: column;
    align-items: center;
    section {
      &:first-child {
        margin-bottom: 16px;
      }
    }
  }
`;

const MainSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MapWrapper = styled.div`
  margin-right: 16px;
  @media (max-width: ${breakpoint1}) {
    margin-right: 0;
    margin-bottom: 16px;
  }
  @media (max-width: ${breakpoint2}) {
    margin-top: 16px;
  }
`;

const FavoriteCityListWrapper = styled.div`
  max-width: 70vw;
  margin-bottom: 16px;
  align-self: center;
  min-width: 200px;
`;

export {
  Container,
  ButtonWrapper,
  TableWrapper,
  MainSectionWrapper,
  MapWrapper,
  FavoriteCityListWrapper,
};
