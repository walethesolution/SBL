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

export default function Layout() {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <Header />
      {/* {component} */}
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
