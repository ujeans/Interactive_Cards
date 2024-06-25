import styled from "styled-components";
// assets
import qrcode from "../../../assets/qrcode.svg";

const BottomWrapper = () => {
  return (
    <Bottom>
      <InfoWrapper>
        <Info>tel.010-1234-5678</Info>
        <Info>mail.dbwlsxkal95@gmail.com</Info>
        <Info>github.https://github.com/ujeans</Info>
      </InfoWrapper>
      <QR src={qrcode} />
    </Bottom>
  );
};

export default BottomWrapper;

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
