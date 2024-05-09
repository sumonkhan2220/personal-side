import React from "react";
import PageTitle from "../components/PageTitle";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="bg-image-about">
        <PageTitle title="About Page" />
        <div className="main-content-about">
          <p>About Me</p>
        </div>
      </div>
    </>
  );
};

export default About;
