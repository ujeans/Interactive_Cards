import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Container>
        <HomeBtn>ujeans</HomeBtn>
        <Wrapper>
          <TextBtn>INFO</TextBtn>
          <TextBtn>PROJECTS</TextBtn>
          <TextBtn>BLOG</TextBtn>
        </Wrapper>
        <Mobile></Mobile>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(12px);
`;

const HomeBtn = styled.button`
  margin-left: 40px;
  /* padding: 0; */
  border: none;
  background: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
`;

const TextBtn = styled.button`
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: #ff7f50;
  }
`;

const Mobile = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 40px;
  background-color: red;
`;
