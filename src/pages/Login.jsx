import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import GlassCard from "../components/GlassCard.jsx";
import { api, apiMessage } from "../lib/api.js";
import { useAuthStore } from "../store/authStore.js";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const setSession = useAuthStore((state) => state.setSession);
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "superadmin@avionacademy.in", password: "Avion@12345" }
  });

  async function onSubmit(values) {
    setError("");
    try {
      const { data } = await api.post("/auth/login", values);
      setSession(data.data);
      const role = data.data.user.role;
      navigate(location.state?.from || (role === "student" ? "/student/dashboard" : "/admin"));
    } catch (err) {
      setError(apiMessage(err));
    }
  }

  return (
    <section className="section">
      <div className="container grid place-items-center">
        <GlassCard className="w-full max-w-md p-6">
          <p className="section-eyebrow">Secure Login</p>
          <h1 className="mt-3 text-3xl font-black">Enter Avion IMS</h1>
          <form className="mt-7 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" {...register("email")} />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="input" type="password" {...register("password")} />
            </div>
            {error && <p className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</p>}
            <button className="btn btn-primary justify-center" disabled={formState.isSubmitting}>
              Login <LogIn size={18} />
            </button>
          </form>
          <p className="mt-5 text-sm text-white/55">
            New student? <Link className="text-avion-green" to="/register">Register online</Link>
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
