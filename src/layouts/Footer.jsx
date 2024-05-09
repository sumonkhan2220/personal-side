import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="chevron-up ">
        <div className="circle">
          <i class="fa fa-chevron-up fa-2x " aria-hidden="true"></i>
        </div>
      </div>
      <div className="footer-bar">
        <div className="footer-left">
          <p>&copy; Copyright 2024 Sumon Khan. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="left-div">
            <p>Developed with</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
          <div className="right-div">
            <p>, using</p>
            <i class="fa fa-wordpress" aria-hidden="true"></i>
            <h4 className="by">by</h4>
            <h4 className="name">Sumon</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
