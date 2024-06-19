import styled from "styled-components";

const Header = () => {
  return (
    <LogoContainer>
      <Title>GET LEADY TO</Title>
      <Sub>scroll down!</Sub>
    </LogoContainer>
  );
};

export default Header;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

const Title = styled.h5`
  margin-bottom: 10px;
`;

const Sub = styled.h1`
  font-family: "Nanum Myeongjo", serif;
  font-weight: 700;
  font-style: italic;
`;
