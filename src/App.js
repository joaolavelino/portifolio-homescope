import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import { getInitialData } from "./data";
import Properties from "./pages/properties";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  //get initial data as one opens the page for the first time
  useEffect(() => {
    const data = getInitialData();
    setProperties(JSON.parse(localStorage.getItem("homescope")));
    setFilteredProperties(JSON.parse(localStorage.getItem("homescope")));
  }, []);

  const [properties, setProperties] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(null);
  const [city, setCity] = useState("Zürich");

  return (
    <>
      {filteredProperties && (
        <>
          <GlobalStyle />
          <Header />
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
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
