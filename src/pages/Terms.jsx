import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions - Avion Training & Placement Centre"
        description="Review the terms and conditions for using Avion Training & Placement Centre services, including course enrollments and website use."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Terms & Conditions"
            title="Important information for students and visitors"
            text="Please read these terms carefully before using our services or submitting your registration."
          />

          <div className="mt-8 space-y-8 rounded-3xl border border-white/10 bg-[#07131f] p-8 text-sm text-white/70 shadow-xl">
            <div>
              <h2 className="text-lg font-semibold text-white">
                1. Acceptance of terms
              </h2>
              <p className="mt-3 leading-7">
                By accessing or using the Avion Training & Placement Centre
                website and services, you agree to be bound by these Terms &
                Conditions. If you do not agree, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                2. Registration and eligibility
              </h2>
              <p className="mt-3 leading-7">
                All students must provide accurate and complete information
                during registration. Avion reserves the right to reject or
                remove any registration that contains false or misleading
                details.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                3. Use of personal information
              </h2>
              <p className="mt-3 leading-7">
                We collect personal information as part of registration and
                communication. Your details are used only for course
                administration, placement support, and related student services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                4. Intellectual property
              </h2>
              <p className="mt-3 leading-7">
                All content on this website, including text, images, logos, and
                course materials, is owned by Avion Training & Placement Centre
                or its licensors. You may not copy or distribute this content
                without permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                5. Limitation of liability
              </h2>
              <p className="mt-3 leading-7">
                Avion Training & Placement Centre is not liable for any
                indirect, incidental, or consequential losses that arise from
                using our website or participating in our courses.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                6. Changes to terms
              </h2>
              <p className="mt-3 leading-7">
                We may update these Terms & Conditions at any time. Continued
                use of the website after changes are posted indicates acceptance
                of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
