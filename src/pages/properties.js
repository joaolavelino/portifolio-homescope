import React, { useState } from "react";
import DisplayCards from "../components/DisplayCards";
import FilterSearchBar from "../components/FilterSearchBar";

const Properties = ({ properties }) => {
  const [display, setDisplay] = useState("cards");
  function compare(a, b) {
    if (a.rent < b.rent) {
      return -1;
    }
    if (a.rent > b.rent) {
      return 1;
    }
    return 0;
  }

  const list = properties.sort(compare);

  return (
    <>
      <FilterSearchBar display={display} setDisplay={setDisplay} />
      {display === "cards" ? (
        <DisplayCards properties={list} />
      ) : (
        "display grid"
      )}
    </>
  );
};

export default Properties;
