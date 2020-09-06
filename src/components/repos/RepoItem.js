import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
   
        <li>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
        </li>
  
  );
};
RepoItem.propType = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
