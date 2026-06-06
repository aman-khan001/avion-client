import { Github, Linkedin, Twitter } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { team } from "../data/siteData.js";

export default function Team() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Our Team" title="Trainers, mentors, and coordinators." text="Profile cards are ready for real photos, skills, social links, and experience details." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {team.map((member) => (
            <GlassCard className="p-6" key={member.name}>
              <div className="grid aspect-square w-full place-items-center rounded-lg bg-gradient-to-br from-white/12 to-avion-green/20 text-6xl font-black text-avion-green">
                {member.name[0]}
              </div>
              <h3 className="mt-6 text-2xl font-black">{member.name}</h3>
              <p className="text-avion-green">{member.role}</p>
              <p className="mt-3 text-sm text-white/60">{member.skills}</p>
              <p className="mt-2 text-sm text-white/45">{member.exp} experience</p>
              <div className="mt-5 flex gap-2">
                {[Linkedin, Twitter, Github].map((Icon) => (
                  <button className="icon-btn" key={Icon.name} aria-label={Icon.name}>
                    <Icon size={17} />
                  </button>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
