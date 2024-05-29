import React from "react";
import image15 from "../assets/image15.jpg";
import "./EndPage.css";
const EndPage = () => {
  return (
    <div className="End_MainDiv">
      <div className="main">
        <div className="line-design1">
          <h3>Stay Connected</h3>
        </div>

        <p>SUBSCRIBE!</p>

        <div className="line-design">
          <h3>
            <img src={image15} alt="logo" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
