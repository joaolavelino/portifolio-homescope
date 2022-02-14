import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCoinsPile } from "react-icons/gi";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledHeader>
      <Link to="/">
        <h1>Homescope</h1>
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
`;

export default Header;
