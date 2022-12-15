import React from "react";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Games from "./components/games/AllGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [],
  },
  { path: "/games", element: <Games /> },
]);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
