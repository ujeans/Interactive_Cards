import styled, { css, keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import CardWrapper from "../common/CardWrapper";
import CardContent from "../common/CardContent";

const DateOnly = ({ date }) => (
  <Contents>
    <Date>{date}</Date>
  </Contents>
);

const ScrollCards = ({ cards, cardWrapperRef }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionCard, setTransitionCard] = useState(null);
  const [transitionPosition, setTransitionPosition] = useState({ x: 0, y: 0 });

  const onClickCard = (card, index, event) => {
    const rect = event.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setTransitionCard(index);
    setTransitionPosition({ x, y });
    setIsTransitioning(true);

    setTimeout(() => {
      navigate(`/project/${card.projectName}`, {
        state: { card, position: { x, y } },
      });
    }, 1200); // 애니메이션 시간을 늘려 속도를 느리게 합니다.
  };

  return (
    <Container>
      <Main>
        <Cards ref={cardWrapperRef}>
          {cards.map((card, index) => {
            const isTransitioningCard =
              isTransitioning && transitionCard === index;
            return (
              <Stack
                key={index}
                href="#"
                onClick={e => onClickCard(card, index, e)}
                className={isTransitioningCard ? "transitioning" : ""}
              >
                <CardWrapper className="top">
                  <CardContent card={card} />
                </CardWrapper>
                <CardWrapper className="mid-top">
                  <DateOnly date={card.date} />
                </CardWrapper>
                <CardWrapper className="mid-bottom">
                  <DateOnly date={card.date} />
                </CardWrapper>
                <CardWrapper className="bottom">
                  <DateOnly date={card.date} />
                </CardWrapper>
                <CardWrapper className="shadow" />
                {isTransitioningCard && (
                  <TransitionOverlay
                    x={transitionPosition.x}
                    y={transitionPosition.y}
                  />
                )}
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

const Contents = styled.div`
  color: #000;
  font-size: 0.5em;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
`;

const Date = styled.div`
  margin-top: 11.75em;
`;
const expandCircle = keyframes`
  0% {
    clip-path: circle(0% at var(--x) var(--y));
  }
  100% {
    clip-path: circle(150% at var(--x) var(--y));
  }
`;

const TransitionOverlay = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  transform: scale(0);
  animation: ${expandCircle} 1.2s ease forwards;
  --x: ${({ x }) => x}px;
  --y: ${({ y }) => y}px;
`;
