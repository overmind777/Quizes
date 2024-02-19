
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
          <TripList />
          <Button />
        </LeftWrapper>
        <WeatherForecast />
        <Modal />
      </AppWrapper>
    </TripsProvider>
  );
}

export default App;
