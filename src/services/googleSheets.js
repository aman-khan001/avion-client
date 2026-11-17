const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

function createCandidateId() {
  const date = new Date();
  const stamp = [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
  ].join("");
  const randomId =
    globalThis.crypto?.randomUUID?.() ||
    `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
  const random = randomId.split("-")[0].toUpperCase();
  return `AV-${stamp}-${random}`;
}

function readResume(resume) {
  if (!resume) return null;

  return new Promise((resolve, reject) => {
    const reader = new globalThis.FileReader();
    reader.onload = () =>
      resolve({
        name: resume.name,
        type: resume.type,
        data: String(reader.result).split(",")[1] || "",
      });
    reader.onerror = () => reject(new Error("Could not read the resume file."));
    reader.readAsDataURL(resume);
  });
}

export async function submitCandidate(values) {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error(
      "Google Sheets submission is not configured. Please add VITE_GOOGLE_SCRIPT_URL and try again.",
    );
  }

  const candidateId = createCandidateId();
  const resume = await readResume(values.resume?.[0]);
  const timestamp = new Date().toISOString();

  const payload = {
    timestamp,
    candidateId,
    submissionId: candidateId,
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    mobile: values.mobile.trim(),
    whatsapp: values.whatsapp?.trim() || "",
    city: values.city.trim(),
    state: values.state.trim(),
    address: values.address?.trim() || "",
    qualification: values.qualification,
    college: values.college?.trim() || "",
    passingYear: values.passingYear?.trim() || "",
    currentStatus: values.currentStatus,
    primarySkills: values.primarySkills.join(", "),
    otherSkills: values.otherSkills?.trim() || "",
    experienceLevel: values.experienceLevel,
    workExperience: values.workExperience?.trim() || "",
    company: values.company?.trim() || "",
    jobRole: values.jobRole?.trim() || "",
    consultancyRequirement: values.consultancyRequirement,
    preferredRole: values.preferredRole?.trim() || "",
    preferredLocation: values.preferredLocation?.trim() || "",
    expectedSalary: values.expectedSalary?.trim() || "",
    availability: values.availability,
    linkedin: values.linkedin?.trim() || "",
    portfolio: values.portfolio?.trim() || "",
    resumeUrl: values.resumeUrl?.trim() || "",
    consent: Boolean(values.consent),
    candidateConsent: Boolean(values.consent),
    consentAccepted: Boolean(values.consent),
    applicationStatus: "New",
    resume,
  };

  const response = await globalThis.fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("The registration could not be saved. Please try again.");
  }

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(
      "The Google Sheets endpoint did not confirm the registration was saved.",
    );
  }

  if (!result || result.success !== true) {
    throw new Error(result?.message || "The registration was not saved.");
  }

  return { candidateId, result };
}
