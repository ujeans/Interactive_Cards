import React, { useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import CardContent from "../common/CardContent"; // CardContent 컴포넌트를 사용합니다.

const Modal = ({ card, position, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Overlay>
      <ModalContainer ref={modalRef} x={position.x} y={position.y}>
        <CardContent card={card} />
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

const expandCircle = keyframes`
  0% {
    clip-path: circle(0% at var(--x) var(--y));
  }
  100% {
    clip-path: circle(150% at var(--x) var(--y));
  }
`;

const contractCircle = keyframes`
  0% {
    clip-path: circle(150% at var(--x) var(--y));
  }
  100% {
    clip-path: circle(0% at var(--x) var(--y));
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  animation: ${expandCircle} 1.2s ease forwards;
  ${({ x, y }) => css`
    --x: ${x}px;
    --y: ${y}px;
  `}

  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${contractCircle} 1.2s ease forwards;
    `}
`;
