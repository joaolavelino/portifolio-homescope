import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import { getInitialData } from "./data";
import Properties from "./pages/properties";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddEdit from "./pages/addEdit";
import { AnimatePresence } from "framer-motion";
import Pagina404 from "./pages/404";
import Footer from "./components/Footer";

function App() {
  const [properties, setProperties] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(null);
  const [city, setCity] = useState("");
  //get initial data as one opens the page for the first time
  useEffect(() => {
    const data = getInitialData();
    setProperties(JSON.parse(localStorage.getItem("homescope")));
    setFilteredProperties(JSON.parse(localStorage.getItem("homescope")));
  }, []);

  useEffect(() => {
    localStorage.setItem("homescope", JSON.stringify(properties));
  }, [properties]);

  return (
    <>
      {filteredProperties && (
        <>
          <GlobalStyle />
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route
                path="/"
                element={
                  <Home city={city} setCity={setCity} properties={properties} />
                }
              />
              <Route
                path="/properties/:city"
                element={
                  <Properties
                    properties={properties}
                    setProperties={setProperties}
                    filteredProperties={filteredProperties}
                    setFilteredProperties={setFilteredProperties}
                    city={city}
                  />
                }
              />
              <Route
                path="/properties/listing/:id"
                element={
                  <Properties
                    properties={properties}
                    setProperties={setProperties}
                    filteredProperties={filteredProperties}
                    setFilteredProperties={setFilteredProperties}
                    city={city}
                  />
                }
              />
              <Route
                path="/addEdit/"
                element={
                  <AddEdit
                    properties={properties}
                    setProperties={setProperties}
                  />
                }
              />
              <Route
                path="/addEdit/:id"
                element={
                  <AddEdit
                    properties={properties}
                    setProperties={setProperties}
                  />
                }
              />
              <Route path="/*" element={<Pagina404 />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
