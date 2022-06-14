import styled from "styled-components";
import {FormWrapper, MinorWrapper, FormContent, StyledInputs, SubmitButton} from "./RegistrationForm"

const Signin = () => {
    return(
      <FormWrapper>
        <MinorWrapper>
          <h2>Sign in</h2>
          <FormContent>            
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

export default Signin