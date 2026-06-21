import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { BadgePlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { courses as fallbackCourses } from "../data/siteData.js";
import { api, apiMessage } from "../lib/api.js";
import { useAuthStore } from "../store/authStore.js";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  password: z.string().min(8),
  course: z.string().optional(),
  batch: z.string().optional(),
  guardianName: z.string().optional(),
  guardianPhone: z.string().optional(),
  address: z.string().optional()
});

export default function Register() {
  const [error, setError] = useState("");
  const setSession = useAuthStore((state) => state.setSession);
  const navigate = useNavigate();
  const { data: courseData } = useQuery({
    queryKey: ["catalog-courses"],
    queryFn: async () => (await api.get("/catalog/courses")).data.data.courses
  });
  const { data: batchData } = useQuery({
    queryKey: ["catalog-batches"],
    queryFn: async () => (await api.get("/catalog/batches")).data.data.batches
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema)
  });

  async function onSubmit(values) {
    setError("");
    try {
      const payload = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key !== "documents" && value) {
          payload.append(key, value);
        }
      });
      Array.from(values.documents || []).forEach((file) => {
        payload.append("documents", file);
      });
      payload.append("registrationFeeAmount", "1000");

      const { data } = await api.post("/auth/register", payload, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setSession(data.data);
      navigate("/student/dashboard");
    } catch (err) {
      setError(apiMessage(err));
    }
  }

  return (
    <section className="section">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Student Registration" title="Register online and generate your student ID." text="Build your career with us before competition gets tough!" />
          <GlassCard className="mt-8 p-5">
            <p className="text-sm font-black text-avion-green">Registration Includes</p>
            <div className="mt-4 grid gap-3 text-sm text-white/60">
              <span>Student ID generation</span>
              <span>Registration number</span>
              <span>Course and batch preference</span>
              <span>Registration fee status</span>
            </div>
          </GlassCard>
        </div>
        <GlassCard className="p-6">
          <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">Full Name</label>
              <input className="input" {...register("fullName")} />
            </div>
            <div>
              <label className="label">Phone</label>
              <input className="input" {...register("phone")} />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" {...register("email")} />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="input" type="password" {...register("password")} />
            </div>
            <div>
              <label className="label">Course</label>
              <select className="select" {...register("course")}>
                <option value="">Select Course</option>
                {(courseData || fallbackCourses).map((course) => (
                  <option key={course._id || course.title} value={course._id || ""}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Batch</label>
              <select className="select" {...register("batch")}>
                <option value="">Select Batch</option>
                {(batchData || []).map((batch) => (
                  <option key={batch._id} value={batch._id}>
                    {batch.name} · {batch.mode}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Guardian Name</label>
              <input className="input" {...register("guardianName")} />
            </div>
            <div>
              <label className="label">Guardian Phone</label>
              <input className="input" {...register("guardianPhone")} />
            </div>
            <div className="md:col-span-2">
              <label className="label">Document Upload</label>
              <input className="input" type="file" multiple {...register("documents")} />
              <p className="mt-2 text-xs text-white/45">Uploads are stored in Cloudinary when credentials are configured; otherwise metadata is retained for local development.</p>
            </div>
            <div className="md:col-span-2">
              <label className="label">Address</label>
              <textarea className="textarea" {...register("address")} />
            </div>
            {error && <p className="md:col-span-2 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</p>}
            <button className="btn btn-primary justify-center md:col-span-2" disabled={formState.isSubmitting}>
              Complete Registration <BadgePlus size={18} />
            </button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
