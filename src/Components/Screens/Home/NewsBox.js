import styled from "styled-components";
import Button from "../../UI/Button";

const News = styled.div`
  max-width: 1064px;
  min-height: 275px;
  display: flex;
  flex-wrap: nowrap;
  margin: 108px auto 108px auto;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 414px;
    height: auto;
    min-width: 275px;
  }

  .info {
    max-width: 542px;
    width: 100%;
    min-height: 187px;
    color: #6b3cc9;
    font-family: Poppins;
    font-size: 27px;
    font-weight: 600;
    line-height: 33px;
    text-align: left;

    p {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
    }
  }
  @media (max-width: 1104px) {
    margin: 108px 20px 108px 20px;
  }
  @media (max-width: 996px) {
    margin: 60px 20px 60px 20px;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
    flex-direction: column;
    img {
      max-width: 275px;
      min-width: 10px;
      order: 1;
    }
    .info {
      text-align: center;
      order: 2;
      background-size: cover;
    }
  }
`;

const NewsBox = ({ post }) => {
  return (
    <News>
      {post.id % 2 !== 0 && <img src={post.image} alt={post.index}></img>}
      <div className="info">
        <div>{post.title}</div>
        <p>{post.info}</p>

        <Button>LEARN MORE</Button>
      </div>
      {post.id % 2 === 0 && <img src={post.image} alt={post.index}></img>}
    </News>
  );
};
export default NewsBox;
