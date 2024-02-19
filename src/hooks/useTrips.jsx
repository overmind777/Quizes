import React, { createContext, useContext, useState } from 'react';

const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([
    {
      id: 1,
      city: 'london',
      startDate: '2020-03-15',
      endDate: '2020-03-20',
      image: 'image_url',
    },
  ]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTrip = trip => {
    setTrips(prevTrips => [...prevTrips, trip]);
  };

  const selectTrip = tripId => {
    const trip = trips.find(t => t.id === tripId);
    setSelectedTrip(trip);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TripsContext.Provider value={{ trips, addTrip, selectedTrip, selectTrip, isModalOpen, openModal, closeModal }}>
      {children}
    </TripsContext.Provider>
  );
};

export const useTrips = () => useContext(TripsContext);
