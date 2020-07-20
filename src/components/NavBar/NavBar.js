import React, { useState, useRef, useEffect } from "react";
import classes from "./NavBar.module.scss";
import { Link, Events } from "react-scroll";

import Hamburger from "../UI/Hamburger/Hamburger";
import DarkModeSwitch from "../UI/DarkModeSwitch/DarkModeSwitch";

const offset = -3.5 * 16;
const navArray = ["Home", "About", "Achievements", "Projects"];

const NavBar = (props) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const dropDownRef = useRef();

  window.onclick = (event) => {
    if (dropDownRef.current) {
      if (
        !event.target.matches(".NavDropdown") &&
        !dropDownRef.current.contains(event.target)
      ) {
        setIsDropDown(false);
      }
    }
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {
      setIsDropDown(false);
    });
    window.scrollTo(0, 0.4);
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) window.scrollTo(0, 0.4);
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className={`${classes.NavBar} ElementBackgroundColor ${classes.BoxShadow}`}
      >
        <div className={`${classes.Container} ${classes.TabletDesktop}`}>
          <Logo />
          <div className={classes.Link}>
            <Links />
            <div className={classes.Line} />
            <DarkModeSwitch />
          </div>
        </div>
        <div className={`${classes.Container} ${classes.Mobile} NavDropdown`}>
          <Logo />
          <Hamburger isDropDown={isDropDown} setIsDropDown={setIsDropDown} />
        </div>
      </div>
      <div
        className={` ${classes.Dropdown} ElementBackgroundColor ${classes.BoxShadow}`}
        style={{ transform: `translateY(${isDropDown ? "0" : "-100%"})` }}
        ref={dropDownRef}
      >
        <div className={classes.Link}>
          <Links />
        </div>
        <DarkModeSwitch />
      </div>
    </React.Fragment>
  );
};

export default NavBar;

const Links = () => {
  return (
    <React.Fragment>
      {navArray.map((nav) => (
        <Link
          to={nav}
          key={nav}
          spy={true}
          smooth={true}
          duration={500}
          offset={offset}
        >
          {nav}
        </Link>
      ))}
    </React.Fragment>
  );
};

const Logo = () => {
  return (
    <Link to="Home" spy={true} smooth={true} duration={500} offset={-5.5 * 16}>
      <div className={classes.Name}>{`<VC/>`}</div>
    </Link>
  );
};
