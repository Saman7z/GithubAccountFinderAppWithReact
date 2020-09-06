import React from "react";
import PropTypes from 'prop-types'
import "./userItem.css";
import {Link} from 'react-router-dom'
const UserItem = ({user: { id, login, avatar_url}}) => {
  // props  : instead of using props we can use destructring like above
  //const { id, login, avatar_url, html_url } = props.user;
  return (
    <div className="card-item">
      <div className="card-img">
        <img src={avatar_url} alt={"img-" + id} />
      </div>
      <div className="card-name">{login}</div>
      <div className="more-btn">
        {/* <a href={html_url} target="_blank" rel="noopener noreferrer">
          More
        </a> */}
        <Link to={`/user/${login}`}>
        More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
 user : PropTypes.object.isRequired
}
export default UserItem;
