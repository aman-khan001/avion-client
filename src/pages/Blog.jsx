import { Search } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";

const posts = [
  {
    title: "How to Build a Placement-ready MERN Portfolio",
    category: "Career",
    tags: ["MERN", "Projects"],
  },
  {
    title: "Python Skills Every Beginner Should Practice",
    category: "Python",
    tags: ["Python", "Basics"],
  },
  {
    title: "Mock Interview Checklist for Freshers",
    category: "Interview",
    tags: ["HR", "Aptitude"],
  },
];

export default function Blog() {
  return (
    <>
    <SEO
      title="Avion Academy Blog | Insights on Programming, AI, and Career Growth"
      description="Explore our blog for the latest insights on programming, AI, and career growth. Learn from industry experts and stay updated with trends in tech education. "
      image="/assets/avion-hero.png"
    />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Blog"
            title="Admin-published articles for learners."
            text="Welcome to our blog, where you can find the latest updates and insights."
          />
          <GlassCard className="mt-8 flex items-center gap-3 p-3">
            <Search size={18} className="text-avion-green" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
              placeholder="Search articles, categories, tags"
            />
          </GlassCard>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <GlassCard className="p-6" key={post.title}>
                <p className="section-eyebrow">{post.category}</p>
                <h3 className="mt-4 text-2xl font-black">{post.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/60"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-white/45">
                  Comments enabled when article API is connected.
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
