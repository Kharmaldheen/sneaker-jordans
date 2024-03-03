import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="md:text-xl text-lg font-bold">
      Sneaker<span className="text-red-500">Jordans</span>
    </NavLink>
  );
}

export default Logo;
