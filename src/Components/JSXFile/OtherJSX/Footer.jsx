import React from "react";
import { Link } from "react-router-dom";
import "../../CSSFile/FooterCSS/Footer.css"
const Footer = () => {
  return (
    <div>
      <div className="bg-transparent  container-fluid mt-2">
        <footer
          className=" text-center text-lg-start text-white"
          style={{
            // backgroundImage: "url('https://img.freepik.com/free-vector/abstract-purple-wavy-modern-light-background_361591-1419.jpg?uid=R146873037&ga=GA1.1.2057327373.1738314716&semt=ais_hybrid&w=740')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            background: "linear-gradient(135deg, #431e1e, #2d2a55)",
            paddingTop: "40px",
            paddingBottom: "20px",
            borderRadius: "30px 30px 0 0"
          }}
        >
          <div className="bg-transparent container ">
            <section className="bg-transparent">
              <div className="bg-transparent row">
                <div className="bg-transparent col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="bg-transparent text-uppercase mt-3 font-weight-bold fs-4">
                    SACHIN BHADORIYA
                  </h6>
                  <p className="bg-transparent">
                    Full-Stack Developer & Founder of a digital agency. I build
                    high-performance web and mobile apps using the MERN stack
                    with a focus on clean code and powerful user experiences.
                  </p>
                </div>

                <hr className="bg-transparent w-100 clearfix d-md-none" />

                <div className="bg-transparent col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="bg-transparent text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p className="bg-transparent">
                    <Link className="bg-transparent text-white text-decoration-none ">
                      About Me
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent text-white text-decoration-none ">
                      Projects
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent text-white text-decoration-none ">
                      Contact
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent text-white text-decoration-none ">
                      Tools
                    </Link>
                  </p>
                </div>

                <hr className="bg-transparent w-100 clearfix d-md-none" />

                <div className="bg-transparent col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
                  <h6 className="bg-transparent text-uppercase mb-4 font-weight-bold">
                    Services
                  </h6>
                  <p className="bg-transparent">
                    <Link className="bg-transparent text-decoration-none text-white">
                      Frontend Development
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent text-white text-decoration-none ">
                      Backend Development
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent  text-decoration-none text-white">
                      Mobile App Development
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent  text-decoration-none text-white">
                      Custom Web Application Development
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent  text-decoration-none text-white">
                      Digital Agency Solutions
                    </Link>
                  </p>
                  <p className="bg-transparent">
                    <Link className="bg-transparent  text-decoration-none text-white">
                      Social Media Marketing
                    </Link>
                  </p>
                </div>

                <hr className="bg-transparent w-100 clearfix d-md-none" />

                <div className="bg-transparent col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="bg-transparent text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p className="bg-transparent">
                    <i className="bg-transparent fas fa-home mr-3"></i> Gwalior,
                    Madhya Pradesh, India
                  </p>
                  <p className="bg-transparent">
                    <i className="bg-transparent fas fa-envelope mr-3"></i>{" "}
                    bhadoriyasachin33@gmail.com
                  </p>
                  <p className="bg-transparent">
                    <i className="bg-transparent fas fa-phone mr-3"></i> +91 987
                    654 3210
                  </p>
                  <p className="bg-transparent">
                    <i className="bg-transparent fas fa-print mr-3"></i> +91 987
                    654 3210
                  </p>
                </div>
              </div>
            </section>

            <hr className="bg-transparent my-3" />

            <section className="bg-transparent p-3 pt-0">
              <div className="bg-transparent row d-flex align-items-center">
                <div className="bg-transparent col-md-7 col-lg-8 text-center text-md-start">
                  <div className="bg-transparent p-3">
                    © 2025 Copyright&nbsp;:&nbsp;
                    <Link className="bg-transparent  text-white text-decoration-none">
                      Sachin Bhadoriya
                    </Link>
                  </div>
                </div>
                <div className="bg-transparent col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <Link
                    className="bg-transparent  btn btn-outline-light btn-floating m-1"
                    role="button"
                  >
                    <i className="bg-transparent fab fa-facebook-f"></i>
                  </Link>

                  <Link
                    className="bg-transparent  btn btn-outline-light btn-floating m-1"
                    role="button"
                  >
                    <i className="bg-transparent fab fa-twitter"></i>
                  </Link>

                  <Link
                    className="bg-transparent  btn btn-outline-light btn-floating m-1"
                    role="button"
                  >
                    <i className="bg-transparent fab fa-google"></i>
                  </Link>

                  <Link
                    className="bg-transparent  btn btn-outline-light btn-floating m-1"
                    role="button"
                  >
                    <i className="bg-transparent fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
