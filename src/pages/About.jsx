import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { achievements, team } from "../data/siteData.js";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About Us"
          title="A modern institute story with a placement-first operating system."
          text="Avion Training & Placement Centre exists to help students convert curiosity into career-ready skill. Phase 1 brings the public brand, secure authentication, student records, and admin workflows into one scalable MERN platform."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <GlassCard className="p-6">
            <h3 className="text-2xl font-black">Vision</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">To become a future-ready academy where learners build practical products, develop confidence, and enter the workplace with measurable proof of skill.</p>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-2xl font-black">Mission</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">Deliver mentor-led, project-based courses supported by transparent records, batch planning, and placement preparation.</p>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-2xl font-black">Director Message</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">Avion is designed for students who want momentum. Every course, report, and portal feature is built around progress that can be seen and improved.</p>
          </GlassCard>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard className="p-6" key={item.title}>
                <Icon className="text-avion-green" />
                <p className="mt-5 font-black">{item.title}</p>
              </GlassCard>
            );
          })}
        </div>
        <div className="mt-12">
          <SectionHeading eyebrow="Team Introduction" title="Trainers, mentors, and coordinators." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <GlassCard className="p-6" key={member.name}>
                <div className="grid h-20 w-20 place-items-center rounded-lg bg-white/10 text-3xl font-black text-avion-green">{member.name[0]}</div>
                <h3 className="mt-5 text-xl font-black">{member.name}</h3>
                <p className="text-avion-green">{member.role}</p>
                <p className="mt-3 text-sm text-white/60">{member.exp} · {member.skills}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
