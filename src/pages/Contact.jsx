import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";

const faqItems = [
  {
    question: "What courses does AVION Academy offer?",
    answer:
      "AVION Academy offers training in Python, MERN Stack, web development, AI/ML, digital marketing, and related career-focused technology programs.",
  },
  {
    question: "Is AVION Academy suitable for beginners?",
    answer:
      "Yes. The academy provides beginner-friendly learning paths as well as advanced training for learners who want to strengthen their technical skills.",
  },
  {
    question: "Do you provide placement support?",
    answer:
      "Yes. The academy focuses on placement readiness through project-based learning, interview preparation, and career guidance support.",
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact AVION Academy | Book a Free Demo in Dewas"
        description="Contact AVION Academy in Dewas to book a free demo, discuss courses, or speak with our placement team for career guidance and admission support."
        faqItems={faqItems}
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Book a free demo or talk to the placement desk."
              text="Visit AVION Academy in Dewas to discuss your career goals, ask about our courses, or book a free demo session with our team."
            />
            <div className="mt-8 grid gap-4">
              <GlassCard className="flex gap-4 p-5">
                <Phone className="text-avion-green" /> +91 88786 65826
              </GlassCard>
              <GlassCard className="flex gap-4 p-5">
                <Mail className="text-avion-green" />{" "}
                avionacademyplacement@gmail.com
              </GlassCard>
              <GlassCard className="flex gap-4 p-5">
                <MapPin className="text-avion-green" /> Avion Training &
                Placement Centre
              </GlassCard>
              <a
                className="btn btn-primary w-fit"
                href="https://wa.me/918878665826"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <MessageCircle size={18} />
              </a>
            </div>
            <GlassCard className="mt-8 grid h-64 place-items-center p-6 text-center text-white/60">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.787105145875!2d76.04302710000002!3d22.958066400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317ae06154b81%3A0x7f58587c081a0079!2sAvion%20Training%20and%20Placement%20Centre!5e0!3m2!1sen!2sin!4v1782108188946!5m2!1sen!2sin"
                loading="lazy"
                className="filter grayscale contrast(1.3) opacity(0.4)"
              ></iframe>
            </GlassCard>

            <div className="mt-8">
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions about learning at AVION Academy"
              />
              <div className="mt-6 grid gap-4">
                {faqItems.map((item) => (
                  <GlassCard className="p-5" key={item.question}>
                    <h3 className="text-lg font-black">{item.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {item.answer}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
          <GlassCard className="p-6">
            <form className="grid gap-5">
              <div>
                <label className="label">Name</label>
                <input className="input" placeholder="Your name" />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="label">Course Interest</label>
                <select className="select">
                  <option>MERN Stack</option>
                  <option>AI & ML</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className="label">Message</label>
                <textarea
                  className="textarea"
                  placeholder="Tell us what you want to learn"
                />
              </div>
              <button className="btn btn-primary justify-center" type="button">
                Send Enquiry <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
