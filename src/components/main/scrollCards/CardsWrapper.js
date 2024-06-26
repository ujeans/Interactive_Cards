import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

const CardsWrapper = forwardRef(({ children }, ref) => {
  return <Cards ref={ref}>{children}</Cards>;
});

export default CardsWrapper;

const Cards = styled.div`
  position: absolute;
  --scroll: 0;
  display: grid;
  grid-template: repeat(36, var(--cardH, 8em)) / var(--cardW, 14em);
  grid-gap: 4em;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) rotateX(45deg) rotateZ(45deg)
    translateY(var(--scroll));
  transform-origin: 50% 0;
  transform-style: preserve-3d;

  ${props => css`
    @media screen and (min-width: 361px) {
      grid-template: repeat(18, var(--cardH, 8em)) / repeat(
          2,
          var(--cardW, 14em)
        );
    }
    @media screen and (min-width: 641px) {
      grid-template: repeat(12, var(--cardH, 8em)) / repeat(
          3,
          var(--cardW, 14em)
        );
    }
    @media screen and (min-width: 961px) {
      grid-template: repeat(9, var(--cardH, 8em)) / repeat(
          4,
          var(--cardW, 14em)
        );
    }
    @media screen and (min-width: 1281px) {
      grid-template: repeat(8, var(--cardH, 8em)) / repeat(
          5,
          var(--cardW, 14em)
        );
    }
  `}
`;
