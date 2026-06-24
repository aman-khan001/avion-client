export async function uploadToCloudinary(file) {
  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "avion_students"
  );

  formData.append(
    "folder",
    "avion/student_documents"
  );

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/ddqgbb2zg/auto/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  return data.secure_url;
}