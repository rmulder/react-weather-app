import styled from 'styled-components';

const Container = styled.footer`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  small {
    display: flex;
    justify-content: center;
    text-align: center;
    opacity: 0.3;
  }
`;

export { Container };
