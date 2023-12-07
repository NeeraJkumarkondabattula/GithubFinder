import React, { useState } from "react";
import styled from "styled-components";
import Alert from "./Alert";

const Search = ({ userSearch }) => {
  const [name, setName] = useState("");
  const [nameEnter, setNameEnter] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameEnter(false);
    } else {
      userSearch(name);
      setNameEnter(true);
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    setName("");
    userSearch("");
  };
  return (
    <Container>
      {!nameEnter && <Alert />}
      <form>
        <input
          type="text"
          placeholder="Search By Name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
  /* background-color: #66bfbf; */
  form {
    margin: 0 auto;
    width: 90%;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    input {
      padding: 5px;
      width: 80%;
      height: 20px;
      border: 1px solid #f70776;
      outline: none;
    }
    button {
      height: 28px;
      width: 100px;
      background-color: #f70776;
      color: white;
      border: none;
      outline: none;
      font-weight: 600;
    }
  }
`;

export default Search;
