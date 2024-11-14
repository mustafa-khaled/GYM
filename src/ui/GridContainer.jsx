export default function GridContainer({
  children,
  columns = "md:grid-cols-2",
}) {
  return (
    <div className={`flex flex-col gap-[30px] md:grid ${columns}`}>
      {children}
    </div>
  );
}
