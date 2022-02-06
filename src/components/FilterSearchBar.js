import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaFilter,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import {
  BsGridFill,
  BsSearch,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { MdOutlineGrid4X4 } from "react-icons/md";
import { sortByValue } from "../util/sort";
//framer motion
import { motion, AnimatePresence } from "framer-motion";

const FilterSearchBar = ({
  display,
  setDisplay,
  properties,
  filteredProperties,
  setFilteredProperties,
  terms,
  setTerms,
}) => {
  const [showBar, setShowBar] = useState(false);
  const [minRentFilter, setMinRentFilter] = useState(0);
  const [maxRentFilter, setMaxRentFilter] = useState(0);
  const [minRoomsFilter, setMinRoomsFilter] = useState(0);
  const [maxRoomsFilter, setMaxRoomsFilter] = useState(0);
  const [rentArray, setRentArray] = useState([]);
  const [roomsArray, setRoomsArray] = useState([]);
  const [sortDirection, setSortDirection] = useState(true);
  const [sortBy, setSortBy] = useState("rent");
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    setMinMax();
  }, []);

  //setMinMax
  const setMinMax = () => {
    let rents = [];
    let rooms = [];
    properties.forEach((e) => {
      rents.push(e.rent);
      rooms.push(e.rooms);
    });
    rents.sort();
    rooms.sort();
    setRentArray(rents);
    setRoomsArray(rooms);
    setMinRentFilter(rents[0]);
    setMaxRentFilter(rents[rents.length - 1]);
    setMinRoomsFilter(rooms[0]);
    setMaxRoomsFilter(rooms[rooms.length - 1]);
  };

  const applyFilter = (e) => {
    e.preventDefault();
    let filteredList = [];
    let filteredList2 = [];
    if (minRentFilter <= maxRentFilter) {
      filteredList = properties.filter(
        (e) => minRentFilter <= e.rent && e.rent <= maxRentFilter
      );
    } else {
      alert("Maximum rent value must be higher than minimum rent value");
      return;
    }
    if (minRoomsFilter <= maxRoomsFilter) {
      filteredList2 = filteredList.filter(
        (e) => minRoomsFilter <= e.rooms && e.rooms <= maxRoomsFilter
      );
    } else {
      alert("Maximum rooms value must be higher than minimum rooms value");
      return;
    }
    window.scrollTo(0, 0);

    setShowBar(false);
    setFilteredProperties(filteredList2);
  };
  const resetFilter = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setFilteredProperties(properties);
    setMinRentFilter(rentArray[0]);
    setMaxRentFilter(rentArray[rentArray.length - 1]);
    setMinRoomsFilter(roomsArray[0]);
    setMaxRoomsFilter(roomsArray[roomsArray.length - 1]);
  };

  const sortHandler = (e) => {
    e.preventDefault();
    let filteredList = sortByValue(sortBy, filteredProperties, sortDirection);
    window.scrollTo(0, 0);
    setShowBar(false);
    console.log(filteredList);
    setFilteredProperties(filteredList);
  };

  const displayHandler = () => {
    {
      display == "grid" ? setDisplay("cards") : setDisplay("grid");
    }
  };

  const searchHandler = (e) => {
    setTerms(searchTerms);
    e.preventDefault();
    const searchResults = properties.filter((e) =>
      e.district.includes(searchTerms)
    );
    window.scrollTo(0, 0);
    setShowBar(false);
    setFilteredProperties(searchResults);

    setSearchTerms("");
  };

  const resetSearch = (e) => {
    e.preventDefault();
    setFilteredProperties(properties);
    setTerms("");
    setSearchTerms("");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!showBar && (
        <PropertiesBarHidden layoutId="bar" transition={{ bounce: 0 }}>
          <motion.div>
            <FaFilter />
          </motion.div>
          <motion.div>
            <BsSearch />
          </motion.div>
          <button
            className={`outline round ${display == "cards" && "grid"}`}
            onClick={displayHandler}
          >
            {display == "grid" ? <BsGridFill /> : <MdOutlineGrid4X4 />}
          </button>
          <button className="round white" onClick={() => setShowBar(true)}>
            <BsArrowRightShort />
          </button>
        </PropertiesBarHidden>
      )}
      <AnimatePresence>
        {showBar && (
          <>
            <Shadow
              onClick={() => setShowBar(false)}
              variants="fade"
              initial={{ opacity: 0, transition: { duration: 0.3 } }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            ></Shadow>
            <PropertiesBar layoutId="bar">
              <div className="section">
                <header>
                  <FaFilter />
                  <h3>Filter</h3>
                </header>
                <form className="filters" onSubmit={applyFilter}>
                  <fieldset className="rent">
                    <legend>
                      <h4>Rent</h4>
                    </legend>
                    <div className="inputLine">
                      <h5>Min: </h5>
                      <input
                        type="range"
                        name="minRentFilter"
                        id=""
                        min={rentArray[0]}
                        max={rentArray[rentArray.length - 1]}
                        step="1"
                        value={minRentFilter}
                        onChange={(e) =>
                          setMinRentFilter(parseInt(e.target.value))
                        }
                      />
                      <h4>{minRentFilter}</h4>
                    </div>
                    <div className="inputLine">
                      <h5>Max: </h5>
                      <input
                        type="range"
                        name="maxRentFilter"
                        id=""
                        min={minRentFilter}
                        max={rentArray[rentArray.length - 1]}
                        step="1"
                        value={maxRentFilter}
                        onChange={(e) =>
                          setMaxRentFilter(parseInt(e.target.value))
                        }
                      />
                      <h4>{maxRentFilter}</h4>
                    </div>
                  </fieldset>
                  <fieldset className="rooms">
                    <legend>
                      <h4>rooms</h4>
                    </legend>
                    <div className="inputLine">
                      <h5>Min: </h5>
                      <input
                        type="range"
                        name="minRoomsFilter"
                        id=""
                        min={roomsArray[0]}
                        max={roomsArray[roomsArray.length - 1]}
                        step="0.5"
                        value={minRoomsFilter}
                        onChange={(e) =>
                          setMinRoomsFilter(parseFloat(e.target.value, 0))
                        }
                      />
                      <h4>{minRoomsFilter}</h4>
                    </div>
                    <div className="inputLine">
                      <h5>Max: </h5>
                      <input
                        type="range"
                        name="maxRoomsFilter"
                        id=""
                        min={minRoomsFilter}
                        max={roomsArray[roomsArray.length - 1]}
                        step="0.5"
                        value={maxRoomsFilter}
                        onChange={(e) =>
                          setMaxRoomsFilter(parseFloat(e.target.value, 0))
                        }
                      />
                      <h4>{maxRoomsFilter}</h4>
                    </div>
                  </fieldset>
                  <button
                    className="outline"
                    value="apply"
                    onClick={applyFilter}
                  >
                    Apply Fflter
                  </button>
                  <button
                    className="outline"
                    value="reset"
                    onClick={resetFilter}
                  >
                    Reset Fflter
                  </button>
                </form>
              </div>
              <div className="division" />
              <div className="section">
                <header>
                  <FaSortAmountDownAlt />
                  <h3>sort</h3>
                </header>
                <form onSubmit={sortHandler}>
                  <fieldset>
                    <legend>
                      <h4>Sorted by:</h4>
                    </legend>
                    <select
                      name=""
                      id=""
                      className="white"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="rent">Rent</option>
                      <option value="area">Area</option>
                      <option value="location">Location</option>
                      <option value="space">Space</option>
                      <option value="quality">Quality</option>
                      <option value="transport">Transport</option>
                    </select>
                    <div
                      className="sortIcons"
                      onClick={() => setSortDirection(!sortDirection)}
                    >
                      <FaSortAmountDownAlt
                        className={sortDirection && "active"}
                      />
                      <FaSortAmountUpAlt
                        className={!sortDirection && "active"}
                      />
                    </div>
                  </fieldset>
                  <button className="outline">Sort</button>
                </form>
              </div>
              <div className="division" />
              <div className="section search">
                <header>
                  <BsSearch />
                  <h3>Search</h3>
                </header>
                <form onSubmit={searchHandler}>
                  <fieldset>
                    <input
                      type="text"
                      name=""
                      value={searchTerms}
                      placeholder="district (e.g. Enge)"
                      onChange={(e) => setSearchTerms(e.target.value)}
                    />
                  </fieldset>
                  <button className="outline">Search</button>
                  <button className="outline" onClick={resetSearch}>
                    Reset Search
                  </button>
                </form>
              </div>

              <div className="display-close">
                <div className="display">
                  <h4>Display Mode:</h4>
                  {display === "cards" ? (
                    <button
                      value="grid"
                      className="white grid"
                      onClick={(e) => setDisplay(e.target.value)}
                    >
                      <h6>Grid</h6>
                      <MdOutlineGrid4X4 />
                    </button>
                  ) : (
                    <button
                      value="cards"
                      className="white"
                      onClick={(e) => setDisplay(e.target.value)}
                    >
                      <h6>Cards</h6>
                      <BsGridFill />
                    </button>
                  )}
                </div>
                <div className="close">
                  <h5>Close</h5>
                  <button
                    className="round white"
                    onClick={() => setShowBar(false)}
                  >
                    <BsArrowLeftShort />
                  </button>
                </div>
              </div>
            </PropertiesBar>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterSearchBar;

const Shadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

const PropertiesBar = styled(motion.section)`
  position: fixed;
  top: 70px;
  margin-left: 2rem;
  z-index: 9;
  /* height: 23rem; */
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem 2rem;
  background-color: darkorange;
  color: white;
  border-radius: 0 0 5px 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  display: flex;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    width: auto;
    padding-bottom: 6rem;
  }

  button {
    margin-left: 1rem;
    font-size: 1rem;
  }

  .division {
    width: 3px;
    height: 200px;
    background-color: #ff9d00;
    height: 18rem;

    @media screen and (max-width: 850px) {
      width: 18rem;
      height: 3px;
    }
  }

  .section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  header {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    h3 {
      margin-left: 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    button {
      margin: 0;
      font-size: 0.8rem;
    }
  }
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: none;
    padding-top: 0.5rem;
    .inputLine {
      display: flex;
      align-items: center;
      h5 {
        width: 40px;
      }
      h4 {
        margin-left: 0.5rem;
      }
    }

    .sortIcons {
      font-size: 1.5rem;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.1);
      }
      svg {
        margin-right: 1rem;
        opacity: 0.4;

        &.active {
          opacity: 1;
        }
      }
    }
  }

  .display-close {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 3rem;
    @media screen and (max-width: 850px) {
      gap: 1rem;
    }

    .display,
    .close {
      display: flex;
      align-items: center;
    }
    .display {
      button {
        h6 {
          margin-right: 1rem;
        }
        @media screen and (max-width: 850px) {
          &.grid {
            opacity: 50%;
            pointer-events: none;
          }
        }
      }
    }
  }
`;

const PropertiesBarHidden = styled(motion.section)`
  position: fixed;
  z-index: 9;
  top: 70px;
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
  .grid {
    @media screen and (max-width: 850px) {
      &.grid {
        opacity: 50%;
        pointer-events: none;
      }
    }
  }
`;
