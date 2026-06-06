import { useQuery } from "@tanstack/react-query";
import { Award, Bell, BookOpen, ClipboardCheck, CreditCard, FileText, UserRound } from "lucide-react";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { api } from "../lib/api.js";
import { useAuthStore } from "../store/authStore.js";

const portalItems = [
  { label: "Attendance", value: "Phase 2", icon: ClipboardCheck },
  { label: "Fees Status", value: "Pending", icon: CreditCard },
  { label: "Assignments", value: "Phase 2", icon: FileText },
  { label: "Notices", value: "Ready", icon: Bell },
  { label: "Quiz Results", value: "Phase 3", icon: Award },
  { label: "Study Materials", value: "Phase 2", icon: BookOpen }
];

export default function StudentDashboard() {
  const user = useAuthStore((state) => state.user);
  const { data } = useQuery({
    queryKey: ["my-student-profile"],
    queryFn: async () => (await api.get("/students/me")).data.data.student
  });

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Student Portal" title={`Welcome, ${user?.name || "Student"}.`} text="Your Phase 1 dashboard connects profile, registration, course, and batch data." />
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <GlassCard className="p-6">
            <UserRound className="text-avion-green" size={34} />
            <h3 className="mt-5 text-2xl font-black">{data?.fullName || user?.name}</h3>
            <p className="mt-2 text-white/60">{data?.email || user?.email}</p>
            <div className="mt-6 grid gap-3 text-sm">
              <span>Student ID: <b className="text-avion-green">{data?.studentId || "Loading"}</b></span>
              <span>Registration: <b>{data?.registrationNumber || "Loading"}</b></span>
              <span>Course: <b>{data?.course?.title || "Not allocated"}</b></span>
              <span>Batch: <b>{data?.batch?.name || "Not allocated"}</b></span>
              <span>Status: <b>{data?.status || "registered"}</b></span>
            </div>
          </GlassCard>
          <div className="grid gap-5 md:grid-cols-2">
            {portalItems.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard className="p-5" key={item.label}>
                  <Icon className="text-avion-green" />
                  <p className="mt-5 font-black">{item.label}</p>
                  <p className="mt-1 text-sm text-white/50">{item.value}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
