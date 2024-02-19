import React, { useEffect, useState } from 'react';
import { useTrips } from '../../hooks/useTrips';
import { fetchWeatherData } from '../../operations/api';
import { Wrapper } from './WeatherForecast.styled';

const WeatherForecast = () => {
  const { selectedTrip } = useTrips();
  const [weatherData, setWeatherData] = useState();
  console.log(selectedTrip);

  useEffect(() => {
    if (selectedTrip) {
      fetchWeatherData({
        location: selectedTrip.city,
        startDate: selectedTrip.startDate,
        endDate: selectedTrip.endDate,
      })
        .then(setWeatherData)
        .catch(console.error);
    }
  }, [selectedTrip]);

  return (
    <Wrapper>
      {weatherData ? (
        <div>
          Погода для {selectedTrip.city}: {JSON.stringify(weatherData)}
        </div>
      ) : (
        <div>Оберіть подорож для перегляду погоди.</div>
      )}
    </Wrapper>
  );
};

export default WeatherForecast;
