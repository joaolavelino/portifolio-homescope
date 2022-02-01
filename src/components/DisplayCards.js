import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Card from "./Card";

const DisplayCards = ({ properties }) => {
  console.log(properties[1]);
  return (
    <Cards>
      {properties.map((e) => (
        <Card key={e.id} item={e} />
      ))}
    </Cards>
  );
};

export default DisplayCards;

const Cards = styled(motion.section)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 5rem 5rem;
`;
