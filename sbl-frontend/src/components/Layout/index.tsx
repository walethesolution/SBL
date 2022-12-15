import React from "react";
import About from "../landing-page/About";
import Blog from "../landing-page/Blog";
import Header from "../landing-page/Header";
import Headline from "../landing-page/Headline";
import Footer from "../landing-page/Footer";
import { Box } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <Header />
      <Headline />
      <About />
      <Blog />
      <Footer />
    </Box>
  );
};

export default Layout;
