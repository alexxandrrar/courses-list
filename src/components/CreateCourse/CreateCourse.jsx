import React from "react";
import Button from "../Button/Button";
import s from "./CreateCourse.module.css";
import Input from "../Input/Input";

const CreateCourse = () => {
  return (
    <form className={s.card}>
      <div className={s.title}>
        Title
        <Input placeholder="EnterTitle" size="large" />
      </div>
      <div className={s.description}>
        Description
        <textarea></textarea>
      </div>
      <div className={s.block}>
        <div classNmae={s.author}>
          <h5>Add author</h5>
          AuthorName
          <Input placeholder="Enter author name..." size="small" />
          <Button text="Create author" size="medium" />
        </div>
        <div className={s.duration}>
          <h5>Duration</h5>
          Duration
          <Input placeholder="Enter duration in minutes" size="small" />
        </div>
      </div>
    </form>
  );
};

export default CreateCourse;
