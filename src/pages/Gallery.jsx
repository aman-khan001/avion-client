import { PlayCircle, Search } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { gallery } from "../data/siteData.js";

const categories = ["Image Gallery", "Video Gallery", "Event Gallery", "Workshop Gallery"];

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="A visual archive of learning moments." text="Phase 1 includes responsive gallery and lightbox-ready cards for images, videos, events, and workshops." />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button className="btn btn-ghost" key={item}>{item}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <GlassCard className="group overflow-hidden" key={item}>
              <div className="grid aspect-video place-items-center bg-gradient-to-br from-avion-navy via-white/10 to-avion-green/20">
                {index % 2 === 0 ? <Search size={34} className="text-white" /> : <PlayCircle size={38} className="text-avion-green" />}
              </div>
              <div className="p-5">
                <p className="font-black">{item}</p>
                <p className="mt-1 text-sm text-white/55">Click-ready lightbox preview surface.</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
