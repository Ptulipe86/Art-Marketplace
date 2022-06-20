import styled from "styled-components";
import Cards from "./Cards";

const ArtistsCollection = ({artistsInfo}) => {
  return (
    <Wrapper>      
      {artistsInfo.collection.map(artInfo => {
        return(
          <Cards 
                artist={artistsInfo.artist === true ? `${artistsInfo.surname}, ${artistsInfo.givenName}`: "unknown"}
                name={artInfo.name}
                description={artInfo.description}
                price={artInfo.Price}
                isSold={artInfo.isSold}
                url={artInfo.url}
                tags={artInfo.tags}
                id={artistsInfo._id}
                artistBoolean={artistsInfo.Artist}
                purchaserBoolean={artistsInfo.Purchaser}
          />
        )
      })}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
export default ArtistsCollection