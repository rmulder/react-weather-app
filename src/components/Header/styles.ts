import styled from 'styled-components';

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 12px;
  text-align: center;
  h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    opacity: 0.3;
  }
`;

export { Container };
