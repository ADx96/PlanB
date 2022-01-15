import React from "react";

const HeroSectionThree = () => {
  return (
    <>
      {/* hero section :: start */}
      <section
        className="fullscreen-banner banner p-0 o-hidden"
        data-bg-color="#fbfbfb"
      >
        <div className="bg-animation">
          <img className="zoom-fade" src="images/pattern/01.png" alt="" />
        </div>
        <div className="align-center pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <img
                  className="img-center wow tada"
                  data-wow-duration="2s"
                  src={``}
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 md-mt-5 md-mb-5">
                <h5 className=" wow fadeInDown" data-wow-duration="1.5s"></h5>
                <h1 className="mb-4 wow jackInTheBox" data-wow-duration="2s">
                  Grow Your Software With
                  <span className="text-theme">PlanB</span>
                </h1>
                <p
                  className="lead mb-0 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.3s"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionThree;
