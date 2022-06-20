import styled from "styled-components";
import { FcCheckmark, FcCancel} from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Cards = ({artist,name, description, price, isSold, url, tags, id}) => {

  const {currentUser,setAddToCart, addToCart} = useContext(MainContext); 
  
  const handleOnClick = () => {
    setAddToCart(addToCart + 1)
  };
  
  return(
    <Wrapper>      
      <Image src={url} alt="item"/>
      <ul>       
        <li>Artist: {artist}</li>
        <li>Name: {name}</li>
        <li>Description: {description}</li>
        <li>Price: {price}</li>
        <IsSold>
          <IsSold>Sold:{isSold === true ? <FcCheckmark/> : <FcCancel/>}</IsSold>
        </IsSold>        
        <li>Tags: {tags}</li>
      </ul>
      {currentUser[4] === true && isSold === false &&(
        <button onClick={handleOnClick} >Add to Cart</button>
      )}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid var(--color-cedar);
  width: 250px;
  height: 100%;
  max-height: 10%;
  margin: 5px;
  padding: 5px;
  ul{
    margin: 0px;
    padding: 0px;
  }
`;
const Image = styled.img`
  height: 110px;
  width: 200px;
`
const IsSold = styled.li`
  display: flex;
  align-items: center;
`;
export default Cards