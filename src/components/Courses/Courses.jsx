import CourseCard from "../CourseCard/CourseCard";
import { mockedCoursesList } from "../../constants/data";
import React, { useState } from "react";

const Courses = () => {
  const [courses] = useState(mockedCoursesList);

  return (
    <div>
      {courses.map((course) => (
        <CourseCard course={course} />
      ))}
    </div>
  );
};
export default Courses;
