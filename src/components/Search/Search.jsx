import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import s from "./Search.module.css";

const Search = () => {
  return (
    <div className={s.search}>
      <Input />
      <Button size="medium" text="Search" />
    </div>
  );
};

export default Search;
