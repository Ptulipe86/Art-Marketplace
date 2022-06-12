import Carousel from 'react-bootstrap/Carousel';
import demo1 from "../assets/demo1.jpg";
import demo2 from "../assets/demo2.jpeg";
import demo3 from "../assets/personal_collection.jpg";
import styled from "styled-components";

const HeroSlider = () => {
  return(
    <>
      <Carousel fade>
        <Carousel.Item interval={4000}>
          <Images            
            src={demo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <MiniWrapper>
              <h2>The all in one Art Marketplace</h2>
              <p>Looking for a unique exhibit for your artwork? Can't afford a grand hall to display your collection? Look no further, we can host your pieces, while you can set the price, and view all your sold merchandise.</p>
              <p>Register now and then sign in to start!</p>
            </MiniWrapper>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <Images            
            src={demo2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <MiniWrapper>
              <h2>Searching for unique art?</h2>
              <p>Our artists are here to help exceed those needs. Hundreds of pieces to look at. Find your new favorite artist. Add it your favorite piece to the shopping cart. And your good to go!</p>
              <p>Register now and then sign in to start!</p>
            </MiniWrapper>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Images            
            src={demo3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <MiniWrapper>
              <h2>You can be a curator!</h2>
              <p>From creating your custom exhibit, so you can then show off your favorite artists. Show off your favorite purchased pieces, as well.</p>
              <p>Register and sign in to find out more.</p>
            </MiniWrapper>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

const Images = styled.img`
  width: 100vw;
  height: 81.2vh;
  border-top: 3px solid var(--color-mediumTurquoise);
  border-bottom: 3px solid var(--color-mediumTurquoise);
`;

const MiniWrapper = styled.div`
  background-color: RGBA(62,29,19,0.70);
  border: 4px inset #32ced5;
  border-radius: 5px;
`;

export default HeroSlider;