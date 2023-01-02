import React from "react";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./components/games";
import Stats from "./components/stats";
import Players from "./components/players";
import About from "./components/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  { path: "/games", element: <Games /> },
  { path: "/about", element: <About /> },
  { path: "/stats", element: <Stats /> },
  { path: "/players", element: <Players /> },
]);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
