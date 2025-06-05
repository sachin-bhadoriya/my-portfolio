import React from "react";
import "../../CSSFile/OtherCSSFile/Faq.css";
import FaqImage from "../../../assets/images/faqimage.png"

const Faq = () => {
  return (
    <div className="container">
      <h1 className="why_head">FAQ</h1>
      <div className="container-fluid">
        <div className="row">
          {/* accordion */}
          <div className="col-md-8 order-2 order-md-1 p-2 mt-4">
            {/* first accordion */}
            <div
              style={{
                width: "100vw",
                padding: 0,
                margin: 0,
                backgroundColor: "transparent",
                textAlign: "start",
              }}
            >
              <div
                className="accordion"
                id="faqAccordion"
                style={{
                  width: "92%",
                  backgroundColor: "transparent",
                }}
              >
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       What services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                      <p> I provide full-stack web development, mobile app development, UI/UX design, and end-to-end digital solutions using modern technologies like the MERN stack (MongoDB, Express, React, Node.js). </p>
                    </div>
                  </div>
                </div>
                {/* second accordion */}
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       What technologies do you specialize in?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                      <p> I specialize in the MERN stack for web development. That includes MongoDB for databases, Express and Node.js for backend development, and React for frontend interfaces. I also use tools like Figma for UI/UX design and Git for version control.</p>
                    </div>
                  </div>
                </div>
                {/* third accordion */}
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       What makes your agency different from others?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                     <p> Innovation and dedication. We stay updated with the latest trends and technologies, ensuring your project is built using modern, scalable, and efficient solutions — all delivered with a personal touch and transparent communication.</p>
                    </div>
                  </div>
                </div>
                {/* forth accordion */}
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       How do you approach new projects?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                     <p> We follow an 8-step process: Requirement Gathering → Sitemap & Wireframe → UI/UX Designing → Client Approval → Development → Testing & QA → Client Review & Final Change → Deployment.</p>
                    </div>
                  </div>
                </div>
                {/* fifth accordion */}
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       Do you offer ongoing support after project delivery?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                     <p> Yes, I offer post-launch support and maintenance to ensure your website or application runs smoothly, stays secure, and is always updated.</p>
                    </div>
                  </div>
                </div>
                {/* sixth accordion */}
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSixth"
                      aria-expanded="true"
                      aria-controls="collapseSixth"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       Can you build custom features or integrations?
                    </button>
                  </h2>
                  <div
                    id="collapseSixth"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                     <p> Absolutely! I can develop custom features tailored to your business needs, including third-party API integrations, admin panels, booking systems, and more.</p>
                    </div>
                  </div>
                </div>
                {/* seventh accordion */}
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="true"
                      aria-controls="collapseSeven"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       Do you work with international clients?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                     <p> Yes, I’ve worked with clients
                    globally and can easily manage projects across time zones with smooth communication and regular updates.</p>
                    </div>
                  </div>
                </div>
                {/* Eighth accordion */}
                <div
                  className="accordion-item"
                  style={{
                    width: "92%",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className= "fw-bold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEighth"
                      aria-expanded="true"
                      aria-controls="collapseEighth"
                      style={{
                        width: "92%",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                      }}
                    >
                       How can I get a quote for my project?
                    </button>
                  </h2>
                  <div
                    id="collapseEighth"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                    style={{
                      width: "92%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <div
                      className="accordion-body fst-italic fw-lighter"
                      style={{ width: "92%", color: "white" }}
                    >
                     <p> Just head to the Contact Me section or send me an email with your requirements. I’ll get back to you within 24 hours with a personalized proposal.</p>
                    </div>
                  </div>
                </div>

                {/* Additional accordion items here */}
              </div>
            </div>
          </div>
          <div className="col-md-4 order-1 order-md-2">
            <img className="faqImage" src={FaqImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
