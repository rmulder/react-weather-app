import styled from 'styled-components';

const Container = styled.main`
  flex: 1;
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
  margin: 0.75rem;
  align-items: center;
  button {
    margin: 0.3rem;
  }
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: space-between;
  @media (max-width: 1026px) {
    flex-direction: row;
    width: 70vw;
    margin-bottom: 16px;
  }
  @media (max-width: 761px) {
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
  @media (max-width: 1026px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
  @media (max-width: 761px) {
    margin-top: 16px;
  }
`;

export { Container, ButtonWrapper, TableWrapper, MainSectionWrapper, MapWrapper };
