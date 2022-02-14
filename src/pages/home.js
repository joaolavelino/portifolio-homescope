import { AnimatePresence, motion } from "framer-motion";
import { pageAnimation, homeAnimation, quickFade } from "../animation";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = ({ city, setCity, properties }) => {
  const [cityList, setCityList] = useState(null);
  const navigate = useNavigate();

  const cityImg = [
    {
      city: "zürich",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/Z%C3%BCrich.jpg",
    },
    {
      city: "baden",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Baden_Altstadt_und_Industrie_DJI.jpg",
    },
    {
      city: "bern",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Central_Bern_from_north.jpg",
    },
    {
      city: "basel",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Basel_%28von_Elisabethenkirche%29.JPG",
    },
  ];
  let list = [];
  useEffect(() => {
    properties.forEach((e) => {
      {
        !list.includes(e.city) && list.push(e.city);
      }
    });
    setCityList(list);
    setCity(list[0]);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/properties/${city}`);
  };

  return (
    <AnimatePresence>
      <HomeContainer
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="bg">
          {cityImg.map((img, index) => (
            <img
              src={img.img}
              key={`imageList${index}`}
              className={img.city == city ? "active" : ""}
            />
          ))}
        </div>
        <section className="content">
          <header>
            <motion.h3 variants={homeAnimation}>Welcome to</motion.h3>
            <motion.h1 variants={homeAnimation}>Homescope</motion.h1>
          </header>
          {cityList && (
            <>
              {cityList.length && (
                <motion.form onSubmit={searchHandler}>
                  <datalist id="cities"></datalist>
                  <motion.label htmlFor="" variants={quickFade}>
                    <h4>Select a city</h4>
                  </motion.label>
                  <motion.select
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    variants={quickFade}
                  >
                    {cityList.map((city, index) => (
                      <option value={city} key={`datalist${index}`}>
                        {city}
                      </option>
                    ))}
                  </motion.select>
                  <motion.button variants={quickFade}>Search</motion.button>
                </motion.form>
              )}
              <button
                className="small outline add"
                onClick={() => navigate("/addEdit/")}
              >
                Add new listing
              </button>
            </>
          )}
        </section>
      </HomeContainer>
    </AnimatePresence>
  );
};

const HomeContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  header {
    font-size: 150%;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background-color: #17bebb;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: 0.6s;
      filter: saturate(0);
      &.active {
        opacity: 0.3;
      }
    }
  }

  .content {
    width: 300px;
    font-size: 130%;
    color: white;
    margin-left: 5rem;
    @media screen and (max-width: 480px) {
      margin-left: 2rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    select {
      width: 100%;
      margin-bottom: 1rem;
    }
    button {
      width: 100%;
    }
  }

  .add {
    position: fixed;
    bottom: 5rem;
  }
`;

export default Home;
