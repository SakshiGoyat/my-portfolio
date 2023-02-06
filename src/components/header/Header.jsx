import Blast from "../BlastAnimation/Blast";
import "./header.scss";
import Fade from "react-reveal/Fade";
import Sakshi from "../../assets/images/Sakshi_s_Resume.pdf";

import Reveal from "react-reveal/Reveal";
import React, { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
// import useScript from "./useScript";

const nameArray = ["S", "a", "k", "s", "h", "i"];
const jobArray = [
  "W",
  "e",
  "b",
  " ",
  "D",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
];

const Header = ({ url }) => {
  // useScript(url);
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });
  return (
    <>
      {/* <canvas id="canvas" /> */}
      <div className="container">
        <Reveal>
          <div className="fake-big">Home</div>
        </Reveal>
        <section className="section-1 header__container section__padding">
          <main className="intro-page">
            <h1>
              <Blast
                letterClass={letterClass}
                arrayStr={["H", "o", "l", "a", "!"]}
              />{" "}
            </h1>
            <br />
            <h2>
              <Blast letterClass={letterClass} arrayStr={["I", "'", "m"]} />{" "}
              <Blast
                letterClass={letterClass}
                arrayStr={nameArray}
                indexLetter={15}
              />
              <br />
              <Blast
                letterClass={letterClass}
                arrayStr={jobArray}
                indexLetter={22}
              />
            </h2>

            <p className="text-desc">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  "W",
                  "E",
                  "B ",
                  " ",
                  "D",
                  "E",
                  "V",
                  "E",
                  "L",
                  "O",
                  "P",
                  "E",
                  "R",
                  " ",
                  "U",
                  "I",
                  "/",
                  "U",
                  "X",
                  " ",
                  "D",
                  "E",
                  "S",
                  "I",
                  "N",
                  "E",
                  "R",
                ]}
              />{" "}
              {/* WEB DEVELOPER, UI/UX DESIGNER */}
            </p>
            <Fade left>
              <a
                style={{ marginTop: "2rem" }}
                href={Sakshi}
                download
                className="download-button submit-button-download"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </main>
        </section>

        {/* <div className="scroll__wrapper switch__color">
          <MdArrowDropDown className="scroll__down switch__color" />
        </div> */}
      </div>
    </>
  );
};

export default Header;
