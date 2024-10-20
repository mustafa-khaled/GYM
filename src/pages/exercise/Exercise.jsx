import { Outlet } from "react-router-dom";
import image from "../../assets/hero_section_home.jpg";
import ExerciseCalendar from "./ExerciseCalendar";

function Exercise() {
  return (
    <section
      className="relative min-h-[calc(100vh-64px)]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "50% 40%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ExerciseCalendar />

      <div className="fixed left-0 top-0 h-[100vh] w-full bg-gradient-to-br from-black/10 to-[#240101]" />
      <div className="relative py-[20px] text-[#fff]">
        <Outlet />
      </div>
    </section>
  );
}

export default Exercise;
