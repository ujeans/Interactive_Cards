import styled from "styled-components";
// components
import Header from "./Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div`
  margin-top: 60px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1000px;
  height: fit-content;
  margin-top: 60px;
`;

const Title = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  padding-top: 90px;
  font-size: 40px;
`;

const Content = styled.div``;
