import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
     <h2>Footer</h2> 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-cedar);
  border-top: 3px solid var(--color-mediumTurquoise);
  h2{
    color: white;
  }
`;

export default Sidebar