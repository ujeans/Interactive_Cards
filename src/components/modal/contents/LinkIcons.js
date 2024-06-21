import styled, { keyframes } from "styled-components";
// assets
import github from "../../../assets/github.svg";
import gmail from "../../../assets/gmail.svg";
import linkedin from "../../../assets/github.svg";

const LinkIcons = ({ selectedCard }) => {
  return (
    <Wrapper>
      <a href={selectedCard.githubLink}>
        <Icon src={github} alt="github" delay="0.5s" />
      </a>
      <a href="mailto:dbwlsxkal95@gmail.com">
        <Icon src={gmail} alt="gmail" delay="0.7s" />
      </a>
      <a href="https://www.linkedin.com/in/%EC%9C%A0%EC%A7%84-%ED%99%8D-15097b304/">
        <Icon src={linkedin} alt="linked-in" delay="0.9s" />
      </a>
    </Wrapper>
  );
};

export default LinkIcons;

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    flex-direction: row;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  opacity: 0;
  animation: ${slideInFromLeft} 0.5s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay};
  cursor: pointer;

  @media (max-width: 400px) {
    width: 30px;
    margin-right: 10px;
  }
`;
