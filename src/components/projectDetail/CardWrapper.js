import styled, { keyframes, css } from "styled-components";
// components
import Card from "../main/Card";

const CardWrapper = ({ cardText, currentIndex, cardRef, isInitialLoad }) => {
  return (
    <>
      <Wrapper key={currentIndex} ref={cardRef} isInitialLoad={isInitialLoad}>
        <Card card={cardText[currentIndex]} />
      </Wrapper>
    </>
  );
};

export default CardWrapper;

const slideIn = keyframes`
  0% {
    transform: translateX(500px) scale(0.2);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 350px;
  height: 200px;
  color: #000;
  padding: 0.75em;
  transition: all 0.3s;
  background-color: #f5f5f5;
  box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2) inset;
  ${({ isInitialLoad }) =>
    isInitialLoad &&
    css`
      animation: ${slideIn} 1.5s ease-in-out forwards;
    `}
`;
