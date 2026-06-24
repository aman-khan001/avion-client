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
import SEO from "../components/SEO.jsx";
import { uploadToCloudinary } from "../lib/cloudinary.js";


const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),

  course: z.string(),

  guardianName: z.string(),

  address: z.string(),

  schoolCollege: z.string(),

  photo: z.any(),

  aadhar: z.any(),
});

export default function Register() {
  const [error, setError] = useState("");
  const setSession = useAuthStore((state) => state.setSession);
  const navigate = useNavigate();
  
  
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const [uploading, setUploading] =
  useState(false);
  

async function onSubmit(values) {
  setUploading(true);
  try {

    const photoFile =
      values.photo?.[0];

    const aadharFile =
      values.aadhar?.[0];

    let photoUrl = "";
    let aadharUrl = "";

    if (photoFile) {
      photoUrl =
        await uploadToCloudinary(
          photoFile
        );
    }

    if (aadharFile) {
      aadharUrl =
        await uploadToCloudinary(
          aadharFile
        );
    }

    await fetch(
      "https://script.google.com/macros/s/AKfycbz9gIiMls6BrbFpV79ygTbKxu5OowvE0Mu9GiIaI8R6wfGj3ohlouCnRq8F9QLTUxMEkw/exec",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({

          fullName:
            values.fullName,

          fatherName:
            values.guardianName,

          email:
            values.email,

          phone:
            values.phone,

          address:
            values.address,

          course:
            values.course,

          schoolCollege:
            values.schoolCollege,

          photoUrl,

          aadharUrl

        }),
      }
    );

    alert(
      "Registration Successful"
    );

  } catch (error) {

    console.error(error);

    alert(
      "Registration Failed"
    );
  }
  finally {
    setUploading(false);
  }
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
                Registration Includes
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/60">
                <span>Student ID generation</span>
                <span>Registration number</span>
                <span>Course and batch preference</span>
                <span>Registration fee status</span>
              </div>
            </GlassCard>

            <p className="mt-6 text-sm text-white/60">
              Note: After registration, you will receive a confirmation email with
              your student ID and registration number. Please keep this
              information safe for future reference.
            </p>
          </div>
          <GlassCard className="p-6">
            <form
              className="grid gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="label">Full Name</label>
                <input
                  className="input"
                  placeholder="Your full name"
                  {...register("fullName")}
                />
              </div>
              <div>
                <label className="label">Father/Guardian Name</label>
                <input
                  className="input"
                  placeholder="Father/Guardian name"
                  {...register("guardianName")}
                />
              </div>
              <div>
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                />
              </div>
              <div>
                <label className="label">Phone</label>
                <input
                  className="input"
                  type="tel"
                  placeholder="Your phone number"
                  {...register("phone")}
                />
              </div>
              <div>
                <label className="label">Address</label>
                <textarea
                  className="textarea"
                  placeholder="Your address"
                  {...register("address")}
                />
              </div>
              <div>
                <label className="label">Course</label>
                <select
                  className="select"
                  {...register("course")}
                >
                  {fallbackCourses.map((course) => (
                    <option
                      key={course.title}
                      value={course.title}
                    >
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">School/College</label>
                <input
                  className="input"
                  placeholder="Your school or college"
                  {...register("schoolCollege")}
                />
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
                  accept="image/*"
                  {...register("aadhar")}
                />
              </div>
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
    </>
  );
}
