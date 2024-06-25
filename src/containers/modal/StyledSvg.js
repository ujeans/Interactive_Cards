import styled from "styled-components";

const StyledSvg = ({ percentage, themeColor }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <Svg viewBox="0 0 60 60">
      <BackgroundCircle cx="30" cy="30" r={radius} />
      <ProgressCircle
        cx="30"
        cy="30"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        themeColor={themeColor}
      />
    </Svg>
  );
};

export default StyledSvg;

const Svg = styled.svg`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 40px;
    height: 40px;
  }
`;

const BackgroundCircle = styled.circle`
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 5;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    stroke-width: 3;
  }
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: ${({ themeColor }) => themeColor};
  stroke-width: 5;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.05s linear;
  transform-origin: center;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    stroke-width: 3;
  }
`;
