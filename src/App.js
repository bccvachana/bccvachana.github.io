import React, { useState, useEffect } from "react";
import OnImagesLoaded from "react-on-images-loaded";

import Loading from "./components/Loading/Loading";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

export const Context = React.createContext();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(
    sessionStorage.getItem("vachanaDarkMode") === "true" ? true : false
  );

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1E1E1E" : "#f3f3f4";
  }, [darkMode]);

  return (
    <React.Fragment>
      <Loading isLoaded={isLoaded} darkMode={darkMode} />
      <OnImagesLoaded
        onLoaded={() => {
          let timer = setTimeout(() => {
            setIsLoaded(true);
            clearTimeout(timer);
          }, 2000);
        }}
      >
        <Context.Provider
          value={{ darkMode: darkMode, setDarkMode: setDarkMode }}
        >
          <div className={`App ${darkMode ? "DarkMode" : ""}`}>
            <NavBar setDarkMode={setDarkMode} />
            <Header />
            <About />
            <Achievements />
            <Projects />
            <Footer />
          </div>
        </Context.Provider>
      </OnImagesLoaded>
    </React.Fragment>
  );
};

export default App;
