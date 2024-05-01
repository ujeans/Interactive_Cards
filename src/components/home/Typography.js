import styled from "styled-components";

const Typography = () => {
  return <Content>안녕하세요 유진's 포트폴리오에 오신걸 환영합니다</Content>;
};

export default Typography;

const Content = styled.div`
  font-size: 15px;
  color: #f8f8f8;
  min-width: 11px;
  white-space: nowrap;
  margin: 0;
  color: transparent;

  &::before {
    content: "안녕하세요 유진's 포트폴리오에 오신걸 환영합니다";
    position: absolute;
    color: #f8f8f8;
    text-shadow: 3px 3px 3px rgba(100, 100, 111, 0.2);
    overflow: hidden;
    border-right: 1px solid #f8f8f8;
    animation: typing 5s steps(31) infinite;
  }

  @keyframes typing {
    0% {
      width: 0%;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;
