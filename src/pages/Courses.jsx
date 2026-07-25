import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { courses } from "../data/siteData.js";
import SEO from "../components/SEO.jsx";

export default function Courses() {
  const categories = useMemo(
    () => ["All", ...new Set(courses.map((course) => course.category))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <>
      <SEO
        title="Best Courses in Dewas | Python, MERN, AI/ML & Web Development"
        description="Explore top courses at AVION Academy in Dewas for Python, MERN Stack, web development, AI/ML, and digital marketing with practical projects and placement support."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Courses"
            title="Choose a track. Build a portfolio. Prepare for placement."
            text="AVION Academy offers industry-focused training in Dewas for students who want practical skills in Python, MERN Stack, web development, AI/ML, and digital marketing. Every course is designed to help learners gain real-world experience and move closer to career opportunities."
            align="center"
          />

          <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                Filter by category
              </p>
              <p className="mt-2 text-sm text-white/70">
                Showing {filteredCourses.length} of {courses.length} courses.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                    activeCategory === category
                      ? "border-avion-green bg-avion-green text-slate-950"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/register" className="btn btn-primary justify-center">
              Enroll now
            </Link>
            <Link to="/contact" className="btn btn-secondary justify-center">
              Ask a question
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course, index) => {
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
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className="text-avion-green" size={32} />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {course.category}
                          </p>
                          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                            {course.level}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-black text-white">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/60">
                      {course.fee} · Instructor {course.instructor}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-6 text-white/65">
                      {course.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {course.syllabus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

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
    </>
  );
}
