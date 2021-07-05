import {api} from './environment.api';

module.exports = {
  api: {
    apiKey: 'a5a47c18197737e8eeca634cd6acb581',
    https: true,
    weatherURL: 'https://api.openweathermap.org/data/2.5',
    baseURL: 'https://search.reservamos.mx/api/v2',
    timeout: 10000,
    ...api,
  },
};
