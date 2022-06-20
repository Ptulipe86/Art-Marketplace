import styled from "styled-components";
import TabGroup from "../Profile components/TabGroup";
import { useEffect, useState, useContext } from "react";
import {useParams} from "react-router-dom";
import { Wrapper, UserInfoSection,ProfileImgWrapper,ProfileAvatar} from "./Artist";
import { MainContext } from "../context/MainContext";

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
      <div>
      <TabGroup purchaserCollection ={purchaserInfo.collection}/>
      </div>
    </Wrapper>
  )
};

export default Purchaser