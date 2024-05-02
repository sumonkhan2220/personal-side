import React from "react";
import PageTitle from "../components/PageTitle";
import { NavLink } from "react-router-dom";
// import "./App.css";
// import image1 from "../assets/image1.jpeg";

const Home = () => {
  return (
    <div className="home-div">
      <PageTitle title="Home Page" />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
