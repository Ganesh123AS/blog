import React from "react";
import aboutImg from "../img/about1.jpg";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">

            <div className="tttle col-lg-12 text-center">
              <h2>Our Vision</h2>
            </div>

            <div className="about-img d-flex">
              <div className="col-lg-6 img-fluid col-sm-12">
                <img src={aboutImg} alt="image" />
              </div>
              <div className="col-lg-6 text-center col-sm-12">
                <h4>Search of Happiness</h4>
                <h6>we provide you the best we can.</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatibus velit distinctio ea veniam,
                   animi tenetur maiores natus modi inventore enim explicabo rem excepturi harum sit veritatis iure? Laborum 
                   velit quos nemo. Porro dolor harum voluptatum quis quaerat, sit delectus quo adipisci odit commodi voluptatem 
                   nisi consequatur perspiciatis ducimus doloribus corrupti nobis beatae natus vitae enim eum. Minus asperiores 
                   voluptatibus commodi sint magnam deserunt possimus incidunt a fuga ea, libero distinctio sunt nam eos natus
                    tempore. Optio sed, qui mollitia nemo nesciunt nihil ipsum cumque, aut commodi rem eaque harum facilis ducimus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
