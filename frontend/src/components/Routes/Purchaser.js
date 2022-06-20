import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import {useParams} from "react-router-dom";
import { Wrapper, UserInfoSection,ProfileImgWrapper,ProfileAvatar, CollectionWrapper} from "./Artist";
import { MainContext } from "../context/MainContext";
import Cards from "../gallery components/Cards";

const Purchaser = () => {

  const {id} = useParams();
  const [purchaserInfo, setPurchaserInfo] = useState("");

  useEffect(() => {
    fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(data => {      
      setPurchaserInfo(data.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[id])


  return (
    <Wrapper>
      <UserInfoSection>
        <ProfileImgWrapper>
          <ProfileAvatar src={purchaserInfo.avatarUrl} alt="profile pic"/>
          <div>
            <h3>{purchaserInfo.givenName} {purchaserInfo.surname}</h3>
          </div>
        </ProfileImgWrapper>
      </UserInfoSection>
      <h3>Current Collection</h3>
      <CollectionWrapper>
      
      {purchaserInfo && purchaserInfo.collection.map(artInfo => {
          return (
            <Collection>
              <Cards 
                    artist={purchaserInfo.artist === true ? `${purchaserInfo.surname}, ${purchaserInfo.givenName}`: "unknown"}
                    name={artInfo.name}
                    description={artInfo.description}
                    price={artInfo.Price}
                    isSold={artInfo.isSold}
                    url={artInfo.url}
                    tags={artInfo.tags}
              />
            </Collection>
          )
      })}
      
      </CollectionWrapper>
      {/* <TabGroup purchaserCollection ={purchaserInfo}/> */}
    </Wrapper>
  )
};

const Collection = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export default Purchaser