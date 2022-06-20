import styled from "styled-components";
import TabGroup from "../Profile components/TabGroup";
import { useEffect, useState, useContext } from "react";
import {useParams} from "react-router-dom";
import { MainContext } from "../context/MainContext";

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
      <div>
      <TabGroup artistCollection={artistInfo.collection}/>
      </div>
    </Wrapper>
  )
};

export const Wrapper  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin:5px;
`;

export const UserInfoSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
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

export default ArtistProfile