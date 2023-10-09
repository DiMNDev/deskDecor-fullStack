import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log("STT:", pathname);

  useEffect(() => {
    if (pathname !== "/") {
      console.log(`%c Scrolled to top of ${pathname}`, "color:red");
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
