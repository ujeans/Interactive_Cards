// components
import ContentContainer from "../../components/card/backCardContent/ContentContainer";
import TopWrapper from "../../components/card/backCardContent/TopWrapper";
import BottomWrapper from "../../components/card/backCardContent/BottomWrapper";

const BackCardContent = ({ card }) => {
  return (
    <ContentContainer modalColor={card.modalColor}>
      <TopWrapper introduce={card.introduce} />
      <BottomWrapper />
    </ContentContainer>
  );
};

export default BackCardContent;
