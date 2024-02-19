import React from 'react';
import TripItem from '../TripItem/TripItem';
import { useTrips } from '../../hooks/useTrips';
import { List } from './TripList.styled';

const TripList = () => {
  const { trips, selectTrip } = useTrips();

  return (
    <div>
      <List>
        {trips.map(trip => {
          return (
            <TripItem
              key={trip.id}
              onClick={() => {
                selectTrip(trip.id);
              }}
              city={trip.city}
            />
          );
        })}
      </List>
    </div>
  );
};

export default TripList;
