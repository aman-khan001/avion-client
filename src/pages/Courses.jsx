import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { courses } from "../data/siteData.js";
import SEO from "../components/SEO.jsx";

export default function Courses() {
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
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <GlassCard className="flex flex-col p-6" key={course.title}>
                  <div className="flex items-center justify-between">
                    <Icon className="text-avion-green" size={34} />
                    <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{course.title}</h3>
                  <p className="mt-2 text-sm text-white/60">
                    {course.duration} · {course.fee}
                  </p>
                  <p className="mt-2 text-sm text-avion-green">
                    Instructor: {course.instructor}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-white/60">
                    {course.syllabus.map((item) => (
                      <li className="flex items-center gap-2" key={item}>
                        <CheckCircle2 size={16} className="text-avion-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-white/45">
                    {course.description}
                  </p>
                  <Link
                    className="btn btn-primary mt-7 justify-center"
                    to="/register"
                  >
                    Enroll
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
