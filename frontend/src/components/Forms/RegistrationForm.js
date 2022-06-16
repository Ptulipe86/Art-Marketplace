import styled from "styled-components";
import { useState, useEffect, useRef, useContext} from "react";
import { MainContext } from "../context/MainContext";

const RegistrationForm = () => {

  const userRef = useRef();
  const {user, setUser} = useContext(MainContext)
  console.log(user)

  useEffect(() => {
    userRef.current.focus();
  }, [])

  const handleInput = (event) => {
    
    const value = event.target.type === "checkbox" 
    ? event.target.checked
    : event.target.value;

    setUser({
      ...user,
      [event.target.name]: value
    })
  };

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
              <FormGroup>
                <StyledRadioInput
                  onChange={handleInput}  
                  type="checkbox" 
                  name="artist"                   
                  checked={user.artist}
                  value
                />
                <label for="artist">Artist</label>
              </FormGroup>

              <FormGroup>
                <StyledRadioInput
                  onChange={handleInput}  
                  type="checkbox" 
                  name="purchaser"
                  checked={user.purchaser}
                  value=""
                />
                <label for="artist">Purchaser</label>
              </FormGroup>              
          </FormGroup>

          <FormGroup>
            <label htmlfor="givenName">Given Name:</label>
            <StyledInputs
              onChange={handleInput}
              ref={userRef} 
              name="givenName"
              type="text" 
              placeholder="First name" 
              value={user.givenName}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="surname">Surname:</label>
            <StyledInputs
                onChange={handleInput} 
                name="surname"
                type="text" 
                placeholder="Last name"
                value={user.surname} 
                required
              />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email:</label>
            <StyledInputs
                onChange={handleInput} 
                name = "email"
                type="email" 
                placeholder="email @"
                value={user.email} 
                required
              /> 
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password:</label>
            <StyledInputs
                onChange={handleInput} 
                name="password"
                type="password" 
                placeholder="Password" 
                minLength="8"
                value={user.password}
                required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="confirmPass">Confirm Password:</label>
            <StyledInputs
                onChange={handleInput} 
                name="confirmPass"
                type="password" 
                placeholder="Confirm Password" 
                minLength="8" 
                value={user.confirmPass}
                required
              /> 
          </FormGroup>       
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
  width: 25vw;
  background-color: rgba(62, 29, 19, 0.2);
`;

export const FormContent = styled.div`
  margin: 0 16px 0;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  label{
    margin: 5px;
    padding: 3px;
    width:25%;
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
    width: 70%;
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
  width: 30%;
  margin: 0 16px 0;
  border-radius: 5px;
  border: 1px solid var(--color-mediumTurquoise);
  box-sizing: border-box;
`;
export default RegistrationForm