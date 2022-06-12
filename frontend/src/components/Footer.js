import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
     <h2>Contact Info</h2>
     <p> Information</p> 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-cedar);
  border-top: 3px solid var(--color-mediumTurquoise);
  padding: 8px;
  height: 8vh;
  h2,p{
    color: white;
  }
  
`;

export default Sidebar