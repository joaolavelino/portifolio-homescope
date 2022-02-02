import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import { getInitialData } from "./data";
import Properties from "./pages/properties";
import { Route, Routes } from "react-router-dom";

function App() {
  //get initial data as one opens the page for the first time
  useEffect(() => {
    const data = getInitialData();
    setProperties(JSON.parse(localStorage.getItem("homescope")));
  }, []);

  const [properties, setProperties] = useState(null);

  return (
    <>
      {properties && (
        <>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route
              path="/properties"
              element={<Properties properties={properties} />}
            />
            <Route
              path="/properties/:id"
              element={<Properties properties={properties} />}
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
