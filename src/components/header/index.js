import React from "react";
import Logo from "../../image/notai-logo.png";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header-style">
      <header>
        <img src={Logo} alt="" />
      </header>
    </div>
  );
};
export default Header;
