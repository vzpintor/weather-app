import {IRootWeather} from '../shared/interfaces/weatherInterface';
import {useEffect, useState} from 'react';
import {create} from 'apisauce';
import {ILocation} from '../shared/interfaces/locationInterface';

interface IWeatherParams {
  lat: string;
  lon: string;
  exclude?: string;
  units?: string;
}
const {
  api: {weatherURL, timeout, weather: path, apiKey},
} = require('../../environments/env');

export const weatherInstance = create({
  baseURL: weatherURL,
  timeout,
});

const useWeather = () => {
  const [weather, setWeather] = useState<IRootWeather>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchWeather = async (location: ILocation) => {
    try {
      const response = await weatherInstance.get<IRootWeather>(path.onecall, {
        lat: location.lat,
        lon: location.long,
        exclude: 'hourly,minutely',
        units: 'metric',
        appid: apiKey,
      });

      if (response.ok) {
        setWeather(response.data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log('Failed to retrieve weather.');
    }
  };

  return {weather, isLoading, fetchWeather};
};

export default useWeather;
