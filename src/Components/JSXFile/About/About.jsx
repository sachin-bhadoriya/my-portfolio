import React from "react";
import "../../CSSFile/OtherCSSFile/About.css";
const About = () => {
  return (
    <>
      <div className={`container`}>
        <div className={`row`}>
          <span>
            <h2 className="about_head">ABOUT US</h2>
          </span>
          <p className={`col-md-12 fs-1 About`}>
            Hello! I’m <span className={`About_word`}>Sachin Bhadoriya</span> ,
            a passionate and dedicated{" "}
            <span className={`About_word`}>Full-Stack Developer</span> and the
            founder of my own digital agency. With years of hands-on experience in
            <span className={`About_word`}>
              {" "}
              Frontend, Backend, and Mobile App Development{" "}
            </span>
            , I specialize in crafting high-performance web and app solutions
            using the
            <span className={`About_word`}>
              {" "}
              MERN stack (MongoDB, Express, React, Node.js){" "}
            </span>
            .
          </p>
        </div>
      </div>
      <br />
    </>
  );
};

export default About;
