import { useRef } from "react";
// containers
import FilppableCards from "../containers/modal/FilppableCards";
import ProgressCircle from "../containers/modal/ProgressCircle";
// components
import ModalContainer from "../components/modal/ModalContainer";
import LinkIcons from "../containers/modal/LinkIcons";
import Overlay from "../components/modal/Overlay";
// hooks
import useOutSideClick from "../hooks/useOutSideClick";

const ModalPage = ({
  onClose,
  isClosing,
  selectedCard,
  clickPosition,
  bac,
  setSelectedCard,
}) => {
  const modalRef = useRef(null);

  useOutSideClick(modalRef, onClose);

  return (
    <ModalContainer>
      <Overlay
        modalColor={selectedCard.modalColor}
        clickPosition={clickPosition}
        isClosing={isClosing}
      >
        <LinkIcons selectedCard={selectedCard} />

        <FilppableCards
          bac={bac}
          selectedCard={selectedCard}
          ModalWrap
          ref={modalRef}
        />

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
