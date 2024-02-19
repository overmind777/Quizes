import Modal from './components/Modal/Modal';
import TripList from './components/TripList/TripList';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { TripsProvider } from './hooks/useTrips';
import { AppWrapper, LeftWrapper } from './style/Global.styled';
import Button from './components/Button/Button';

function App() {
  return (
    <TripsProvider>
      <AppWrapper>
        <LeftWrapper>
          <h1>Weather Forecast</h1>
          <input type="date" />
          <TripList />
          <Button />
        </LeftWrapper>
        <WeatherForecast />
      </AppWrapper>
        <Modal />
    </TripsProvider>
  );
}

export default App;
