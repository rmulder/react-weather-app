import axios from 'axios';

const WEATHER_API_KEY = '8fd7d294b0ff55fc0754e9b221f3a560';
const HTTP_BASE = 'http://api.openweathermap.org/data/2.5/weather?units=metric&';

export const getWeatherByCoordinates = (lat: number, lng: number) => {
  return axios
    .get(`${HTTP_BASE}lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`)
    .then(({ data }) => data)
    .catch(() => {
      alert('Something went wrong with the weather.');
    });
};
