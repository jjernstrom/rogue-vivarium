import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TerrainGenerator } from "./pages/TerrainGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TerrainGenerator /> 
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
