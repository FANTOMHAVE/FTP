import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Header() {
  return (
    <header>
      <div id="block1">
        <Link to="/"><button id="i1"><span style={{ fontSize: "32px", color: "white", fontFamily: "Impact" }}>Aputeka</span></button></Link>
        <Link to="/home"><button id="i2"><span style={{ fontSize: "20px", color: "darkcyan", fontFamily: "Impact" }}>Главная</span></button></Link>
        <Link to="/services"><button id="i3"><span style={{ fontSize: "20px", color: "darkcyan", fontFamily: "Impact" }}>Услуги</span></button></Link>
        <Link to="/about"><button id="i4"><span style={{ fontSize: "20px", color: "darkcyan", fontFamily: "Impact" }}>О компании</span></button></Link>
      </div>
    </header>
  );
}

export default Header;
