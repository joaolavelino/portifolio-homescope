import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import DisplayCards from "../components/DisplayCards";
import FilterSearchBar from "../components/FilterSearchBar";
import PropertyDetails from "../components/PropertyDetails";

const Properties = ({
  properties,
  setProperties,
  filteredProperties,
  setFilteredProperties,
  city,
}) => {
  const [display, setDisplay] = useState("cards");
  const [details, setDetails] = useState(false);
  //GET CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  if (!pathId) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <Title>
        <h3>Search results in </h3>
        <h2>{city}</h2>
        <Link to="/">
          <h6>To search properties in another city, clicK here</h6>
        </Link>
      </Title>
      <FilterSearchBar
        display={display}
        setDisplay={setDisplay}
        properties={properties}
        filteredProperties={filteredProperties}
        setFilteredProperties={setFilteredProperties}
      />

      {display === "cards" ? (
        <DisplayCards
          filteredProperties={filteredProperties}
          setDetails={setDetails}
          details={details}
        />
      ) : (
        "display grid"
      )}
      {pathId && filteredProperties && (
        <PropertyDetails pathId={pathId} properties={properties} />
      )}
    </>
  );
};

const Title = styled(motion.div)`
  font-size: 120%;
  margin-top: 8rem;
  padding: 0 5rem;
  width: 100%;
  text-align: right;
  h3 {
    font-weight: lighter;
  }
  h2 {
    color: #17bebb;
  }
  h6 {
    color: darkgray;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: darkorange;
      transform: scale(1.05);
      transform-origin: top right;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default Properties;
