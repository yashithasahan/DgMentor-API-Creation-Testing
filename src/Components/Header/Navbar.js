import styled from "styled-components";
import Menu from "./Menu";
import Burger from "./Burger";
import { useState } from "react";

import logo from "../../assets/Images/logo.png";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  height: 77px;
  justify-content: center;
  align-items: center;
  background-color: #6b3cc9;
  z-index: 10;

  .nav-box {
    height: 36.11px;
    display: flex;
    width: 1440px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px 0px 60px;
    img {
      width: 4%;
    }

    @media (max-width: 1000px) {
      padding: 0px 40px 0px 40px;
    }
    @media (max-width: 700px) {
      padding: 0px 20px 0px 20px;
    }
    @media (max-width: 400px) {
      padding: 0px 10px 0px 1dvh;
    }
  }

  .logo {
  }
`;

const Navbar = () => {
  const [opendrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!opendrawer);
  };

  return (
    <Nav>
      <div className="nav-box">
        <img src={logo} alt="AT Digital Logo"></img>
        <Menu opendrawer={opendrawer} />
        <Burger toggleDrawer={toggleDrawer} opendrawer={opendrawer} />
      </div>
    </Nav>
  );
};

export default Navbar;
