import styled from 'styled-components';
import { FaRegUser,FaSearchDollar } from "react-icons/fa";
import { MdAttachMoney, MdImageSearch } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { useContext} from 'react';
import { MainContext } from "./context/MainContext";
import { Link} from 'react-router-dom';
import { IconContext } from 'react-icons/lib';

const Sidebar = () => {  

  const {currentUser, addToCart} = useContext(MainContext);

  return (
    <Main >
      <h2>Welcome!</h2>
      <Wrapper>
        <UsersWrapper>
            <StyledLink to="/view-art">
              <button><MdImageSearch/>View Art</button>
            </StyledLink>
            {currentUser[2] === true
              ?<StyledLink to={`/artist/${currentUser[0]}`}>
              <button><FaRegUser/>Profile</button>
            </StyledLink>
              :<></>
            }
            {currentUser[4] === true && (
                <>
                  <StyledLink to={`/purchaser/${currentUser[0]}`}>
                  <button><FaRegUser/>Profile</button>
                  </StyledLink>

                  <ShoppingCart>
                    <IconContext.Provider value={{size: "2em"}}>
                      <GiShoppingCart/>
                    </IconContext.Provider>
                    {addToCart}
                  </ShoppingCart>                
                </>
              )
            }


          
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

const ShoppingCart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const StyledLink = styled(Link)`
  margin: 0px 3px 0px 2px;
`;


export default Sidebar