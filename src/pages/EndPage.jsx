import React from "react";
import image15 from "../assets/image15.jpg";
import "./EndPage.css";
const EndPage = () => {
  return (
    <div className="End_MainDiv">
      <div className="end-container">
        <div className="line-design1">
          <h2>Stay Connected</h2>
        </div>

        <div className="p-tag">
          <p>SUBSCRIBE!</p>
        </div>

        <div className="line-design2">
          <h4>
            <img src={image15} alt="logo" />
          </h4>
        </div>
      </div>

      <div className="input_Tag">
        <input type="email" name="email" placeholder="email address" />
        <button>subscribe</button>
      </div>
    </div>
  );
};

export default EndPage;
