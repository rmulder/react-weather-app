import styled from 'styled-components';

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px;
  text-align: center;
  h3 {
    font-weight: 500;
  }
  p {
    opacity: 0.3;
  }
`;

export { Container };
