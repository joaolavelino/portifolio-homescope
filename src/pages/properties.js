import { AnimatePresence, motion } from "framer-motion";
import { homeAnimation, pageAnimation } from "../animation";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    {
      !city.length && navigate("/");
    }
    let cityFilter = properties.filter((e) => e.city === city);
    setPropertiesCity(cityFilter);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [display, details]);

  if (!pathId) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <AnimatePresence>
        {propertiesCity && (
          <motion.main
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
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
            <AnimatePresence>
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
            </AnimatePresence>
            <AnimatePresence>
              {pathId && filteredProperties && (
                <PropertyDetails pathId={pathId} properties={properties} />
              )}
            </AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

const Header = styled(motion.div)`
  padding: 0 0 2rem;
  width: 100%;
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
