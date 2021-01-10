import * as S from './styles';
import { WeatherType } from '../../types';
import moment from 'moment';
import Button from '../Button';

interface IPopupProps {
  weather: WeatherType;
  onButtonClick: (value: any) => void;
  buttonTitle: string;
}

const Popup: React.FC<IPopupProps> = ({ weather, buttonTitle, onButtonClick }) => {
  return (
    <S.Container>
      <h3>{`📍 ${weather.name}, ${weather.sys.country}`}</h3>
      <S.WeatherWrapper>
        <span>Current weather:</span>
        <p>{`☀️ ${moment.unix(weather.sys.sunrise).format('HH:mm')} - 🌑 ${moment
          .unix(weather.sys.sunset)
          .format('HH:mm')}`}</p>
        <S.Overview>
          {weather.weather[0].description.charAt(0).toUpperCase() +
            weather.weather[0].description.slice(1)}
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        </S.Overview>
        <p>{`Temperature: ${weather.main.temp} °C, feels like: ${weather.main.feels_like} °C`}</p>
        <p>{`Wind speed: ${weather.wind.speed} 💨`}</p>
        <p>{`Humidity: ${weather.main.humidity} 💧`}</p>
      </S.WeatherWrapper>
      <Button title={buttonTitle} onClick={onButtonClick} />
    </S.Container>
  );
};

export default Popup;
