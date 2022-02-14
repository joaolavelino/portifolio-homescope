import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="text">
        <h3>Homescope</h3>
        <p>
          was developed by João Avelino for learning purposes using React,
          Styled Components, Framer Motion and React Router.
        </p>
      </div>
      <div className="buttons">
        <a href="">
          <button className="gray small "> linkedIn</button>
        </a>
        <a href="">
          <button className="gray small "> github</button>
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  background-color: white;
  border-top: 1px solid gray;

  p {
    font-size: 80%;
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }
`;

export default Footer;
