import styled from "styled-components";

const CardContent = ({ card }) => {
  return (
    <Content modalColor={card.modalColor}>
      <Introduce>{card.introduce}</Introduce>
      <ProjectName>{card.projectName}</ProjectName>
      <CircleLog className="one" modalColor={card.modalColor} />
      <CircleLog className="two" modalColor={card.modalColor} />
      <CircleLog className="three" modalColor={card.modalColor} />
    </Content>
  );
};

export default CardContent;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${props => props.modalColor};
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
`;

const Introduce = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
`;

const ProjectName = styled.h3`
  font-size: 0.8em;
`;

const CircleLog = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.modalColor};

  &.one {
    top: 50%;
    left: 75%;
  }

  &.two {
    width: 50px;
    height: 25px;
    top: 84%;
    left: 70%;
    border-radius: 25px 25px 0 0;
  }

  &.three {
    width: 25px;
    height: 50px;
    top: 42%;
    left: 92%;
    border-radius: 25px 0 0 25px;
  }
`;
