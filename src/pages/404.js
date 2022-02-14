import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../media/brokenLogo.png";

const Pagina404 = () => {
  const navigate = useNavigate();
  return (
    <Styled404>
      <div className="left">
        <img src={logo} alt="broken logo" />
      </div>
      <div className="right">
        <h3>404</h3>
        <h2>Oops... There's nothing in here...</h2>
        <p>You'll be redirected to Home in a few seconds.</p>
        <button className="gray small" onClick={() => navigate("/")}>
          Redirect to home
        </button>
      </div>
    </Styled404>
  );
};

const Styled404 = styled(motion.main)`
  width: calc(100% - 10rem);
  height: 100%;
  margin-left: 5rem;
  padding: 8rem 3rem;
  border: 2px solid darkorange;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media screen and (max-width: 480px) {
    width: calc(100% - 2rem);
    flex-direction: column;
    margin-left: 1rem;
  }
  h2 {
    color: darkorange;
    margin-bottom: 2rem;
  }
  h3 {
    color: #17bebb;
  }
  button {
    margin-top: 1rem;
  }
`;

export default Pagina404;
