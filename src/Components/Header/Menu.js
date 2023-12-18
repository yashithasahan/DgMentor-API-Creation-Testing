import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  width: 381px;
  height: 1rem;
  padding: 0;
  justify-content: space-around;
  z-index: 10;

  li {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.25s ease-in-out;
    &:hover {
      font-weight: bold;
      transform: translateY(-2px);
      cursor: pointer;
    }
  }

  @media (max-width: 760px) {
    flex-flow: column;
    justify-content: start;
    background-color: #6b3cc9;
    position: fixed;
    transition: 0.3s ease-in-out;
    transform: ${({ opendrawer }) =>
      opendrawer ? `translateX(0%)` : `translateX(100%)`};
    right: 0;
    top: 0;
    height: 100vh;
    width: 375px;
    li {
      margin: 0 20px 20px 20px;
    }
  }
`;
const Menu = (props) => {
  return (
    <Ul opendrawer={props.opendrawer}>
      <li>SERVICE</li>
      <li>ABOUT US</li>
      <li>CONTACT US</li>
      <li>TESTING</li>
    </Ul>
  );
};

export default Menu;
