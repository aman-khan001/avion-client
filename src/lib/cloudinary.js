export async function uploadToCloudinary(file) {
  if (!file) {
    throw new Error("No file selected for upload.");
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "avion_students");
  formData.append("folder", "avion/student_documents");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/ddqgbb2zg/auto/upload",
    {
      method: "POST",
      body: formData,
    },
  );

  let data = null;

  try {
    data = await response.json();
  } catch {
    throw new Error(
      "The upload request did not return a valid Cloudinary response.",
    );
  }

  if (!response.ok) {
    const message =
      data?.error?.message ||
      `Cloudinary upload failed with status ${response.status}`;
    throw new Error(message);
  }

  if (!data?.secure_url) {
    throw new Error("Cloudinary did not return a URL for the uploaded file.");
  }

  return data.secure_url;
}
