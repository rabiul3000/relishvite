import React from "react";
import { NavLink } from "react-router";

const FoodMenu = () => {
  const foodsCategory = ["popular", "vajapora", "kacchi", "polao", "misty"];
  return (
    <ul className="flex w-full lg:justify-around justify-center gap-2 py-4 mb-4 bg-slate-300">
      {foodsCategory.map((link, index) => (
        <NavLink
          key={index}
          to={link}
          className={({ isActive }) =>
            `capitalize  ${
              isActive
                ? "border-b-3 border-red-600"
                : "border-b-3 border-transparent"
            }`
          }
        >
          {link}
        </NavLink>
      ))}
    </ul>
  );
};

export default FoodMenu;
