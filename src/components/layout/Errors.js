import React from "react";
import "./error.css";
import AlertContext from '../../context/alert/AlertContext'
import { useContext } from "react";
const Error = () => {
  const alertContext = useContext(AlertContext)
  const closeErrorBox = () => {
    alertContext.closeErrorBox();
  };
  const {alert} = alertContext
  return (
    alert != null && (
      <div className="error-container">
        <div className="error-clear-btn" onClick={closeErrorBox}>
          &times;
        </div>
        <div className={`error-msg error-${alert.color}`}>{alert.msg}</div>
      </div>
    )
  );
};

export default Error;
