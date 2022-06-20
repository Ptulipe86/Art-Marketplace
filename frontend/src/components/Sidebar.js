import styled from 'styled-components';
import { FaRegUser,FaSearchDollar } from "react-icons/fa";
import { MdAttachMoney, MdImageSearch } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { useContext, useEffect } from 'react';
import { MainContext } from "./context/MainContext";
import { Link, useParams } from 'react-router-dom';
import Artist from "./Routes/Artist";

const Sidebar = () => {  

  return (
    <Main >
      <h2>Welcome!</h2>
      <Wrapper>
        <UsersWrapper>
          <ArtistButtonsWrapper>
            {/* <StyledLink to={<Artist />}>
              <button><FaRegUser/>Profile</button>
            </StyledLink> */}
            {/* <StyledLink to="/sell">
              <button><MdAttachMoney/>Sell</button>
            </StyledLink> */}
          </ArtistButtonsWrapper>

          <BuyersButtonsWrapper>
            {/* <StyledLink to="/purchaser/:id">
              <button><GiShoppingCart/>Purchase</button>
            </StyledLink> */}
            <StyledLink to="/view-art">
              <button><MdImageSearch/>View Art</button>
            </StyledLink>
          </BuyersButtonsWrapper>
        </UsersWrapper>       
      </Wrapper>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  width: 100%;
  max-width: 5vw;
  min-height: fit-content;
  max-height: 100%;
  background: var(--gradient);
  border-right: 5px outset var(--color-cedar);
  color:white;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`

const UsersWrapper = styled.div`
  display: inherit;
  flex-direction: column;
`;

const ArtistButtonsWrapper = styled.div`
  display: inherit;
  flex-direction: inherit;
`;

const BuyersButtonsWrapper = styled.div`
  display: inherit;
  flex-direction: inherit;
`;

const StyledLink = styled(Link)`
  margin: 0px 3px 0px 2px;
`;


export default Sidebar