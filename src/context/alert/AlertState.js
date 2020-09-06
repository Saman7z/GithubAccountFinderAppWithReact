import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import React, { useReducer } from "react";
const AlertState = (props) => {
  const alertInitialState = {
    alert: null,
  };
  const [state, dispatch] = useReducer(AlertReducer, alertInitialState);

  const showError = (msg, color) => {
    // this.setState({
    //   alert: { msg, type },
    // });
    //setAlert({ msg, type });
    //setTimeout(() => alert(null), 3000);
    dispatch({
      type: SET_ALERT,
      msg,
      color,
    });
    setTimeout(closeErrorBox, 3000);
  };
  const closeErrorBox = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showError,
        closeErrorBox,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
