import { Building2, IndianRupee, Trophy, UsersRound } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { stories } from "../data/siteData.js";

const placementStats = [
  { label: "Placed Students", value: "620+", icon: UsersRound },
  { label: "Companies", value: "75+", icon: Building2 },
  { label: "Highest Package", value: "₹12 LPA", icon: IndianRupee },
  { label: "Success Stories", value: "300+", icon: Trophy }
];

export default function Placements() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Placements" title="Placement support designed around proof of skill." />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {placementStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <GlassCard className="p-6" key={stat.label}>
                <Icon className="text-avion-green" />
                <p className="mt-5 text-3xl font-black">{stat.value}</p>
                <p className="mt-1 text-sm text-white/55">{stat.label}</p>
              </GlassCard>
            );
          })}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <GlassCard className="p-6" key={story.name}>
              <p className="text-sm leading-7 text-white/65">“{story.quote}”</p>
              <p className="mt-5 font-black">{story.name}</p>
              <p className="text-avion-green">{story.role}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
