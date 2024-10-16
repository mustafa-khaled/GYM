import { Outlet } from "react-router-dom";
import NotificationsNav from "./NotificationsNav";
import image from "../../assets/hero_section_home.jpg";

function Notifications() {
  return (
    <>
      <NotificationsNav />

      <section
        className="relative h-[calc(100vh-114px)] overflow-y-auto"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="fixed left-0 top-0 mt-[114px] h-[calc(100vh-114px)] w-full bg-gradient-to-br from-black/10 to-[#240101]" />
        <div className="relative my-[20px] min-h-[calc(100vh-114px)] overflow-y-auto text-[#fff]">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Notifications;
