import React from "react";
import image15 from "../assets/image15.jpg";
import "./EndPage.css";
const EndPage = () => {
  return (
    <section>
      <div className="main">
        <div className="line-header">
          <h2>Stay Connected</h2>
        </div>

        <div className="SUBSCRIBE">
          <p>SUBSCRIBE!</p>
        </div>

        <div className="line-footer">
          <img src={image15} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default EndPage;
