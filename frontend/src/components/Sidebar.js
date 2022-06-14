import styled from 'styled-components';
import { FaRegUser,FaSearchDollar } from "react-icons/fa";
import { MdAttachMoney, MdImageSearch } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Main hidden>
      <h2>Welcome!</h2>
      <Wrapper>
        <UsersWrapper>
          <ArtistButtonsWrapper>
            <StyledLink to="/artist">
              <button><FaRegUser/>Profile</button>
            </StyledLink>
            <StyledLink>
              <button><MdAttachMoney/>Sell</button>
            </StyledLink>
            <StyledLink>
              <button><FaSearchDollar/>Sales</button>
            </StyledLink>
          </ArtistButtonsWrapper>

          <BuyersButtonsWrapper>
            <StyledLink to="/purchaser">
              <button><GiShoppingCart/>Purchase</button>
            </StyledLink>
            <StyledLink to="/view-art">
              <button><MdImageSearch/>View Art</button>
            </StyledLink>
          </BuyersButtonsWrapper>
        </UsersWrapper>

        <StyledLink to="/curator">
          <CuratorButton disabled>Curator</CuratorButton>
        </StyledLink>        
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

const CuratorButton = styled.button`
  position: relative;
  bottom: 50px;
`;

export default Sidebar