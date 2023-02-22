import React from "react";
import "./productcard.css";
import LVD from "./LVD.png";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <p>
          {" "}
          <span className="our_product">OUR PRODUCT</span>{" "}
        </p>
        <label className="project-title">{project.title}</label>

        <p className="product_about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img alt="" src={LVD} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
