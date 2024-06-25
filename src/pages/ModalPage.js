// components
import ModalContainer from "../components/modal/ModalContainer";
import LinkIcons from "../containers/modal/LinkIcons";
import FilppableCards from "../containers/modal/FilppableCards";
import ProgressCircle from "../containers/modal/ProgressCircle";
import Overlay from "../components/modal/Overlay";

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
        modalColor={selectedCard.modalColor}
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
