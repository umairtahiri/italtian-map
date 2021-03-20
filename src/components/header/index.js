import React from "react";
import Logo from "../../image/notai-logo.png";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header-style">
      <img src={Logo} alt="" />
      <div className="navbar">
        <a className="nav-item" href="/">
          Location Finder
        </a>
        <a className="nav-item" href="/blog">
          Blog
        </a>
      </div>
    </header>
  );
};
export default Header;
