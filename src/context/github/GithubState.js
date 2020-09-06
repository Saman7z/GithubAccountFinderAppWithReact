import React, { useReducer } from "react";
import githubReducer from "./githubReducer";
import githubContext from "./githubContext";
import axios from "axios";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

let githubClientId;
let githubClientSecret;
if(process.env.NODE_ENV !== "production"){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

}else{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    theUser: {},
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //! Search users
  const searchUser = async (data) => {
    setLoading();
    let fetched = await axios.get(
      `https://api.github.com/search/users?q=${data}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    let res = await fetched.data;
    // this.setState({ user: res.items, loading: false });
    // setUser(res.items);
    // setLoading(false);
    dispatch({ type: SEARCH_USERS, payload: res.items });
  };
  //! Get user
  const getUser = async (username) => {
    setLoading();
    // this.setState({ loading: true });
    //console.log(username);
    let fetchedData = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    //console.log(fetchedData);
    //  this.setState({ theUser: fetchedData.data, loading: false });
    // setTheUser(fetchedData.data);
    // setLoading(false);
    dispatch({ type: GET_USER, payload: fetchedData.data });
  };
  //! Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    // this.setState({ loading: true });
    //console.log(username);
    let fetchedData = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    //console.log(fetchedData);
    //this.setState({ repos: fetchedData.data, loading: false });
    // setRepos(fetchedData.data);
    // setLoading(false);
    dispatch({ type: GET_REPOS, payload: fetchedData.data });
  };
  //! Clear Users
  const clearUser = async (username = "saman7z") => {
    setLoading();
    let fetched = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    let res = await fetched.data.items;

    //setUsers(res);
    dispatch({ type: CLEAR_USERS, payload: res });
  };
  //! Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });
  // Show Error

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        theUser: state.theUser,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUser,
        getUserRepos,
        getUser,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
