import React from "react";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Route,
} from "react-router-dom";
import { Box } from "@mui/material";
import Games from "./components/games";
import Stats from "./components/stats";
import Players from "./components/players";
import About from "./components/about";
import ErrorPage from "./components/errors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [],
  },
  { path: "/games", element: <Games /> },
  { path: "/about", element: <About /> },
  { path: "/stats", element: <Stats /> },
  { path: "/players", element: <Players /> },
]);

export default function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}
