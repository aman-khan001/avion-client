import {
  ArrowLeft,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SEO from "../components/SEO.jsx";
import { courses } from "../data/siteData.js";

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <section className="section">
        <div className="container">
          <GlassCard className="p-8 text-center">
            <p className="section-eyebrow">Course not found</p>
            <h1 className="mt-4 text-3xl font-black text-white">
              This course is not available right now.
            </h1>
            <p className="mt-3 text-white/60">
              Please return to the courses page and choose another track.
            </p>
            <Link className="btn btn-primary mt-6 justify-center" to="/courses">
              Back to courses
            </Link>
          </GlassCard>
        </div>
      </section>
    );
  }

  const Icon = course.icon;

  return (
    <>
      <SEO
        title={`${course.title} | AVION Academy`}
        description={`${course.description} Explore the syllabus, outcomes, and learning format for ${course.title} at AVION Academy.`}
      />

      <section className="section">
        <div className="container">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-avion-green"
          >
            <ArrowLeft size={16} /> Back to all courses
          </Link>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard className="p-8">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-2xl bg-avion-green/15 p-3 text-avion-green">
                  <Icon size={28} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/60">
                  {course.category}
                </span>
                <span className="rounded-full border border-avion-green/20 bg-avion-green/10 px-3 py-1 text-sm text-avion-green">
                  {course.level}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black text-white sm:text-5xl">
                {course.title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-white/65">
                {course.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-avion-green">
                    <CalendarDays size={18} />
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="mt-2 text-white/70">{course.duration}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-avion-green">
                    <GraduationCap size={18} />
                    <span className="font-semibold">Fee</span>
                  </div>
                  <p className="mt-2 text-white/70">{course.fee}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="section-eyebrow">What you’ll learn</p>
                <ul className="mt-4 grid gap-3 text-sm text-white/70">
                  {course.syllabus.map((item) => (
                    <li className="flex items-center gap-2" key={item}>
                      <CheckCircle2 size={16} className="text-avion-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>

            <div className="space-y-6">
              <GlassCard className="p-7">
                <div className="flex items-center gap-2 text-avion-green">
                  <Sparkles size={18} />
                  <p className="font-semibold uppercase tracking-[0.2em]">
                    Who should join
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {course.whoShouldJoin}
                </p>
              </GlassCard>

              <GlassCard className="p-7">
                <div className="flex items-center gap-2 text-avion-green">
                  <BookOpenCheck size={18} />
                  <p className="font-semibold uppercase tracking-[0.2em]">
                    Highlights
                  </p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {course.highlights.map((item) => (
                    <li className="flex items-center gap-2" key={item}>
                      <CheckCircle2 size={16} className="text-avion-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-7">
                <p className="section-eyebrow">Outcome</p>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {course.outcomes.map((item) => (
                    <li className="flex items-center gap-2" key={item}>
                      <CheckCircle2 size={16} className="text-avion-green" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/register?course=${encodeURIComponent(course.title)}`}
                  className="btn btn-primary mt-6 justify-center"
                >
                  Enroll in this course
                </Link>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
