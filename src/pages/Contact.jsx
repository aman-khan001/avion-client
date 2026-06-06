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
            <GlassCard className="flex gap-4 p-5"><Phone className="text-avion-green" /> +91 90000 00000</GlassCard>
            <GlassCard className="flex gap-4 p-5"><Mail className="text-avion-green" /> hello@avionacademy.in</GlassCard>
            <GlassCard className="flex gap-4 p-5"><MapPin className="text-avion-green" /> Avion Training & Placement Centre</GlassCard>
            <a className="btn btn-primary w-fit" href="https://wa.me/919000000000" target="_blank" rel="noreferrer">
              WhatsApp Integration <MessageCircle size={18} />
            </a>
          </div>
          <GlassCard className="mt-8 grid h-64 place-items-center p-6 text-center text-white/60">
            Google Maps embed placeholder
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
