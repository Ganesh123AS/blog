import React from "react";
import { Formik } from 'formik';
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
    <h1 className="text-center col-lg-8 mt-5">Suggest Your Query:</h1>
    <Formik
      initialValues={{ email: '', email: '', Comments: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          
          <div className="contact-section mt-5">
          <label className="col-lg-2" htmlFor="name">Enter Your Name:</label>
          <input
           className="col-lg-6"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          </div>
         
          

          <div className="mt-5">
          <label  className="col-lg-2" htmlFor="email">Email:</label>
          <input
           className="col-lg-6"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </div>

          <div className="contact-section mt-5">
          <label className="col-lg-2" htmlFor="comments">Any Query/Comments:</label>
          <textarea className="col-lg-6" name="comments" cols="20" rows="6" onChange={handleChange}
            onBlur={handleBlur}
            value={values.Comments}></textarea>
          {errors.Comments && touched.Comments && errors.Comments}
          </div>
          
          
          <div className="col-lg-7 button text-center mb-4">
          <button className="mt-5 text-center" type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
        </form>
      )}
    </Formik>
  </div>

          
          </div>
        </div>
  );
};

export default Contact;