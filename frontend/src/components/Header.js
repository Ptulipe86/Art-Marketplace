import styled from "styled-components";
import { FcSearch } from "react-icons/fc"
import Logo from "./assets/Logo.png"
import { Link } from "react-router-dom";
import Logout from "./utilities/Logout";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";

const Header = () => {

  const {currentUser} = useContext(MainContext)
  
  return (
    <Wrapper>

      <StyledLink to="/">
        <LogoIcon src={Logo} alt="The Art Place"/>
      </StyledLink> 
      
      <EndWrapper>
        {currentUser && (
          <>            
            <SearchBarWrapper >
              <FcSearch/><input placeholder="Search artists, paintings ... "/>
            </SearchBarWrapper>
            <Logout />
          </>
        )}
        {currentUser === null && (
          <>
            <StyledLink to="/signIn">
              <button>Log in</button>
            </StyledLink>
            <StyledLink to="/register">
              <button>Sign Up</button>
            </StyledLink> 
          </>
        )}
      </EndWrapper> 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-cedar);
  border-bottom: 3px solid var(--color-mediumTurquoise);
  padding: 5px;
  height: 13vh;
  h1{
    color: white;
    padding: 2px;

  }
  
`

const EndWrapper = styled.div`
  display: inherit;
  flex-direction: row;
`;

const SearchBarWrapper = styled.div`
  display: inherit;
  align-items: center;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 5px;
`;

const LogoIcon = styled.img`
  height: 100px;
`;

export default Header