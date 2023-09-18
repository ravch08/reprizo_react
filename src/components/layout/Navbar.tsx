import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between gap-6 lg:flex-row">
      <NavLink to="/" className="nav-link">
        HOME
      </NavLink>
      <NavLink to="about" className="nav-link">
        ABOUT
      </NavLink>
      <NavLink
        to="products"
        className="nav-link flex flex-row items-center gap-1"
      >
        PRODUCTS
        <svg
          width="6"
          fill="#ababab"
          viewBox="0 0 320 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>
      </NavLink>

      <NavLink to="blogs" className="nav-link">
        BLOG
      </NavLink>
      <NavLink to="contact" className="nav-link">
        CONTACT
      </NavLink>
      <NavLink to="#!" className="nav-link">
        INSTANT QUOTE
      </NavLink>
    </nav>
  );
};

export default Navbar;
