import React from "react";
import image1 from "../assets/image/banner/05.png";
import NextImage from "../components/NextImage";
const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-12">
              <NextImage className="img-fluid w-100" src={image1} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 md-mt-5 order-lg-1">
              <div className="section-title mb-3">
                <div className="title-effect title-effect-2">
                  <div className="ellipse"></div> <i className="la la-info"></i>
                </div>
                <h2>test</h2>
              </div>
              <p className="lead">test</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-effect pos-r">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 image-column">
              <div className="blink-img">
                <NextImage src={image1} alt="" />
              </div>
              <img className="img-fluid" src="images/about/02.png" alt="" />
            </div>
            <div className="col-lg-6 col-md-12 md-mt-5 ml-auto">
              <div className="section-title mb-3">
                <div className="title-effect title-effect-2">
                  <div className="ellipse"></div> <i className="la la-info"></i>
                </div>
                <h2>test</h2>
              </div>
              <p className="lead">test</p>
              <ul className="custom-li list-unstyled list-icon-2 d-inline-block">
                test
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
