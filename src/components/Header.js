import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Homescape</h1>
      <AiOutlineMenu />
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
`;

export default Header;
