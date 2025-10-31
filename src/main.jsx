import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style/reset.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/home/indedx";
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
