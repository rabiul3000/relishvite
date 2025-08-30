import React from "react";
import { Outlet } from "react-router";
import FoodMenu from "../components/FoodMenu/FoodMenu";

const FoodLayout = () => {
  return (
    <div>        
      <FoodMenu />
      <Outlet />
    </div>
  );
};

export default FoodLayout;
