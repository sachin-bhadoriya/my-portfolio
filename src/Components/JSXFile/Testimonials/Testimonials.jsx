// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "../../CSSFile/OtherCSSFile/Testimonials.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "./TestimonialSlider.css";

const testimonials = [
  {
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    position: "CEO, TechCorp",
    website: "www.yourwebsite.com",
    stars: 2.8,
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
        modules={[Autoplay, Pagination]}
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
