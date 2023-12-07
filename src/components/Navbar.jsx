import React from "react";
import styled from "styled-components";
import github from "../assets/github-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="left">
        <img src={github} alt="" />
        <h1>Github Finder</h1>
      </div>
      <div className="right">
        <h2>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </h2>
        <h2>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </h2>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  max-width: 1280px;
  width: 100%;
  height: 40px;
  color: white;
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f70776;
  cursor: pointer;
  .left {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      filter: invert(1);
      width: 1.5rem;
    }
    h1 {
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 10px;
    h2 {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`;

export default Navbar;
