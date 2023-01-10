import React from "react";
import Header from "../landing-page/Header";
import Footer from "../landing-page/Footer";
import { Box } from "@mui/material";
import FirstPage from "../firstpage";

const Layout: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <Header />
      <FirstPage />
      <Footer />
    </Box>
  );
};

export default Layout;
