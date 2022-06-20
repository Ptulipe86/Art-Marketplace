import styled from "styled-components";
import TabGroup from "../profile components/TabGroup";
import { useEffect, useState, useContext } from "react";
import {useParams} from "react-router-dom";
import { MainContext } from "../context/MainContext";
import Cards from "../gallery components/Cards";

const ArtistProfile = () => {

  const {id} = useParams();
  const [artistInfo, setArtistInfo] = useState("");


  useEffect(() => {
    fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(data => {      
      setArtistInfo(data.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[id])

  return (
    <Wrapper>
      <UserInfoSection>
        <ProfileImgWrapper>
          <ProfileAvatar src={artistInfo.avatarUrl} alt="profile pic"/>
          <div>
            <h3>{artistInfo.givenName} {artistInfo.surname}</h3>
          </div>
        </ProfileImgWrapper>
        <BioWrapper>
          <h4>BIO</h4>
          <span>
            <p>{artistInfo.bio}</p>
          </span>
        </BioWrapper>
      </UserInfoSection>      
      {/* <TabGroup artistInfo={artistInfo}/> */}
      <h3>Current Collection</h3>
      <CollectionWrapper>        
        {artistInfo && artistInfo.collection.map(artInfo => {
          return (
            <>
              <Cards 
                    artist={artistInfo.artist === true ? `${artistInfo.surname}, ${artistInfo.givenName}`: "unknown"}
                    name={artInfo.name}
                    description={artInfo.description}
                    price={artInfo.Price}
                    isSold={artInfo.isSold}
                    url={artInfo.url}
                    tags={artInfo.tags}
              />
            </>
          )
        })}
      </CollectionWrapper>
    </Wrapper>
  )
};

export const Wrapper  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin:5px;
`;

export const UserInfoSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: 10px solid var(--color-mediumTurquoise);
`;

export const ProfileImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 50%;
`;

export const ProfileAvatar = styled.img`
  width: 200px; 
  height:200px;
  border-radius: 100%;
  margin: 10px;
  border: 2px solid black;
`;

export const BioWrapper = styled.div`  
  width: 30%;
  min-width: 50%;
`;

export const CollectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default ArtistProfile