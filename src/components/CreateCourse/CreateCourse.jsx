import React from "react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import s from "./CreateCourse.module.css";

const CreateCourse = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      author: "",
      duration: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const { handleSubmit, handleChange, values } = formik;
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.upperblock}>
        <div className={s.main}>
          <div className={s.input}>
            <label htmlFor="title">Title</label>
            <input
              size="medium"
              id="title"
              name="title"
              type="text"
              placeholder="Enter title..."
              onChange={handleChange}
              value={values.title}
            />
          </div>
          <div className={s.input}>
            <label htmlFor="description">Description</label>
            <input
              size="large"
              id="description"
              name="description"
              type="text"
              placeholder="Enter description..."
              onChange={handleChange}
              value={values.description}
            />
          </div>
        </div>
        <Button
          className={s.button}
          type="submit"
          size="medium"
          text="Create Course"
        ></Button>
      </div>

      <div className={s.downblock}>
        <label htmlFor="author">Add author</label>
        <input
          size="small"
          id="author"
          name="author"
          type="text"
          placeholder="Enter author name..."
          onChange={handleChange}
          value={values.author}
        />
        <label htmlFor="duration">Duration</label>
        <input
          size="small"
          id="duration"
          name="duration"
          type="text"
          placeholder="Enter duration in minutes..."
          onChange={handleChange}
          value={values.duration}
        />
      </div>
    </form>
  );
};

export default CreateCourse;
