import React from "react";
import "../../CSSFile/OtherCSSFile/Whychooseus.css";
const Whychooseus = () => {
  return (
    <>
      <div className="p-3 mt-5">
        <div>
          <div className={`container bg-transparent`} style={{ width: "100%", height: "100%", }}>
            <div className={`row bg-transparent`}>
              <span className="bg-transparent">
                <h2 className="Whyus_head bg-transparent">WHY US</h2>
              </span>
              <p className={`col-md-12 fs-1 Whyus bg-transparent`}>
                <span className={`Whyus_word bg-transparent`}>Innovation</span>{" "}
                drives us. We are always up-to-date with the latest technologies
                and trends to ensure your project benefits from the best and
                most efficient solutions available.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Whychooseus;
