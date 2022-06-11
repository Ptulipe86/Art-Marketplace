import styled from "styled-components";
import Sidebar from "../Sidebar";
const Homepage = () => {
  return (
    <Wrapper>
      <Sidebar/>
      <WrapperBody>
        <h1>Homepage</h1>
      </WrapperBody>      
    </Wrapper>
  )
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: var(--color-alabaster);
`;

const WrapperBody = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export default Homepage