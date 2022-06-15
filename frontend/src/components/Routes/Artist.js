import styled from "styled-components";
import user from "../assets/user profile pics/usertext.jpg"
import TabGroup from "../profile components/TabGroup";

const ArtistProfile = () => {
  return (
    <Wrapper>
      <UserInfoSection>
        <ProfileImgWrapper>
          <ProfileAvatar src={user} alt="profile pic"/>
          <div>
            <h3>The Big Guy</h3>
            <span>Origin/Style, b.1986</span>
          </div>
        </ProfileImgWrapper>
        <BioWrapper>
          <h4>BIO</h4>
          <span>
            <p>ex. The Big Guy’s psychedelic paintings and multimedia installations suggest a digital utopia and a futuristic nightmare. Big’s kaleidoscopic paintings depict rappers, dancers, Instagram influencers, and YouTube personalities in striking chromatic hues that resemble infrared or heat vision, often incorporating sculptural elements that extend this techno-anarchy beyond the picture plane and into the real world.             
            </p>
          </span>
        </BioWrapper>
      </UserInfoSection>
      <div>
      <TabGroup />
      </div>
    </Wrapper>
  )
};

const Wrapper  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin:5px;
`;

const UserInfoSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const ProfileImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 50%;
`;

const ProfileAvatar = styled.img`
  width: 200px; 
  height:200px;
  border-radius: 100%;
  margin: 10px;
  border: 2px solid black;
`;

const BioWrapper = styled.div`  
  width: 30%;
  min-width: 50%;
`;



export default ArtistProfile