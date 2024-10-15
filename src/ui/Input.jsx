function Input({
  placeholder,
  label,
  register,
  name,
  validationRules,
  error,
  type = "text",
  disabled,
}) {
  return (
    <div>
      <label htmlFor={placeholder}>{label}</label>
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        id={placeholder}
        className="form-input"
        {...register(name, validationRules)}
      />
      <p className="mt-[5px] text-sm text-red-400">{error}</p>
    </div>
  );
}

export default Input;
