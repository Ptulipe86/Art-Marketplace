import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Main>
      <h2>Sidebar</h2>
      <Wrapper>
        <UsersWrapper>
          <ArtistButtonsWrapper>
            <button >Profile</button>
            <button>Sell</button>
            <button>Sales</button>
          </ArtistButtonsWrapper>

          <BuyersButtonsWrapper>
            <button>Purchases</button>
            <button>View Art</button>
          </BuyersButtonsWrapper>
        </UsersWrapper>

        <CuratorButton>Curator</CuratorButton>
      </Wrapper>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 7vw;
  height: 95vh;
  background: radial-gradient(circle, rgba(251,251,252,1) 5%, rgba(253,94,83,1) 39%, rgba(50,206,213,1) 78%, rgba(62,29,19,1) 97%);
  border-right: 5px outset var(--color-cedar);
  color:white;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
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
  /* position: relative;
  bottom: 50px; */
`
export default Sidebar