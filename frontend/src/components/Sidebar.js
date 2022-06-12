import styled from 'styled-components';
import { FaRegUser,FaSearchDollar } from "react-icons/fa";
import { MdAttachMoney, MdImageSearch } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Main>
      <h2>Welcome!</h2>
      <Wrapper>
        <UsersWrapper>
          <ArtistButtonsWrapper>
            <Link to="/artist">
              <button><FaRegUser/>Profile</button>
            </Link>
            <Link>
              <button><MdAttachMoney/>Sell</button>
            </Link>
            <Link>
              <button><FaSearchDollar/>Sales</button>
            </Link>
          </ArtistButtonsWrapper>

          <BuyersButtonsWrapper>
            <Link to="/purchaser">
              <button><GiShoppingCart/>Purchase</button>
            </Link>
            <Link to="/view-art">
              <button><MdImageSearch/>View Art</button>
            </Link>
          </BuyersButtonsWrapper>
        </UsersWrapper>

        <Link to="/curator">
          <CuratorButton>Curator</CuratorButton>
        </Link>        
      </Wrapper>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  max-width: 10vw;
  min-height: fit-content;
  max-height: 90vh;
  background: radial-gradient(circle, rgba(251,251,252,1) 5%, rgba(253,94,83,1) 39%, rgba(50,206,213,1) 78%, rgba(62,29,19,1) 97%);
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

const CuratorButton = styled.button`
  position: relative;
  bottom: 50px;
`;

export default Sidebar