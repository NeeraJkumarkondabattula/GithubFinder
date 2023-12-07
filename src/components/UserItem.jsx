import React, { useEffect, useState } from "react";
import User from "./User";
import styled from "styled-components";
import loading from "../assets/loading.png";
import axios from "axios";

const UserItem = ({ userName }) => {
  const [users, setUsers] = useState();
  const [isload, setIsLoad] = useState(false);
  useEffect(() => {
    async function fetch() {
      setIsLoad(true);
      await axios
        .get(
          userName
            ? `https://api.github.com/search/users?q=${userName}`
            : "https://api.github.com/users"
        )
        .then((res) =>
          userName ? setUsers(res.data.items) : setUsers(res.data)
        )
        .then(() => setIsLoad(false));
    }
    fetch();
  }, [userName]);

  return (
    <Container>
      {isload ? (
        <img
          src={loading}
          alt=""
          className="rotating"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        users &&
        users.map((user, index) => {
          return (
            <User
              name={user.login}
              profile={user.avatar_url}
              id={user.id}
              key={index}
            />
          );
        })
      )}
      {users && users.length === 0 ? (
        <h1 style={{ position: "absolute", top: "40%", left: "40%" }}>
          "User Not Found"
        </h1>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 92vh;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  box-sizing: border-box;
`;

export default UserItem;
