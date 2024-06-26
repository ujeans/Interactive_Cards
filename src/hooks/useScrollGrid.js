import { useEffect } from "react";

const useScrollGrid = elementRef => {
  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const element = elementRef.current;
      if (element) {
        const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;
        element.style.setProperty("--scroll", `${transY}%`);
      }
    };

    window.addEventListener("resize", scrollGrid);
    window.addEventListener("scroll", scrollGrid);

    scrollGrid();

    return () => {
      window.removeEventListener("resize", scrollGrid);
      window.removeEventListener("scroll", scrollGrid);
    };
  }, [elementRef]);
};

export default useScrollGrid;
