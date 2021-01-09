import styled from 'styled-components';

const Container = styled.main`
  flex: 1;
  h3 {
    color: black;

    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75rem;
  button {
    margin: 0.3rem;
  }
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export { Container, ButtonWrapper, TableWrapper };
