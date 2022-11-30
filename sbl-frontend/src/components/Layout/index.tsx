import React from "react";
import Body from "../Body";
import Header from "../Header";
import Headline from "../Headline";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Headline />
      <Body />
    </div>
  );
};

export default Layout;
