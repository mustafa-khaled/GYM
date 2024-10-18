function SelectBox({
  options,
  label,
  name,
  register,
  validationRules,
  error,
  styles,
}) {
  return (
    <div className="w-full">
      <label className="block text-[16px] font-medium leading-[24px] text-[#fff]">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-2.5 top-[50%] ml-1 translate-y-[-30%] text-slate-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>

        <select
          className={`form-input ${styles} cursor-pointer appearance-none rounded-md font-[600] text-[#000]`}
          {...register(name, validationRules)}
          defaultValue=""
        >
          <option value="" disabled>
            -- اختر --
          </option>
          {options?.map((option) => (
            <option key={option} value={option} className="text-[#000]">
              {option}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-[5px] text-sm text-red-400">{error}</p>
    </div>
  );
}

export default SelectBox;
