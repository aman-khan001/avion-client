import { useQuery } from "@tanstack/react-query";
import { IndianRupee, TrendingUp, UsersRound, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { adminChartData } from "../data/siteData.js";
import { api } from "../lib/api.js";

export default function AdminDashboard() {
  const { data } = useQuery({
    queryKey: ["student-stats"],
    queryFn: async () => (await api.get("/students/stats")).data.data.stats
  });

  const cards = [
    { label: "Total Students", value: data?.totalStudents ?? 0, icon: UsersRound },
    { label: "Active Students", value: data?.activeStudents ?? 0, icon: TrendingUp },
    { label: "Revenue", value: "₹6.8L", icon: IndianRupee },
    { label: "Pending Fees", value: "₹72K", icon: WalletCards }
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Super Admin Panel" title="Advanced dashboard foundation." text="Phase 1 provides student stats and admin navigation; revenue, attendance, and course analytics expand in later phases." />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <GlassCard className="p-6" key={card.label}>
                <Icon className="text-avion-green" />
                <p className="mt-5 text-3xl font-black">{card.value}</p>
                <p className="mt-1 text-sm text-white/55">{card.label}</p>
              </GlassCard>
            );
          })}
        </div>
        <GlassCard className="mt-8 p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="font-black">Revenue Analytics and Student Growth</p>
              <p className="mt-1 text-sm text-white/50">Mocked chart data now, live finance module in Phase 2.</p>
            </div>
            <Link className="btn btn-primary" to="/admin/students">Manage Students</Link>
          </div>
          <div className="mt-8 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={adminChartData}>
                <defs>
                  <linearGradient id="students" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9FEF00" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#9FEF00" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.45)" />
                <YAxis stroke="rgba(255,255,255,0.45)" />
                <Tooltip contentStyle={{ background: "#020711", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="students" stroke="#9FEF00" fill="url(#students)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
