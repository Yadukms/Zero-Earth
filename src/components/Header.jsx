import { useState } from "react";
import "../styles/header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="header-logo">
          <img src="/zeroearth-logo.png" alt="Zero Earth" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="header-nav desktop">
          <a href="#why">Why this matters</a>
          <a href="#how">How it works</a>
          <a href="#who">Who this is for</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="header-cta desktop">
          Join the cooperative
        </button>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="#why" onClick={() => setOpen(false)}>Why this matters</a>
        <a href="#how" onClick={() => setOpen(false)}>How it works</a>
        <a href="#who" onClick={() => setOpen(false)}>Who this is for</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        <button className="mobile-cta">
          Join the cooperative
        </button>
      </div>
    </header>
  );
}

export default Header;
