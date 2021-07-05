import {useState} from 'react';
import {ILocation, ResultType} from '../shared/interfaces/locationInterface';
import {create} from 'apisauce';

interface ILocationParams {
  q?: string;
}

const {
  api: {baseURL, timeout},
} = require('../../environments/env');

export const instance = create({
  baseURL,
  timeout,
});

export const useLocationSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherFiltered, setWeatherFiltered] = useState<Array<ILocation>>([]);

  const {
    api: {catalogLocation: path},
  } = require('../../environments/env');

  const fetchSearchLocation = async ({q}: ILocationParams) => {
    setIsLoading(true);
    try {
      const response = await instance.get<ILocation[]>(path.places, {q});

      if (response.ok && response.data) {
        const filtered = response.data.filter(
          l => l.result_type === ResultType.City,
        );
        setWeatherFiltered(filtered);
        // console.log(JSON.stringify(response.data, null, 2));
      }
    } catch (error) {
      console.log('Falied to filter location.');
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    weatherFiltered,
    fetchSearchLocation,
  };
};
