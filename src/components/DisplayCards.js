import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { cardsStaggerAnimation } from "../animation";
import Card from "./Card";

const DisplayCards = ({ filteredProperties, details, setDetails }) => {
  return (
    <Cards variants={cardsStaggerAnimation}>
      {filteredProperties.map((e) => (
        <Card key={e.id} item={e} onClick={setDetails} details={details} />
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
  margin: 3rem 5rem;
  @media screen and (max-width: 600px) {
    margin: 1rem 1rem;
  }
`;
