import React from "react";
import htmlIcon from "../../../assets/images/html.png";
import bootstrap from "../../../assets/images/bootstrap.png";
import css from "../../../assets/images/css.png";
import javascript from "../../../assets/images/javascript.png";
import react from "../../../assets/images/react.png";
import nodejs from "../../../assets/images/nodejs.png";
import photoshop from "../../../assets/images/photoshop.png";
import premierpro from "../../../assets/images/premierpro.png";
import illustrator from "../../../assets/images/illustrator.png";
import wordpress from "../../../assets/images/wordpress.png";
import figma from "../../../assets/images/figma.png";
import native from "../../../assets/images/native.png";
import '../../CSSFile/OtherCSSFile/Service.css';
import bg1 from '../../../assets/images/bg1.png';

const Service = () => {
  const Bgstyle = {
  backgroundImage: `url(${bg1})`,
  backgroundRepeat: 'no-repeat',
  height: '50px',
  width: '50px',
}

  return (
    <div className="container">
      <div className="why_head">WHAT WE USED</div>
      <div className="text-center">
        <p className="fs-4">
          The skills, tools and technologies I use :
        </p>
        <div className="d-flex skills-row gap-2 justify-content-center my-2">
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={htmlIcon} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={css} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={bootstrap} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={javascript} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={react} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={nodejs} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={native} width={70} /></div>
        </div>
        <div className="d-flex skills-row gap-2 justify-content-center my-2">
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={photoshop} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={premierpro} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={illustrator} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={wordpress} width={70} /></div>
          <div className="ImgstyleBox"><img className="p-2 m-2 Imgstyle" src={figma} width={70} /></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
