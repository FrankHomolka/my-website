import { useEffect, useState } from "react";

// Returns the current window size
export function useWindowSize() {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      mobile: window.innerWidth < 800 ? true : false,
    };
  };
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
