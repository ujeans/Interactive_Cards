import styled from "styled-components";
// components
import Logo from "../common/Log";

const Card = ({ card }) => {
  console.log(card.themeColor);
  return (
    <Content>
      <ProjectName themeColor={card.themeColor}>{card.projectName}</ProjectName>
      <Position>{card.position}</Position>
      <br />
      <br />
      <br />
      <br />
      <div>{card.address}</div>
      <Logo top="40%" right="1%" fontSize="0.5em" />
    </Content>
  );
};

export default Card;

const Content = styled.div`
  position: relative;
  color: black;
  font-size: 0.5em;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
`;

const ProjectName = styled.h2`
  color: ${props => props.themeColor};
  font-size: 2em;
  font-weight: bold;

  margin-bottom: 0.25em;
`;

const Position = styled.h3`
  margin-bottom: 0.25em;
`;
