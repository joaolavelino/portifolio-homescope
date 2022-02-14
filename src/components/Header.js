import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCoinsPile } from "react-icons/gi";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import logo from "../media/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledHeader>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="homescape logo" />
          <h1>Homescope</h1>
        </div>
      </Link>
      <button className="outline round" onClick={() => setShowMenu(!showMenu)}>
        <AiOutlineMenu />
      </button>
      <AnimatePresence>
        {showMenu && <DropDown setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.header)`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  background-color: #17bebb;
  color: white;
  @media screen and (max-width: 480px) {
    padding: 1rem 2rem;
  }
  a {
    color: white;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  img {
    width: 1.5rem;
  }
`;

export default Header;
