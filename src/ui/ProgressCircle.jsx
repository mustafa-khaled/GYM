function ProgressCircle({ title, color, count }) {
  return (
    <div className="relative size-[90px]">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200 dark:text-neutral-700"
          strokeWidth="2"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="75"
          strokeLinecap="round"
          style={{ stroke: color }}
        ></circle>
      </svg>

      <p className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center text-sm">
        <span>{title}</span>
        <span>{count}</span>
      </p>
    </div>
  );
}

export default ProgressCircle;
