// src/MainPage.js
import React from "react";
import styled from "styled-components";
// assets
import folder from "../assets/folder.svg";
import xBtn from "../assets/xbtn.svg";
import cloud from "../assets/cloud.svg";

const MainPage = () => {
  const renderErrorMessages = () => {
    const messages = [];
    for (let i = 0; i < 5; i++) {
      messages.push(
        <ErrorMessage key={i} offset={i}>
          <TitleBar>
            <Title>Error message</Title>
            <XBtn>X</XBtn>
          </TitleBar>
          <Content>
            <ErrorWrapper>
              <ErrorIcon src={xBtn} />
              <ErrorText>Error 404 - Page Not Found</ErrorText>
            </ErrorWrapper>
            <ButtonGroup>
              <Button>Back to home</Button>
              <Button>Contact us</Button>
            </ButtonGroup>
          </Content>
        </ErrorMessage>
      );
    }
    return messages;
  };

  return (
    <Container>
      <Cloud src={cloud} style={{ top: "10%", left: "20%" }} />
      <Cloud src={cloud} style={{ top: "20%", right: "15%" }} />
      <FolderWrapper top="7%" left="5%">
        <Folder src={folder} />
        <FolderName>My Profile</FolderName>
      </FolderWrapper>
      <FolderWrapper top="20%" left="5%">
        <Folder src={folder} />
        <FolderName>My Project</FolderName>
      </FolderWrapper>
      {renderErrorMessages()}
      <GrassContainer>
        <Grass />
      </GrassContainer>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcf3eb;
  position: relative;
  overflow: hidden;
`;

const Cloud = styled.img`
  position: absolute;
  width: 200px;
  height: auto;
`;

const FolderWrapper = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Folder = styled.img``;

const FolderName = styled.div`
  margin: 10px 0;
  font-size: 14px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  width: 450px;
  border: 1px solid black;
  border-radius: 10px;
  top: calc(35% + ${props => props.offset * 10}px);
  left: calc(20% + ${props => props.offset * 10}px);
  background-color: white;
  z-index: ${props => 5 - props.offset};
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background: linear-gradient(90deg, #fc8455 0%, #ffb395 50%, #ffddcf 100%);
  color: white;
`;

const Title = styled.div`
  font-weight: bold;
`;

const XBtn = styled.button`
  border: 1px solid black;
  background-color: #eeeeee;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 30px 40px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #eeeeee;
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ErrorIcon = styled.img`
  margin-right: 20px;
`;

const ErrorText = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Button = styled.button`
  border: 1px solid black;
  padding: 5px 40px;
  cursor: pointer;
`;

const GrassContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px; /* 언덕 높이 조정 */
  background: linear-gradient(to top, #80a77f 0%, #acc79a 100%);
  clip-path: ellipse(
    70% 50% at 50% 100%
  ); /* 부드러운 언덕을 위해 ellipse 사용 */
`;

const Grass = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #80a77f 0%, #acc79a 100%);
`;
