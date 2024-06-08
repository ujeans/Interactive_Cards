import styled from "styled-components";
import { useState } from "react";
import Modal from "../modal/Modal";

const Card = ({ id, title, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <CardContainer onClick={onClick}>
        <CardFace className="card-front">
          <CardHeader>
            <HeaderName>프로젝트이름</HeaderName>
            <Xtn>X</Xtn>
          </CardHeader>
          <CardBottom id={id}>
            <CardContent></CardContent>
            <TextWrapper>
              <ProjectName>{title}ㅇㅇ</ProjectName>
              <ProjectDesc>Frontend, Design/기간</ProjectDesc>
            </TextWrapper>
            <BtnWrapper>
              <Btn>LAUNCH</Btn>
              <Btn>EXIT</Btn>
            </BtnWrapper>
          </CardBottom>
        </CardFace>
        <CardFace className="card-back">
          <BackImage src={image} alt="Back of card" />
        </CardFace>
      </CardContainer>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center center;
  border: 1px solid black;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  &.card-front {
    background: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  &.card-back {
    background: #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  background-color: #eeeeee;
`;

const HeaderName = styled.div`
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  font: 16px;
`;

const Xtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid black;
`;

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  flex-grow: 1;
  box-sizing: border-box;
`;

const CardContent = styled.div`
  width: 100%;
  height: 270px;
  border: 1px solid black;
  box-sizing: border-box;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid black;
`;

const ProjectName = styled.div`
  margin-top: 10px;
`;

const ProjectDesc = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Btn = styled.button`
  width: 130px;
  height: 30px;
  border: 1px solid black;
  cursor: pointer;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
