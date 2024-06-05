import React, { useState } from "react";
import image15 from "../assets/image15.jpg";
import "./EndPage.css";
const EndPage = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };
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

      <form onSubmit={handleSubmit}>
        <div className="input_Tag">
          <input
            type="email"
            name="email"
            placeholder="email address"
            onChange={handleChange}
            value={email}
          />
          <button type="submit">subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default EndPage;
