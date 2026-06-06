import { useQuery } from "@tanstack/react-query";
import { Filter, Search, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { api } from "../lib/api.js";

export default function Students() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const params = useMemo(() => ({ search: search || undefined, status: status || undefined }), [search, status]);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["students", params],
    queryFn: async () => (await api.get("/students", { params })).data.data
  });

  async function removeStudent(id) {
    await api.delete(`/students/${id}`);
    refetch();
  }

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Student Management" title="Manage students, allocation, and status." text="Admin and teacher users can filter records by status and search across student ID, registration number, name, email, and phone." />
        <GlassCard className="mt-8 grid gap-4 p-4 md:grid-cols-[1fr_220px_auto]">
          <label className="flex items-center gap-3 rounded-lg bg-white/5 px-3">
            <Search size={18} className="text-avion-green" />
            <input className="w-full bg-transparent py-3 text-sm outline-none" placeholder="Search students" value={search} onChange={(event) => setSearch(event.target.value)} />
          </label>
          <label className="flex items-center gap-3 rounded-lg bg-white/5 px-3">
            <Filter size={18} className="text-avion-green" />
            <select className="w-full bg-transparent py-3 text-sm outline-none" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option className="bg-avion-ink" value="">All Status</option>
              <option className="bg-avion-ink" value="registered">Registered</option>
              <option className="bg-avion-ink" value="active">Active</option>
              <option className="bg-avion-ink" value="completed">Completed</option>
              <option className="bg-avion-ink" value="inactive">Inactive</option>
            </select>
          </label>
          <Link className="btn btn-primary justify-center" to="/register">Add Student</Link>
        </GlassCard>
        <GlassCard className="mt-6 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-white/10 text-xs uppercase tracking-[0.14em] text-white/50">
                <tr>
                  <th className="px-5 py-4">Student</th>
                  <th className="px-5 py-4">Student ID</th>
                  <th className="px-5 py-4">Course</th>
                  <th className="px-5 py-4">Batch</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {isLoading && (
                  <tr><td className="px-5 py-6 text-white/55" colSpan="6">Loading students...</td></tr>
                )}
                {data?.students?.map((student) => (
                  <tr key={student._id}>
                    <td className="px-5 py-4">
                      <p className="font-black text-white">{student.fullName}</p>
                      <p className="text-xs text-white/45">{student.email}</p>
                    </td>
                    <td className="px-5 py-4 text-avion-green">{student.studentId}</td>
                    <td className="px-5 py-4 text-white/65">{student.course?.title || "Not allocated"}</td>
                    <td className="px-5 py-4 text-white/65">{student.batch?.name || "Not allocated"}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-lg bg-white/10 px-3 py-1 text-xs capitalize text-white/70">{student.status}</span>
                    </td>
                    <td className="px-5 py-4">
                      <button className="icon-btn" onClick={() => removeStudent(student._id)} aria-label="Delete student">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {!isLoading && !data?.students?.length && (
                  <tr><td className="px-5 py-6 text-white/55" colSpan="6">No students found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
