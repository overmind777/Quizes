import React from 'react';
import { useTrips } from '../../hooks/useTrips';
import Form from '../Form/Form';
import { ModalWrapper, SvgWrapper} from './Modal.styled';
import { TitleWrapper } from '../Form/Form.styled';
import sprite from '../../images/sprite.svg';

const Modal = () => {
  const { isModalOpen, closeModal } = useTrips();

  if (!isModalOpen) return null;

  return (
    <ModalWrapper>
      <TitleWrapper>
        <h2>Create trip</h2>
        <SvgWrapper onClick={closeModal}>
          <svg width="30" height="30">
            <use xlinkHref={`${sprite}#close`}></use>
          </svg>
        </SvgWrapper>
        
      </TitleWrapper>

      <Form />
    </ModalWrapper>
  );
};

export default Modal;
