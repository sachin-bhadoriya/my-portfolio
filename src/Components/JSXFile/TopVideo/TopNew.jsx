import React from "react";
import TopNewVideo from "../../../assets/video/TopNew.mp4";
import "../../CSSFile/OtherCSSFile/TopNew.css";

const TopNew = () => {
  return (
    <div className="videoAttachment">
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
          src={TopNewVideo}
        />

        <div className="overlay-content">
          <div className="topVideoContent bg-transparent">
            <p className="top-small bg-transparent design">
              From Code to Product
            </p>
            <p className="top-main bg-transparent design">
              Hi!, I am <br />{" "}
              <b className="top-main-big bg-transparent design fs-xxxlarge">
                SACHIN BHADORIYA
              </b>
            </p>
            <p className="top-bottom bg-transparent design fw-bold">
              Your Go-To Expert for Frontend, Backend & App Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNew;
