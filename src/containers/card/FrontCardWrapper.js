// components
import ContentContainer from "../../components/card/frontCardContent/ContentContainer";
import MainWrapper from "../../components/card/frontCardContent/MainWrapper";
import SideWrapper from "../../components/card/frontCardContent/SideWrapper";
import Date from "../../components/card/frontCardContent/Date";

const FrontCardWrapper = ({ card, expand }) => {
  return (
    <ContentContainer card={card}>
      <MainWrapper card={card} expand={expand} />
      <SideWrapper card={card} expand={expand} />
      <Date date={card.date} expand={expand} />
    </ContentContainer>
  );
};

export default FrontCardWrapper;
