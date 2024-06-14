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
      <U>Ul@g</U>
      {/* <J>-</J>
      <L>L</L>
      <O>@</O>
      <G>g</G> */}
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  position: absolute;
  top: ${props => props.top || "50%"};
  right: ${props => props.right || "2%"};
  font-size: ${props => props.fontSize || "3rem"};
  font-weight: bold;
  cursor: pointer;
`;

const U = styled.div`
  transform: rotate(90deg);
`;

const J = styled.div`
  transform: rotate(90deg);
`;

const L = styled.div`
  transform: rotate(90deg);
`;

const O = styled.div`
  transform: rotate(90deg);
`;

const G = styled.div`
  transform: rotate(90deg);
`;
