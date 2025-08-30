import React, { useContext } from "react";
import { NavLink } from "react-router";
import navlinks from "./navlinks";
import { AuthContext } from "../../context/Contexts";

const Navbar = () => {
  const { user, authLoading } = useContext(AuthContext);

  return (
    <div className="w-screen flex items-center justify-center bg-amber-50">
      {navlinks.map(({ path, name, OutlineIcon, FillIcon }, index) => (
        <NavLink to={path} key={index}>
          {({ isActive }) =>
            isActive ? (
              <div className={`p-4 border-b-4 border-rose-600 ${authLoading || user && path === 'Login' && 'hidden'}`}>{name}</div>
            ) : (
              <div className={`p-4 text-gray-500 ${authLoading || user && name === 'Login' && 'hidden'}`}>{name} </div>
            )
          }
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
