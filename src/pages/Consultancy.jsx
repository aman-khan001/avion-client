import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  LoaderCircle,
  ShieldCheck,
  UploadCloud,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import SEO from "../components/SEO.jsx";
import { submitCandidate } from "../services/googleSheets.js";
import "../styles/consultancy.css";

const indianMobile = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;
const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine((value) => !value || /^https?:\/\/.+/i.test(value), "Enter a valid URL starting with http:// or https://");

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  mobile: z.string().trim().refine((value) => indianMobile.test(value), "Enter a valid Indian mobile number."),
  whatsapp: z.string().trim().optional().refine((value) => !value || indianMobile.test(value), "Enter a valid Indian WhatsApp number."),
  city: z.string().trim().min(2, "Please enter your city."),
  state: z.string().trim().min(2, "Please enter your state."),
  address: z.string().trim().optional(),
  qualification: z.string().min(1, "Please select your qualification."),
  college: z.string().trim().optional(),
  passingYear: z.string().trim().optional(),
  currentStatus: z.string().min(1, "Please select your current status."),
  primarySkills: z.array(z.string()).min(1, "Select at least one primary skill."),
  otherSkills: z.string().trim().optional(),
  experienceLevel: z.string().min(1, "Please select an experience level."),
  workExperience: z.string().trim().optional(),
  company: z.string().trim().optional(),
  jobRole: z.string().trim().optional(),
  consultancyRequirement: z.string().min(1, "Please select what you are looking for."),
  preferredRole: z.string().trim().optional(),
  preferredLocation: z.string().trim().optional(),
  expectedSalary: z.string().trim().optional(),
  availability: z.string().min(1, "Please select your availability."),
  linkedin: optionalUrl,
  portfolio: optionalUrl,
  resumeUrl: optionalUrl,
  resume: z.any().optional().refine((files) => !files?.length || files[0].type === "application/pdf", "Resume must be a PDF file.")
    .refine((files) => !files?.length || files[0].size <= 5 * 1024 * 1024, "Resume must be 5 MB or smaller."),
  consent: z.boolean().refine((value) => value, "You must provide consent to continue."),
});

const steps = [
  { title: "Personal", icon: UserRound },
  { title: "Education", icon: GraduationCap },
  { title: "Professional", icon: BriefcaseBusiness },
  { title: "Consultancy", icon: ShieldCheck },
  { title: "Additional", icon: UploadCloud },
];

const stepFields = [
  ["fullName", "email", "mobile", "whatsapp", "city", "state", "address"],
  ["qualification", "college", "passingYear", "currentStatus"],
  ["primarySkills", "otherSkills", "experienceLevel", "workExperience", "company", "jobRole"],
  ["consultancyRequirement", "preferredRole", "preferredLocation", "expectedSalary", "availability"],
  ["linkedin", "portfolio", "resumeUrl", "resume", "consent"],
];

const skills = ["Python", "Java", "JavaScript", "React", "Node.js", "MERN Stack", "Next.js", "PHP", "Django", "Data Science", "Machine Learning", "Artificial Intelligence", "Digital Marketing", "Graphic Design", "UI/UX Design", "Other"];

function FieldError({ message }) {
  return message ? <p className="consultancy-error" role="alert">{message}</p> : null;
}

function Field({ label, required, children, error, className = "" }) {
  return (
    <div className={`consultancy-field ${className}`}>
      <label className="consultancy-label">{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

export default function Consultancy() {
  const [step, setStep] = useState(0);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submission, setSubmission] = useState(null);

  const { register, handleSubmit, trigger, watch, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      primarySkills: [],
      consent: false,
    },
  });

  const selectedSkills = watch("primarySkills");

  async function nextStep() {
    const valid = await trigger(stepFields[step]);
    if (valid) {
      setStep((current) => Math.min(current + 1, steps.length - 1));
      document.getElementById("consultancy-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function onSubmit(values) {
    if (submitting) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const result = await submitCandidate(values);
      setSubmission(result);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function toggleSkill(skill) {
    const current = watch("primarySkills") || [];
    setValue(
      "primarySkills",
      current.includes(skill) ? current.filter((item) => item !== skill) : [...current, skill],
      { shouldValidate: true },
    );
  }

  if (submission) {
    return (
      <>
        <SEO title="Candidate Registration & Job Consultancy | AVION Dewas" description="Register with AVION Training & Placement Centre for job opportunities, internships, career guidance, and professional placement support." />
        <section className="consultancy-success">
          <div className="consultancy-success-card">
            <div className="consultancy-success-icon"><CheckCircle2 size={38} /></div>
            <p className="consultancy-eyebrow">AVION CONSULTANCY</p>
            <h1>Registration Submitted Successfully!</h1>
            <p>Thank you for registering with AVION. Our consultancy team will review your profile and contact you if a suitable opportunity is available.</p>
            <div className="consultancy-candidate-id">
              <span>Candidate ID</span>
              <strong>{submission.candidateId}</strong>
            </div>
            <Link className="btn btn-primary consultancy-home-btn" to="/">Back to Home</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO title="Candidate Registration & Job Consultancy | AVION Dewas" description="Register with AVION Training & Placement Centre for job opportunities, internships, career guidance, and professional placement support." />
      <section className="consultancy-page">
        <div className="consultancy-hero hero-grid">
          <div className="container consultancy-hero-grid">
            <div>
              <p className="consultancy-eyebrow">AVION CAREER CONSULTANCY</p>
              <h1>Your Career. <span>Your Next Opportunity.</span></h1>
              <p className="consultancy-hero-copy">Take the next step in your professional journey. Register with AVION and let us help connect your skills with the right opportunities.</p>
              <a className="btn btn-primary" href="#consultancy-form">Register Now <ArrowRight size={18} /></a>
            </div>
            <div className="consultancy-trust-card">
              <div className="consultancy-orbit"><BriefcaseBusiness size={30} /></div>
              <strong>Profile-to-placement support</strong>
              <span>Career guidance · Opportunity matching · Interview preparation</span>
              <div className="consultancy-trust-footer"><ShieldCheck size={17} /> Your information remains private</div>
            </div>
          </div>
        </div>

        <div className="container consultancy-form-wrap" id="consultancy-form">
          <aside className="consultancy-progress" aria-label="Registration progress">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className={`consultancy-progress-item ${index === step ? "active" : ""} ${index < step ? "complete" : ""}`} key={item.title}>
                  <span className="consultancy-progress-icon"><Icon size={18} /></span>
                  <span><small>Step {index + 1}</small><strong>{item.title}</strong></span>
                </div>
              );
            })}
          </aside>

          <form className="consultancy-form-card" onSubmit={handleSubmit(onSubmit)}>
            <div className="consultancy-mobile-progress">
              <span>Step {step + 1} of {steps.length}</span>
              <strong>{steps[step].title}</strong>
              <div><i style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
            </div>

            {step === 0 && (
              <section>
                <div className="consultancy-section-heading"><p>01</p><div><h2>Personal Information</h2><span>Tell us how to reach you</span></div></div>
                <div className="consultancy-grid">
                  <Field label="Full Name" required error={errors.fullName?.message}><input className="consultancy-input" {...register("fullName")} placeholder="Your full name" /></Field>
                  <Field label="Email Address" required error={errors.email?.message}><input className="consultancy-input" type="email" {...register("email")} placeholder="you@example.com" /></Field>
                  <Field label="Mobile Number" required error={errors.mobile?.message}><input className="consultancy-input" type="tel" {...register("mobile")} placeholder="+91 98765 43210" /></Field>
                  <Field label="WhatsApp Number" error={errors.whatsapp?.message}><input className="consultancy-input" type="tel" {...register("whatsapp")} placeholder="Optional WhatsApp number" /></Field>
                  <Field label="City" required error={errors.city?.message}><input className="consultancy-input" {...register("city")} placeholder="Your city" /></Field>
                  <Field label="State" required error={errors.state?.message}><input className="consultancy-input" {...register("state")} placeholder="Your state" /></Field>
                  <Field label="Current Address" error={errors.address?.message} className="consultancy-full"><textarea className="consultancy-textarea" {...register("address")} placeholder="Optional current address" /></Field>
                </div>
              </section>
            )}

            {step === 1 && (
              <section>
                <div className="consultancy-section-heading"><p>02</p><div><h2>Educational Information</h2><span>Share your academic background</span></div></div>
                <div className="consultancy-grid">
                  <Field label="Highest Qualification" required error={errors.qualification?.message}><select className="consultancy-select" {...register("qualification")}><option value="">Select qualification</option>{["10th", "12th", "Diploma", "Undergraduate", "Postgraduate", "Other"].map((item) => <option key={item}>{item}</option>)}</select></Field>
                  <Field label="College / University Name" error={errors.college?.message}><input className="consultancy-input" {...register("college")} placeholder="Institution name" /></Field>
                  <Field label="Passing Year" error={errors.passingYear?.message}><input className="consultancy-input" inputMode="numeric" {...register("passingYear")} placeholder="e.g. 2026" /></Field>
                  <Field label="Currently Studying or Working?" required error={errors.currentStatus?.message}><select className="consultancy-select" {...register("currentStatus")}><option value="">Select current status</option>{["Student", "Fresher", "Experienced", "Career Break"].map((item) => <option key={item}>{item}</option>)}</select></Field>
                </div>
              </section>
            )}

            {step === 2 && (
              <section>
                <div className="consultancy-section-heading"><p>03</p><div><h2>Professional Information</h2><span>Highlight your skills and experience</span></div></div>
                <Field label="Primary Skills" required error={errors.primarySkills?.message} className="consultancy-full">
                  <div className="consultancy-skills" role="group" aria-label="Primary skills">
                    {skills.map((skill) => <button type="button" key={skill} className={selectedSkills?.includes(skill) ? "selected" : ""} onClick={() => toggleSkill(skill)} aria-pressed={selectedSkills?.includes(skill) || false}>{skill}</button>)}
                  </div>
                </Field>
                <div className="consultancy-grid consultancy-grid-spaced">
                  <Field label="Other Skills" error={errors.otherSkills?.message}><input className="consultancy-input" {...register("otherSkills")} placeholder="Skills not listed above" /></Field>
                  <Field label="Experience Level" required error={errors.experienceLevel?.message}><select className="consultancy-select" {...register("experienceLevel")}><option value="">Select experience</option>{["No Experience", "Fresher", "0–1 Years", "1–3 Years", "3–5 Years", "5+ Years"].map((item) => <option key={item}>{item}</option>)}</select></Field>
                  <Field label="Total Work Experience" error={errors.workExperience?.message}><input className="consultancy-input" {...register("workExperience")} placeholder="e.g. 2 years 6 months" /></Field>
                  <Field label="Current / Previous Company" error={errors.company?.message}><input className="consultancy-input" {...register("company")} placeholder="Company name" /></Field>
                  <Field label="Current Job Role" error={errors.jobRole?.message} className="consultancy-full"><input className="consultancy-input" {...register("jobRole")} placeholder="Your current or previous role" /></Field>
                </div>
              </section>
            )}

            {step === 3 && (
              <section>
                <div className="consultancy-section-heading"><p>04</p><div><h2>Consultancy Requirements</h2><span>Define your next career move</span></div></div>
                <div className="consultancy-grid">
                  <Field label="What are you looking for?" required error={errors.consultancyRequirement?.message}><select className="consultancy-select" {...register("consultancyRequirement")}><option value="">Select requirement</option>{["Job Placement", "Internship", "Career Guidance", "Resume Building", "Interview Preparation", "Skill Development", "Other"].map((item) => <option key={item}>{item}</option>)}</select></Field>
                  <Field label="Preferred Job Role"><input className="consultancy-input" {...register("preferredRole")} placeholder="e.g. Frontend Developer" /></Field>
                  <Field label="Preferred Job Location"><input className="consultancy-input" {...register("preferredLocation")} placeholder="City, state, or remote" /></Field>
                  <Field label="Expected Salary"><input className="consultancy-input" {...register("expectedSalary")} placeholder="e.g. ₹4–6 LPA" /></Field>
                  <Field label="Availability to Join" required error={errors.availability?.message} className="consultancy-full"><select className="consultancy-select" {...register("availability")}><option value="">Select availability</option>{["Immediately", "Within 15 Days", "Within 30 Days", "1–3 Months", "Not Sure"].map((item) => <option key={item}>{item}</option>)}</select></Field>
                </div>
              </section>
            )}

            {step === 4 && (
              <section>
                <div className="consultancy-section-heading"><p>05</p><div><h2>Additional Information</h2><span>Complete your consultancy profile</span></div></div>
                <div className="consultancy-grid">
                  <Field label="LinkedIn Profile URL" error={errors.linkedin?.message}><input className="consultancy-input" {...register("linkedin")} placeholder="https://linkedin.com/in/username" /></Field>
                  <Field label="Resume URL (optional)" error={errors.resumeUrl?.message}><input className="consultancy-input" {...register("resumeUrl")} placeholder="https://..." /></Field>
                  <Field label="GitHub / Portfolio URL" error={errors.portfolio?.message} className="consultancy-full"><input className="consultancy-input" {...register("portfolio")} placeholder="https://github.com/username or portfolio URL" /></Field>
                  <Field label="Upload Resume (PDF, max 5 MB)" error={errors.resume?.message} className="consultancy-full">
                    <input className="consultancy-file" type="file" accept=".pdf,application/pdf" {...register("resume")} />
                  </Field>
                </div>
                <label className="consultancy-consent">
                  <input type="checkbox" {...register("consent")} />
                  <span>I confirm that the information provided is accurate and agree to be contacted by AVION regarding career and consultancy opportunities.</span>
                </label>
                <FieldError message={errors.consent?.message} />
              </section>
            )}

            {submitError && <p className="consultancy-submit-error" role="alert">{submitError}</p>}

            <div className="consultancy-actions">
              {step > 0 ? <button type="button" className="consultancy-back" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={17} /> Back</button> : <span />}
              {step < steps.length - 1 ? (
                <button type="button" className="btn btn-primary consultancy-next" onClick={nextStep}>Continue <ArrowRight size={17} /></button>
              ) : (
                <button type="submit" className="btn btn-primary consultancy-next" disabled={submitting}>
                  {submitting ? <><LoaderCircle className="consultancy-spinner" size={18} /> Submitting...</> : <>Submit Registration <ArrowRight size={17} /></>}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
