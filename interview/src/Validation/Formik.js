import React, { useRef } from "react";
import { useFormik } from "formik";
import *as  Yup from 'yup'
const Formik = () => {
    const ref=useRef();
  const initialValues = {
    name: "",
    password: "",
    age: "",
    email: "",
  };
  const validationSchema=Yup.object({
    name:Yup.string().required('name is requried'),
    password:Yup.string().min(6).max(10).required("password is requried"),
    age:Yup.number().required('age  is requried'),
    email:Yup.string().required('emial is requried'),
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit:(values)=>{
        console.log(values)

    }

  });
//   console.log(formik);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
         <input
          type="number"
          name="age"
          placeholder="enter age"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
         <input
          type="email"
          name="email"
          placeholder="enter email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formik;
