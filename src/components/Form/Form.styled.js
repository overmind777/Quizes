import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
`



export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    border-color: blue;
  }
`;



export const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;