import React from 'react'
import '../../CSSFile/OtherCSSFile/Top.css'

const Top = () => {
  return (
    <>
      <div className="container bg-transparent my-5">
        <div className="row bg-transparent">
          <div className="col-sm-6 bg-transparent top-video-div order-1">
            <div className="top-video "></div>
          </div>
          <div className="col-sm-6 bg-transparent top-content order-2">
            <div className='top-small bg-transparent'>From Code to Product</div>
            <div className='top-main bg-transparent'>Hi!, I am <br /> <b className='top-main-big bg-transparent fs-xxlarge'>Sachin Bhadoriya</b></div>
            <div className='top-bottom bg-transparent'>Your Go-To Expert for Frontend, Backend & App Development</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top