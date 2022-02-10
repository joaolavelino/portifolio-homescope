import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
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
  MdInsertEmoticon,
} from "react-icons/md";
import styled from "styled-components";
import Gallery from "./Galery";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const PropertyDetails = ({ pathId, properties }) => {
  const navigate = useNavigate();

  const item = properties.filter((e) => e.id == pathId)[0];

  const formatedAddress = item.address.replace(" ", "+");

  const closeDetails = () => {
    navigate(-1);
  };

  return (
    <Shadow className="shadow">
      <DetailsCard>
        <div className="bg">
          <img src={item.img[0]} alt="Foto de fundo" className="bg" />
          <div className="colorbg" />
        </div>
        <header>
          <div className="location">
            <h2>{item.district}</h2>
            <h3>{item.city}</h3>
          </div>

          <section className="area-rooms">
            <div>
              <h5>Rooms</h5> <p>{item.rooms}</p>
            </div>
            <div>
              <h5>area</h5> <p>{item.area}sqm</p>
            </div>
            <div>
              <h5>Rent</h5> <p>CHF {item.rent}</p>
            </div>
          </section>
          <button className="close outline round" onClick={closeDetails}>
            <MdClose />
          </button>
        </header>
        <div className="info">
          <div className="left">
            <div className="info-box">
              <div className="adress">
                <h4>
                  {item.address}, {item.number}
                </h4>
                <h4>floor: {item.floor}</h4>
              </div>
              <div className="characteristics">
                <ul className="graphs">
                  <li>
                    <h5>Location</h5>
                    <div className={` graphBar width${item.location}0`}></div>
                  </li>
                  <li>
                    <h5>space</h5>
                    <div className={`graphBar width${item.space}0`}></div>
                  </li>
                  <li>
                    <h5>quality</h5>
                    <div className={`graphBar width${item.quality}0`}></div>
                  </li>
                  <li>
                    <h5>transport</h5>
                    <div className={`graphBar width${item.transport}0`}></div>
                  </li>
                </ul>
                <div className="features">
                  <h4>Features</h4>

                  {item.parks && (
                    <div>
                      <BsTree /> <h5>Parks</h5>
                    </div>
                  )}

                  {item.tram && (
                    <div>
                      <MdOutlineTram />
                      <h5>Trams</h5>
                    </div>
                  )}

                  {item.bus && (
                    <div>
                      <BiBus />
                      <h5>Buses</h5>
                    </div>
                  )}

                  {item.train && (
                    <div>
                      <BiTrain />
                      <h5>Train</h5>
                    </div>
                  )}

                  {item.view && (
                    <div>
                      <BsEye />
                      <h5>view</h5>
                    </div>
                  )}
                  {item.market && (
                    <div>
                      <MdOutlineShoppingCart />
                      <h5>Market</h5>
                    </div>
                  )}
                  {item.lift && (
                    <div>
                      <MdOutlineElevator />
                      <h5>Lift</h5>
                    </div>
                  )}
                  {item.school && (
                    <div>
                      <MdSchool />
                      <h5>School</h5>
                    </div>
                  )}
                  {item.garden && (
                    <div>
                      <GiHighGrass />
                      <h5>Garden</h5>
                    </div>
                  )}
                  {item.furniture && (
                    <div>
                      <MdOutlineChair />
                      <h5>furniture</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="description">{item.description}</p>
          </div>

          <div className="right">
            <div className="links">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${formatedAddress}+${item.number}+${item.city}`}
                target="_blank"
              >
                <button>
                  <p>Google Maps</p> <BsMap />
                </button>
              </a>
              <a href="mailto:joaolavelino@gmail.com" target="_blank">
                <button>
                  <p>Contact</p> <MdOutlineEmail />
                </button>
              </a>
              <a href={item.url} target="_blank">
                <button>
                  <p>Listing</p>
                </button>
              </a>
            </div>
            <div className="gallery">
              <Gallery img={item.img} />
            </div>
          </div>
        </div>
        <footer>
          <button
            className="gray small"
            onClick={() => navigate(`/addEdit/${item.id}`)}
          >
            Edit
          </button>
        </footer>
      </DetailsCard>
    </Shadow>
  );
};

const Shadow = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;
  @media screen and (max-width: 1000px) {
    overflow-y: auto;
  }
`;

const DetailsCard = styled(motion.article)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0%;
  margin: 3rem 5%;
  width: 90vw;
  height: 90vh;
  z-index: 12;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    height: auto;
  }
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    filter: saturate(0) brightness(1.1);
    z-index: 12;
    opacity: 0.6;
  }

  header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 1rem 5rem;
    background-color: #17bebb;
    color: white;
    z-index: 14;
    @media screen and (max-width: 1000px) {
      align-items: center;
      justify-content: space-between;
      height: 140px;
      padding: 2rem 3rem 1rem;
    }

    .location {
      width: 50%;
    }

    .area-rooms {
      display: flex;
      width: 100%;
      margin: 0.5rem 0;
      @media screen and (max-width: 650px) {
        flex-direction: column;
      }

      div {
        width: 50%;
        padding: 0 1rem;
        border-left: 2px solid white;
        @media screen and (max-width: 650px) {
          display: flex;
          width: 100%;
          align-items: center;
          margin-left: 2rem;
          h5 {
            width: 40px;
          }
          p {
            margin-left: 1rem;
            font-size: 1rem;
          }
        }
        p {
          font-weight: bolder;
          font-size: 150%;
          @media screen and (max-width: 650px) {
            margin-left: 1rem;
            font-size: 1rem;
          }
        }
      }
    }

    .close {
      font-size: 2rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }

  .info {
    margin-top: 80px;
    width: 100%;
    z-index: 14;
    display: flex;
    overflow-y: hidden;
    @media screen and (max-width: 1000px) {
      flex-direction: column-reverse;
      margin-top: 140px;
      overflow-y: auto;
    }

    .left {
      width: 40%;
      height: auto;
      background-color: rgba(255, 255, 255, 0.6);
      padding: 2rem;
      overflow-y: auto;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }

      p {
        text-align: justify;
        white-space: pre-wrap;
      }
    }

    .right {
      width: 60%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }

      .links {
        width: 100%;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;

        @media screen and (max-width: 700px) {
          flex-direction: column;
          align-items: center;
          button {
            width: 100%;
          }
        }
      }

      .gallery {
        width: 100%;
        height: 100%;
        @media screen and (max-width: 1000px) {
          height: 40vh;
        }
      }
    }

    .info-box {
      margin: 0 0 2rem;
      padding: 2rem;
      background-color: #17bebb;
      opacity: 01;
      color: white;

      .graphs {
        list-style: none;
        width: 100%;
        margin: 30px 0;
        padding: 30px 0 0;
        border-top: 2px solid white;
        li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 1rem;
          width: 100%;
          &:first-child {
            margin-top: 0;
          }

          .graphBar {
            background-color: white;
            height: 0.5rem;
            transition: 0.4s;
            position: relative;
          }
          .width10 {
            width: 10%;
          }
          .width20 {
            width: 20%;
          }
          .width30 {
            width: 30%;
          }
          .width40 {
            width: 40%;
          }
          .width50 {
            width: 50%;
          }
          .width60 {
            width: 60%;
          }
          .width70 {
            width: 70%;
          }
          .width80 {
            width: 80%;
          }
          .width90 {
            width: 90%;
          }
          .width100 {
            width: 100%;
          }
        }
      }

      .features {
        display: flex;
        flex-wrap: wrap;
        h4 {
          width: 100%;
          margin-bottom: 1rem;
        }
        div {
          width: 30%;
          height: 60px;
          text-align: center;
          svg {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  footer {
    z-index: 14;
    padding: 1rem 2rem;
    background-color: lightgray;
    display: flex;
    justify-content: end;
  }
`;

export default PropertyDetails;
