import React from "react";
import PageTitle from "../components/PageTitle";
import { NavLink } from "react-router-dom";
import "./Home.css";
import image15 from "../assets/image15.jpg";
import EndPage from "./EndPage";

const Home = () => {
  return (
    <>
      <div className="bg-image">
        <PageTitle title="Home Page" />
        <div className="main-content">
          <div className="up_container">
            <h2>Welcome</h2>

            <div className="line-design">
              <h3>
                <img src={image15} alt="logo" />
              </h3>

              <div className="content-mid">
                <h1>md saidur Rahman Sumon</h1>
              </div>
            </div>
          </div>

          <div className="style-div">
            <p>I Believe, Life is Really Beautiful!</p>
          </div>

          <div className="font-awesome">
            <i class="fa fa-download fa-2x" aria-hidden="true"></i>
            <p>Find Tutorial</p>
          </div>
        </div>
      </div>
      <EndPage />
    </>
  );
};

export default Home;
