import React from 'react';
import { Item } from './TripItem.styled';

const TripItem = ({ onClick, city }) => {
  return (
    <Item onClick={onClick} style={{ cursor: 'pointer' }}>
      {city}
    </Item>
  );
};

export default TripItem;
