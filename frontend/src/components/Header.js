import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <h1>The Art Place</h1>
      </StyledLink>      
      <EndWrapper>
        <SearchBarWrapper hidden><FcSearch/><input placeholder="Search artists,gallery,etc... "/></SearchBarWrapper>
        <StyledLink to="/signIn">
          <button>Log in</button>
        </StyledLink>
        <StyledLink to="/register">
          <button>Sign Up</button>
        </StyledLink>       
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
  h1{
    color: white;
    padding: 2px;
    &:hover{
    color: var(--color-mediumTurquoise);
    border: 2px inset var(--color-sunsetOrange);
    border-radius: 5px;
    height: 55px;
  }
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

export default Header