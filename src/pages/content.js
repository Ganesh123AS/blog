import React from "react";
import "./pages.css";
import blog1 from "../img/blog1.jpg";
import img1 from "../img/content.jpg";
import img2 from "../img/blog1.jpg";
import img3 from "../img/content.jpg";

const Content = () => {
  return (
    <div className="main-section">

      <div className="top-section">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active top-section-img">
            <img src={img1} alt="image" />
          </div>
          <div className="carousel-item  top-section-img">
            <img src={img2} alt="image" />
          </div>
          <div className="carousel-item  top-section-img">
            <img src={img3} alt="image" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>



        <section className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 image">
                  <img src={blog1} alt="image" />
                </div>
                <div className="col-lg-6">
                  <h4 className="text-center mt-4 mb-4">Hello There!</h4>
                  <h6 className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                  <p className="content-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur ab similique ducimus
                     accusamus? Natus soluta dicta quis nisi maxime laborum atque sapiente ea error? Placeat possimus
                      repudiandae quae nam labore asperiores, maxime perferendis numquam hic exercitationem sapiente
                       accusamus animi deleniti nisi!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h4 className="text-center mt-4 mb-4">Hello There!</h4>
                  <h6 className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur ab similique ducimus
                     accusamus? Natus soluta dicta quis nisi maxime laborum atque sapiente ea error? Placeat possimus
                      repudiandae quae nam labore asperiores, maxime perferendis numquam hic exercitationem sapiente
                       accusamus animi deleniti nisi!</p>                  
                </div>
                <div className="col-lg-6 image">
                  <img src={blog1} alt="image" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 image">
                  <img src={blog1} alt="image" />
                </div>
                <div className="col-lg-6">
                  <h4 className="text-center mt-4 mb-4">Hello There!</h4>
                  <h6 className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                  <p className="content-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur ab similique ducimus
                     accusamus? Natus soluta dicta quis nisi maxime laborum atque sapiente ea error? Placeat possimus
                      repudiandae quae nam labore asperiores, maxime perferendis numquam hic exercitationem sapiente
                       accusamus animi deleniti nisi!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h4 className="text-center mt-4 mb-4">Hello There!</h4>
                  <h6 className="text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur ab similique ducimus
                     accusamus? Natus soluta dicta quis nisi maxime laborum atque sapiente ea error? Placeat possimus
                      repudiandae quae nam labore asperiores, maxime perferendis numquam hic exercitationem sapiente
                       accusamus animi deleniti nisi!</p>                  
                </div>
                <div className="col-lg-6 image">
                  <img src={blog1} alt="image" />
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default Content;
