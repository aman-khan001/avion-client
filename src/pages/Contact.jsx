import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Contact() {
  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Book a free demo or talk to the placement desk." />
          <div className="mt-8 grid gap-4">
            <GlassCard className="flex gap-4 p-5"><Phone className="text-avion-green" /> +91 88786 65826</GlassCard>
            <GlassCard className="flex gap-4 p-5"><Mail className="text-avion-green" /> avionacademyplacement@gmail.com</GlassCard>
            <GlassCard className="flex gap-4 p-5"><MapPin className="text-avion-green" /> Avion Training & Placement Centre</GlassCard>
            <a className="btn btn-primary w-fit" href="https://wa.me/918878665826" target="_blank" rel="noreferrer">
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
        </div>
        <GlassCard className="p-6">
          <form className="grid gap-5">
            <div>
              <label className="label">Name</label>
              <input className="input" placeholder="Your name" />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label">Course Interest</label>
              <select className="select"><option>MERN Stack</option><option>AI & ML</option><option>Digital Marketing</option></select>
            </div>
            <div>
              <label className="label">Message</label>
              <textarea className="textarea" placeholder="Tell us what you want to learn" />
            </div>
            <button className="btn btn-primary justify-center" type="button">
              Send Enquiry <Send size={18} />
            </button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
