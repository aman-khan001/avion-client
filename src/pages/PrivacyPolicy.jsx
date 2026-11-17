import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: ["When you submit an enquiry or registration form, we may collect:"],
    items: [
      "Full name",
      "Mobile number",
      "Email address",
      "Educational qualification",
      "Course of interest",
      "Location",
      "Other information you choose to provide",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: ["We collect your information to:"],
    items: [
      "Respond to your course-related enquiries.",
      "Provide information about our training programs and courses.",
      "Share course fees, admission details, and batch schedules.",
      "Provide placement-related information and career guidance.",
      "Contact you by phone, SMS, WhatsApp, or email.",
      "Improve our training and placement services.",
    ],
  },
  {
    title: "3. Data Sharing and Security",
    paragraphs: [
      "We do not sell, rent, or trade your personal information to third parties.",
      "Your information may be accessed by authorized team members of Avion Training and Placement Centre and trusted service providers when necessary to provide our services.",
      "We take reasonable measures to protect your personal information against unauthorized access, misuse, or disclosure.",
    ],
  },
  {
    title: "4. Facebook and Instagram Lead Ads",
    paragraphs: [
      "If you submit your details through our Facebook or Instagram advertisements, the information you provide will be shared with Avion Training and Placement Centre.",
      "We may use this information to contact you regarding your selected course, training opportunities, admissions, and placement assistance.",
      "Your information will be handled in accordance with this Privacy Policy and applicable data protection laws.",
    ],
  },
  {
    title: "5. Communication Preferences",
    paragraphs: [
      "By submitting your details, you agree that our team may contact you regarding your enquiry and relevant courses through phone calls, WhatsApp messages, SMS, or email.",
      "You may request to stop receiving promotional communications at any time.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "We retain your personal information only for as long as necessary to fulfil the purposes described in this policy or as required by applicable laws.",
    ],
  },
  {
    title: "7. Your Privacy Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of your personal information by contacting us.",
    ],
  },
  {
    title: "8. Updates to This Privacy Policy",
    paragraphs: [
      "Avion Training and Placement Centre reserves the right to update this Privacy Policy whenever necessary. Any changes will be published on this page with the revised update date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy - Avion Training and Placement Centre"
        description="Learn how Avion Training and Placement Centre collects, uses, and protects your personal information."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Privacy Policy"
            title="Your privacy matters to us"
            text="At Avion Training and Placement Centre, we respect your privacy and are committed to protecting the personal information you share with us through our website, Facebook and Instagram Lead Ads, enquiry forms, WhatsApp, and other communication channels."
          />

          <div className="mt-8 space-y-8 rounded-3xl border border-white/10 bg-[#07131f] p-8 text-sm text-white/70 shadow-xl">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-white">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p className="mt-3 leading-7" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section>
              <h2 className="text-lg font-semibold text-white">9. Contact Us</h2>
              <p className="mt-3 leading-7">
                For questions, concerns, or requests related to your personal
                information, contact Avion Training and Placement Centre:
              </p>
              <ul className="mt-3 space-y-2 leading-7">
                <li>
                  Phone / WhatsApp:{" "}
                  <a className="text-avion-green hover:underline" href="tel:+918878665826">
                    +91 88786 65826
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    className="text-avion-green hover:underline"
                    href="mailto:avionacademyplacement@gmail.com"
                  >
                    avionacademyplacement@gmail.com
                  </a>
                </li>
                <li>
                  Website:{" "}
                  <a
                    className="text-avion-green hover:underline"
                    href="https://avionacademy.co.in/"
                  >
                    avionacademy.co.in
                  </a>
                </li>
              </ul>
              <p className="mt-3 leading-7">
                Your trust matters to us. We are committed to protecting your
                privacy while helping you build a successful career.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
