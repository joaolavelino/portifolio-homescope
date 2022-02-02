import { motion } from "framer-motion";
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

const FilterSearchBar = ({
  display,
  setDisplay,
  properties,
  filteredProperties,
  setFilteredProperties,
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
    setShowBar(false);
  };

  const sortHandler = (e) => {
    e.preventDefault();
    let filteredList = sortByValue(sortBy, filteredProperties, sortDirection);

    window.scrollTo(0, 0);

    setShowBar(false);
    setFilteredProperties(filteredList);
  };

  return (
    <>
      {!showBar && (
        <PropertiesBarHidden
          layoutId="bar"
          transition={{ bounce: 0 }}
          onClick={() => setShowBar(true)}
        >
          <motion.div>
            <FaFilter />
          </motion.div>
          <motion.div>
            <BsSearch />
          </motion.div>
          <motion.div>
            <MdOutlineGrid4X4 />
          </motion.div>
          <motion.div>
            <BsGridFill />
          </motion.div>
        </PropertiesBarHidden>
      )}
      {showBar && (
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
                    step="100"
                    value={minRentFilter}
                    onChange={(e) => setMinRentFilter(parseInt(e.target.value))}
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
                    onChange={(e) => setMaxRentFilter(parseInt(e.target.value))}
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
              <button className="outline" value="apply" onClick={applyFilter}>
                Apply Fflter
              </button>
              <button className="outline" value="reset" onClick={resetFilter}>
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
                <div className="inputLine">
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
                    <FaSortAmountUpAlt className={!sortDirection && "active"} />
                  </div>
                </div>
              </fieldset>
              <button className="outline">Sort</button>
            </form>
          </div>
          <div className="division" />
          <div className="search">
            <BsSearch />
            <h6>Search</h6>
          </div>
          <div className="display">
            <h6>Display Mode:</h6>
            {display === "cards" ? (
              <button value="grid" className="white">
                <h6>Grid</h6>
                <MdOutlineGrid4X4 />
              </button>
            ) : (
              <button value="grid">
                <h6>Cards</h6>
                <BsGridFill />
              </button>
            )}
          </div>
          <button className="round white" onClick={() => setShowBar(false)}>
            <BsArrowLeftShort />
          </button>
        </PropertiesBar>
      )}
    </>
  );
};

export default FilterSearchBar;

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
  button {
    margin-left: 1rem;
    font-size: 1rem;
    h6 {
      margin-right: 1rem;
    }
  }

  .division {
    width: 3px;
    height: 200px;
    background-color: #ff9d00;
    height: 18rem;
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
        margin-left: 1rem;
        opacity: 0.4;

        &.active {
          opacity: 1;
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
  button {
  }
`;
