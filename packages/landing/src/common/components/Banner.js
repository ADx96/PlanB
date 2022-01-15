import React, { useState } from "react";
import BannerShape from "../assets/image/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/image/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/image/resources/banner-moc-1-1.png";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div>

        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <div className="mc-form__response"></div>
              <h3>
                Manage Your <br /> Project with <br /> Application
              </h3>
              <p>
                Nulla facilisi. Proin felis neque, suscipit egestas erat a{" "}
                <br /> tincidunt finibus magna consectetur lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
