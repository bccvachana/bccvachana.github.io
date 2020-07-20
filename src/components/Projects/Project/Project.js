import React, { useState, useRef, useEffect, useContext } from "react";
import classes from "./Project.module.scss";

import Box from "../../UI/Box/Box";
import List from "../../UI/List/List";
import Link from "../../UI/Link/Link";
import { DeviceInfoContext } from "../../../hoc/withDeviceInfo";

const Project = (props) => {
  const { data } = props;
  const { title, caption, link, detail, year, cover, hash, images } = data;
  const { device, innerWidth, innerHeight, scroll } = useContext(
    DeviceInfoContext
  );

  const [isOpen, setIsOpen] = useState(false);
  const relative = useRef();

  useEffect(() => {
    let timer;
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scroll}px`;
      relative.current.style.zIndex = `20`;
    } else {
      relative.current.style.zIndex = `1`;
      timer = setTimeout(() => {
        relative.current.style.zIndex = `0`;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scroll || "0"));
      }, 350);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]); // eslint-disable-line

  return (
    <div
      className={`${classes.Relative} ${isOpen ? classes.Active : ""}`}
      ref={relative}
    >
      <div
        className={classes.BackDrop}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div
        className={classes.Absolute}
        style={
          isOpen
            ? {
                width: `${innerWidth}px`,
                height: `${innerHeight}px`,
                top: `${scroll - relative.current.offsetTop}px`,
                left: `-${relative.current.offsetLeft}px`,
                padding:
                  device === "Desktop"
                    ? `40px ${(innerWidth - 860) / 2}px`
                    : `40px 20px`,
              }
            : null
        }
      >
        <Box
          onClick={() => {
            if (!isOpen) setIsOpen(true);
          }}
          className={classes.Box}
          containerClassName={classes.BoxContainer}
        >
          <i
            className={`${classes.Close} fa fa-times-circle`}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          {!isOpen ? (
            <div
              className={classes.Cover}
              style={{ backgroundImage: `url(${cover})` }}
            />
          ) : null}
          <div className={classes.Header}>
            <div className={`Bold ${classes.Title}`}>{title}</div>
            <div className="RedBold">{year}</div>
          </div>
          {!isOpen ? <div className={classes.Caption}>{caption}</div> : null}
          <div
            className={classes.Detail}
            style={{ display: isOpen ? "block" : "none" }}
          >
            <div className={classes.Link}>
              {link.map(({ name, to }) => (
                <Link name={name ? name : "GitHub"} to={to} key={to} />
              ))}
            </div>
            <div>{detail}</div>
            <List lists={hash} />
            <div className={classes.Images}>
              {images.map((img, index) => (
                <img
                  src={img}
                  alt={`${title}_${index}`}
                  key={`${title}_${index}`}
                />
              ))}
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Project;
