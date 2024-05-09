import React from "react";
import PageTitle from "../components/PageTitle";
import { NavLink } from "react-router-dom";
import "./Home.css";
import image15 from "../assets/image15.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-image">
        <PageTitle title="Home Page" />
        <div className="main-content">
          <h2>Welcome</h2>
          <div className="line-design">
            <h3>
              <img src={image15} alt="logo" />
            </h3>

            <div className="content-mid">
              <h1>md saidur Rahman Sumon</h1>
            </div>
          </div>

          <div className="style-div">
            <p>I Believe, Life is Really Beautiful!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
