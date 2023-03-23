import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Blast from "../../components/BlastAnimation/Blast";
import Project from "../../components/projects/Project";
import { projects } from "./index";
import "./projectpage.scss";

const projectArray = ["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"];
const ProjectPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <section className="section__projects section__padding">
      <div className="fake-big4">Projects</div>
      <h2 aria-label="My Projects" className="section__projects-title">
        <Blast
          letterClass={letterClass}
          arrayStr={projectArray}
          indexLetter={12}
        />
      </h2>
      <div className="section__projects-description1">
        <Fade bottom>
          <p>
            These are the projects that I have worked upon in the past few
            months.
          </p>
        </Fade>
      </div>

      <div className="section__projects-description2">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProjectPage;
