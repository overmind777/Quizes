import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

axios.defaults.baseURL = BASE_URL;

export const fetchWeatherData = async query => {
  const { location, startDate, endDate } = query;
  const { data } = await axios.get(`${location}/${startDate}/${endDate}`, {
    params: {
      unitGroup: 'metric',
      include: 'days',
      key: API_KEY,
      contentType: 'json',
    },
  });
  return data;
};
