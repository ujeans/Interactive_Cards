import styled, { css, keyframes } from "styled-components";

const CardWrapper = ({ className, children, cardRef, isInitialLoad }) => {
  return (
    <Wrapper className={className} ref={cardRef} isInitialLoad={isInitialLoad}>
      {children}
    </Wrapper>
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
  background-size: 200% 200%;
  box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2) inset;
  color: #000;
  background-color: #f5f5f5;
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

  &.card {
    width: 350px;
    height: 200px;
    ${({ isInitialLoad }) =>
      isInitialLoad &&
      css`
        animation: ${slideIn} 1.5s ease-in-out forwards;
      `}
  }
`;
