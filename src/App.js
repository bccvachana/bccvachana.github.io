import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`App ${darkMode ? "DarkMode" : ""}`}>
      <NavBar setDarkMode={setDarkMode} />
      <Header />
      <About />
      <Achievements />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
