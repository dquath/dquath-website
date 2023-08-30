import { useState, useEffect } from "react";
import LogoMain from "../../assets/logo-main.svg";
import Hamburger from "./Hamburger";
import NavItem from "./NavItem";
import "./Navbar.css";

export default function Navbar() {
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const scrollThreshold = 30;

    function addShadow() {
      const scrollPosition = Math.floor(window.scrollY);

      scrollPosition > scrollThreshold
        ? setHasPassed(true)
        : setHasPassed(false);
    }

    document.addEventListener("scroll", addShadow);
  }, []);

  return (
    <header className={hasPassed ? "distinguish-header" : ""}>
      <div className="container">
        <div className="header-content">
          <div className="logo-header">
            <a href="./index.html">
              <img src={LogoMain} alt="DQuath logo" />
            </a>
          </div>

          <Hamburger />

          <nav>
            <ul className="list-reset">
              <NavItem href="./index.html" text="Home" />
              <NavItem href="#" text="Services" />
              <NavItem href="#" text="About us" />
              <NavItem href="#" text="Blog" />
              <NavItem href="#" text="Contact" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
