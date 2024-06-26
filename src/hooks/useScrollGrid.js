import { useEffect } from "react";

const useScrollGrid = ref => {
  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const element = ref.current;
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
  }, [ref]);
};

export default useScrollGrid;
