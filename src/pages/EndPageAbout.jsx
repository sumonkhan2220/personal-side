import React from "react";
import "./EndPageAbout.css";
const EndPageAbout = () => {
  return (
    <div className="main_section_EndPageAbout">
      <div className="Education_Section">
        <div icon_div>
          <i class="fa fa-book" aria-hidden="true"></i>
          <h1>Education</h1>
        </div>

        <div className="Education_details">
          <ul>
            <li>B.Sc. 2016 – 2019</li>
            <p>Studied B.Sc. in CSE from Green University Of Bangladesh.</p>
            <li>Professional diploma 2008 – 2012</li>
            <p>Khulna Polytechnic Institute</p>
            <li>SSC 2008</li>
            <p>Jhenaidah technical School and College</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EndPageAbout;
