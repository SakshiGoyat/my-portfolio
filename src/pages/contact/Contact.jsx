import React, { useState, useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import { useSearchParams } from "react-router-dom";

import Blast from "../../components/BlastAnimation/Blast";
import Map from "../../components/map/Map";
import emailjs from "@emailjs/browser";

import "./contact.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = React.useState("text-animate");

    React.useEffect(() => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x4kavx5",
        "template_moc2q3s",
        form.current,
        "kn_i5N0U1vKibnTim"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="section-contact section__padding">
        <div className="fake-big">@</div>
        <div className="totalPage">
          <div>
            <div>
              <h1 className="contact__heading">
                <Blast
                  letterClass={letterClass}
                  arrayStr={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
                  indexLetter={12}
                />
              </h1>
              <Fade bottom>
                <p className="contact__p">
                  I’m interested in freelance opportunities and I am always
                  ready to build projects at anytime, if you have any job offer
                  for me, you could use the form below to react out to me.
                </p>
              </Fade>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <Fade bottom>
                <div className="input-wrapper">
                  <div className="form-input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                    />
                    <span className="switch__bg"></span>
                  </div>
                  <div className="form-input-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email Id"
                      required
                    />
                    <span className="switch__bg"></span>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="form-input-group">
                  <input type="text" name="subject" placeholder="Subject" />
                  <span className="switch__bg"></span>
                </div>
              </Fade>
              <Fade bottom>
                <div className="form-input-group">
                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                  />
                  <span className="switch__bg"></span>
                </div>
              </Fade>
              <Fade bottom>
                <button className="contact-button submit-button" type="submit">
                  <div>
                    <span className="bg switch__bg"></span>
                    <span className="base switch__border-color"></span>
                    <span className="text">Send Message</span>
                  </div>
                </button>
              </Fade>
            </form>
          </div>
        </div>
        <div className="google-map">
          <Map />
        </div>
      </section>
    </>
  );
};

export default Contact; 