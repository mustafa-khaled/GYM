import { useState } from "react";
import { LuFileImage } from "react-icons/lu";

export default function UploadFile({ placeholder, register, error, disabled }) {
  const [preview, setPreview] = useState(null);

  const handlePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  return (
    <div>
      <input
        disabled={disabled}
        type="file"
        placeholder={placeholder}
        id={placeholder}
        className="hidden"
        {...register}
        onChange={(e) => {
          register.onChange(e);
          handlePreview(e);
        }}
      />

      <div
        className="flex h-[50vh] cursor-pointer flex-col items-center justify-center gap-[40px] rounded-md border"
        onClick={() => document.getElementById(placeholder)?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full rounded-md object-cover"
          />
        ) : (
          <>
            <LuFileImage className="text-[100px] text-primary" />
            <h4 className="font-[600] leading-[24px]">{placeholder}</h4>
          </>
        )}
      </div>

      {error && (
        <p className="mt-[5px] text-center text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
