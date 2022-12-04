import React from "react";
import About from "../About";
import Blog from "../Blog";
import Header from "../Header";
import Headline from "../Headline";
import Footer from "../Footer";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Headline />
      <About />
      <Blog />
      <Footer />
    </div>
  );
};

export default Layout;
