import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
  { label: "GitHub", icon: Github },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000814]">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            className="w-36 object-cover h-auto object-center"
            src="/assets/avion-logo.png"
            loading="lazy"
            alt="Futuristic Avion academy technology environment"
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            Leading programming training and placement center. Master Web
            Development or AI/ML with industry experts and secure your dream
            tech job. Start learning today!
          </p>
          <div className="mt-5 flex gap-3">
            <a
              className="icon-btn"
              key={Instagram}
              aria-label={Instagram}
              href="https://www.instagram.com/avion_training_placement"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} />
            </a>

            <a
              className="icon-btn"
              key={Facebook}
              aria-label={Facebook}
              href="https://www.facebook.com/share/1GyEr9kyd4/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              className="icon-btn"
              key={Linkedin}
              aria-label={Linkedin}
              href="https://www.linkedin.com/company/avion-training-and-placement-centre/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
            </a>

            <a
              className="icon-btn"
              key={Github}
              aria-label={Github}
              href="https://github.com/avion-code"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            <Link to="/courses">Courses</Link>
            <Link to="/placements">Placements</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            <span className="flex gap-2">
              <Phone size={16} /> +91 88786 65826
            </span>
            <span className="flex gap-2">
              <Mail size={16} /> avionacademyplacement@gmail.com
            </span>
            <span className="flex gap-2">
              <MapPin size={16} /> 145/A, Kalani Bagh, Dewas, Madhya Pradesh
            </span>
            <a
              className="flex gap-2 text-avion-green"
              href="https://wa.me/918878665826"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © 2026 Avion Training & Placement Centre. All rights reserved. Designed
        and developed by{" "}
        <a
          href="https://www.avionacademy.co.in"
          target="_blank"
          rel="noreferrer"
          className="text-avion-green hover:underline"
        >
          Aman Khan
        </a>
        .
      </div>
    </footer>
  );
}
