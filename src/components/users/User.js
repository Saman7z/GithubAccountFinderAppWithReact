import React, { useEffect, useContext } from "react";
import Repos from "../repos/Repos";
import GithubContext from '../../context/github/githubContext'


const User = ({ match }) => {
  const githubContext = useContext(GithubContext)
  const {repos, getUserRepos, getUser, theUser} = githubContext

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);
  // componentDidMount() {
  // getUser(match.params.login);
  // getUserRepos(match.params.login);
  // }
  const {
    name,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = theUser;

  return (
    <div className="profile-container">
      <div className="profile-upper-section">
        <div className="profile-upleft">
          <img src={avatar_url} alt={`${name}Z-img`} />
          <p className="profile-location">{location}</p>
        </div>
        <div className="profile-upright">
          <h1 className="bio-title">Bio :</h1>
          <p className="profile-bio">
            {bio ? (
              bio
            ) : (
              <span className="no-bio">This Person Doesn't Have a Bio</span>
            )}
          </p>

          <div className="btn profile-btn">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              View Github Profile
            </a>
          </div>
          <h3 className="hireable-section">
            Hireable :
            <span className="hireable-icon">
              {hireable ? (
                <i className="fas fa-check" style={{ color: "green" }}></i>
              ) : (
                <i className="fas fa-times-circle" style={{ color: "red" }}></i>
              )}
            </span>
          </h3>
        </div>
      </div>
      <div className="profile-bottom-section">
        <button className="rep-btn flers-btn">Followers : {followers}</button>
        <button className="rep-btn floing-btn">Followings : {following}</button>
        <button className="rep-btn repos-btn">
          Public Respos : {public_repos}
        </button>
        <button className="rep-btn gists-btn">
          Public Gists : {public_gists}
        </button>
      </div>
      <div className="last-repos-container">
        <h1 className="last-repos-title">Last 5 Public Repos :</h1>
        <ol>
          <Repos repos={repos} />
        </ol>
      </div>
    </div>
  );
};

export default User;
