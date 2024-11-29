import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    width: "100%",
    height: "100%",
    padding: "0px",
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "#ffffff",
    color: "#353535",
    outline: "none",
    maxHeight: "60px",
    overflowY: "auto",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#e5e7eb",
    },
    "&:focus": {
      borderColor: "#174863",
    },
  }),
  dropdownIndicator: (provided, { isDisabled }) => ({
    ...provided,
    color: isDisabled ? "#9ca6b2" : "#353535",
    "&:hover": {
      color: isDisabled ? "#9ca6b2" : "#353535",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#353535",
    "&:hover": {
      color: "#353535",
    },
  }),
  indicatorSeparator: (provided, { isDisabled }) => ({
    ...provided,
    backgroundColor: isDisabled ? "#9ca6b2" : "#353535",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "130px",
    overflowY: "auto",
    backgroundColor: "#f2f9fd",
    border: "1px solid #e5e7eb",
    padding: "0px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9ca6b2",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#2c9bcb"
      : state.isFocused
        ? "#e4f1fa"
        : null,
    color: state.isSelected ? "white" : state.isFocused ? "#353535" : "#353535",
    "&:hover": {
      backgroundColor: "#e4f1fa",
      color: "black",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#e4f1fa",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#353535",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff0000",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#353535",
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 1000,
  }),
};

function Choose({
  options,
  label,
  name,
  isLoading,
  error,
  disabled,
  isMulti,
  onChange,
  field,
}) {
  return (
    <div className={"w-full"}>
      <label
        htmlFor={label}
        className="text-gray mb-[5px] block text-sm ltr:pl-[5px] rtl:pr-[5px]"
      >
        {label}
      </label>

      <div className="border-gray focus:border-darkB relative z-10 flex items-center rounded-md p-0 transition-all">
        <Select
          styles={customStyles}
          name={name}
          className="h-full w-full p-[3px] ltr:pr-0 rtl:pl-0"
          options={options}
          isLoading={isLoading}
          placeholder={"--اختر--"}
          isDisabled={disabled}
          isMulti={isMulti}
          menuPosition="fixed"
          menuPortalTarget={document.body}
          menuShouldBlockScroll={true}
          onChange={onChange}
          {...(field ? field : {})}
        />
      </div>

      {error && (
        <div className="mt-[3px] p-[2px] text-sm text-red-400">{error}</div>
      )}
    </div>
  );
}

export default Choose;
