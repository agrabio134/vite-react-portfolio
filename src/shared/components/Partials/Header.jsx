import React, { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <nav className="nav_container">
        <ul className="header-nav">
          <li className="header-nav-item">Home</li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Services</li>
          <li className="header-nav-item">Contact</li>
        </ul>
        <div className="header-nav-toggle" onClick={handleNavToggle}>
          ≡
        </div>
      </nav>
      {navOpen && (
        <ul className="header-nav">
          <li className="header-nav-item">Home</li>
          <li className="header-nav-item">About</li>
          <li className="header-nav-item">Services</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      )}
    </header>
  );
}

export default Header;

