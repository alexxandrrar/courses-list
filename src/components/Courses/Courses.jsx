import CourseCard from "../CourseCard/CourseCard";
//import CreateCourse from "../CreateCourse/CreateCourse";
import { mockedCoursesList } from "../../constants/data";
import React, { useState } from "react";
import Search from "../Search/Search";
import s from "./Courses.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Courses = () => {
  const [courses, setCourses] = useState(mockedCoursesList);
  const [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    setCourses(mockedCoursesList);
  };
  const filterCourses = () => {
    setCourses(
      courses.filter((a) =>
        a.title.toUpperCase().includes(inputValue.toUpperCase())
      )
    );

    setInputValue("");
  };

  return (
    <div className={s.courses}>
      <div className={s.upper}>
        <Search
          courses={courses}
          onChangeHandler={onChangeHandler}
          filterCourses={filterCourses}
          inputValue={inputValue}
        />
        <Button
          onClick={() => navigate("/create-course")}
          size="medium"
          text="Add new post"
        />
      </div>
      <div>
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};
export default Courses;
