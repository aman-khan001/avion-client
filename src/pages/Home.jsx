import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronRight, PlayCircle, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { batches, courses, faqs, gallery, quizRankings, stats, stories, team, whyChoose } from "../data/siteData.js";
import SEO from "../components/SEO.jsx";

export default function Home() {
  return (
    <>
    <SEO
      title="Avion Training & Placement Centre | Learn AI & Web Dev"
      description="Top programming training and placement center. Master Web Development or AI/ML with industry experts and secure your dream tech job. Start learning today!"
      image="/assets/avion-hero.png"
    />
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="hero-grid absolute inset-0 z-0" />
        <img
          className="absolute inset-0 h-full w-full object-fit "
          src="/assets/avion-hero.png"
          alt="Futuristic Avion academy technology environment"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020711] via-[#020711]/82 to-[#020711]/22" />
        <div className="container relative z-10 grid min-h-[92vh] items-center gap-10 py-16 lg:grid-cols-[1fr_0.75fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="section-eyebrow">Avion Training & Placement Centre</p>
            <h1 className="mt-5 max-w-xl text-[clamp(3rem,7vw,6.2rem)] font-black leading-[0.95] text-white">
              Premium Programming Training & Placement Centre
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Avion is a futuristic & leading training and placement ecosystem for learners who want practical skills, career confidence, and measurable growth. We offer mentor-led courses in AI/ML, Web Development, and Digital Marketing with portfolio-first learning and 100% placement support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="btn btn-primary">
                Register Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Book Free Demo <CalendarDays size={18} />
              </Link>
              <Link to="/courses" className="btn btn-ghost">
                Explore Courses <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
          {/* <GlassCard className="hidden p-5 lg:block">
            <div className="rounded-lg border border-avion-green/30 bg-avion-green/10 p-5">
              <p className="text-sm font-bold text-avion-green">Live IMS Preview</p>
              <div className="mt-5 grid gap-3">
                {["Student ID generation", "JWT auth and roles", "Course and batch allocation", "Admin analytics"].map((item) => (
                  <div className="flex items-center justify-between rounded-lg bg-white/10 p-4" key={item}>
                    <span className="text-sm text-white/75">{item}</span>
                    <span className="h-2 w-2 rounded-full bg-avion-green shadow-glow" />
                  </div>
                ))}
              </div>
            </div>
          </GlassCard> */}
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard className="p-6 text-center" key={stat.label}>
              <p className="text-4xl font-black text-avion-green">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="About Avion"
            title="Built like a tech startup. Focused like a career lab."
            text="Avion combines skill training, placement support, student lifecycle tracking, and future-ready learning systems in one branded platform."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard className="group p-6 transition hover:-translate-y-1 hover:border-avion-green/50" delay={index * 0.08} key={item.title}>
                  <Icon className="text-avion-green" size={28} />
                  <h3 className="mt-6 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white/[0.025]">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading eyebrow="Featured Courses" title="Career tracks with portfolio outcomes." />
            <Link to="/courses" className="btn btn-ghost w-fit">
              View all courses <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course, index) => {
              const Icon = course.icon;
              return (
                <GlassCard className="p-6" delay={index * 0.05} key={course.title}>
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="text-avion-green" size={30} />
                    <span className="rounded-lg border border-white/10 px-3 py-1 text-xs text-white/70">{course.level}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{course.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{course.duration} · {course.fee}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.syllabus.map((item) => (
                      <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-3">
          <GlassCard className="p-6 lg:col-span-2">
            <SectionHeading eyebrow="Student Success Stories" title="Real learning, visible confidence." />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stories.map((story) => (
                <div className="rounded-lg bg-white/10 p-5" key={story.name}>
                  <p className="text-sm leading-7 text-white/65">“{story.quote}”</p>
                  <p className="mt-5 font-black text-white">{story.name}</p>
                  <p className="text-xs text-avion-green">{story.role}</p>
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-avion-green">
              <Trophy size={18} /> Tech Quiz Rankings
            </p>
            <div className="mt-6 grid gap-3">
              {quizRankings.map((student) => (
                <div className="flex items-center justify-between rounded-lg bg-white/10 p-4" key={student.rank}>
                  <span className="font-black">#{student.rank} {student.name}</span>
                  <span className="text-avion-green">{student.points}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="section bg-white/[0.025]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Upcoming Batches" title="New batches opening soon." />
            <div className="mt-8 grid gap-4">
              {batches.map((batch) => (
                <GlassCard className="flex items-center justify-between gap-4 p-5" key={batch.course}>
                  <div>
                    <p className="font-black text-white">{batch.course}</p>
                    <p className="mt-1 text-sm text-white/55">{batch.date} · {batch.mode}</p>
                  </div>
                  <span className="rounded-lg bg-avion-green px-3 py-1 text-sm font-black text-avion-ink">{batch.seats} seats</span>
                </GlassCard>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Gallery Preview" title="Labs, workshops, drives, demo days." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.slice(0, 6).map((item) => (
                <GlassCard className="group relative overflow-hidden" key={item.title}>
                  <img src={item.media} alt={item.title} className="h-40 w-full object-cover transition-all group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all group-hover:opacity-100">
                    {item.type === "Video" ? (
                      <PlayCircle size={48} className="text-white" />
                    ) : (
                      <ChevronRight size={48} className="text-white" />
                    )}
                  </div>
                </GlassCard>
              ))}
              </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Team Preview" title="Mentors who turn practice into momentum." />
          <div className="grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <GlassCard className="p-5" key={member.name}>
                <div className="h-20 w-20 rounded-lg bg-white/10" >
                  <img src={member.media} alt={member.name} className="h-full w-full rounded-lg object-cover" />
                </div>
                <p className="mt-5 font-black text-white">{member.name}</p>
                <p className="mt-1 text-sm text-avion-green">{member.role}</p>
                <p className="mt-3 text-xs text-white/55">{member.skills}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/[0.025]">
        <div className="container">
          <SectionHeading align="center" eyebrow="FAQ" title="Clear answers before you take off." />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {faqs.map((faq) => (
              <GlassCard className="p-6" key={faq.q}>
                <h3 className="font-black text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GlassCard className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Ready for a free demo class?</h2>
              <p className="mt-3 text-white/60">Register online, select your course and batch, and get your student ID instantly.</p>
            </div>
            <Link to="/register" className="btn btn-primary justify-center">
              Start Registration <PlayCircle size={18} />
            </Link>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
