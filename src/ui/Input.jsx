function Input({ placeholder }) {
  return (
    <div>
      <label htmlFor={placeholder}>{placeholder}</label>
      <input
        placeholder={placeholder}
        id={placeholder}
        className="form-input"
      />
    </div>
  );
}

export default Input;
