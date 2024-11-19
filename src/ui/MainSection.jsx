import image from "../assets/hero_section_home.webp";

export default function MainSection({
  children,
  styles = "flex items-center text-[#fff]",
}) {
  return (
    <section
      className={`relative min-h-[calc(100vh-64px)] ${styles}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-black/10 to-[#240101]" />
      {children}
    </section>
  );
}
