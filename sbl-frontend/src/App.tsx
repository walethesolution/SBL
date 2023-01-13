import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import Layout from "./components/Layout";
import ErrorPage from "./components/errors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout page="home" />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/games", element: <Layout page="games" /> },
      { path: "/about", element: <Layout page="about" /> },
      { path: "/stats", element: <Layout page="stats" /> },
      { path: "/players", element: <Layout page="players" /> },
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
