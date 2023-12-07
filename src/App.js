import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loading from "./assets/loading.png";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import UserItem from "./components/UserItem";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./pages/About";
import UserPage from "./pages/UserPage";

const App = () => {
  const [userName, setUserName] = useState();
  const userSearch = (name) => {
    setUserName(name);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search userSearch={userSearch} />
                <Container>
                  <UserItem userName={userName} />
                </Container>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/:username" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Container = styled.div`
  img {
    width: 40px;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .rotating {
    animation: rotating 1.5s linear infinite;
  }
`;

export default App;
