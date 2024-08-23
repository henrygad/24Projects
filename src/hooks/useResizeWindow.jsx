import { useEffect, useState } from "react";


const useResizeWindow = () => {
  const [sizes, setSizes] = useState({ width: 0, height: 0 });

  const handleResizeWindow = () => {
    setSizes({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.addEventListener('resize', handleResizeWindow);
    };
  }, []);

  return sizes
};

export default useResizeWindow;
