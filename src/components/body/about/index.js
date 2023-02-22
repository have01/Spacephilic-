import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import video from "./home-image.mp4";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h1 className="mission">OUR MISSION</h1>
          <p className="paragraph ">
            To develop and operate cutting edge space technology <br /> to
            support life on planets or in space
          </p>
        </div>
        <div className="about-photo">
          <video src={video} muted autoPlay loop></video>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
