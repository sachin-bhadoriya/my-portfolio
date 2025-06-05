import React from "react";
import "../../CSSFile/OtherCSSFile/Process.css";
import whyImage from "../../../assets/images/whybg.png";

const Whychooseus = () => {
  // dynamic color changing
  const getColor = (index) => {
    const colors = ["#279FF0", "#9894FF", "#CE73FF", "#F29C11"];
    return colors[index % colors.length]; // repeat colors
  };

  // data from props
  const Whymaterialdata = [
    { no: 1, heading: "Requirement Gathering" },
    { no: 2, heading: "Sitemap & Wireframe" },
    { no: 3, heading: "Designing (UI/UX in Figma)" },
    { no: 4, heading: "Client Approval" },
    { no: 5, heading: "Development" },
    { no: 6, heading: "Testing & QA" },
    { no: 7, heading: "Client Review & Final Change" },
    { no: 8, heading: "Deployment" },
  ];

  return (
    <>
      <div
      style={{
            backgroundImage: `url(${whyImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "400px", 
            padding: "60px 20px", 
            // borderRadius: "30px", 
          }}
          >
        <div className="bg-transparent container">
          <div className="bg-transparent row">
            <div className="bg-transparent col-sm-6">
              <h2 className="bg-transparent why_head">HOW WE WORK</h2>
            </div>

            <div className="bg-transparent col-sm-6">
              <div className="bg-transparent row">
                {Whymaterialdata.map((item, index) => (
                  <div className="bg-transparent col-md-12 why_content" key={index}>
                    <div className="bg-transparent why_content_no">
                      <h1 style={{ color: getColor(index) }}>{item.no}</h1>
                    </div>
                    <div className="bg-transparent why_content_material">
                      <h1 className="bg-transparent">{item.heading}</h1>
                      {/* <p>Lorem ipsum dolor sit amet.</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Whychooseus;
