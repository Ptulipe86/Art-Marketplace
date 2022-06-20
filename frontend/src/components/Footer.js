import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-cedar);
  border-top: 3px solid var(--color-mediumTurquoise);
  height: 100%;
  min-height: 8vh;
  h2,p{
    color: white;
    margin: 5px;
  }  
`;

export default Footer