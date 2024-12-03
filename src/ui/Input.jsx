import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

function Input({
  placeholder,
  label,
  register,
  name,
  validationRules,
  error,
  type = "text",
  disabled,
  Styles,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      {label && <label htmlFor={placeholder}>{label}</label>}
      <div className="relative">
        <input
          disabled={disabled}
          type={isPasswordVisible && type === "password" ? "text" : type}
          placeholder={placeholder}
          id={placeholder}
          className={`form-input ${Styles}`}
          {...register(name, validationRules)}
        />
        {type === "password" && (
          <button
            aria-label={isPasswordVisible ? "hidePassword" : "showPassword"}
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute left-[10px] top-[60%] translate-y-[-50%] text-xl text-slate-600"
          >
            {isPasswordVisible ? <FaRegEyeSlash /> : <LuEye />}
          </button>
        )}
      </div>
      {error && <p className="mt-[5px] text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default Input;
