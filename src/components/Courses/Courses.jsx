import CourseCard from "../CourseCard/CourseCard";
import CreateCourse from "../CreateCourse/CreateCourse";
import { mockedCoursesList } from "../../constants/data";
import React, { useState } from "react";
import Search from "../Search/Search";
import s from "./Courses.module.css";

const Courses = () => {
  const [courses, setCourses] = useState(mockedCoursesList);
  const [inputValue, setInputValue] = useState("");

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
        <CreateCourse />
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
