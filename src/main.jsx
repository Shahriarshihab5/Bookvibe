import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErorPage from "./Components/ErorPage";
import "./index.css";

import Root from "./Components/Root/Root";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErorPage></ErorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>
);
