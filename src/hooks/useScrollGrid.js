import { useEffect } from "react";

const useScrollGrid = () => {
  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const cards = document.querySelector(".cards");
      const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

      cards.style.setProperty("--scroll", `${transY}%`);
    };

    window.addEventListener("resize", scrollGrid);
    window.addEventListener("scroll", scrollGrid);

    // Initial call
    scrollGrid();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", scrollGrid);
      window.removeEventListener("scroll", scrollGrid);
    };
  }, []);
};

export default useScrollGrid;
