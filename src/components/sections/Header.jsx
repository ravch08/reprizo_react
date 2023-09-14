import { Link } from "react-router-dom";
import { HamburgerMenu, logoDark, Navbar, User } from "../utils/helper";

const Header = () => {
  return (
    <header>
      <div className="bg-slate-800 py-2 text-center text-xs text-white ">
        <p>Lansing, Delta Township 6334 W. Saginaw, Suite D</p>
      </div>
      <div className="sticky top-0">
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
    </header>
  );
};

export default Header;
