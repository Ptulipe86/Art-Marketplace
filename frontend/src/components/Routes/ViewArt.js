import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import ArtistsCollection from "../gallery components/ArtistsCollection";
import { MainContext } from "../context/MainContext";
import Loading from "../utilities/Loading";

const ViewArt = () => {
  
  const {status, setStatus } = useContext(MainContext)
  const [artistInfo, setArtistInfo] = useState("");

  useEffect(() => {

    fetch("/api/users")
    .then(res => res.json())
    .then(data => {
      
      setArtistInfo(data.data)
      setStatus("idle")
    })
    .catch(error => {
      console.log(error)
      throw error
    })
  },[status])

  if (status === "idle") {
    return (
      <Wrapper>
        <p>Art gallery</p>
        
        {artistInfo && artistInfo.map(element => {
          return(            
            <CollectionWrapper>
              <ArtistsCollection artistsInfo={element}/>
            </CollectionWrapper>
          )
        })}
              
      </Wrapper>
    );
  } else {
    <Wrapper>
      <Loading />
    </Wrapper>
  };
};

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CollectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

export default ViewArt