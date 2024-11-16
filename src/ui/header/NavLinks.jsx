import { NavLink } from "react-router-dom";

const links = [
  {
    href: "/",
    title: "الرئيسيه",
  },
  {
    href: "/notifications",
    title: "الاشعارات",
  },
  {
    href: "/diet",
    title: "النظام الغذائي",
  },
  {
    href: "/exercise",
    title: "التمارين",
  },
  {
    href: "/subscriptions",
    title: "الاشتراكات",
  },
];

function NavLinks({ activeSidebar, closeSidebar }) {
  return (
    <nav
      className={`fixed ${activeSidebar ? "right-0" : "right-[-400px]"} top-[64px] h-[calc(100vh-64px)] w-[300px] border border-slate-900 bg-[#000000] transition-all md:static md:h-auto md:w-[80%] md:border-none`}
    >
      <ul className="flex h-[70vh] flex-col items-center justify-between gap-[20px] pt-[20px] md:h-auto md:flex-row md:justify-start md:pt-0 xl:gap-[50px]">
        {links?.map((link) => {
          return (
            <li key={link.href}>
              <NavLink
                to={link.href}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `font-[700] leading-[24px] transition-all hover:text-primary md:text-[15px] lg:text-[16px] ${isActive ? "text-primary" : ""}`
                }
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavLinks;
