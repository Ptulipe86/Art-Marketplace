import styled from "styled-components";
import HeroSlider from "../bootstrap Components/HeroSlider";

const Homepage = () => {
  return (
    <Wrapper>      
      <WrapperBody>
        <h1>Welcome to The Art Place</h1>
        <HeroSlider/>
      </WrapperBody>      
    </Wrapper>
  )
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background-color: var(--color-alabaster);
`;

const WrapperBody = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default Homepage