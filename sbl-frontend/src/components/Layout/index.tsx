import React from "react";
import About from "../About";
import Body from "../Body";
import Header from "../Header";
import Headline from "../Headline";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Headline />
      <About />
      <Body />
    </div>
  );
};

export default Layout;
