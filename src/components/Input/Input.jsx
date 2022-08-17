import React from "react";
import { checkInputSize } from "../../utils/checkInputSize";
import s from "./Input.module.css";

const Input = ({ ...props }) => {
  return (
    <input
      type="text"
      className={s.input}
      style={checkInputSize(props.size)}
    ></input>
  );
};

export default Input;
