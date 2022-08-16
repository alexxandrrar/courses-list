import React from "react";
import Button from "../Button/Button";
import s from "./CourseCard.module.css";

const CourseCard = (props) => (
  <div className={s.courseCard}>
    <strong className={s.name}>{props.course.title}</strong>
    <div className={s.description}>{props.course.description}</div>
    <div className={s.info}>
      <div>
        <strong>Authors:</strong>...
      </div>
      <div>
        <strong>Duration: </strong>
        {props.course.duration}
      </div>
      <div>
        <strong>Created: </strong>
        {props.course.creationDate}
      </div>
    </div>
    <Button className={s.btn} text="Show course" size="medium" />
  </div>
);
export default CourseCard;
