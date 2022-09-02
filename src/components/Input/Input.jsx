import React from "react";
import { checkInputSize } from "../../utils/checkInputSize";
import s from "./Input.module.css";

const Input = ({ ...props }) => {
  return (
    <input
      type="text"
      className={s.input}
      value={props.value}
      style={checkInputSize(props.size)}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
