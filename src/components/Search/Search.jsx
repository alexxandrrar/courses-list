import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import s from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={s.search}>
      <Input
        value={props.inputValue}
        placeholder="Search..."
        size="medium"
        onChange={props.onChangeHandler}
      />
      <Button onClick={props.filterCourses} size="medium" text="Search" />
    </div>
  );
};

export default Search;
