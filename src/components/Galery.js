import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Gallery = ({ img }) => {
  const [position, setPosition] = useState(0);
  const [fullScreenGallery, setFullScreenGallery] = useState(false);

  const galleryHandler = (e) => {
    if (e.target.classList.contains("arrowLeft")) {
      if (position === 0) {
        setPosition(img.length - 1);
      } else {
        setPosition(position - 1);
      }
    }
    if (e.target.classList.contains("arrowRight")) {
      if (position === img.length - 1) {
        setPosition(0);
      } else {
        setPosition(position + 1);
      }
    }
  };

  const toggleFullScreenGallery = () => {
    setFullScreenGallery(!fullScreenGallery);
    console.log("full screen");
  };

  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") {
      if (position === 0) {
        setPosition(img.length - 1);
      } else {
        setPosition(position - 1);
      }
    } else if (e.key === "ArrowRight") {
      if (position === img.length - 1) {
        setPosition(0);
      } else {
        setPosition(position + 1);
      }
    } else if (e.key === "Escape" && fullScreenGallery) {
      toggleFullScreenGallery();
    }
  });

  return (
    <Container className={fullScreenGallery ? "fullScreen" : ""}>
      {fullScreenGallery && (
        <button className="close " onClick={toggleFullScreenGallery}>
          <MdClose />
        </button>
      )}
      <div className="arrowLeft" onClick={galleryHandler}>
        <BiChevronLeft />
      </div>
      <div className="arrowRight" onClick={galleryHandler}>
        <BiChevronRight />
      </div>
      {img.map((e, index) => (
        <GalleryCard
          key={`gallery${index}`}
          src={e}
          alt="Image"
          className={`${position == index ? "show" : ""} ${
            fullScreenGallery ? "fullScreen" : ""
          }`}
          onClick={toggleFullScreenGallery}
        />
      ))}
      <div className="selectors">
        {img.map((e, index) => (
          <div
            className={`selector ${position == index ? "active" : ""}`}
            key={`gallerySelector${index}`}
            onClick={() => setPosition(index)}
          ></div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  z-index: 20;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &.fullScreen {
    z-index: 20;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: black;
  }
  .close {
    position: fixed;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid white;
    background-color: black;
    padding: 0;
    margin: 1rem;
    z-index: 20;
    transition: 0.4s;
    &:hover {
      color: black;
      background-color: white;
    }
  }

  .arrowLeft {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    color: darkorange;
    font-size: 2rem;
    z-index: 13;
    background: rgba(0, 0, 0, 0);
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      font-size: 2.5rem;
      background-color: rgba(0, 0, 0, 0.2);
    }
    svg {
      pointer-events: none;
    }
  }
  .arrowRight {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;

    color: darkorange;
    font-size: 2rem;
    z-index: 13;
    background: rgba(0, 0, 0, 0);
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      font-size: 2.5rem;
      background-color: rgba(0, 0, 0, 0.2);
    }
    svg {
      pointer-events: none;
    }
  }

  .selectors {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    z-index: 13;
  }

  .selector {
    width: 0.8rem;
    height: 0.8rem;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    &.active {
      background-color: darkorange;
    }
  }
`;

const GalleryCard = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: 0.4s;
  z-index: 12;
  &.fullScreen {
    object-fit: contain;
  }

  &.show {
    opacity: 1;
  }
`;

export default Gallery;
