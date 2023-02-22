import React from "react";
import Separator from "../../common/separator/index";
import "./description.css";

function Skills() {
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="about-container">
        <h1>Who we are?</h1>
        <span
          style={{
            height: "200px",
            width: "300px",
          }}
        >
          {" "}
          <p>
            "Space Philic" means denoting an affinity or inclination towards
            space. <br /> It's a community of space technology loving people
            from various age group. <br /> All we want is to explore the
            unexplored.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Skills;
