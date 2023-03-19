import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Blast from "../../components/BlastAnimation/Blast";
import "./about.scss";
import my2 from "../../assets/images/my2.jpeg";

const aboutArray = ["A", "b", "o", "u", "t"];
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });

  return (
    <>
      <Reveal>
        <div className="fake-big2">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h1 aria-label="About">
              <Blast
                letterClass={letterClass}
                arrayStr={aboutArray}
                indexLetter={14}
              />
            </h1>
            <div className="about__me switch__bg">
              <div className="about__me-image">
                <img src={my2} alt="about-image" height="400px" width="400px" />
              </div>
            </div>
            <Fade>
              <p>
                I am a passionate Full Stack Developer who loves to explore new
                technologies and build scalable applications. Although I
                expertize in full-stack development, I prefer to work on the
                backend of any application.
              </p>
            </Fade>
            <Fade bottom>
              <p>Currently, I have been exploring BlockChain.</p>
            </Fade>
            <Fade bottom>
              <p>
                A little bit about my education, I am a 2nd year student of{" "}
                <em>
                  Atal Bihari Vajpayee Indian Institute Of Information
                  Technology and Management, Gwalior
                </em>
                , pursuing <em>B.Tech</em> in <em>Computer Science</em> and my
                current cumulative grade point average is 8.14 (till 3rd
                semester).
              </p>
            </Fade>
          </div>
        </article>
        <Link to={"/contact"} className="contact-button">
          <div>
            <span className="bg switch__bg"></span>
            <span className="base switch__border-color"></span>
            <span className="text">Contact me</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default About;
