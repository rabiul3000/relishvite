import React, { Fragment } from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default AuthLayout;
