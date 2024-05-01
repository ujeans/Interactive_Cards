import styled from "styled-components";

const Profile = () => {
  return (
    <>
      <ProfileBtn />
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
