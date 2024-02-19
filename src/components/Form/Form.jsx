import React from 'react';

import { FormWrapper, StyledForm, StyledInput, SubmitButton } from './Form.styled';

const Form = () => {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" />
        <StyledInput type="text" />
        <StyledInput type="text" />
        <SubmitButton>Cancel</SubmitButton>
        <SubmitButton>Save</SubmitButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
