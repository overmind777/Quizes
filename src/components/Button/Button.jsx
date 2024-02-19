import React from 'react'
import { Wrapper } from './Button.styled'
import { useTrips } from '../../hooks/useTrips';

const Button = () => {
const { openModal } = useTrips();

  return (
    <Wrapper onClick={openModal}>
      <p>+</p>
      <p>Add trip</p>
    </Wrapper>
  )
}

export default Button
