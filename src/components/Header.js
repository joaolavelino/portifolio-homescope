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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  background-color: #17bebb;
  color: white;
`;

export default Header;
