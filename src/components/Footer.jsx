import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
  { label: "GitHub", icon: Github }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000814]">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
              className="w-36 object-cover h-auto object-center"
              src="/assets/logo.png"
              alt="Futuristic Avion academy technology environment"
            />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            A futuristic training and placement ecosystem for learners who want practical skills, career confidence, and measurable growth.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ label, icon: Icon }) => (
              <button className="icon-btn" key={label} aria-label={label}>
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            <Link to="/courses">Courses</Link>
            <Link to="/placements">Placements</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            <span className="flex gap-2"><Phone size={16} /> +91 88786 65826</span>
            <span className="flex gap-2"><Mail size={16} /> hello@avionacademy.in</span>
            <span className="flex gap-2"><MapPin size={16} /> Training & Placement Centre</span>
            <a className="flex gap-2 text-avion-green" href="https://wa.me/9188778665826" target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © 2026 Avion Training & Placement Centre. Built for Phase 1 ERP launch.
      </div>
    </footer>
  );
}
