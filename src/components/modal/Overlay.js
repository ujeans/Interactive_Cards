import styled, { css } from "styled-components";
// styles
import animations from "../../styles/animations";

const Overlay = ({ children, modalColor, clickPosition, isClosing }) => {
  return (
    <Background
      modalColor={modalColor}
      clickPosition={clickPosition}
      isClosing={isClosing}
    >
      {children}
    </Background>
  );
};

export default Overlay;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ modalColor }) => modalColor};
  z-index: 9999;
  ${({ clickPosition, isClosing }) => css`
    animation: ${isClosing
        ? css`
            ${animations.contractCircle(clickPosition.x, clickPosition.y)}
          `
        : css`
            ${animations.expandCircle(clickPosition.x, clickPosition.y)}
          `}
      1s ease-in-out forwards;
  `}

  @media screen and (min-width:361px) and (max-width: 410px) {
    flex-direction: column;
    align-content: space-between;
  }
`;
