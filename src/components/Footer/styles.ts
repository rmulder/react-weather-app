import styled from 'styled-components';

const Container = styled.footer`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  small {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

export { Container };
