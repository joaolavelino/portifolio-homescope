import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { AiOutlineClose, AiFillDatabase } from "react-icons/ai";
import { FaUserAlt, FaMap } from "react-icons/fa";
import { dropDown, fade } from "../animation";

const DropDown = ({ setShowMenu }) => {
  return (
    <Shadow
      variants={fade}
      initial="hidden"
      animate="show"
      exit="hidden"
      onClick={() => setShowMenu(false)}
    >
      <StyledDropDown
        variants={dropDown}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <button className="outline round" onClick={() => setShowMenu(false)}>
          <AiOutlineClose />
        </button>
        <h4>For future implementation</h4>
        <ul>
          <li>
            <div className="listIcon">
              <AiFillDatabase />
            </div>
            Back-end structure in MongoDb;
          </li>
          <li>
            <div className="listIcon">
              <FaUserAlt />
            </div>
            User-based functionality, like: Profile creation,
            favorites/wishlist;
          </li>
          <li>
            <div className="listIcon">
              <FaMap />
            </div>{" "}
            Map interface with Map-GL.{" "}
          </li>
        </ul>
      </StyledDropDown>
    </Shadow>
  );
};

const Shadow = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StyledDropDown = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 5rem;
  width: 250px;
  padding: 2rem;
  background-color: darkorange;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 480px) {
    right: 1rem;
  }
  button {
    margin-bottom: 2rem;
  }
  ul {
    list-style: none;
    margin-top: 2rem;
    li {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      svg {
        font-size: 2rem;
        margin-right: 1rem;
      }
    }
  }
`;

export default DropDown;
