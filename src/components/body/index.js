import React from "react";
import "./body.css";
import About from "./about/index";
import Product from "./product/index";
import Description from "./description/index";
import Work from "./work/index";
import Contact from "./contact/index";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Product />
      </section>
      <section id="skills">
        <Description />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
