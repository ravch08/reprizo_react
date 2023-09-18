import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { HamburgerMenu, Navbar, User, logoDark } from "../utils/helper";

const HeaderNav = () => {
  const [isSticky, setIsSticky] = useState("");

  function handleSticky() {
    const stickyClass = window.scrollY > 150 ? "stick" : "";
    setIsSticky(stickyClass);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  return (
    <div className={isSticky}>
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between">
          <Link to="/" className=" px-6">
            <img src={logoDark} alt="Reprizo" />
          </Link>

          <Navbar />
          <User />
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
