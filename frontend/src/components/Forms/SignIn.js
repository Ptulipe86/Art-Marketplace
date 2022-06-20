// import styled from "styled-components";
import {FormWrapper, MinorWrapper, FormContent, StyledInputs, SubmitButton,FormGroup} from "./RegistrationForm";
import { useRef, useEffect, useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import { MainContext } from "../context/MainContext";

const Signin = () => {
  
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, [])

  let navigate = useNavigate();
  const {user, setUser, setCurrentUser} = useContext(MainContext);  


  const handleInput = (event) =>{
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    
    fetch("/api/logIn",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
    .then(res => res.json())
    .then(data => {
      
      if (data.status === 404) {

        window.alert(data.message)

      } else if (data.status === 200 && data.Artist === true && data.Purchaser === false) {
        
        console.log(`Success: ${data.data}, account was found.`)
        setCurrentUser(data.data)
        window.alert(data.message)
        navigate(`/artist/${data.data}`)
      } else if (data.status === 200 && data.Artist === false && data.Purchaser === true) {
        
        console.log(`Success: ${data.data}, account was found.`)
        setCurrentUser(data.data)
        window.alert(data.message)
        navigate(`/purchaser/${data.data}`)
      } 
    })
  };

    return(
      <FormWrapper onSubmit={handleLogIn}>
        <MinorWrapper>
          <h2>Sign in</h2>
          <FormContent>
            <FormGroup>
              <label htmlFor="email">Email:</label>            
              <StyledInputs 
                name="email"                
                type="email" 
                placeholder="email @"
                ref={userRef}
                value={user.email}
                onChange={handleInput}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password:</label>
              <StyledInputs 
                name="password"
                type="password" 
                placeholder="Password" 
                minLength="8"
                value={user.password}
                onChange={handleInput}
                required
              />
            </FormGroup>             
          </FormContent>
          <SubmitButton type="submit">Log in</SubmitButton>
        </MinorWrapper>        
      </FormWrapper>
    )
};



export default Signin