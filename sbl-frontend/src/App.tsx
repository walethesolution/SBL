import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useLocation } from "react-router";
import { Box } from "@mui/material";
import Layout from "./components/Layout";
// import Games from "./components/games";
// import Stats from "./components/stats";
// import Players from "./components/players";
// import About from "./components/about";
import ErrorPage from "./components/errors";
// import FirstPage from "./components/firstpage";

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
  const location = useLocation();
  let component;

  switch (location.pathname) {
    case "/":
      component = <Layout page="home" />;
      break;
    case "/games":
      component = <Layout page="games" />;
      break;
    case "/about":
      component = <Layout page="about" />;
      break;
    case "/stats":
      component = <Layout page="stats" />;
      break;
    case "/players":
      component = <Layout page="players" />;
      break;
    default:
      component = <ErrorPage />;
  }

  return (
    <Box>
      <RouterProvider router={router} />
      {component}
    </Box>
  );
}
