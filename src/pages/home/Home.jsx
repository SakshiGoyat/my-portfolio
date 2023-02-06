import Header from "../../components/header/Header";

import { About, Skills, ProjectPage, Contact, Experience } from "..";
const Home = () => {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
      </section>
      <section className="section-skills">
        <Skills />
      </section>
      <section className="section-projects">
        <ProjectPage />
      </section>
      {/* <section className="section-experience">
        <Experience />
      </section> */}
      <section className="section-contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
