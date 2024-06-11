import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { openPage } from "../../modules/pageloadings";

const Logo = ({ top, right, fontSize }) => {
  const dispatch = useDispatch();
  const location = useLocation;

  const onClickHexagonal = e => {
    e.preventDefault();

    if (location.pathname === "/") return;
    else dispatch(openPage("/"));
  };

  return (
    <LogoContainer
      top={top}
      right={right}
      fontSize={fontSize}
      onClick={onClickHexagonal}
    >
      <U>U</U>
      <J>-</J>
      <L>L</L>
      <O>o</O>
      <G>g</G>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  position: absolute;
  top: ${props => props.top || "3%"};
  right: ${props => props.right || "2%"};
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;
  cursor: pointer;
`;

const U = styled.div`
  transform: rotate(90deg);
  color: #4fa1d7;
`;

const J = styled.div`
  transform: rotate(90deg);
  color: #e7db0d;
`;

const L = styled.div`
  transform: rotate(90deg);
  color: #f5470e;
`;

const O = styled.div`
  transform: rotate(90deg);
  color: #45b93a;
`;

const G = styled.div`
  transform: rotate(90deg);
  color: #963b17;
`;
