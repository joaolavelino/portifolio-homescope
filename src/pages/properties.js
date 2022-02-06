import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import DisplayCards from "../components/DisplayCards";
import DisplayGrid from "../components/DisplayGrid";
import FilterSearchBar from "../components/FilterSearchBar";
import PropertyDetails from "../components/PropertyDetails";

const Properties = ({
  properties,
  filteredProperties,
  setFilteredProperties,
  city,
}) => {
  const [display, setDisplay] = useState("cards");
  const [details, setDetails] = useState(false);
  const [terms, setTerms] = useState("");
  const [propertiesCity, setPropertiesCity] = useState(null);
  //GET CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[3];

  useEffect(() => {
    let cityFilter = properties.filter((e) => e.city === city);
    setPropertiesCity(cityFilter);
  }, []);

  if (!pathId) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      {propertiesCity && (
        <>
          <h1>erro</h1>
          <Header className="header">
            <Title>
              <h3>Search results in </h3>
              <h2>
                {city}
                {terms.length ? " / " : ""}
                {terms}
              </h2>
              <Link to="/">
                <h6>To search properties in another city, clicK here</h6>
              </Link>
            </Title>
          </Header>
          <FilterSearchBar
            display={display}
            setDisplay={setDisplay}
            properties={propertiesCity}
            filteredProperties={propertiesCity}
            setFilteredProperties={setFilteredProperties}
            terms={terms}
            setTerms={setTerms}
          />
          {display === "cards" ? (
            <DisplayCards
              filteredProperties={propertiesCity}
              setDetails={setDetails}
              details={details}
            />
          ) : (
            <DisplayGrid
              filteredProperties={propertiesCity}
              setDetails={setDetails}
              details={details}
            />
          )}
          {pathId && filteredProperties && (
            <PropertyDetails pathId={pathId} properties={properties} />
          )}
        </>
      )}
    </>
  );
};

const Header = styled(motion.div)`
  padding: 8rem 0 2rem;
  width: 100vw;
  top: 0;
  display: flex;
  align-items: flex-end;
  z-index: 8;
  border-bottom: 1px solid darkgray;
  background-color: white;
`;

const Title = styled(motion.div)`
  margin: 0 5rem;
  font-size: 120%;
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
    }
  }
  a {
    text-decoration: none;
  }
`;

export default Properties;
