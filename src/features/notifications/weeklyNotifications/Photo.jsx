import { useState } from "react";
import UploadFile from "../../../ui/UploadFile";

export default function Photo({ placeholder }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setError("يجب أضافة صورة فقط");
      setPreviewUrl(null);
    }
  };

  return (
    <>
      {previewUrl ? (
        <img
          src={previewUrl}
          alt="Uploaded preview"
          className="min-h-[55vh] rounded-md object-contain object-center"
        />
      ) : (
        <UploadFile
          placeholder={placeholder}
          onFileChange={handleFileUpload}
          error={error}
        />
      )}
    </>
  );
}
