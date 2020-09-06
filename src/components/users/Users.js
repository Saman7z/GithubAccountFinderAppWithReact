import React, { useEffect } from "react";
import UserItem from "./UserItem";
import Loader from "../layout/Loader";
import "./userItem.css";
import GithubContext from "../../context/github/githubContext";
import { useContext } from "react";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  useEffect(() => {
    githubContext.clearUser();
    
    //eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="user-container">
        {users.map((item) => (
          <UserItem key={item.id} user={item} />
        ))}
      </div>
    );
  }
};
export default Users;
