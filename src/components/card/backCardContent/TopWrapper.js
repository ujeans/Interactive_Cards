import styled from "styled-components";
// assets
import profile from "../../../assets/profile.png";

const TopWrapper = ({ introduce }) => {
  return (
    <Top>
      <div>
        <Logo src={profile}></Logo>
        <Introduce>{introduce}</Introduce>
      </div>
      <div>
        <div>Front-end</div>
        <div>Developer</div>
      </div>
    </Top>
  );
};

export default TopWrapper;

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
