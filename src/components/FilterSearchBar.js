import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import {
  BsGridFill,
  BsSearch,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { MdOutlineGrid4X4 } from "react-icons/md";

const FilterSearchBar = ({ display, setDisplay }) => {
  const [showBar, setShowBar] = useState(true);

  return (
    <>
      {!showBar && (
        <PropertiesBarHidden
          layoutId="bar"
          transition={{ bounce: 0 }}
          onClick={() => setShowBar(true)}
        >
          <motion.div>
            <FaFilter />
          </motion.div>
          <motion.div>
            <BsSearch />
          </motion.div>
          <motion.div>
            <MdOutlineGrid4X4 />
          </motion.div>
          <motion.div>
            <BsGridFill />
          </motion.div>
        </PropertiesBarHidden>
      )}
      {showBar && (
        <PropertiesBar layoutId="bar" onClick={() => setShowBar(false)}>
          <motion.div className="filter">
            <FaFilter />
            <h6>Filter</h6>
          </motion.div>
          <div className="search">
            <BsSearch />
            <h6>Search</h6>
          </div>
          <div className="display">
            <h6>Display Mode:</h6>
            {display === "cards" ? (
              <button value="grid" className="white">
                <h6>Grid</h6>
                <MdOutlineGrid4X4 />
              </button>
            ) : (
              <button value="grid">
                <h6>Cards</h6>
                <BsGridFill />
              </button>
            )}
          </div>
          <button className="round white">
            <BsArrowLeftShort />
          </button>
        </PropertiesBar>
      )}
    </>
  );
};

export default FilterSearchBar;

const PropertiesBar = styled(motion.section)`
  background-color: darkorange;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 1rem 5rem;
  width: 100%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  div {
    display: flex;
    align-items: center;
    button {
      margin-left: 1rem;
      font-size: 1rem;
      h6 {
        margin-right: 1rem;
      }
    }
  }
`;

const PropertiesBarHidden = styled(motion.section)`
  background-color: darkorange;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 3rem;
  padding: 0.5rem 1rem;
  margin-left: 2rem;
  border-radius: 0 0 5px 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  transition: 0.4s;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ff9d00;
    width: 210px;
  }
  button {
  }
`;
