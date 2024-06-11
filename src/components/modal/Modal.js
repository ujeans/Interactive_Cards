import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
// components
import ModalContainer from "./ModalContainer";

const Modal = ({ onClose, isClosing, selectedCard, clickPosition }) => {
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  return (
    <ModalContainer>
      <Overlay
        themeColor={selectedCard.modalColor}
        clickPosition={clickPosition}
        isClosing={isClosing}
      >
        <ModalWrap>
          <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton>
          <Contents>
            <h1>{selectedCard.projectName}</h1>
            <Button onClick={handleClose}>Close</Button>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default Modal;

const expandCircle = (x, y) => keyframes`
  0% {
    clip-path: circle(0% at ${x}px ${y}px);
  }
  100% {
    clip-path: circle(150% at ${x}px ${y}px);
  }
`;

const contractCircle = (x, y) => keyframes`
  0% {
    clip-path: circle(150% at ${x}px ${y}px);
  }
  100% {
    clip-path: circle(0% at ${x}px ${y}px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ themeColor }) => themeColor};
  z-index: 9999;
  ${({ clickPosition, isClosing }) => css`
    animation: ${isClosing
        ? contractCircle(clickPosition.x, clickPosition.y)
        : expandCircle(clickPosition.x, clickPosition.y)}
      1s ease-in-out forwards;
  `}
`;

const ModalWrap = styled.div`
  /* width: 100vw;
  height: 100vh; */
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  text-align: center;

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }

  img {
    margin-top: 60px;
    width: 300px;
  }
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    background-color: #898989;
  }
`;
