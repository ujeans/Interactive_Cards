import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import Card from "../card/Card";

const CityOnly = ({ city }) => (
  <Contents>
    <City>{city}</City>
  </Contents>
);

const ScrollCards = ({ cards, cardWrapperRef }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onClickCard = (projectName, themeColor) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/project/${projectName}`, { state: { themeColor } });
    }, 800);
  };
  return (
    <Container>
      <Main>
        <Cards ref={cardWrapperRef}>
          {cards.map((card, index) => {
            console.log(card.city);
            return (
              <Stack
                key={index}
                href="#"
                onClick={() => onClickCard(card.projectName, card.themeColor)}
              >
                <CardWrapper
                  style={{ backgroundColor: card.themeColor }}
                  className="top"
                >
                  <Card card={card} />
                </CardWrapper>
                <CardWrapper
                  style={{ backgroundColor: card.themeColor }}
                  className="mid-top"
                >
                  <CityOnly city={card.city} />
                </CardWrapper>
                <CardWrapper
                  style={{ backgroundColor: card.themeColor }}
                  className="mid-bottom"
                >
                  <CityOnly city={card.city} />
                </CardWrapper>
                <CardWrapper
                  style={{ backgroundColor: card.themeColor }}
                  className="bottom"
                >
                  <CityOnly city={card.city} />
                </CardWrapper>
                <CardWrapper className="shadow" />
              </Stack>
            );
          })}
        </Cards>
      </Main>
    </Container>
  );
};

export default ScrollCards;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: block;
  margin: auto;
  position: relative;
  height: calc(var(--cardH, 8em) * 36 - 1.5em);
  ${props => css`
    @media screen and (min-width: 361px) {
      height: calc(var(--cardH, 8em) * 18 - 1.5em);
    }
    @media screen and (min-width: 641px) {
      height: calc(var(--cardH, 8em) * 12 - 1.5em);
    }
    @media screen and (min-width: 961px) {
      height: calc(var(--cardH, 8em) * 9 - 1.5em);
    }
    @media screen and (min-width: 1281px) {
      height: calc(var(--cardH, 8em) * 8 - 1.5em);
    }
  `}
`;

const Cards = styled.div`
  --scroll: 0;
  display: grid;
  grid-template: repeat(36, var(--cardH, 8em)) / var(--cardW, 14em);
  grid-gap: 4em;
  position: absolute;
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

const Stack = styled.a`
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;

  &:hover .top,
  &:focus .top {
    transform: translateZ(calc(var(--cardZInc, 2em) * 4));
  }
  &:hover .mid-top,
  &:focus .mid-top {
    transform: translateZ(calc(var(--cardZInc, 2em) * 3));
  }
  &:hover .mid-bottom,
  &:focus .mid-bottom {
    transform: translateZ(calc(var(--cardZInc, 2em) * 2));
  }
  &:hover .bottom,
  &:focus .bottom {
    transform: translateZ(var(--cardZInc, 2em));
  }
  &:hover .shadow,
  &:focus .shadow {
    filter: blur(5px);
    -webkit-filter: blur(5px);
    opacity: 0.2;
  }
`;

const CardWrapper = styled.div`
  background-size: 200% 200%;
  box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2) inset;
  color: #000;
  padding: 0.75em;
  position: absolute;
  transition: all 0.3s;
  width: 100%;
  height: 100%;

  &.top {
    transform: translateZ(4px);
    z-index: 4;
  }

  &.mid-top {
    transform: translateZ(3px);
    z-index: 3;
  }

  &.mid-bottom {
    transform: translateZ(2px);
    z-index: 2;
  }

  &.bottom {
    transform: translateZ(2px);
    z-index: 2;
  }

  &.shadow {
    background: #000;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    opacity: 0.4;
  }
`;

const Contents = styled.div`
  color: #000;
  font-size: 0.5em;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
`;

const City = styled.div`
  margin-top: 11.75em;
`;
