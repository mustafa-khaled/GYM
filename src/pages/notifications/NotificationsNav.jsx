import { NavLink } from "react-router-dom";
import Container from "../../ui/Container";

const links = [
  {
    href: "daily",
    title: "الاشعارات اليوميه",
  },
  {
    href: "weekly",
    title: "الاشعارات الاسبوعيه",
  },
  {
    href: "health",
    title: "تطور الوزن والصحة الجسدية",
  },
  {
    href: "measurements",
    title: "القياسات والصور",
  },
  {
    href: "weights",
    title: "تطور الأوزان",
  },
];

function NotificationsNav() {
  return (
    <nav className="relative z-30 flex min-h-[50px] w-full items-center border-t border-slate-500 bg-[#000] text-[#fff]">
      <Container>
        <ul className="flex flex-wrap items-center justify-around gap-[10px] py-[10px] lg:flex-nowrap lg:justify-start lg:gap-[50px] lg:py-0">
          {links?.map((link) => {
            return (
              <li key={link?.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `text-[14px] font-[700] leading-[24px] transition-all hover:text-primary ${isActive ? "text-primary" : ""}`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}

export default NotificationsNav;
