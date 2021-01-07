import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    opacity: 0.3;
  }
`;

export { Container };
