import styled, { css } from "styled-components";

const BackCardContent = ({ card, expand }) => {
  const text = "Interactive Project Business Card Introduction";
  return (
    <Content modalColor={card.modalColor}>
      <ProjectMainWrapper>
        <ProjectName expand={expand}>{card.projectName}</ProjectName>
        <Desc expand={expand}>{card.desc}</Desc>
      </ProjectMainWrapper>
      <SideWrapper>
        <ProjectDescWrapper expand={expand}>
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
        <CardDescWrapper>
          <CardDescText expand={expand}>
            {text.split(" ").map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </CardDescText>
          <Name expand={expand}>Eugean Hong</Name>
        </CardDescWrapper>
      </SideWrapper>
      <Date expand={expand}>{card.date}</Date>
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
  align-items: center;
  color: ${props => props.modalColor};
  -webkit-font-smoothing: antialiased;
`;

const ProjectDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.8em;

  ${props =>
    props.expand &&
    css`
      font-size: 4px;
    `}

  div {
    text-align: right;
  }
`;

const ProjectMainWrapper = styled.div`
  width: 90%;
  height: auto;
`;

const ProjectName = styled.div`
  margin-bottom: 20px;
  font-size: 2em;

  ${props =>
    props.expand &&
    css`
      margin-bottom: 1px;
      font-size: 1.3em;
    `}
`;

const Desc = styled.div`
  ${props =>
    props.expand &&
    css`
      font-size: 0.6em;
    `}
`;

const SideWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardDescWrapper = styled.div`
  align-items: flex-end;
  div {
    text-align: right;
  }
`;

const CardDescText = styled.div`
  margin-bottom: 10px;
  font-size: 0.7em;

  ${props =>
    props.expand &&
    css`
      margin-bottom: 4px;
      font-size: 4px;
    `}
`;

const Name = styled.div`
  font-size: 0.1em;

  ${props =>
    props.expand &&
    css`
      font-size: 4px;
    `}
`;

const Date = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;

  ${props =>
    props.expand &&
    css`
      bottom: 8px;
      font-size: 10px;
    `}
`;
