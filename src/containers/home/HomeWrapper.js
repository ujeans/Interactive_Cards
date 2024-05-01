import styled from "styled-components";
// styles
import "../../styles/homePage.scss";

const HomeWrapper = ({ children }) => {
  return (
    <Container>
      <div className="canvas"></div>

      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default HomeWrapper;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
