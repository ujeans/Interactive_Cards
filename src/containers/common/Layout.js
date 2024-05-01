import styled from "styled-components";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;
