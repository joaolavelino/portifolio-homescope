import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DisplayCards from "../components/DisplayCards";
import FilterSearchBar from "../components/FilterSearchBar";
import PropertyDetails from "../components/PropertyDetails";

const Properties = ({ properties }) => {
  const [display, setDisplay] = useState("cards");
  const [details, setDetails] = useState(false);
  //GET CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const list = properties.sort(compare);

  function compare(a, b) {
    if (a.rent < b.rent) {
      return -1;
    }
    if (a.rent > b.rent) {
      return 1;
    }
    return 0;
  }
  if (!pathId) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <FilterSearchBar display={display} setDisplay={setDisplay} />
      {display === "cards" ? (
        <DisplayCards
          properties={list}
          setDetails={setDetails}
          details={details}
        />
      ) : (
        "display grid"
      )}
      {pathId && <PropertyDetails pathId={pathId} properties={properties} />}
    </>
  );
};

export default Properties;
