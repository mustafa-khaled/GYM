import { Outlet } from "react-router-dom";
import NotificationsNav from "./NotificationsNav";

function Notifications() {
  return (
    <>
      <NotificationsNav />

      <section className="text-[#fff]">
        <Outlet />
      </section>
    </>
  );
}

export default Notifications;
