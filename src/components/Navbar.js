import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const menuItems = () => {
    return (
      <>
        <li>
          <HashLink smooth to="#home">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#services">
            Services
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about">
            About Us
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#gallery">
            Gallery
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#reviews">
            Reviews
          </HashLink>
        </li>
        <li>
          <Link to="/appointment">Book Appointment</Link>
        </li>
        <li>
          <HashLink smooth to="#contact">
            Contact Us
          </HashLink>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems()}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            The Grand Aroma
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems()}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/sign-in" className="btn">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;