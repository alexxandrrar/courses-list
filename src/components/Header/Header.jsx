import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => (
  <div className="header">
    <Logo />
    <div className="info">
      <h2>Sasha</h2>
      <Button text="Logout" size="medium" />
    </div>
  </div>
);

export default Header;
