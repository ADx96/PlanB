import React from "react";
import { useForm } from "react-hook-form";
import contact from "common/assets/image/contact.png";
import NextImage from "../NextImage";
const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      <section className="contact-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <NextImage className="img-center" src={contact} alt="" />
            </div>
            <div className="col-lg-6 col-md-12 md-mt-5">
              <div className="section-title">
                <div className="title-effect title-effect-2">
                  <div className="ellipse"></div> <i className="la la-info"></i>
                </div>
                <h2></h2>
                <p></p>
              </div>
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="messages"></div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Type First name"
                        required="required"
                        data-error="Firstname is required."
                        {...register("message", {
                          required: "Required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        className="form-control"
                        placeholder="Type Last name"
                        required="required"
                        data-error="Lastname is required."
                        {...register("message", {
                          required: "Required",
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Type Email"
                        required="required"
                        data-error="Valid email is required."
                        {...register("message", {
                          required: "Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Type Phone"
                        required="required"
                        data-error="Phone is required"
                        {...register("message", {
                          required: "Required",
                          pattern: {
                            value: /^\d{10}$/,
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Type Message"
                        rows="4"
                        required="required"
                        data-error="Please,leave us a message."
                        {...register("message", {
                          required: "Required",
                        })}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <button
                      className="btn btn-theme btn-circle"
                      data-text="Send Message"
                      type="submit"
                    >
                      <span>S</span>
                      <span>e</span>
                      <span>n</span>
                      <span>d</span>
                      <span> </span>
                      <span>M</span>
                      <span>e</span>
                      <span>s</span>
                      <span>s</span>
                      <span>a</span>
                      <span>g</span>
                      <span>e</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info p-0 z-index-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="contact-media">
                {" "}
                <i className="flaticon-paper-plane"></i>
                <span>Address:</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 md-mt-5">
              <div className="contact-media">
                <i className="flaticon-email"></i>
                <span>Email Address</span>
                <a href={`mailto:`}></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 md-mt-5">
              <div className="contact-media">
                <i className="flaticon-social-media"></i>
                <span>Phone Number</span>
                <a href={`tel:`}></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
