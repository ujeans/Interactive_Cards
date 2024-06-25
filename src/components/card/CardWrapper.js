import styled, { css } from "styled-components";
// styles
import animations from "../../styles/animations";

const CardWrapper = ({
  className,
  children,
  cardRef,
  isInitialLoad,
  size,
  bac,
}) => {
  return (
    <Wrapper
      className={className}
      ref={cardRef}
      isInitialLoad={isInitialLoad}
      size={size}
      bac={bac}
    >
      {children}
    </Wrapper>
  );
};

export default CardWrapper;

const Wrapper = styled.div`
  width: ${({ size }) => (size ? size.width : "100%")};
  height: ${({ size }) => (size ? size.height : "100%")};
  position: absolute;
  background-size: 200% 200%;
  box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2) inset;
  color: #000;
  background-color: ${({ bac }) => bac};
  transition: all 0.3s;
  ${({ size }) =>
    size &&
    css`
      aspect-ratio: ${size.aspectRatio};
    `}

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
        animation: ${animations.slideIn} 1.5s ease-in-out forwards;
      `}
  }
`;
