import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import styled from "styled-components";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetch() {
      await axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => setUser(res.data));
    }
    fetch();
  }, [user]);
  return (
    <Container>
      {user && (
        <>
          <div className="main">
            <div className="profile">
              <img src={user.avatar_url} alt="" />
              <h2>{user.name}</h2>
            </div>
            <div className="details">
              <h1 style={{ color: "#7c73e6" }}>Bio</h1>
              <h5>{user.bio}</h5>
              {user.company && (
                <h5
                  style={{
                    backgroundColor: "#606470",
                    padding: "5px 10px",
                    color: "white",
                  }}>
                  Company: {user.company}
                </h5>
              )}
              <h5
                style={{
                  backgroundColor: "#e4de66",
                  padding: "5px 10px",
                  color: "white",
                }}>
                Public Repository: {user.public_repos}
              </h5>
              <div className="foll">
                <h5
                  style={{
                    backgroundColor: "#42b883",
                    padding: "5px 10px",
                    color: "white",
                  }}>
                  Followers: {user.followers}
                </h5>
                <h5
                  style={{
                    backgroundColor: "#347474",
                    padding: "5px 10px",
                    color: "white",
                  }}>
                  Following: {user.following}
                </h5>
              </div>
              <h1 style={{ color: "#2b4450" }}>Github Link</h1>
              <div className="links">
                <button className="github-button">
                  <Link
                    to={user.html_url}
                    style={{ color: " white", textDecoration: "none" }}>
                    Github
                  </Link>
                </button>
                <button className="github-button">
                  <Link
                    to={user.blog}
                    style={{ color: " white", textDecoration: "none" }}>
                    Blog
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  * {
    margin: 0;
  }
  max-width: 1280px;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  img {
    width: 15rem;
    border-radius: 50%;
  }
  .main {
    display: flex;
    align-items: center;
    gap: 1rem;
    .profile {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
    }
    .details {
      max-width: 1280px;
      width: 100%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 5px;
      .github-button {
        width: 120px;
        padding: 5px 5px;
        font-weight: 600;
        color: white;
        background-color: #f70776;
        border: none;
        outline: none;
      }
      .foll {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .links {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .main {
      flex-direction: column;
    }
  }
`;

export default UserPage;
