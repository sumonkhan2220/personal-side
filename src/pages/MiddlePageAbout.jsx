import React from "react";
import "./MiddlePageAbout.css";
import image17 from "../assets/image17.jpg";
const MiddlePageAbout = () => {
  return (
    <div className="main_section">
      <div className="left_section">
        <img src={image17} alt="Image" />
      </div>

      <div className="right_section">
        <p>
          Hi! My name is Anis. Welcome to my personal page that I’ve designed to
          showcase my skills and expertise that I’ve accumulated over the year.
          I’ve also placed all my social links at the left side, feel free to
          connect with me. I’d love to be given the opportunity to hear from
          you. <br />
          <br />
          <br />
          <br />I like to call myself “a passionate computer science teacher”. I
          always had a wish on my mind that I will do something for the computer
          science students that’s why I made lots of videos on different
          subjects. My first priority is making the subject more interesting and
          clear so you can feel it and don’t get bore.
        </p>
      </div>

      <div className="social_media_link">
        <div className="facebook_link">
          <a href="https://www.facebook.com/sumonkhan2220" target="_blank">
            <i class="fa fa-facebook fa-2x"></i>
          </a>
        </div>
        <div className="youtube_link">
          <a href="https://www.youtube.com/@anisul-islam" target="_blank">
            <i class="fa fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiddlePageAbout;
