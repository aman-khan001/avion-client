import { ArrowRight, Quote, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import OrbitCard from "./components/OrbitCard.jsx";
import OrbitEngineProvider from "./providers/OrbitEngineProvider.jsx";
import useEngine from "./hooks/useEngine";
import defaultReviews from "./reviews.js";
import "./orbit.css";

function ReviewCardContent({ review }) {
  const initials = review.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      className="orbit-card__article"
      aria-label={`Review by ${review.name}`}
    >
      <div className="orbit-card__top">
        <div className="orbit-card__quote" aria-hidden="true">
          <Quote size={16} />
        </div>
        <div
          className="orbit-card__stars"
          role="img"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: review.rating }, (_, index) => (
            <Star key={index} size={16} fill="#9FEF00" color="#9FEF00" />
          ))}
        </div>
      </div>

      <p className="orbit-card__text">&ldquo;{review.text}&rdquo;</p>

      <footer className="orbit-card__footer">
        <div className="orbit-card__avatar" aria-hidden="true">
          {review.avatar ? (
            <img src={review.avatar} alt="" />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <div className="orbit-card__meta">
          <h3>{review.name}</h3>
          <p>
            {review.date ? `Reviewed on ${review.date}` : "Verified learner"}
          </p>
        </div>
      </footer>
    </article>
  );
}

function OrbitReviewsStage({ reviews, ctaHref }) {
  const engine = useEngine();

  const handlePointerEnter = () => {
    engine.stop();
  };

  const handlePointerLeave = () => {
    engine.start();
  };

  return (
    <>
      <div
        className="orbit-stage"
        aria-live="polite"
        aria-label="Student reviews carousel"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div className="orbit-stage__inner">
          <div className="orbit-stage__glow" aria-hidden="true" />
          {reviews.map((review) => (
            <OrbitCard key={review.id} className="orbit-card">
              <ReviewCardContent review={review} />
            </OrbitCard>
          ))}
        </div>
      </div>

      <a
        href={ctaHref}
        target="_blank"
        rel="noreferrer"
        className="orbit-reviews__cta"
      >
        View all reviews
        <ArrowRight size={18} />
      </a>
    </>
  );
}

function getResponsiveRadius(width) {
  if (width < 640) return 190;
  if (width < 768) return 230;
  if (width < 1024) return 290;
  return 380;
}

export default function OrbitReviews({
  reviews = defaultReviews,
  speed = 0.5,
  perspective = 1800,
  className = "",
  heading = "Reviews that reflect real growth",
  description = "Learners trust Avion for hands-on training, career guidance, and a supportive learning environment that keeps pushing them forward.",
  ctaHref = "https://maps.app.goo.gl/g2LFYgPMFDcD3JED7",
}) {
  const [radius, setRadius] = useState(() =>
    typeof window !== "undefined"
      ? getResponsiveRadius(window.innerWidth)
      : 380,
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  const safeReviews = useMemo(
    () =>
      Array.isArray(reviews) && reviews.length > 0 ? reviews : defaultReviews,
    [reviews],
  );

  useEffect(() => {
    const updateRadius = () => {
      setRadius(getResponsiveRadius(window.innerWidth));
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    applyPreference();
    mediaQuery.addEventListener("change", applyPreference);

    return () => {
      mediaQuery.removeEventListener("change", applyPreference);
    };
  }, []);

  return (
    <section
      className={`orbit-reviews ${reducedMotion ? "orbit-reviews--reduced-motion" : ""} ${className}`.trim()}
      style={{
        "--orbit-perspective": `${perspective}px`,
        "--orbit-radius": `${radius}px`,
      }}
    >
      <div className="orbit-reviews__shell">
        <div className="orbit-reviews__header">
          <div className="orbit-reviews__heading">
            <p className="section-eyebrow">Student stories</p>
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>

          <div className="orbit-reviews__badges">
            <div className="orbit-reviews__badge">
              <span className="orbit-reviews__badge-value">5/5</span>
              <span className="orbit-reviews__badge-label">average rating</span>
            </div>
            <div className="orbit-reviews__badge">
              <span className="orbit-reviews__badge-value">500+</span>
              <span className="orbit-reviews__badge-label">happy learners</span>
            </div>
          </div>
        </div>

        <OrbitEngineProvider
          radius={radius}
          speed={speed}
          perspective={perspective}
          reducedMotion={reducedMotion}
        >
          <OrbitReviewsStage reviews={safeReviews} ctaHref={ctaHref} />
        </OrbitEngineProvider>
      </div>
    </section>
  );
}
