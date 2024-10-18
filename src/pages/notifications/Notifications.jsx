import { Outlet } from "react-router-dom";
import NotificationsNav from "./NotificationsNav";
import image from "../../assets/hero_section_home.jpg";

function Notifications() {
  return (
    <>
      <NotificationsNav />

      <section
        className="relative min-h-[calc(100vh-90px)]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="fixed left-0 top-0 h-[100vh] w-full bg-gradient-to-br from-black/10 to-[#240101]" />
        <div className="relative py-[20px] text-[#fff]">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Notifications;
