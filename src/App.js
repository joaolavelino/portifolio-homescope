import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import { getInitialData } from "./data";
import Properties from "./pages/properties";

function App() {
  useEffect(() => {
    const data = getInitialData();
    setProperties(JSON.parse(localStorage.getItem("homescope")));
  }, []);
  const [properties, setProperties] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Header />
      {properties && <Properties properties={properties} />}
    </>
  );
}

export default App;
