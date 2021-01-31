import React, { useState, useEffect } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';

import Loading from './components/Loading/Loading';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

export const Context = React.createContext();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem('vachanaDarkMode')) {
      setDarkMode(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    } else {
      setDarkMode(localStorage.getItem('vachanaDarkMode') === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('vachanaDarkMode', darkMode);
    document.body.className = darkMode ? 'DarkMode' : '';
  }, [darkMode]);

  return (
    <Context.Provider
      value={{
        isLoaded: isLoaded,
        darkMode: darkMode,
        setDarkMode: setDarkMode,
      }}
    >
      <OnImagesLoaded
        onLoaded={() => {
          let timer = setTimeout(() => {
            setIsLoaded(true);
            clearTimeout(timer);
          }, 2000);
        }}
      >
        <Loading />
        <div className='App'>
          <NavBar />
          <Header />
          <About />
          <Achievements />
          <Projects />
          <Footer />
        </div>
      </OnImagesLoaded>
    </Context.Provider>
  );
};

export default App;
