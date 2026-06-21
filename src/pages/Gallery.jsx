import { PlayCircle, Search } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { gallery } from "../data/siteData.js";

const categories = ["Image Gallery", "Video Gallery", "Event Gallery", "Workshop Gallery"];

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="A visual archive of learning moments." text="Welcome to our gallery, where you can explore the vibrant world of learning and growth." />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button className="btn btn-ghost" key={item}>{item}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GlassCard className="group relative overflow-hidden" key={item.title}>
              <img src={item.media} alt={item.title} className="h-60 w-full object-cover transition-all group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all group-hover:opacity-100">
                {item.type === "Video" ? (
                  <PlayCircle size={48} className="text-white" />
                ) : (
                  <Search size={48} className="text-white" />
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
