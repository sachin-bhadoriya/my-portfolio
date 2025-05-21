import React from "react";
import "../../CSSFile/OtherCSSFile/Faq.css";

const Faq = () => {
  return (
    <div className="container">
      <h1 className="why_head">FAQ</h1>
      <ul className="accordion">
        <li>
          <input type="radio" name="accordion" id="first-acc" />
          <label htmlFor="first-acc">
            Question : What services do you offer?
          </label>
          <div className="content">
            <p>
              Answer : I provide full-stack web development, mobile app
              development, UI/UX design, and end-to-end digital solutions using
              modern technologies like the MERN stack (MongoDB, Express, React,
              Node.js).
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="second-acc" />
          <label htmlFor="second-acc">
            Question : What technologies do you specialize in?
          </label>
          <div className="content">
            <p>
              Answer : I specialize in the MERN stack for web development. That
              includes MongoDB for databases, Express and Node.js for backend
              development, and React for frontend interfaces. I also use tools
              like Figma for UI/UX design and Git for version control.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third-acc" />
          <label htmlFor="third-acc">
            Question : What makes your agency different from others?
          </label>
          <div className="content">
            <p>
              Answer : Innovation and dedication. We stay updated with the
              latest trends and technologies, ensuring your project is built
              using modern, scalable, and efficient solutions — all delivered
              with a personal touch and transparent communication.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fourth-acc" />
          <label htmlFor="fourth-acc">
            Question : How do you approach new projects?
          </label>
          <div className="content">
            <p>
              Answer : We follow an 8-step process: Requirement Gathering →
              Sitemap & Wireframe → UI/UX Designing → Client Approval →
              Development → Testing & QA → Client Review & Final Change →
              Deployment.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fifth-acc" />
          <label htmlFor="fifth-acc">
            Question : Do you offer ongoing support after project delivery?
          </label>
          <div className="content">
            <p>
              Answer : Yes, I offer post-launch support and maintenance to
              ensure your website or application runs smoothly, stays secure,
              and is always updated.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="sixth-acc" />
          <label htmlFor="sixth-acc">
            Question : Can you build custom features or integrations?
          </label>
          <div className="content">
            <p>
              Answer : Absolutely! I can develop custom features tailored to
              your business needs, including third-party API integrations, admin
              panels, booking systems, and more.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="seventh-acc" />
          <label htmlFor="seventh-acc">
            Question : Do you work with international clients?
          </label>
          <div className="content">
            <p>
              Answer : Yes, I’ve worked with clients globally and can easily
              manage projects across time zones with smooth communication and
              regular updates.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="eighth-acc" />
          <label htmlFor="eighth-acc">
            Question : How can I get a quote for my project?
          </label>
          <div className="content">
            <p>
              Answer : Just head to the Contact Me section or send me an email
              with your requirements. I’ll get back to you within 24 hours with
              a personalized proposal.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Faq;
