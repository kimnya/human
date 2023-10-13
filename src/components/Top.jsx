import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Top = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{null}</>;
};

export default Top;
