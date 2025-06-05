// import React from 'react';
import Navbar from './OtherJSX/Navbar';
// import Top from './TopVideo/Top'
import About from './About/About'
import Service from './Service/Service'
// import Work from './Work/Work'
import WhyUs from './WhyUs/Whychooseus'
import Process from './Process/Process'
import Faq from './FAQ/Faq'
import Testimonials from './Testimonials/Testimonials'
import Footer from './OtherJSX/Footer';
import TopNew from './TopVideo/TopNew';


const Home = () => {
  return (
    <div>
      <Navbar />
      <TopNew />
      {/* <Top /> */}
      <About />  {/* complete */}
      <Service />
      {/* <Work /> */}
      <WhyUs /> {/* complete */}
      <Process /> {/* complete */}
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home