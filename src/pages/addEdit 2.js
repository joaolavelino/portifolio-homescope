import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import React from "react";
import styled from "styled-components";
import AddEditForm from "../components/addEditForm";

const AddEdit = ({ properties, setProperties }) => {
  document.body.style.overflow = "auto";
  return (
    <AddEditPage
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>add / edit</h1>
      <AddEditForm properties={properties} setProperties={setProperties} />
    </AddEditPage>
  );
};

const AddEditPage = styled(motion.main)`
  width: calc(100% - 10rem);
  margin: 10rem 5rem 2rem;
  @media screen and (max-width: 600px) {
    margin: 0 1rem 2rem;
    width: calc(100% - 2rem);
  }
`;
export default AddEdit;
