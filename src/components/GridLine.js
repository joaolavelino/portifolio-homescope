import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsTree, BsMap, BsEye } from "react-icons/bs";
import { BiTrain, BiBus } from "react-icons/bi";
import { GiHighGrass } from "react-icons/gi";
import {
  MdOutlineTram,
  MdOutlineShoppingCart,
  MdOutlineElevator,
  MdSchool,
  MdOutlineChair,
  MdOutlineEmail,
  MdClose,
} from "react-icons/md";

const GridLine = ({ item, details, setDetails }) => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const infoHandlerTrue = () => {
    setShowInfo(true);
  };
  const infoHandlerFalse = () => {
    setShowInfo(false);
  };

  return (
    <StyledGridLine
      onHoverStart={infoHandlerTrue}
      onHoverEnd={infoHandlerFalse}
      onClick={() => navigate(`/properties/listing/${item.id}`)}
    >
      <td className="rent">
        <h3>
          <sub>CHF</sub> {item.rent}
        </h3>
      </td>
      <td className="image">
        <img src={item.img[0]} alt="photo of the property" />
      </td>
      <td className="location">
        <h3>{item.district}</h3>
        <h4>{item.city}</h4>
      </td>
      <td className="area-rooms">
        <div>
          <h5>Rooms</h5> <p>{item.rooms}</p>
        </div>
        <div>
          <h5>area</h5> <p>{item.area}sqm</p>
        </div>
      </td>
      <td className="ratings">
        <div>
          <h6>Location</h6>
          <h5>{item.location}</h5>
        </div>
        <div>
          <h6>space</h6>
          <h5>{item.space}</h5>
        </div>
        <div>
          <h6>quality</h6>
          <h5>{item.quality}</h5>
        </div>
        <div>
          <h6>transport</h6>
          <h5>{item.transport}</h5>
        </div>
      </td>
      <td className="features">
        {item.parks ? <BsTree /> : <MdClose className="noFeature" />}
        {item.tram ? <MdOutlineTram /> : <MdClose className="noFeature" />}
        {item.train ? <BiTrain /> : <MdClose className="noFeature" />}
        {item.bus ? <BiBus /> : <MdClose className="noFeature" />}
        {item.view ? <BsEye /> : <MdClose className="noFeature" />}
        {item.market ? (
          <MdOutlineShoppingCart />
        ) : (
          <MdClose className="noFeature" />
        )}
        {item.lift ? <MdOutlineElevator /> : <MdClose className="noFeature" />}
        {item.school ? <MdSchool /> : <MdClose className="noFeature" />}
        {item.garden ? <GiHighGrass /> : <MdClose className="noFeature" />}
        {item.MdOutlineChair ? <BsTree /> : <MdClose className="noFeature" />}
      </td>
    </StyledGridLine>
  );
};

export default GridLine;

const StyledGridLine = styled(motion.tr)`
  position: relative;
  display: flex;
  height: 6rem;
  overflow: hidden;
  color: darkgray;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
    background-color: #fae9d4;
    z-index: 2;
  }

  th,
  td {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
  }

  th {
    padding: 0;
  }
  .image {
    width: 10rem;
    object-fit: cover;
    overflow: hidden;
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .rent {
    width: 5.5rem;
    height: 100%;
    background-color: #17bebb;
    padding: 0.5rem 1rem;
    color: white;
    border-right: none;
  }
  .location {
    width: 12rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 1rem;
  }

  .area-rooms {
    width: 14rem;
    justify-content: space-around;
    gap: 2rem;
    div {
      p {
        font-weight: bolder;
        font-size: 120%;
      }
    }
  }

  .features {
    font-size: 150%;
    gap: 1rem;
    border-right: none;
    .noFeature {
      opacity: 40%;
    }
  }

  .ratings {
    gap: 1rem;
    div {
      text-align: center;
    }
    h5 {
      width: 4rem;
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
    }
  }

  .show {
    transform: translateY(-11rem);
    transition: 0.4s;
  }
`;
