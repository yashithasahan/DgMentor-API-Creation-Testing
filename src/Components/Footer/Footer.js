import styled from "styled-components";
import LeadingSection from "./Sections/LeadingSection";
import TopicSection from "./Sections/TopicSection";
import FooterEnd from "./Sections/FooterEnd";

const technologies = [
  "Flutter",
  "Firebase",
  // "NextJS",
  // "NodeJS",
  // "GraphQL",
  // "Laravel",
];
const services = [
  "Social media Marketing",
  "Web & Mobile App Development",
  "Data & Analytics",
  // "Google Marketing solutions",
];

const FooterSection = styled.footer`
  background-color: #6b3cc9;
  max-height: 800px;
  .section-container {
    padding: 40px 60px 20px 60px;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    @media (max-width: 760px) {
      padding: 40px 20px 20px 20px;
    }
  }

  .section-leading {
    flex: 1;
    img {
      width: 15%;
    }

    p {
      color: #ffffff;
      max-width: 400px;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 16px;
      font-family: Lato;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 60px;
    }
  }

  .section-topics-container {
    min-width: 480px;
    color: #ffffff;
    display: flex;
    flex: 1;
    justify-content: start;
    width: 100%;
    h1 {
      margin: 0;
      padding-bottom: 10px;
      font-weight: bold;
      font-size: 21px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      margin-bottom: 12px;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .section-topics {
    flex: 1;
    min-width: 240px;
    margin-bottom: 40px;
  }

  @media (max-width: 1040px) {
    .section-container {
      flex-direction: column;
    }
    .section-topics-container {
      justify-content: start;
    }
    .section-topics {
      flex: 1;
      min-width: 240px;
    }
  }

  @media (max-width: 560px) {
    .section-topics-container {
      flex-direction: column;
      min-width: auto;
    }
    .section-topics {
      min-width: auto;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="section-container">
        <LeadingSection>SectionA</LeadingSection>
        <div className="section-topics-container">
          <TopicSection list={technologies}>Our Technologies</TopicSection>
          <TopicSection list={services}>Our Services</TopicSection>
        </div>
      </div>
      <FooterEnd />
    </FooterSection>
  );
};

export default Footer;
