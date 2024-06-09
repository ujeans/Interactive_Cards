import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const { themeColor } = location.state || { themeColor: "#151226" }; // 기본값 설정

  return (
    <Container themeColor={themeColor}>
      <ContainerContent>
        <ContainerContentInner>
          <Title>
            <h1>{projectName}</h1>
          </Title>
          <Par>
            <p>
              Cupiditate alias odio omnis minima veritatis saepe porro,
              repellendus natus vitae ex.
            </p>
          </Par>
          <Btns>
            <BtnsMore>See more</BtnsMore>
          </Btns>
        </ContainerContentInner>
      </ContainerContent>
      <ContainerOuterImg>
        <div className="img-inner">
          <ContainerImg
            src="https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Image"
          />
        </div>
      </ContainerOuterImg>
    </Container>
  );
};

export default ProjectDetail;

const slideIn = keyframes`
  0% {
    transform: translateX(500px) scale(0.2);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const expand = keyframes`
  0% {
    transform: translateX(1400px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  animation: ${expand} 0.8s ease forwards;
  background-color: ${({ themeColor }) => themeColor || "#151226"};
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: all 0.8s ease;
`;

const ContainerContent = styled.div`
  width: 50%;
`;

const ContainerContentInner = styled.div`
  width: 80%;
  margin-left: 80px;
`;

const ContainerOuterImg = styled.div`
  margin: 50px;
  width: 50%;
  overflow: hidden;
`;

const ContainerImg = styled.img`
  width: 100%;
  animation: ${slideIn} 1.5s ease-in-out forwards;
`;

const Title = styled.div`
  overflow: hidden;
  height: auto;

  h1 {
    font-size: 40px;
    color: #bf307f;
    margin-bottom: 20px;
    transform: translateY(100px);
    animation: ${slideUp} 0.8s ease forwards 0.5s;
  }
`;

const Par = styled.div`
  height: auto;
  overflow: hidden;

  p {
    line-height: 28px;
    transform: translateY(300px);
    animation: ${slideUp} 0.8s ease-in-out forwards 0.8s;
  }
`;

const Btns = styled.div`
  height: 100%;
  position: relative;
  width: 150px;
  overflow: hidden;
`;

const BtnsMore = styled.button`
  background: transparent;
  border: 1px solid #bf307f;
  border-radius: 50px;
  padding: 8px 12px;
  color: #bf307f;
  font-size: 16px;
  text-transform: uppercase;
  position: relative;
  margin-top: 15px;
  outline: none;
  transform: translateY(50px);
  animation: ${slideUp} 0.8s ease-in-out forwards 1s;
`;
