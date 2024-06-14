import React from "react";
import styled from "styled-components";

const FrontCardContent = ({ card }) => {
  return (
    <Container modalColor={card.modalColor}>
      <Top>{card.introduce}</Top>
      <Middle>
        <div>
          함께 소통하며 즐거움을 느끼는 개발자 홍유진입니다. 사용자의 가치를
          생각하며 개발하려고 노력합니다. 인터렉티브한 개발에 관심이 많으며
          사용자를 위한 서비스를 개발하고 싶습니다. 블로그와 개인 노션에 공부한
          내용을 정리하며 학습합니다. 기술뿐 아니라 협업에 있어서도 함께하고
          싶은 사람이 되기 위해 소통을 중요시 합니다. 교내 & 교외 개발 동아리
          참여 및 부회장 및 프런트엔드 팀장으로서 팀원을 이끌면서 협업 능력 및
          소통 능력을 키웠습니다.
        </div>
      </Middle>
      <Bottom modalColor={card.modalColor}>
        <div>email:fsdfsdf</div>
      </Bottom>
    </Container>
  );
};

export default FrontCardContent;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${props => props.modalColor};
`;

const Top = styled.div``;

const Middle = styled.div``;

const Bottom = styled.div`
  position: absolute;
  bottom: 1px;
  width: calc(100% - 1px);
  height: 30px;
  border-top: 1px solid ${props => props.modalColor};
  /* background-color: ${props => props.modalColor}; */
`;
