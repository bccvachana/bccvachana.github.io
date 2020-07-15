import React, { useState, useEffect } from "react";

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

    useEffect(() => {
      window.onscroll = () => {
        if (document.body.style.position !== "fixed") {
          setScroll(window.scrollY);
        }
      };
      window.onresize = () => {
        setDevice(checkDevice());
        setInnerWidth(window.innerWidth);
        setinnerHeight(window.innerHeight);
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
        <WrappedComponent {...props} />
      </DeviceInfoContext.Provider>
    );
  };
};

export default withDeviceInfo;
