import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "../styles/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { ArrowRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Aaditya Goswami",
    rating: 5,
    review:
      "Great place to build skills in AI, ML, and web development with expert guidance and a friendly environment.",
  },
  {
    name: "Ayush Nagar",
    rating: 5,
    review:
      "Best training and placement centre for AI/ML and web development. The faculty is experienced and very supportive.",
  },
  {
    name: "Karuna Kumawat",
    rating: 5,
    review:
      "Amazing experience so far. The teachers explain every concept clearly and always help with doubts.",
  },
  {
    name: "Arbaz Khan",
    rating: 5,
    review:
      "Best programming institute in Dewas. The teaching style is practical and easy to follow.",
  },
  {
    name: "Harsh Chouhan",
    rating: 5,
    review:
      "One of the best training centers with supportive staff, amazing teaching, and a great learning experience.",
  },
  {
    name: "Zikra khan Zikra khan",
    rating: 5,
    review:
      "Avion Training and Placement Centre is a great institute for career growth. The faculty is very supportive, experienced, and always ready to help students. I highly recommend it.❤️",
  },
];

export default function GoogleReviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-shell">
        <div className="reviews-header">
          <div className="reviews-heading">
            <p className="section-eyebrow">Student stories</p>
            <h2>Reviews that reflect real growth</h2>
            <p>
              Learners trust Avion for hands-on training, career guidance, and a
              supportive learning environment that keeps pushing them forward.
            </p>
          </div>

          <div className="reviews-badges">
            <div className="reviews-badge-card">
              <span className="reviews-badge-number">5/5</span>
              <span className="reviews-badge-label">average rating</span>
            </div>
            <div className="reviews-badge-card">
              <span className="reviews-badge-number">500+</span>
              <span className="reviews-badge-label">happy learners</span>
            </div>
          </div>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          loop
          slidesPerView={"auto"}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 28,
            stretch: 0,
            depth: 180,
            modifier: 1.5,
            slideShadows: false,
            scale: 0.82,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="reviewSwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <div className="review-card-top">
                  <div className="review-quote">
                    <Quote size={16} />
                  </div>
                  <div className="stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#9FEF00" color="#9FEF00" />
                    ))}
                  </div>
                </div>

                <p className="review-text">“{item.review}”</p>

                <div className="review-user">
                  <div className="avatar">{item.name.charAt(0)}</div>

                  <div>
                    <h4>{item.name}</h4>
                    <span>Google Review</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href="https://maps.app.goo.gl/g2LFYgPMFDcD3JED7"
          target="_blank"
          rel="noreferrer"
          className="review-btn"
        >
          View all reviews
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
