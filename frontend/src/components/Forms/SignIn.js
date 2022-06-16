// import styled from "styled-components";
import {FormWrapper, MinorWrapper, FormContent, StyledInputs, SubmitButton,FormGroup} from "./RegistrationForm";
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Signin = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    //todo fetch post 
  }

    return(
      <FormWrapper onSubmit={handleSubmit}>
        <MinorWrapper>
          <h2>Sign in</h2>
          <FormContent>
            <FormGroup>
              <label htmlFor="email">Email:</label>            
              <StyledInputs 
                id="email"                
                type="email" 
                placeholder="email @" 
                value={user}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="passwordSignin">Password:</label>
              <StyledInputs 
                id="passwordSignin"
                type="password" 
                placeholder="Password" 
                minLength="8"
                required
              />
            </FormGroup>             
          </FormContent>
          <SubmitButton type="submit" disabled>Log in</SubmitButton>
        </MinorWrapper>        
      </FormWrapper>
    )
};

export default Signin