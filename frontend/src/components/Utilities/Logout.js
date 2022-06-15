import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';

const Logout = () => {

  return(
    
      <Button hidden>
        <IconContext.Provider value={{color: "var(--color-sunsetOrange)", size:"2em"}}>
          <AiOutlineLogout/>
        </IconContext.Provider> 
      </Button>
      
  )
};

const Button = styled.button`
  display: flex;
  align-self: center;
  width: 2.5em;
  height: 2em;
  padding: 3px;
  &:hover{
    background-color: lightgrey;
  }
`;

export default Logout