import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/AlertContext";
import "./search.css";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  let showClearBtn = githubContext.users.length > 1;

  const [text, setText] = useState("");

  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.showError("Please Enter Something", "error");
    } else {
      githubContext.searchUser(text);
      setText("");
    }
  };
  const clearUsers = () => {
    githubContext.clearUser();
  };
  return (
    <div className="form-outer">
      <form className="form-container" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="input-box"
          placeholder="Search Github Users..."
          name="text"
          onChange={onChangeInput}
          autoComplete="off"
        />
        <button className="form-submit-btn">Search</button>
      </form>
      {showClearBtn && (
        <div className="clear-btn-container">
          <button className="form-clear-btn" onClick={clearUsers}>
            &times;
          </button>
          <span className="clear-text">Clear Everything execpt ME</span>
        </div>
      )}
    </div>
  );
};

export default Search;
