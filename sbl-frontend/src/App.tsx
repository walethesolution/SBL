import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import Layout from "./components/Layout";
import ErrorPage from "./components/errors";
import Games from "./components/games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/games", element: "" },
      { path: "/about", element: "" },
      { path: "/stats", element: "" },
      { path: "/players", element: "" },
    ],
  },
]);

export default function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}
