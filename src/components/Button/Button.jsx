import "./Button.css";
import { checkButtonSize } from "../../utils/checkButtonSize";
import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      className={`custom-button ${props.className ? props.className : ""}`}
      style={checkButtonSize(props.size)}
    >
      {props.text}
    </button>
  );
};

export default Button;
