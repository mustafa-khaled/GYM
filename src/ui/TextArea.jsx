function TextArea({
  placeholder,
  label,
  register,
  name,
  validationRules,
  error,
  disabled,
  Rows = 8,
}) {
  return (
    <div>
      <label htmlFor={placeholder}>{label}</label>
      <div className="relative">
        <textarea
          disabled={disabled}
          placeholder={placeholder}
          id={placeholder}
          className="form-input !h-auto resize-none py-[10px]"
          {...register(name, validationRules)}
          rows={Rows}
        />
      </div>
      {error && <p className="mt-[5px] text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default TextArea;
