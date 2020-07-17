import React, { useState, useEffect, useRef } from "react";

const checkDevice = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1023) return "Desktop";
  else if (windowWidth > 767) return "Tablet";
  else return "Mobile";
};

export const DeviceInfoContext = React.createContext();

const withDeviceInfo = (WrappedComponent) => {
  return (props) => {
    const [device, setDevice] = useState(checkDevice());
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [innerHeight, setinnerHeight] = useState(window.innerHeight);
    const [scroll, setScroll] = useState(0);

    const windowRef = useRef();

    useEffect(() => {
      window.onscroll = () => {
        if (document.body.style.position !== "fixed") {
          setScroll(window.scrollY);
        }
      };
      window.onresize = () => {
        setDevice(checkDevice());
        setInnerWidth(windowRef.current.clientWidth);
        setinnerHeight(windowRef.current.clientHeight);
      };
    }, []);

    return (
      <DeviceInfoContext.Provider
        value={{
          device: device,
          innerWidth: innerWidth,
          innerHeight: innerHeight,
          scroll: scroll,
        }}
      >
        <div
          ref={windowRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            padding: 0,
            pointerEvents: "none",
          }}
        />
        <WrappedComponent {...props} />
      </DeviceInfoContext.Provider>
    );
  };
};

export default withDeviceInfo;
