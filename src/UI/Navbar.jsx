import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import CartOverview from "./CartOverview";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavClick = () => {
    setShowNavbar((navbar) => !navbar);
  };

  return (
    <div>
      {/* the overlay */}
      <div
        className={` md:hidden block bg-red-300 opacity-70 absolute left-0 bottom-0 top-14 right-0 transition-transform duration-300 z-50 backdrop-blur-sm h-screen${
          !showNavbar ? " translate-y-[-200%]" : ""
        }`}
      ></div>

      <nav>
        <div className="hidden md:block">
          <ul className="flex gap-4 text-lg">
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>

            <li>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>

        {/* Toggle bar */}
        <div className="md:hidden flex justify-center items-center gap-6">
          <CartOverview />
          <button className="text-xl" onClick={handleNavClick}>
            {showNavbar ? <HiXMark /> : <HiBars3BottomRight />}
          </button>
        </div>
      </nav>

      {/* for mobile */}
      <nav
        className={`md:hidden absolute  top-20 left-10 w-[80%] transition-transform z-50 duration-300 bg-white ${
          showNavbar ? "translate-x-0" : "translate-x-[-500px]"
        } `}
      >
        <ul
          className="px-14 py-10 flex flex-col justify-center items-center gap-4  font-medium "
          onClick={() => setShowNavbar(false)}
        >
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>

          <li>
            <NavLink to="/aboutUs">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
