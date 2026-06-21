import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE =
  "Best Python, MERN Stack & Web Development Training in Dewas | AVION Academy";

const DEFAULT_DESCRIPTION =
  "Get hands-on coding training, live projects, and 100% placement support. Enroll today to launch your tech career! Master Python, MERN Stack, Web Development, AI & Machine Learning with industry-focused training and placement assistance at AVION Training & Placement Centre.";

const DEFAULT_KEYWORDS =
  "AI/ML training institute near me, AVION TRAINING AND PLACEMENT CENTRE, BEST PROGRAMMING INSTITUTE IN DEWAS, AI/ML INSTITUTE IN DEWAS, AI COURSE IN DEWAS, Python Training Dewas, MERN Stack Training Dewas, Web Development Course Dewas, Django Training, React Training, AI Course Dewas, Machine Learning Course Dewas, Data Science Course Dewas, Full Stack Development Dewas, Programming Institute Dewas, Coding Bootcamp Dewas, Software Development Training Dewas, IT Training Institute Dewas, Career in Tech Dewas, Placement Assistance Dewas, Tech Skills Training Dewas, Online Programming Course Dewas, Web Development Bootcamp Dewas, UI/UX Design Course Dewas, Mobile App Development Course Dewas, Cloud Computing Training Dewas, Cybersecurity Course Dewas, DevOps Training Dewas, Digital Marketing Course Dewas, Software Engineering Course Dewas, IT Certification Courses Dewas, Tech Career Guidance Dewas, Coding Classes for Beginners Dewas, Advanced Programming Courses Dewas, Tech Workshops and Seminars Dewas";

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = "/og-image.jpg",
  noIndex = false,
}) {
  const location = useLocation();

  const siteUrl =
    import.meta.env.VITE_SITE_URL || "https://avionacademy.co.in";

  const canonicalUrl = `${siteUrl}${location.pathname}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${siteUrl}${image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "AVION Academy",
    url: siteUrl,
    description,
    logo: `${siteUrl}/assets/avion-logo.png`,
    image: imageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dewas",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/your-instagram",
      "https://www.facebook.com/your-facebook",
      "https://www.linkedin.com/company/your-linkedin"
    ]
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AVION Academy" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default SEO;