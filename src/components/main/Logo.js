import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { openPage } from "../../modules/pageloadings";

const Logo = () => {
  const dispatch = useDispatch();
  const location = useLocation;

  const onClickHexagonal = e => {
    e.preventDefault();

    if (location.pathname === "/main") return;
    else dispatch(openPage("/main"));
  };

  return (
    <LogoContainer onClick={onClickHexagonal}>
      <StyledULog>ULog</StyledULog>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const StyledULog = styled.button`
  position: absolute;
  top: 25%;
  right: 2%;
  transform: rotate(90deg);
  transform-origin: right top;
  font-size: 4rem;
  font-weight: bold;
  background: none;
  color: #feb8a6;

  cursor: pointer;
`;
