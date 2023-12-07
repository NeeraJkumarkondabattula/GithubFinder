import React from "react";
import styled from "styled-components";
import alert from "../assets/alert.svg";

const Alert = () => {
  return (
    <Container>
      <img src={alert} alt="" style={{ width: "18px" }} />
      Please Enter username
    </Container>
  );
};
const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: 0 auto;
  border: 1px solid red;
  background-color: #eb2632;
  padding: 0 10px;
  margin-bottom: 5px;
  box-sizing: border-box;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    filter: invert(1);
  }
`;
export default Alert;
