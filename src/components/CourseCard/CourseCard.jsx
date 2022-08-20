import React from "react";
import Button from "../Button/Button";
import s from "./CourseCard.module.css";

const CourseCard = (props) => (
  <div className={s.courseCard}>
    <div className={s.name}>
      <strong>{props.course.title}</strong>
      <div className={s.description}>{props.course.description}</div>
    </div>

    <div className={s.info}>
      <div>
        <strong>Authors:</strong> Somebody, Someone
      </div>
      <div>
        <strong>Duration: </strong> {props.course.duration}
      </div>
      <div>
        <strong>Created: </strong> {props.course.creationDate}
      </div>
      <Button className={s.btn} text="Show course" size="medium" />
    </div>
  </div>
);
export default CourseCard;
