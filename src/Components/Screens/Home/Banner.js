import hero from "../../../assets/Images/hero.png";
import styled from "styled-components";
import Button from "../../UI/Button";

const Hero = styled.div`
  .container {
    position: relative;
    img {
      width: 100%;
      margin-top: 77px;
      padding: 0;
    }
  }

  .hero-poster {
    position: absolute;

    top: 354px;
    left: 80px;
    width: 630px;
    min-height: 306px;
    background-image: linear-gradient(to right, #4dca79, #1cbddd);
    margin: 0;
  }
  @media (max-width: 1360px) {
    .container {
      position: none;
      display: fex;
    }
    .hero-poster {
      position: relative;
      width: 100%;
      left: 0;
      top: -5px;
      margin-top: 0px;
    }
  }

  .hero-content {
    padding: 24px 40px 32px 40px;
    color: #ffffff;
    font-family: Inter;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: left;

    @media (max-width: 550px) {
      font-size: 36px;
      padding: 24px 20px 32px 20px;
    }
  }
`;

const Banner = () => {
  return (
    <Hero>
      <div className="container">
        <img src={hero} alt="hero"></img>
        <div className="hero-poster">
          <div className="hero-content">
            <div>
              Digital Training Platform We aim to work with likeminded partners
              to support digitally inclusive society by providing Our Digital
              Learning Platform and Contents.
            </div>
            <Button>GET FREE CONSULTATION</Button>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default Banner;
