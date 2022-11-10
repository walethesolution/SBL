import React from "react";
import Logo from "../../assets/sbl-logo.png";
import "./index.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={Logo} alt="sbl logo" className="logo"></img>
      </div>
      <div className="nav">
        <ul>
          <li>Games</li>
          <li>Stats</li>
          <li>Teams</li>
          <li>Players</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
