import { LuFileImage } from "react-icons/lu";

export default function UploadFile({
  placeholder,
  onFileChange,
  error,
  disabled,
}) {
  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (onFileChange) onFileChange(file);
  };

  return (
    <div>
      <input
        disabled={disabled}
        type="file"
        placeholder={placeholder}
        id={placeholder}
        className="hidden"
        onChange={handleInputChange}
      />

      <div
        className="flex min-h-[55vh] cursor-pointer flex-col items-center justify-center gap-[40px] rounded-md border"
        onClick={() => document.getElementById(placeholder)?.click()}
      >
        <LuFileImage className="text-[100px] text-primary" />
        <h4 className="font-[600] leading-[24px]">{placeholder}</h4>
      </div>

      {error && (
        <p className="mt-[5px] text-center text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
