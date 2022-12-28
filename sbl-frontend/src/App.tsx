import React from "react";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Games from "./components/games/AllGames";
import Stats from "./components/stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [],
  },
  { path: "/games", element: <Games /> },
  { path: "/stats", element: <Stats /> },
]);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
