import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Projects";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "DarkMode" : ""}>
      <NavBar setDarkMode={setDarkMode} />
      <Header />
      <About />
      <Achievements />
      <Projects />
    </div>
  );
};

export default App;
