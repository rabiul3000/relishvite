import { createBrowserRouter, Navigate } from "react-router";
import RootLayout from "./Layouts/RootLayout";
import Orders from "./pages/Orders/Orders";
import Foods from "./pages/Foods/Foods";
import AuthLayout from "./Layouts/AuthLayout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AuthRoutes from "./protectedRoutes/AuthRoutes";
import FoodLayout from "./Layouts/FoodLayout";
import PopularFoods from "./pages/Foods/PopularFoods";
import Home from "./pages/Home/Home";
import Vajapora from "./pages/Foods/Vajapora";
import Kacchi from "./pages/Foods/Kacchi";
import Polao from "./pages/Foods/Polao";
import Misty from "./pages/Foods/Misty";
import FoodPreview from "./pages/PreviewFood/FoodPreview";

let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/foods",
        Component: FoodLayout,
        children: [
          {
            index: true,
            element: <Navigate to="popular" replace />,
          },
          {
            path: "popular",
            element: <PopularFoods />,
          },
          {
            path: "vajapora",
            element: <Vajapora />,
          },
          {
            path: "kacchi",
            element: <Kacchi />,
          },
          {
            path: "polao",
            element: <Polao />,
          },
          {
            path: "misty",
            element: <Misty />,
          },
        ],
      },
    ],
  },

  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: (
          <AuthRoutes>
            {" "}
            <Login />{" "}
          </AuthRoutes>
        ),
      },
    ],
  },
  {
    path: "preview/:id",
    element: <FoodPreview />,
  },
]);
export default router;
