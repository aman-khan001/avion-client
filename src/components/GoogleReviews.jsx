import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "../styles/style.css"
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    review:
      "Best AI & Full Stack Development institute in Dewas. Trainers explain every concept practically.",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    review:
      "Amazing learning environment. Highly recommended for Python and MERN Stack.",
  },
  {
    name: "Harsh Verma",
    rating: 5,
    review:
      "Professional faculty, project-based learning, and placement guidance. Worth joining.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review:
      "One of the best coaching institutes in Dewas for technology courses.",
  },
  {
    name: "Aman Khan",
    rating: 5,
    review:
      "Excellent atmosphere with practical sessions and real-world projects.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="reviews-section">
      <div className="title">
        <h2>Google Reviews</h2>

        <p>
          ⭐ 5 Rating Based on Google Reviews
        </p>
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

              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#9FEF00"
                    color="#9FEF00"
                  />
                ))}
              </div>

              <p className="review-text">
                "{item.review}"
              </p>

              <div className="review-user">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

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
        href="https://maps.app.goo.gl/dSU9BRdxZnQFDMLz7"
        target="_blank"
        rel="noreferrer"
        className="review-btn"
      >
        View All Reviews →
      </a>
    </section>
  );
}