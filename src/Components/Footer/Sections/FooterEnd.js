import styled from "styled-components";

const SectionEnd = styled.div`
  .top-line {
    height: 1px;
    width: 50%;
    max-width: 630px;
    min-width: 250px;
    background-color: #ffffff;
    margin: 0 auto;
  }

  .content-box {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #ffffff;
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;

      text-align: left;
    }
  }
  .vertical-line {
    margin: 8px;
    height: 16px;
    width: 1px;
    background-color: #ffffff;
  }
`;

const FooterEnd = () => {
  return (
    <SectionEnd>
      <div className="top-line"></div>
      <div className="content-box">
        <p>Privacy Policy</p>
        <div className="vertical-line"></div>
        <p>Terms & Conditions</p>
      </div>
    </SectionEnd>
  );
};

export default FooterEnd;
