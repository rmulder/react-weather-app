import styled from 'styled-components';

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 5px 0;
    color: #d14d4d;
    font-weight: 500;
  }
  span {
    color: grey;
  }
  button {
    margin-top: 5px;
  }
`;

const WeatherWrapper = styled.div`
  margin-top: 5px;
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const Overview = styled.p`
  display: flex;
  align-items: center;
  img {
    height: 25px;
  }
`;

export { Container, WeatherWrapper, Overview };
