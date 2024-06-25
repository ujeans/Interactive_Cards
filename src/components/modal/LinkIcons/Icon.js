import styled, { css } from "styled-components";
// styles
import animations from "../../../styles/animations";

const Icon = ({ src, delay }) => {
  return <Box src={src} delay={delay} />;
};

export default Icon;

const Box = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  opacity: 0;
  animation: ${animations.slideInFromLeft} 0.5s ease-in-out forwards;
  ${({ delay }) => css`
    animation: ${css`
      ${animations.slideInFromLeft} 0.5s ease-in-out forwards
    `};
    animation-delay: ${delay};
  `}
  cursor: pointer;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 30px;
    margin-right: 10px;
  }
`;
