import React from "react";
import './header.css';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
  <a href="#default" className="logo">JOMALONE</a>
  <div className="header-left">
    <a className="active" href="#home">SHOP</a>
    <a href="#contact">GIFTING</a>
    <a href="#about">STORES</a>
    <a href="#about">OUR HOUSE</a>
    <a><i className="fa fa-shopping-bag"><sup>3</sup></i></a>
  </div>
</div>
  );
};

export default Header;