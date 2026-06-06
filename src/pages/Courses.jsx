import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { courses } from "../data/siteData.js";

export default function Courses() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Courses"
          title="Choose a track. Build a portfolio. Prepare for placement."
          text="Each course card includes duration, fees, syllabus highlights, instructor ownership, and an enrollment path."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <GlassCard className="flex flex-col p-6" key={course.title}>
                <div className="flex items-center justify-between">
                  <Icon className="text-avion-green" size={34} />
                  <span className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60">{course.category}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{course.title}</h3>
                <p className="mt-2 text-sm text-white/60">{course.duration} · {course.fee}</p>
                <p className="mt-2 text-sm text-avion-green">Instructor: {course.instructor}</p>
                <div className="mt-6 grid gap-3">
                  {course.syllabus.map((item) => (
                    <span className="flex items-center gap-2 text-sm text-white/65" key={item}>
                      <CheckCircle2 size={16} className="text-avion-green" /> {item}
                    </span>
                  ))}
                </div>
                <Link className="btn btn-primary mt-7 justify-center" to="/register">
                  Enroll
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
