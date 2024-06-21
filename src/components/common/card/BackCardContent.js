import styled from "styled-components";
// assets
import qrcode from "../../../assets/qrcode.svg";
import profile from "../../../assets/profile.png";

const BackCardContent = ({ card }) => {
  return (
    <Container modalColor={card.modalColor}>
      <Top>
        <div>
          <Logo src={profile}></Logo>
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

export default BackCardContent;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.modalColor};
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 130px;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 90px;
  }
`;

const Introduce = styled.div`
  font-size: 1.3rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const InfoWrapper = styled.div`
  font-size: 0.8rem;
`;

const Info = styled.div`
  margin-bottom: 3px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const QR = styled.img`
  width: 60px;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 50px;
  }
`;
