import { HeaderNav } from "../utils/helper";

const Header = () => {
  return (
    <header>
      <div className="bg-slate-800 py-2 text-center text-xs text-white ">
        <p>Lansing, Delta Township 6334 W. Saginaw, Suite D</p>
      </div>

      <HeaderNav />
    </header>
  );
};

export default Header;
