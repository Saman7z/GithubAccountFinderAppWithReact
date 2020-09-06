import React from "react";
import loaderImg from "../../assets/loader3.gif";
const Loader = () => {
  return (
    <div className="loading-container">
      <div className="loader">
        <img src={loaderImg} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
