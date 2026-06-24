import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  PlayCircle,
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

export default function Home() {
  return (
    <>
      <SEO />

      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="hero-grid absolute inset-0 z-0" />
        <img
          className="absolute inset-0 h-full w-full object-fit "
          src="/assets/avion-hero.png"
          alt="Futuristic Avion academy technology environment"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020711] via-[#020711]/82 to-[#020711]/22" />
        <div className="container relative z-10 grid min-h-[92vh] items-center gap-10 py-16 lg:grid-cols-[1fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">
              AVION Academy | Programming Training in Dewas
            </p>
            <h1 className="mt-5 max-w-xl text-[clamp(2rem,6vw,5.2rem)] font-black leading-[0.95] text-white">
              Best AI/ML & Web Development Training Centre in Dewas
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              AVION Academy in Dewas helps students learn practical coding
              skills, build real-world projects, and gain placement support in
              high-demand fields like Python, MERN Stack, web development,
              AI/ML, and digital marketing. 
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              We offer both online and offline courses with hands-on projects, career guidance, and placement support to help students secure jobs in the tech industry.
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
              <Link to="/placements" className="btn btn-ghost">
                Placement Support <ChevronRight size={18} />
              </Link>
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
            <GlassCard className="flex flex-col p-6 hover:shadow-lg hover:shadow-avion-green/30 transition duration-300 ease-in-out ">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">
                  Web Development
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black">
                Full Stack Web Development
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Duration: 9 months · Fee: ₹3000/month
              </p>
              <p className="mt-4 text-sm text-white/45">
                Learn to build dynamic web applications using the MERN stack.
                Gain hands-on experience with real-world projects and prepare
                for a career in web development.
              </p>

              {/* <Link
                className="btn btn-primary mt-7 justify-center"
                to="/register"
              >
                Enroll
              </Link> */}
            </GlassCard>
            <GlassCard className="flex flex-col p-6 hover:shadow-lg hover:shadow-avion-green/30 transition duration-300 ease-in-out ">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">
                  AI/ML
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black">
                AI & Machine Learning
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Duration: 5 months · Fee: ₹3,500
              </p>
              <p className="mt-4 text-sm text-white/45">
                Dive into the world of artificial intelligence and machine
                learning. Learn algorithms, data processing, and model building
                to create intelligent applications.
              </p>
            </GlassCard>
            <GlassCard className="flex flex-col p-6  hover:shadow-lg hover:shadow-avion-green/30 transition duration-300 ease-in-out  ">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">
                  Python
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black">
                Python Core + Advanced
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Duration: 4 months · Fee: ₹10,000
              </p>
              <p className="mt-4 text-sm text-white/45">
                Master Python programming from basics to advanced concepts.
                Build projects and enhance your coding skills for various
                applications in software development and data science.
              </p>
            </GlassCard>
            <GlassCard className="flex flex-col p-6  hover:shadow-lg hover:shadow-avion-green/30 transition duration-300 ease-in-out ">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">
                  Digital Marketing
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black">Digital Marketing</h3>
              <p className="mt-2 text-sm text-white/60">
                Duration: 3 months · Fee: ₹12,000
              </p>
              <p className="mt-4 text-sm text-white/45">
                Learn the fundamentals of digital marketing, including SEO,
                social media marketing, content creation, and analytics. Gain
                practical skills to promote businesses online effectively.
              </p>
            </GlassCard>
            <GlassCard className="flex flex-col p-6  hover:shadow-lg hover:shadow-avion-green/30 transition duration-300 ease-in-out ">
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">
                  Shopify Development
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-black">Shopify Development</h3>
              <p className="mt-2 text-sm text-white/60">
                Duration: 2 months · Fee: ₹8,000
              </p>
              <p className="mt-4 text-sm text-white/45">
                Learn to create and customize e-commerce websites using Shopify.
                Understand the platform's features, themes, and apps to build
                online stores that drive sales and enhance user experience.
              </p>
            </GlassCard>

            {/* {courses.slice(0, 6).map((course, index) => {
              const Icon = course.icon;
              return (
                <GlassCard
                  className="p-6"
                  delay={index * 0.05}
                  key={course.title}
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="text-avion-green" size={30} />
                    <span className="rounded-lg border border-white/10 px-3 py-1 text-xs text-white/70">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{course.title}</h3>
                  <p className="mt-2 text-sm text-white/55">
                    {course.duration} · {course.fee}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.syllabus.map((item) => (
                      <span
                        className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })} */}
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
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.787105145875!2d76.04302710000002!3d22.958066400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317ae06154b81%3A0x7f58587c081a0079!2sAvion%20Training%20and%20Placement%20Centre!5e0!3m2!1sen!2sin!4v1782108188946!5m2!1sen!2sin"
              loading="lazy"
              className="filter grayscale contrast(1.3) opacity(0.4)"
            ></iframe>
          </div>
          <div class="container px-5 py-24 mx-auto flex">
            <div class="lg:w-1/3 md:w-1/2 bg-gray-700 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="text-gray-50 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p class="leading-relaxed text-[12px] mb-5 text-gray-200">
                Avion Training & Placement Centre is committed to providing the
                best learning experience. We value your feedback and suggestions
                to improve our services.
              </p>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                class="btn btn-primary"
                style={{ textAlign: "center !important" }}
              >
                Send Feedback
              </button>
              <p class="text-[10px] text-gray-300 mt-3">
                We respect your privacy. Your email and message will be kept
                confidential and used solely for the purpose of improving our
                services.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
