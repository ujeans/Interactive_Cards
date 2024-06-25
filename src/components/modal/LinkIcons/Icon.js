import styled, { keyframes } from "styled-components";

const Icon = ({ src, delay }) => {
  return <Box src={src} delay={delay} />;
};

export default Icon;

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Box = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  opacity: 0;
  animation: ${slideInFromLeft} 0.5s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay};
  cursor: pointer;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 30px;
    margin-right: 10px;
  }
`;
