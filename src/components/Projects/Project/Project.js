import React, { useState, useRef, useEffect, useContext } from "react";
import classes from "./Project.module.scss";

import Box from "../../UI/Box/Box";
import { DeviceInfoContext } from "../../../hoc/withDeviceInfo";

const Project = (props) => {
  const { data } = props;
  const { title, detail, year, cover, hash } = data;
  const { device, innerWidth, innerHeight, scroll } = useContext(
    DeviceInfoContext
  );

  const [isOpen, setIsOpen] = useState(false);
  const relative = useRef();
  const absolute = useRef();
  const backDrop = useRef();

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
        document.body.style = "";
        window.scrollTo(0, parseInt(scroll || "0"));
      }, 350);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <div
      className={`${classes.Relative} ${isOpen ? classes.Active : ""}`}
      ref={relative}
    >
      <div
        className={classes.BackDrop}
        ref={backDrop}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div
        className={classes.Absolute}
        ref={absolute}
        style={
          isOpen
            ? {
                width: `${innerWidth}px`,
                height: `${innerHeight}px`,
                top: `${scroll - relative.current.offsetTop}px`,
                left: `-${relative.current.offsetLeft}px`,
                padding:
                  device === "Desktop"
                    ? `20px ${(innerWidth - 860) / 2}px`
                    : `20px`,
                cursor: "default",
              }
            : null
        }
      >
        <Box
          style={{
            width: `100%`,
            //height: `100%`,
            pointerEvents: "auto",
          }}
          onClick={() => {
            setIsOpen(true);
          }}
          className={classes.Box}
        >
          <div className={classes.Cover}>
            <div
              className={classes.CoverImg}
              style={{
                backgroundImage: `url(${cover})`,
              }}
            />
          </div>
          <div className={`Bold ${classes.Title}`}>{title}</div>
          <div className={`RedBold ${classes.Year}`}>{year}</div>
          <div className={classes.Caption}>{detail}</div>
        </Box>
      </div>
    </div>
  );
};

export default Project;
