import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_NAME = "AVION Academy";
const DEFAULT_TITLE =
  "AVION | The Best AI/ML, Python & Web Dev Training in Dewas";

const DEFAULT_DESCRIPTION =
  "Master AI/Ml, Full-Stack, Web Development with MERN stack. Get hands-on training, live projects, and 100% placement support. Join now and boost your career!";

const DEFAULT_KEYWORDS =
  "AI/ML training institute near me, AVION TRAINING AND PLACEMENT CENTRE, BEST PROGRAMMING INSTITUTE IN DEWAS, AI/ML INSTITUTE IN DEWAS, AI COURSE IN DEWAS, Python Training Dewas, MERN Stack Training Dewas, Web Development Course Dewas, Django Training, React Training, AI Course Dewas, Machine Learning Course Dewas, Data Science Course Dewas, Full Stack Development Dewas, Programming Institute Dewas, Coding Bootcamp Dewas, Software Development Training Dewas, IT Training Institute Dewas, Career in Tech Dewas, Placement Assistance Dewas, Tech Skills Training Dewas, Online Programming Course Dewas, Web Development Bootcamp Dewas, UI/UX Design Course Dewas, Mobile App Development Course Dewas, Cloud Computing Training Dewas, Cybersecurity Course Dewas, DevOps Training Dewas, Digital Marketing Course Dewas, Software Engineering Course Dewas, IT Certification Courses Dewas, Tech Career Guidance Dewas, Coding Classes for Beginners Dewas, Advanced Programming Courses Dewas, Tech Workshops and Seminars Dewas";

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = "/og-image.jpg",
  noIndex = false,
  faqItems = [],
}) {
  const location = useLocation();

  const siteUrl = import.meta.env.VITE_SITE_URL || "https://avionacademy.co.in";
  const canonicalUrl = new URL(location.pathname, siteUrl).toString();
  const imageUrl = image.startsWith("http")
    ? image
    : new URL(image, siteUrl).toString();
  const pageTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    alternateName: "Avion Training and Placement Centre",
    url: siteUrl,
    description,
    logo: `${siteUrl}/assets/avion-logo.png`,
    image: imageUrl,
    email: "avionacademyplacement@gmail.com",
    telephone: "+91-88786-65826",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dewas",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: ["Dewas", "Madhya Pradesh", "India"],
    sameAs: [
      "https://www.instagram.com/avion_training_placement",
      "https://www.facebook.com/share/1GyEr9kyd4/",
      "https://www.linkedin.com/company/avion-training-and-placement-centre/",
    ],
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonicalUrl,
    name: pageTitle,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: siteUrl,
    },
  };

  const faqSchema = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{pageTitle}</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon-16x16.png"
      />
      <link
        href="/assets/android-chrome-192x192.png"
        rel="icon"
        sizes="192x192"
      />
      <link
        href="/assets/android-chrome-512x512.png"
        rel="icon"
        sizes="512x512"
      />
      <link rel="manifest" href="/assets/site.webmanifest" />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AVION Academy" />
      <meta name="theme-color" content="#020711" />

      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@AvionAcademy" />
      <meta name="twitter:creator" content="@AvionAcademy" />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Schema */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      {faqSchema ? (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      ) : null}
    </Helmet>
  );
}

export default SEO;
