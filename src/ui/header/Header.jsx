import { FaBarsProgress } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";
import Container from "../Container";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const toggleSidebar = () => setActiveSidebar((prev) => !prev);
  const closeSidebar = () => setActiveSidebar(false);

  return (
    <>
      <header className="lef-0 fixed top-0 z-40 flex h-[64px] w-full items-center bg-[#000000] text-[#fff]">
        <Container>
          <div className="flex w-full items-center justify-between gap-[10px]">
            <NavLinks activeSidebar={activeSidebar} />

            <div
              className="w-full cursor-pointer text-xl md:hidden"
              onClick={toggleSidebar}
            >
              {activeSidebar ? <FaTimes /> : <FaBarsProgress />}
            </div>
            <div className="flex items-center gap-[20px]">
              <LoginButton />
              <Logo />
            </div>
          </div>
        </Container>
      </header>

      {activeSidebar && (
        <div
          onClick={closeSidebar}
          className={`fixed left-0 top-0 z-10 h-full w-full bg-gray-300/10 backdrop-blur-sm md:hidden`}
        />
      )}
    </>
  );
}

export default Header;
