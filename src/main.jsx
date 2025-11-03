import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style/reset.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/home/index";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/about",
        element: <p>About</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
