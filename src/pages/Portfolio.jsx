import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";
import {
  portfolioProcess,
  portfolioProjects,
  portfolioServices,
  portfolioStats,
  portfolioTechStack,
} from "../data/siteData.js";

const categories = ["All", ...new Set(portfolioProjects.map((p) => p.category))];

const faqItems = [
  {
    question: "What types of projects does AVION build?",
    answer:
      "We build websites, web applications, e-commerce stores, AI tools, dashboards, and digital marketing systems for startups, local businesses, and institutes.",
  },
  {
    question: "How do I start a project with AVION?",
    answer:
      "Book a free consultation through our contact page or WhatsApp. We discuss your requirements, share a plan, and provide a transparent timeline and estimate.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer maintenance, feature updates, hosting guidance, and performance support after your project goes live.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <>
      <SEO
        title="Portfolio | Web Development & AI Projects by AVION Academy"
        description="Explore AVION Academy's portfolio of web apps, e-commerce stores, AI solutions, and digital products. Hire us for your next software project in Dewas and across India."
        image="/assets/avion-hero.jpeg"
        faqItems={faqItems}
      />

      <section className="relative isolate overflow-hidden pt-28">
        <div className="hero-grid absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(159,239,0,0.14),transparent_38%)]" />
        <div className="container relative z-10 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="section-eyebrow">Our Work</p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-black leading-tight text-white">
              Software projects that help businesses grow
            </h1>
            <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
              AVION builds practical digital products — from websites and
              dashboards to AI tools and e-commerce stores. Explore our work and
              let&apos;s build your next project together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <a
                className="btn btn-secondary"
                href="https://wa.me/918878665826"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioStats.map((stat, index) => (
              <GlassCard className="p-5 text-center" key={stat.label} delay={index * 0.05}>
                <p className="text-3xl font-black text-avion-green">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="What we build for clients"
            text="End-to-end development and digital services tailored for startups, local businesses, and growing teams."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <GlassCard className="p-6" key={service.title} delay={index * 0.05}>
                  <div className="rounded-2xl bg-avion-green/15 p-3 w-fit text-avion-green">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{service.text}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Recent work from our development team"
            text="A selection of products we've designed and built for clients across education, retail, food, and services."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${activeCategory === category ? "btn-primary" : "btn-ghost"}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <GlassCard
                className="group overflow-hidden"
                key={project.title}
                delay={index * 0.05}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-avion-green/30 bg-[#020711]/80 px-3 py-1 text-xs font-semibold text-avion-green backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    {project.client}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-5 grid gap-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <CheckCircle2 size={15} className="shrink-0 text-avion-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools and technologies we work with"
            text="We choose modern, reliable stacks that scale with your business and are easy to maintain."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {portfolioTechStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Our Process"
            title="How we deliver projects on time"
            text="A clear, transparent workflow from first call to launch — so you always know what's happening."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {portfolioProcess.map((item, index) => (
              <GlassCard className="p-6" key={item.step} delay={index * 0.05}>
                <p className="text-3xl font-black text-avion-green">{item.step}</p>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <GlassCard className="overflow-hidden p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Let's Build"
                  title="Have a project in mind?"
                  text="Tell us about your idea — website, app, AI tool, or e-commerce store. We'll share a plan, timeline, and quote with no obligation."
                  align="left"
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn btn-primary">
                    Get a Free Quote <ArrowRight size={18} />
                  </Link>
                  <a
                    className="btn btn-ghost"
                    href="https://github.com/avion-code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-avion-green">
                  Quick contact
                </p>
                <p className="mt-4 text-lg font-black">+91 88786 65826</p>
                <p className="mt-2 text-sm text-white/60">
                  avionacademyplacement@gmail.com
                </p>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  145/A, Kalani Bagh, Dewas, Madhya Pradesh
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
