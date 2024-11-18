function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  styles,
  disabled,
  AriaLabel,
}) {
  const baseStyles =
    "h-[36px] w-full rounded-[4px] font-medium transition-all font-bold";

  const variantStyles = {
    primary: "bg-primary text-black hover:bg-[#e35935] disabled:bg-[#90280d]",
    secondary:
      "bg-transparent border border-[#fff] text-[#fff] hover:text-primary hover:border-primary",
    tertiary:
      "bg-primary text-black hover:bg-[#e35935] disabled:bg-[#90280d] h-[50px] md:text-[20px] text-[16px] font-[900] !font-bold",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} disabled:cursor-not-allowed ${styles}`}
      aria-label={AriaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
