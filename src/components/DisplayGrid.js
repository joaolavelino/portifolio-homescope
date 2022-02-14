import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Card from "./Card";
import GridLine from "./GridLine";

import { BsTree, BsMap, BsEye } from "react-icons/bs";
import { BiTrain, BiBus } from "react-icons/bi";
import { GiHighGrass } from "react-icons/gi";
import {
  MdOutlineTram,
  MdOutlineShoppingCart,
  MdOutlineElevator,
  MdSchool,
  MdOutlineChair,
  MdOutlineEmail,
  MdClose,
} from "react-icons/md";
import { cardsStaggerAnimation } from "../animation";

const DisplayGrid = ({ filteredProperties, details, setDetails }) => {
  return (
    <Grid variants={cardsStaggerAnimation}>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {filteredProperties.map((e) => (
          <GridLine
            key={e.id}
            item={e}
            onClick={setDetails}
            details={details}
          />
        ))}
      </tbody>
    </Grid>
  );
};

export default DisplayGrid;

const Grid = styled(motion.table)`
  margin: 3rem 5rem;
  overflow-x: auto;
  border-collapse: collapse;
  @media screen and (max-width: 600px) {
    margin: 1rem 1rem;
  }
  tr {
    border-bottom: 1px solid darkgray;
  }
  td,
  th {
    border-right: 1px solid lightgray;
    width: auto;
  }
`;
