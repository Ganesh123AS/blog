import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddPost = () => {
    const user = localStorage.getItem("user");

  const formik = useFormik({
    // Initial values
    initialValues: {
      title: "",
      content: "",
    },

    // Vlidations
    validationSchema: Yup.object({
      title: Yup.string().required(),
      content: Yup.string().required(),
    }),

    // Submit
    onSubmit: (data) => {
        const { token } = JSON.parse(user);

        const headers = {
            "Authorization": `Bearer ${token}`, 
        };

        const post = {
            ...data,
            status: "publish",
        }

          axios.post(`${process.env.REACT_APP_API_ROOT}/posts`, post, {
            headers: headers
          })
          .then((res) => {
              console.log('res', res);
          })
          .catch((err) => {
              console.log('err', err.message);
          });
      }
    },
  )

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="col-lg-12">
              <h1 className="mb-5 text-center">Create a New Post</h1>
            </div>

            <div className="post-title col-lg-12">
              <form onSubmit={formik.handleSubmit}>

                <div className="mb-5 d-flex">
                  <div className="col-lg-3">
                  <label className=" mb-2" htmlFor="post-title">
                    Post Title :
                  </label>
                  </div>
                  <div className="col-lg-8">
                  <input
                    className="focus:outline-none focus:shadow-outline"
                    id="post-title"
                    type="text"
                    placeholder="Enter post title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                  </div>
                </div>



                <div className="mb-5 d-flex">
                  <div className="col-lg-3">
                  <label className=" mb-2" htmlFor="post-content">
                    Post Content :
                  </label>
                  </div>
                  <div className="col-lg-8">
                  <textarea
                    className=""
                    rows={8}
                    cols={60}
                    name="content"
                    placeholder="Enter post content"
                    onChange={formik.handleChange}
                    value={formik.values.content}
                  ></textarea>
                  </div>
                </div>
                <div className="col-lg-8 text-center">
                <input
                  type="submit"
                  className="bg-secondary text-light mb-5 btn btn-outline-success"
                  value="Create Post"
                />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
