import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ item, details, setDetails }) => {
  const [showInfo, setShowInfo] = useState(false);

  const infoHandlerTrue = () => {
    setShowInfo(true);
  };
  const infoHandlerFalse = () => {
    setShowInfo(false);
  };

  return (
    <Link to={`/properties/listing/${item.id}`}>
      <StyledCard onHoverStart={infoHandlerTrue} onHoverEnd={infoHandlerFalse}>
        <div className="rent">
          <h3>CHF {item.rent}</h3>
        </div>
        <figure>
          <figcaption className={`info ${showInfo ? "show" : ""}`}>
            <header>
              <h3>{item.district}</h3>
              <h4>{item.city}</h4>
            </header>
            <section className="area-rooms">
              <div>
                <h5>Rooms</h5> <p>{item.rooms}</p>
              </div>
              <div>
                <h5>area</h5> <p>{item.area}sqm</p>
              </div>
            </section>
            <ul className="graphs">
              <li>
                <h5>Location</h5>
                <div
                  className={`graphBar ${
                    showInfo ? `width${item.location}0` : ``
                  }`}
                ></div>
              </li>
              <li>
                <h5>space</h5>
                <div
                  className={`graphBar ${
                    showInfo ? `width${item.space}0` : ``
                  }`}
                ></div>
              </li>
              <li>
                <h5>quality</h5>
                <div
                  className={`graphBar ${
                    showInfo ? `width${item.quality}0` : ``
                  }`}
                ></div>
              </li>
              <li>
                <h5>transport</h5>
                <div
                  className={`graphBar ${
                    showInfo ? `width${item.transport}0` : ``
                  }`}
                ></div>
              </li>
            </ul>
          </figcaption>
          <img src={item.img[0]} alt="Property Image" />
        </figure>
      </StyledCard>
    </Link>
  );
};

export default Card;

const StyledCard = styled(motion.article)`
  position: relative;
  display: flex;
  height: 25rem;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  &:hover {
    box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.4);
    transform: translate(0, -0.6rem);
    transform: scale(1.05);
    .rent {
      transform: scale(1.25);
      transform-origin: top left;
    }
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .rent {
    position: absolute;
    transition: 0.4s;
    left: 30px;
    top: 0;
    background-color: #17bebb;
    padding: 0.5rem 1rem;
    border-radius: 0 0 5px 5px;
    color: white;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .info {
    position: absolute;
    bottom: -11rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    color: white;
    transition: 0.4s;
    header {
      font-size: 150%;
    }
    .area-rooms {
      display: flex;
      width: 100%;
      margin: 0.5rem 0;
      div {
        width: 50%;
        margin: 0.5rem 0;
        padding: 0 1rem;
        border-left: 2px solid white;
        p {
          font-weight: bolder;
          font-size: 150%;
        }
      }
    }
    .graphs {
      list-style: none;
      width: 100%;
      margin-top: 20px;
      overflow: hidden;
      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1rem;
        width: 100%;
        &:first-child {
          margin-top: 0;
        }
      }
      .graphBar {
        background-color: white;
        height: 0.5rem;
        transition: 0.4s;
        width: 1%;
        position: relative;
      }
      .width10 {
        left: 0;
        transform: scaleX(10);
        transform-origin: top left;
      }
      .width20 {
        left: 0;
        transform: scaleX(2000%);
        transform-origin: top left;
      }
      .width30 {
        left: 0;
        transform: scaleX(3000%);
        transform-origin: top left;
      }
      .width40 {
        left: 0;
        transform: scaleX(4000%);
        transform-origin: top left;
      }
      .width50 {
        left: 0;
        transform: scaleX(5000%);
        transform-origin: top left;
      }
      .width60 {
        left: 0;
        transform: scaleX(6000%);
        transform-origin: top left;
      }
      .width70 {
        left: 0;
        transform: scaleX(7000%);
        transform-origin: top left;
      }
      .width80 {
        left: 0;
        transform: scaleX(8000%);
        transform-origin: top left;
      }
      .width90 {
        left: 0;
        transform: scaleX(9000%);
        transform-origin: top left;
      }
      .width100 {
        left: 0;
        transform: scaleX(10000%);
        transform-origin: top left;
      }
    }
  }

  .show {
    transform: translateY(-11rem);
    transition: 0.4s;
  }
`;
