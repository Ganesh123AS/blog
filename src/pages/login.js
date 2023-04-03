import React, { useState, useEffect } from "react";
import login from "../img/login.jpg";
import "./pages.css";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {

  const formik = useFormik({
    // Initial values
    initialValues: {
      email: "",
      password: "",
    },

    // Validation Schema
    validationSchema: Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
    }),

    // On Submit
    onSubmit: (data) => {
      const { email, password } = data;
      axios.post(`${process.env.REACT_APP_API_AUTH_TOKEN}`,{
        "username": email,
        "password": password,
      })
      .then((res) => {
        console.log(res);
        if(res.status === 200 && res.statusText === "OK"){
          localStorage.setItem("user", JSON.stringify(res.data))
          alert(res.data.user_nicename)
        }
      })
      .catch((err) => {
        console.log("error: ", err.message);
      })
    },
  });


return (
  <>
    <div className="container login-form">
      <div className="row">
        <div className="col-lg-12 login-head mt-3 mb-5 col-lg-12 text-center"><h1>Login To Continue...</h1></div>
        

        <div className="col-lg-12 d-flex">
        <div className="col-lg-4 login-img">
          <img src={login} alt="image" />
        </div>
        <div className="col-lg-8">
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <div className="col-lg4">
              <label htmlFor="email">Email: </label>
              </div>
              <div className="col-lg-8">
              <input
                type="email"
                className="col-lg-8"
                placeholder="Email address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              </div>
            </div>

            <div className="mb-6">
              <div className="col-lg-4">
              <label htmlFor="password">Password:</label>
              </div>
              <div className="col-lg-8">
                <input
                type="password"
                className=""
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              </div>
            </div>

            <button
              type="submit"
              className="login-btn"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Login
            </button>
          </form>
        </div>
        </div>
          
        </div>

      </div>
  </>
)};

export default Login;
