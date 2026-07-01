import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  ChevronRight,
  PlayCircle,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import {
  batches,
  courses,
  gallery,
  quizRankings,
  stats,
  stories,
  team,
  whyChoose,
} from "../data/siteData.js";
import SEO from "../components/SEO.jsx";
import GoogleReviews from "../components/GoogleReviews.jsx";

export default function Home() {
  return (
    <>
      <SEO />

      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <div className="hero-grid absolute inset-0 z-0" />
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src="/assets/avion-hero.jpeg"
          alt="Futuristic Avion academy technology environment"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020711] via-[#020711]/90 to-[#020711]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(159,239,0,0.16),transparent_36%)]" />
        <div className="container relative z-10 grid min-h-[92vh] items-center gap-10 py-20 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-avion-green/30 bg-avion-green/10 px-3 py-1 text-sm font-semibold text-avion-green">
              <Sparkles size={14} /> Trusted tech training in Dewas
            </div>
            <p className="mt-6 section-eyebrow">
              AVION Academy | Programming Training in Dewas
            </p>
            <h1 className="mt-4 max-w-xl text-[clamp(1.8rem,5vw,4.4rem)] font-black leading-[0.95] text-white">
              Best AI/ML & Web Development Training in Dewas
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Learn practical coding, build real projects, and get placement
              support in Python, MERN, web development, AI/ML, and digital
              marketing.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              We offer online and offline training with guidance that helps
              students move from learning to career-ready confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="btn btn-primary">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Book Free Demo <CalendarDays size={18} />
              </Link>
              <Link to="/courses" className="btn btn-ghost">
                Explore Courses <ChevronRight size={18} />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                Live projects
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                1:1 mentorship
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                Placement guidance
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[30px] border border-white/10 bg-[#020711]/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <p className="section-eyebrow">Why learners choose AVION</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-avion-green/15 p-2 text-avion-green">
                    <BrainCircuit size={18} />
                  </div>
                  <div>
                    <p className="font-black text-white">
                      Career-first curriculum
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      Practical modules aligned to real job expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-avion-green/15 p-2 text-avion-green">
                    <BadgeCheck size={18} />
                  </div>
                  <div>
                    <p className="font-black text-white">
                      Mentorship that stays with you
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      Guidance from onboarding to interview readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-avion-green/20 bg-avion-green/10 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-avion-green/20 p-2 text-avion-green">
                  <BadgeCheck size={18} />
                </div>
                <div>
                  <p className="font-black text-white">
                    Placement-first support
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Resume reviews, mock interviews, and company-connect prep
                    all included.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard className="p-6 text-center" key={stat.label}>
              <p className="text-4xl font-black text-avion-green">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="About AVION"
            title="Built like a tech startup. Focused like a career lab."
            text="AVION Academy combines practical skill training, placement support, and career guidance in Dewas so learners can move from classroom knowledge to job-ready confidence."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard
                  className="group p-6 transition hover:-translate-y-1 hover:border-avion-green/50"
                  delay={index * 0.08}
                  key={item.title}
                >
                  <Icon className="text-avion-green" size={28} />
                  <h3 className="mt-6 text-xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white/[0.025]">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured Courses"
              title="Career tracks with portfolio outcomes."
              text="Explore our most popular training programs in Dewas for students who want to build real skills, create strong portfolios, and prepare for placement."
            />
            <Link to="/courses" className="btn btn-secondary w-fit">
              View all courses <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course, index) => {
              const Icon = course.icon;
              return (
                <Link
                  to={`/courses/${course.slug}`}
                  className="block h-full"
                  key={course.title}
                >
                  <GlassCard
                    className="flex h-full flex-col p-6"
                    delay={index * 0.05}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Icon className="text-avion-green" size={30} />
                      <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">
                        {course.category}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-black">{course.title}</h3>
                    <p className="mt-2 text-sm text-white/60">
                      {course.duration} · {course.fee}
                    </p>
                    <p className="mt-4 flex-1 text-sm text-white/45">
                      {course.description}
                    </p>
                    <div className="mt-6" />
                    <span className="btn btn-primary mt-6 justify-center">
                      View details
                    </span>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-3">
          <GlassCard className="p-6 lg:col-span-2">
            <SectionHeading
              eyebrow="Student Success Stories"
              title="Real learning, visible confidence."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stories.map((story) => (
                <div className="rounded-lg bg-white/10 p-5" key={story.name}>
                  <p className="text-sm leading-7 text-white/65">
                    “{story.quote}”
                  </p>
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
                <div
                  className="flex items-center justify-between rounded-lg bg-white/10 p-4"
                  key={student.rank}
                >
                  <span className="font-black">
                    #{student.rank} {student.name}
                  </span>
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
            <SectionHeading
              eyebrow="Upcoming Batches"
              title="New batches opening soon."
            />
            <div className="mt-8 grid gap-4">
              {batches.map((batch) => (
                <GlassCard
                  className="flex items-center justify-between gap-4 p-5"
                  key={batch.course}
                >
                  <div>
                    <p className="font-black text-white">{batch.course}</p>
                    <p className="mt-1 text-sm text-white/55">
                      {batch.date} · {batch.mode}
                    </p>
                  </div>
                  <span className="rounded-lg bg-avion-green px-3 py-1 text-sm font-black text-avion-ink">
                    {batch.seats} seats
                  </span>
                </GlassCard>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Gallery Preview"
              title="Labs, workshops, drives, demo days."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.slice(0, 6).map((item) => (
                <GlassCard
                  className="group relative overflow-hidden"
                  key={item.title}
                >
                  <img
                    src={item.media}
                    alt={item.title}
                    className="h-40 w-full object-cover transition-all group-hover:scale-110"
                  />
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
          <SectionHeading
            eyebrow="Team Preview"
            title="Mentors who turn practice into momentum."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <GlassCard className="p-5" key={member.name}>
                <div className="h-20 w-20 rounded-lg bg-white/10">
                  <img
                    src={member.media}
                    alt={member.name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <p className="mt-5 font-black text-white">{member.name}</p>
                <p className="mt-1 text-sm text-avion-green">{member.role}</p>
                <p className="mt-3 text-xs text-white/55">{member.skills}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section className="section bg-white/[0.025]">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Clear answers before you take off."
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            <GlassCard className="p-6">
              <h3 className="font-black text-white">
                Can beginners join Avion courses?
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Yes. Foundation tracks start from basics, while advanced tracks
                include screening and bridge sessions.{" "}
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-black text-white">
                Do students get certificates?
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Yes. Certificates are issued after project, attendance, and
                assessment completion.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-black text-white">
                Is placement support included?
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Placement support, resume reviews, mock interviews, and
                company-connect preparation are part of career tracks.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-black text-white">
                What is the duration of the courses?
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/60">
                The duration varies by course, typically ranging from 2 to 9
                months, depending on the track and level of expertise.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-black text-white">
                Are there any prerequisites for advanced courses?
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Yes. Advanced courses may require prior knowledge or completion
                of foundational tracks. Screening tests may also be conducted.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GlassCard className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Ready for a free demo class?
              </h2>
              <p className="mt-3 text-white/60">
                Register online, select your course and batch, and get your
                student ID instantly.
              </p>
            </div>
            <Link to="/register" className="btn btn-primary justify-center">
              Start Registration <PlayCircle size={18} />
            </Link>
          </GlassCard>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <GlassCard className="overflow-hidden border-white/10">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] overflow-hidden">
                <iframe
                  title="Avion Training and Placement Centre location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.787105145875!2d76.04302710000002!3d22.958066400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317ae06154b81%3A0x7f58587c081a0079!2sAvion%20Training%20and%20Placement%20Centre!5e0!3m2!1sen!2sin!4v1782108188946!5m2!1sen!2sin"
                  loading="lazy"
                  className="h-full w-full border-0 grayscale contrast-125 opacity-70"
                ></iframe>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,7,17,0.85),rgba(2,7,17,0.25))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <a
                    href="https://www.google.com/maps/place/Avion+Training+and+Placement+Centre/@22.9580664,76.0430271,17z/data=!3m1!4b1!4m5!3m4!1s0x396317ae06154b81:0x7f58587c081a0079!8m2!3d22.9580664!4d76.0430271"
                    className=" font-sans font-bold text-[2rem] text-[#9fef00] hover:text-green-400 animate-pulse "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit us
                  </a>
                  <h3 className="mt-3 text-2xl font-black text-white">
                    A campus-like learning environment in Dewas
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-white/70">
                    Drop by for a counselling session, demo class, or simply to
                    experience our learning spaces.
                  </p>
                </div>
              </div>

              <div className="p-7 md:p-8">
                <p className="section-eyebrow">Feedback</p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  Tell us how we can make your learning journey better.
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  We value suggestions from students and parents and use them to
                  improve every batch.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      className="textarea"
                    ></textarea>
                  </div>
                  <button type="button" className="btn btn-primary">
                    Send Feedback
                  </button>
                  <p className="text-xs leading-6 text-white/45">
                    We respect your privacy. Your email and message will be kept
                    confidential and used solely for the purpose of improving
                    our services.
                  </p>
                </form>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
