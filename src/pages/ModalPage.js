import styled, { css, keyframes } from "styled-components";
// styles
import animations from "../styles/animations";
// components
import ModalContainer from "../components/modal/ModalContainer";
import LinkIcons from "../containers/modal/LinkIcons";
import FilppableCards from "../containers/modal/FilppableCards";
import ProgressCircle from "../containers/modal/ProgressCircle";

const ModalPage = ({
  onClose,
  isClosing,
  selectedCard,
  clickPosition,
  bac,
  setSelectedCard,
}) => {
  return (
    <ModalContainer>
      <Overlay
        themeColor={selectedCard.modalColor}
        clickPosition={clickPosition}
        isClosing={isClosing}
      >
        <LinkIcons selectedCard={selectedCard} />

        <FilppableCards bac={bac} selectedCard={selectedCard} />

        <ProgressCircle
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          onClose={onClose}
          themeColor={selectedCard.themeColor}
          modalColor={selectedCard.modalColor}
        />
      </Overlay>
    </ModalContainer>
  );
};

export default ModalPage;

const Overlay = styled.div`
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
  background: ${({ themeColor }) => themeColor};
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
