import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SEO from "../components/SEO.jsx";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  courseInterest: z.string().min(1, "Please select a course interest"),
  message: z.string().min(5, "Please share a short message"),
  source: z.string().optional(),
});

function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-300">{message}</p>;
}

function getAdSource(search) {
  const params = new URLSearchParams(search);

  return (
    params.get("source") ||
    params.get("utm_source") ||
    params.get("campaign") ||
    params.get("ad") ||
    "direct-visit"
  );
}

function formatSourceLabel(source) {
  if (!source) return "Direct Visit";

  return source
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function JoinNow() {
  const location = useLocation();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const adSource = getAdSource(location.search);
  const sourceLabel = formatSourceLabel(adSource);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      source: adSource,
    },
  });

  useEffect(() => {
    setValue("source", adSource);
  }, [adSource, setValue]);

  async function onSubmit(values) {
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("course", values.courseInterest);
      formData.append("message", values.message);
      formData.append("source", values.source || adSource);
      formData.append("formType", "ad-contact");

      await fetch(
        import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
          "https://script.google.com/macros/s/AKfycbz9gIiMls6BrbFpV79ygTbKxu5OowvE0Mu9GiIaI8R6wfGj3ohlouCnRq8F9QLTUxMEkw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      setSuccessMessage(
        `Thanks ${values.fullName}! We will contact you shortly about your enquiry from ${sourceLabel}.`,
      );
      reset({ fullName: "", email: "", phone: "", courseInterest: "", message: "", source: adSource });
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  function onInvalid() {
    setError("Please fix the highlighted fields and try again.");
  }

  return (
    <>
      <SEO
        title="Contact Us From Ad - Avion Academy"
        description="Reach out through our ad contact form and we will follow up with your enquiry and store your details securely."
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Ad enquiry"
              title="Tell us about your goal and we will reach out."
              text="This form is built for ad clicks so we can capture the lead source and follow up quickly."
            />
            <GlassCard className="mt-8 p-5">
              <p className="text-sm font-black text-avion-green">
                Lead source detected
              </p>
              <p className="mt-3 text-sm text-white/70">
                You arrived from <span className="font-semibold text-white">{sourceLabel}</span>.
              </p>
              <p className="mt-2 text-sm text-white/60">
                Your details will be sent to our Google Sheet and our team will contact you shortly.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-6">
            <form className="grid gap-5" onSubmit={handleSubmit(onSubmit, onInvalid)}>
              <div>
                <label className="label">Full Name</label>
                <input className="input" placeholder="Your full name" {...register("fullName")} />
                <FieldError message={errors.fullName?.message} />
              </div>
              <div>
                <label className="label">Email</label>
                <input className="input" type="email" placeholder="you@example.com" {...register("email")} />
                <FieldError message={errors.email?.message} />
              </div>
              <div>
                <label className="label">Phone</label>
                <input className="input" type="tel" placeholder="Your phone number" {...register("phone")} />
                <FieldError message={errors.phone?.message} />
              </div>
              <div>
                <label className="label">Course Interest</label>
                <select className="select" {...register("courseInterest")}>
                  <option value="">Select a course</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Python">Python</option>
                  <option value="Other">Other</option>
                </select>
                <FieldError message={errors.courseInterest?.message} />
              </div>
              <div>
                <label className="label">Message</label>
                <textarea className="textarea" placeholder="Tell us what you want to learn" {...register("message")} />
                <FieldError message={errors.message?.message} />
              </div>
              <input type="hidden" {...register("source")} />
              {error ? (
                <p className="rounded border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </p>
              ) : null}
              {successMessage ? (
                <p className="rounded border border-avion-green/30 bg-avion-green/10 p-3 text-sm text-avion-green">
                  {successMessage}
                </p>
              ) : null}
              <button className="btn btn-primary justify-center" type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Send Enquiry"} <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </div>
      </section>
    </>
  );
}