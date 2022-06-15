import styled from "styled-components";
import { useState, useEffect } from "react";

const RegistrationForm = () => {

  const Register = (event) => {
    event.preventDefault();
    //todo fetch post 
  }

  return (
    <FormWrapper onSubmit={Register}>
      <MinorWrapper>
        <h2>Create Account</h2>
        <FormContent>
          <FormGroup>
            <h4>Account Type:</h4>
              <StyledRadioInput type="radio" id="artist" name="account_type" value="HTML"/>
              <label for="artist">Artist</label>
              <StyledRadioInput type="radio" id="buyer" name="account_type" value="HTML"/>
              <label for="buyer">Purchaser</label>
          </FormGroup>

          <FormGroup>
            <StyledInputs name="givenName" type="text" placeholder="First name" required/>
            <StyledInputs name="surname" type="text" placeholder="Last name" required/>
          </FormGroup>

            <StyledInputs name="email" type="email" placeholder="email @" required/>        
            <StyledInputs name="password" type="password" placeholder="Password" minLength="8"
              required
            />
            <StyledInputs name="confirmPass" type="password" placeholder="Confirm Password" minLength="8" required
            />        
        </FormContent>
        <SubmitButton type="submit" disabled>Submit</SubmitButton>
      </MinorWrapper>   
    </FormWrapper>
  )
};

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
  background: var(--gradient);
  h2{
    text-align: center;
    background-color: var(--color-cedar);
    color: var(--color-alabaster);
    width: 100%;
    border-radius: 4px;
  }
  h4{
    font-size: 18px;
  }
`;

export const MinorWrapper = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-sunsetOrange);
  border-radius: 5px;
  padding: 4px;
  width: 35vw;
  background-color: rgba(62, 29, 19, 0.2);
`;

export const FormContent = styled.div`
  margin: 0 16px 0;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  > div {
    flex: 1 0 auto;
    width: 48%;
    &:first-child {
      margin-right: 6px;
    }
  }
`;

export const StyledInputs = styled.input`
    border-radius: 3px;
    border: 1px solid var(--color-mediumTurquoise);
    box-sizing: border-box;
    color: #464a5c;
    font-size: 15px;
    font-weight: 300;
    height: 36px;
    width: 100%;
    padding: 8px 12px 10px 12px;
    margin: 0px 1px 5px 0px;    
    &::placeholder {
      color: #999;
    }
`;

const StyledRadioInput = styled.input`
  accent-color: var(--color-mediumTurquoise);
`;

export const SubmitButton = styled.button`
  display: block;
  height: 36px;
  width: 100%;
  margin: 0 16px 0;
  border-radius: 5px;
    border: 1px solid var(--color-mediumTurquoise);
    box-sizing: border-box;
`;
export default RegistrationForm