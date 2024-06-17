import styled from "styled-components";
// assets
import qrcode from "../../../assets/qrcode.svg";

const FrontCardContent = ({ card }) => {
  return (
    <Container modalColor={card.modalColor}>
      <Top>
        <div>
          <Logo></Logo>
          <Introduce>{card.introduce}</Introduce>
        </div>
        <div>
          <div>Front-end</div>
          <div>Developer</div>
        </div>
      </Top>
      <Bottom>
        <InfoWrapper>
          <Info>tel.010-1234-5678</Info>
          <Info>mail.dbwlsxkal95@gmail.com</Info>
          <Info>github.https://github.com/ujeans</Info>
        </InfoWrapper>
        <QR src={qrcode} />
      </Bottom>
    </Container>
  );
};

export default FrontCardContent;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  color: ${props => props.modalColor};
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  background-color: aliceblue;
`;

const Introduce = styled.div`
  margin-bottom: 50px;
  font-size: 1.3rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoWrapper = styled.div`
  font-size: 0.8rem;
`;

const Info = styled.div`
  margin-bottom: 3px;
`;

const QR = styled.img`
  width: 60px;
  height: 60px;
`;
