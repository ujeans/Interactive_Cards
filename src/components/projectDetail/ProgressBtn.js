import styled from "styled-components";

const ProgressBtn = ({ handleNextCard, count }) => {
  return <Button onClick={handleNextCard}>{count}</Button>;
};

export default ProgressBtn;

const Button = styled.button`
  margin-top: 300px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #bf307f;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a0276b;
  }
`;
