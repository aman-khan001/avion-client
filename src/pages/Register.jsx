import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { BadgePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import GlassCard from "../components/GlassCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { courses as fallbackCourses } from "../data/siteData.js";
import { api, apiMessage } from "../lib/api.js";
import { useAuthStore } from "../store/authStore.js";
import SEO from "../components/SEO.jsx";
import { uploadToCloudinary } from "../lib/cloudinary.js";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  course: z.string().min(1, "Please select a course"),

  guardianName: z.string().min(2, "Guardian name is required"),

  address: z.string().min(5, "Address is required"),

  schoolCollege: z.string().min(2, "School or college is required"),

  photo: z.any().optional(),

  aadhar: z.any().optional(),
});

function getUploadFile(value) {
  if (!value) return null;
  if (value instanceof FileList) return value[0] ?? null;
  if (Array.isArray(value)) return value[0] ?? null;
  return value;
}

function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-300">{message}</p>;
}

export default function Register() {
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const setSession = useAuthStore((state) => state.setSession);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedCourse = params.get("course");

    if (selectedCourse) {
      setValue("course", selectedCourse);
    }
  }, [location.search, setValue]);

  async function onSubmit(values) {
    setUploading(true);
    setError("");

    try {
      const photoFile = getUploadFile(values.photo);
      const aadharFile = getUploadFile(values.aadhar);

      let photoUrl = "";
      let aadharUrl = "";

      if (photoFile) {
        photoUrl = await uploadToCloudinary(photoFile);
      }

      if (aadharFile) {
        aadharUrl = await uploadToCloudinary(aadharFile);
      }

      const formData = new FormData();

      formData.append("fullName", values.fullName);
      formData.append("fatherName", values.guardianName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("address", values.address);
      formData.append("course", values.course);
      formData.append("schoolCollege", values.schoolCollege);
      formData.append("photoUrl", photoUrl);
      formData.append("aadharUrl", aadharUrl);

      await fetch(
        "https://script.google.com/macros/s/AKfycbz9gIiMls6BrbFpV79ygTbKxu5OowvE0Mu9GiIaI8R6wfGj3ohlouCnRq8F9QLTUxMEkw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );

      setSuccessMessage(
        `Thanks ${values.fullName}! Your registration has been submitted successfully.`,
      );
      setShowSuccessModal(true);
    } catch (err) {
      console.error(err);
      const message =
        err instanceof Error ? err.message : "Registration Failed";
      setError(message);
    } finally {
      setUploading(false);
    }
  }

  function onInvalid() {
    setError("Please fix the highlighted fields and try again.");
  }

  return (
    <>
      <SEO
        title="Register - Avion Training & Placement Centre"
        description="Register for our courses and generate your student ID online. Build your career with Avion Training & Placement Centre before competition gets tough!"
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Student Registration"
              title="Register online and generate your student ID."
              text="Build your career with us before competition gets tough!"
            />
            <GlassCard className="mt-8 p-5">
              <p className="text-sm font-black text-avion-green">
                Registration Instructions
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/60">
                <span>
                  1. Fill out the registration form with accurate information.
                </span>
                <span>
                  2. Upload a recent photo and your Aadhar card (image or PDF).
                </span>
                <span>
                  3. Click the "Submit Registration" button to complete the
                  process.
                </span>
                <span>
                  4. After submission, you will receive a confirmation email
                  with your student ID and registration number.
                </span>
              </div>
            </GlassCard>
            <GlassCard className="mt-6 p-5">
              <p className="text-sm font-black text-avion-green">
                Important Notes
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/60">
                <span>
                  • Ensure that all information provided is accurate and
                  up-to-date.
                </span>
                <span>
                  • Keep your student ID and registration number safe for future
                  reference.
                </span>
                <span>
                  • If you encounter any issues during registration, please
                  contact our support team for assistance.
                </span>
              </div>
            </GlassCard>

            <p className="mt-6 text-sm text-white/60">
              Note: After registration, you will receive a confirmation email
              with your student ID and registration number. Please keep this
              information safe for future reference.
            </p>
          </div>
          <GlassCard className="p-6">
            <form
              className="grid gap-5"
              onSubmit={handleSubmit(onSubmit, onInvalid)}
            >
              <div>
                <label className="label">Full Name</label>
                <input
                  className="input"
                  placeholder="Your full name"
                  {...register("fullName")}
                />
                <FieldError message={errors.fullName?.message} />
              </div>
              <div>
                <label className="label">Father/Guardian Name</label>
                <input
                  className="input"
                  placeholder="Father/Guardian name"
                  {...register("guardianName")}
                />
                <FieldError message={errors.guardianName?.message} />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                />
                <FieldError message={errors.email?.message} />
              </div>
              <div>
                <label className="label">Phone</label>
                <input
                  className="input"
                  type="tel"
                  placeholder="Your phone number"
                  {...register("phone")}
                />
                <FieldError message={errors.phone?.message} />
              </div>
              <div>
                <label className="label">Address</label>
                <textarea
                  className="textarea"
                  placeholder="Your address"
                  {...register("address")}
                />
                <FieldError message={errors.address?.message} />
              </div>
              <div>
                <label className="label">Course</label>
                <select className="select" {...register("course")}>
                  {fallbackCourses.map((course) => (
                    <option key={course.title} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.course?.message} />
              </div>
              <div>
                <label className="label">School/College</label>
                <input
                  className="input"
                  placeholder="Your school or college"
                  {...register("schoolCollege")}
                />
                <FieldError message={errors.schoolCollege?.message} />
              </div>
              <div>
                <label className="label">Photo</label>
                <input
                  className="input"
                  type="file"
                  accept="image/*"
                  {...register("photo")}
                />
              </div>
              <div>
                <label className="label">Aadhar Card</label>
                <input
                  className="input"
                  type="file"
                  accept="image/*,.pdf"
                  {...register("aadhar")}
                />
              </div>
              {error ? (
                <p className="rounded border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </p>
              ) : null}
              <p className="text-sm text-white/60">
                By submitting this form, you agree to our{" "}
                <Link to="/terms" className="text-avion-green underline">
                  Terms & Conditions
                </Link>
                .
              </p>
              <button
                className="btn btn-primary justify-center"
                type="submit"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Submit Registration"}
              </button>
            </form>
          </GlassCard>
        </div>
      </section>

      {showSuccessModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-avion-green/30 bg-[#07131f] p-6 text-center shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-avion-green">
              Registration received
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Success!</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {successMessage}
            </p>
            <button
              className="btn btn-primary mt-6 justify-center"
              onClick={() => setShowSuccessModal(false)}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
