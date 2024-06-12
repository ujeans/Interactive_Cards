import styled from "styled-components";

const BackCardContent = ({ card }) => {
  const text = "Interactive Project Business Card Introduction";
  return (
    <Content modalColor={card.modalColor}>
      <ProjectDescWrapper>
        {card.position
          .split(" ")
          .filter(text => text !== "/")
          .map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        <div>/</div>
        <div>Web</div>
        <div>{card.project}</div>
      </ProjectDescWrapper>
      <ProjectMainWrapper>
        <ProjectName>{card.projectName}</ProjectName>
        <Desc>{card.desc}</Desc>
      </ProjectMainWrapper>
      <Date>{card.date}</Date>
      <CardDescWrapper>
        <CardDescText>
          {text.split(" ").map((word, index) => (
            <div key={index}>{word}</div>
          ))}
        </CardDescText>
        <Name>Eugean Hong</Name>
      </CardDescWrapper>
    </Content>
  );
};

export default BackCardContent;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.modalColor};
  /* font-weight: 700; */
  -webkit-font-smoothing: antialiased;
`;

const ProjectDescWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.8em;
  div {
    text-align: right;
  }
`;

const ProjectMainWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const ProjectName = styled.div`
  margin-bottom: 20px;
  font-size: 2em;
`;

const Desc = styled.div``;

const Date = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const CardDescWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  align-items: flex-end;
  div {
    text-align: right;
  }
`;

const CardDescText = styled.div`
  margin-bottom: 10px;
  font-size: 0.7em;
`;

const Name = styled.div`
  font-size: 0.1em;
`;
