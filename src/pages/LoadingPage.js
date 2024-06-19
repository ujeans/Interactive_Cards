import styled, { keyframes } from "styled-components";

const LoadingPage = () => {
  const labels = ["L", "O", "D", "I", "N", "G"];

  return (
    <Container>
      <Progress>
        <ProgressContainer>
          {labels.map((char, index) => (
            <Label key={index} delay={(labels.length - index - 1) * 0.2}>
              {char}
            </Label>
          ))}
        </ProgressContainer>
      </Progress>
    </Container>
  );
};

export default LoadingPage;

const anim = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    transform: translateX(0px);
  }
  66% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(300px);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const ProgressContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
`;

const Label = styled.label`
  display: inline-block;
  font-size: 20px;
  opacity: 0;
  animation: ${anim} 3s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
`;
