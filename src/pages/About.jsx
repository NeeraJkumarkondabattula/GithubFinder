import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1>About</h1>
      <h2>Github users finder</h2>
      <p>version 1.0.0</p>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
  h1,
  h2,
  p {
    margin: 0;
  }
`;

export default About;
