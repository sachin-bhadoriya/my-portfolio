// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "../../CSSFile/OtherCSSFile/Testimonials.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "./TestimonialSlider.css";

const testimonials = [
  {
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "They handled everything flawlessly from start to finish. Communication was clear and effective.",
    position: "CEO, TechCorp",
    website: "www.yourwebsite.com",
    stars: 3,
  },
   {
    name: "Emma Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Amazing service and great communication. I highly recommend them to anyone looking for reliable solutions.",
    position: "Founder, StartupX",
    website: "www.startupx.io",
    stars: 5,
  },
  {
    name: "Liam Brown",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "Their team exceeded my expectations and delivered outstanding results on time. Fantastic experience!",
    position: "CTO, Innovatech",
    website: "www.innovatech.org",
    stars: 4,
  },
  {
    name: "Olivia Davis",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    quote:
      "The professionalism and attention to detail were top-notch. I will definitely work with them again.",
    position: "Marketing Head, Brandify",
    website: "www.brandify.net",
    stars: 5,
  },
  {
    name: "Jane Doe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Excellent work and timely delivery. Highly recommended!",
    position: "Marketing Head, Creatives Inc.",
    website: "www.clientsite.com",
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section container">
      <h2 className="why_head mb-3">OUR CLIENTS SAYS</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={40}
        loop={true}
        slidesPerView={1}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-container">
              <div className="testimonial-card">
                <div className="testimonial-photo-container">
                  <div className="testimonial-photo">
                    <img src={t.image} alt={t.name} className="" />
                    <p className="testimonial-name">{t.name}</p>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <p className="testimonial-position">{t.position}</p>
                  <p className="testimonial-website">{t.website}</p>
                  <div className="testimonial-stars">
                    {"★".repeat(t.stars)}
                    {"☆".repeat(5 - t.stars)}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
