import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const Delayed = ({ children, waitBeforeShow = 800, type, color }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : <ReactLoading type={type} color={color} />;
};

export default Delayed;
