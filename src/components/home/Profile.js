import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { openPage } from "../../modules/pageloadings";

const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation;

  const onClickHexagonal = e => {
    e.preventDefault();

    if (location.pathname === "/profile") return;
    else dispatch(openPage("/profile"));
  };

  return (
    <>
      <ProfileBtn onClick={onClickHexagonal} />
    </>
  );
};

export default Profile;

const ProfileBtn = styled.button`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
  border: none;
  background-color: #f8f8f8;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;
