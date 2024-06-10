import styled from "styled-components";

const Card = ({ card }) => {
  return (
    <Content>
      <ProjectName>{card.projectName}</ProjectName>
      <Position>{card.position}</Position>
      <br />
      <Span>✉️</Span>
      {card.email}
      <br />
      <Span>📞</Span>
      {card.phone}
      <br />
      <br />
      <div>{card.address}</div>
      <div>{card.city}</div>
    </Content>
  );
};

export default Card;

const Content = styled.div`
  color: #fff;
  font-size: 0.5em;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;

  .stack:nth-of-type(even) & {
    color: #fff;
  }
`;

const ProjectName = styled.h2`
  color: #aff;
  font-size: 2em;
  font-weight: 400;
  margin-bottom: 0.25em;
`;

const Position = styled.h3`
  margin-bottom: 0.25em;
`;

const Span = styled.span`
  margin-right: 0.75em;
`;
