import React from "react";
import About from "../About";
import Blog from "../Blog";
import Header from "../Header";
import Headline from "../Headline";
import Footer from "../Footer";
import { Box } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.07)" }}>
      <Header />
      <Headline />
      <About />
      <Blog />
      <Footer />
    </Box>
  );
};

export default Layout;
