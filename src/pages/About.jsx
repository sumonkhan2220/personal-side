import React from "react";
import PageTitle from "../components/PageTitle";
import "./About.css";
import image15 from "../assets/image15.jpg";
import EndPageAbout from "./EndPageAbout";
import MiddlePageAbout from "./MiddlePageAbout";
const About = () => {
  return (
    <>
      <div className="bg-image-about">
        <PageTitle title="About Page" />
        <div className="main-content-about">
          <h2>Here</h2>

          <div className="line-design-about">
            <h3>
              <img src={image15} alt="logo" />
            </h3>

            <div className="content-mid-about">
              <h1>IT'S ME</h1>
            </div>
          </div>
        </div>
      </div>
      <MiddlePageAbout />
      <EndPageAbout />
    </>
  );
};

export default About;
