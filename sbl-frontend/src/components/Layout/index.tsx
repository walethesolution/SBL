import React from "react";
import Header from "../landing-page/Header";
import Footer from "../landing-page/Footer";
import { Box } from "@mui/material";
import FirstPage from "../firstpage";
import Games from "../games";
import About from "../about";
import Stats from "../stats";
import Players from "../players";
import ErrorPage from "../errors";
import { Outlet } from "react-router-dom";

export default function Layout({ page }: { page: string }) {
  let component;

  switch (page) {
    case "home":
      component = <FirstPage />;
      break;
    case "about":
      component = <About />;
      break;
    case "games":
      component = <Games />;
      break;
    case "stats":
      component = <Stats />;
      break;
    case "players":
      component = <Players />;
      break;
    default:
      component = <ErrorPage />;
  }

  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <Header />
      {component}
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
