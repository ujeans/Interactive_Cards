import React, { useState } from "react";
import styled from "styled-components";

const Profile = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const toggleMenu1 = () => {
    setToggle1(toggle1 => !toggle1);
  };

  const toggleMenu2 = () => {
    setToggle2(toggle2 => !toggle2);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Developer</Title>
        <InfoText>
          함께 소통하며 즐거움을 느끼는 개발자 홍유진입니다. 사용자의 가치를
          생각하며 개발하려고 노력합니다. 클린 코드, 상태관리, 성능 최적화등에
          관심이 많으며 사용자를 위한 서비스를 개발하고 싶습니다. 블로그와 개인
          노션에 공부한 내용을 정리하며 학습합니다. 기술뿐 아니라 협업에
          있어서도 함께하고 싶은 사람이 되기 위해 소통을 중요시 합니다. 교내 &
          교외 개발 동아리 참여 및 부회장 및 프런트엔드 팀장으로서 팀원을
          이끌면서 협업 능력 및 소통 능력을 키웠습니다.
        </InfoText>
      </Wrapper>
      <LinkWrapper>
        <Link>github</Link>
        <Link>blog</Link>
        <Link>e-mail</Link>
      </LinkWrapper>
      <Wrapper>
        <Title>EXPERIENCE</Title>
        <ListWrapper>
          <Period>2023.05 ~ 2023.07.31</Period>
          <ListItem>
            <ToggleBtn onClick={toggleMenu1}>+</ToggleBtn>
            <Company>(주) 월드버텍</Company>
          </ListItem>
          {toggle1 ? (
            <LiWrapper>
              <Summary>한국어 교육 프로그램 프로젝트</Summary>
              <ul>
                <Li>
                  JSP, JSTL을 사용한 커뮤니티 관리(운영자), 사용자 화면 구현
                </Li>
                <Li>MyBatis, SQL을 이용한 쿼리 튜닝</Li>
              </ul>
            </LiWrapper>
          ) : null}
        </ListWrapper>
        <ListWrapper>
          <Period>2022.06 ~ 2023.03</Period>
          <ListItem>
            <ToggleBtn onClick={toggleMenu2}>+</ToggleBtn>
            <Company>Modern Agile / Frontend-team Leader</Company>
          </ListItem>
          {toggle2 ? (
            <LiWrapper>
              <Summary>개발 동아리</Summary>
              <ul>
                <Li>개발 동아리 부회장</Li>
                <Li>협업</Li>
                <Li>테크톡</Li>
                <ul>
                  <li>HTML & CSS & JavaScript</li>
                  <li>Framework & Library & API</li>
                  <li>TDD</li>
                  <li>HTTP 상태코드</li>
                  <li>Stack & Queue & Heap</li>
                </ul>
              </ul>
            </LiWrapper>
          ) : null}
        </ListWrapper>
      </Wrapper>
      <Wrapper>
        <Title>EDUCATION</Title>
        <Period>2023.03 ~ 2025.02</Period>
        <ListItem>
          <ToggleBtn>+</ToggleBtn>
          <Company>인덕대학교 / 컴퓨터소프트웨어학과</Company>
        </ListItem>
      </Wrapper>
    </Container>
  );
};

export default Profile;

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Title = styled.div`
  margin-bottom: 7px;
  font-weight: bold;
  color: #ff7f50;
`;

const InfoText = styled.div`
  color: #666666;
  font-size: 15px;
`;

const LinkWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Link = styled.span`
  margin-right: 30px;
  color: #ffc192;
  &:hover {
    color: #ff7f50;
  }
  cursor: pointer;
`;

const Period = styled.div`
  margin-bottom: 3px;
  color: #aaaaaa;
  font-size: 14px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ToggleBtn = styled.button`
  margin-right: 5px;
  border: none;
  background: none;
  font-size: 15px;
  color: #ff7f50;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const Company = styled.div`
  font-size: 15px;
  color: #666666;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  color: #666666;
`;

const LiWrapper = styled.div`
  margin-left: 25px;
  font-size: 15px;
`;

const Summary = styled.div`
  width: fit-content;
  border-bottom: 1px solid #ff7f50;
`;

const Li = styled.li`
  margin-bottom: 4px;
`;
