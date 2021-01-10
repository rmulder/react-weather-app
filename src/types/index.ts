export type CountryType = {
  currency: string;
  flag: string;
  isoCode: string;
  latitude: string;
  longitude: string;
  name: string;
  timezones: [
    {
      abbreviation: string;
      gmtOffset: number;
      gmtOffsetName: string;
      tzName: string;
      zoneName: string;
    }
  ];
};

export type CityType = {
  isoCode: string;
  latitude: string;
  longitude: string;
  name: string;
  phonecode: string;
  countryCode: string;
  stateCode: string;
};

export type WeatherType = {
  coord: {
    lon: number;
    lat: number;
  };
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
    }
  ];
  wind: {
    speed: number;
  };
};
