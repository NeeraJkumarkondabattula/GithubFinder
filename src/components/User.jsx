import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Users = ({ name, profile, id }) => {
  const { username } = useParams;
  const navigate = useNavigate();
  return (
    <Container>
      <img src={profile} alt="" />
      <h1>{name}</h1>
      <button onClick={() => navigate(`/${name}`)}>More</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  flex: 1 0 250px;
  padding: 1rem;
  box-sizing: border-box;
  /* border: 1px solid #f70776; */
  img {
    width: 3.5rem;
    border-radius: 50%;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 1rem;
    color: #233142;
  }
  button {
    padding: 5px 20px;
    border: none;
    outline: none;
    color: white;
    background-color: #f70776;
  }
`;

export default Users;
