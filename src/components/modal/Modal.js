import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
// components
import ModalContainer from "./ModalContainer";
import CardWrapper from "../common/card/CardWrapper";
import FrontCardContent from "../common/card/FrontCardContent";
import BackCardContent from "../common/card/BackCardContent";

const Modal = ({ onClose, isClosing, selectedCard, clickPosition, bac }) => {
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
        <CloseButton onClick={handleClose}>
          <i className="fa-solid fa-xmark">X</i>
        </CloseButton>
        <ModalWrap>
          <CardWrapper size={{ width: "500px", height: "300px" }} bac={bac}>
            {/* <FrontCardContent card={selectedCard} expand={true} /> */}
            <BackCardContent card={selectedCard} />
          </CardWrapper>
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
  /* background: rgba(0, 0, 0, 0.95); */
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
