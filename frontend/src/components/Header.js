import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>The Art Place</h1>
      <div>
        <input/>
        <button>Drop menu</button>
      </div> 
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-cedar);
  border-bottom: 3px solid var(--color-mediumTurquoise);
  padding: 5px;
  h1{
    color: white;
  }
`

export default Header