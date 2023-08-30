import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const animationDuration = 0.15;
  const animationDelay = animationDuration;

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 426;
    setIsMobile(isMobileDevice);

    const menuBars = document.querySelectorAll(".menu-item");
    const nav = document.querySelector(".header-content nav");
    const navItems = Array.from(
      document.querySelectorAll(".header-content nav ul > li > a")
    );

    function menuOpenAnimation() {
      menuBars.forEach((bar, index) => {
        switch (index) {
          case 0:
            gsap.to(bar, {
              y: 6,
              duration: animationDuration,
            });
            break;
          case 1:
            gsap.to(bar, { opacity: "0", duration: animationDuration });
            break;
          case 2:
            gsap.to(bar, {
              y: -6,
              duration: animationDuration,
            });
            break;
        }
      });

      menuBars.forEach((bar, index) => {
        switch (index) {
          case 0:
            gsap.to(bar, {
              rotation: -45,
              duration: animationDuration,
              delay: animationDelay,
            });
            break;
          case 2:
            gsap.to(bar, {
              rotation: 45,
              duration: animationDuration,
              delay: animationDelay,
            });
            break;
        }
      });
    }

    function navSlideIn() {
      gsap.to(nav, {
        transform: "translateX(0)",
        duration: animationDuration + 0.25,
        ease: "circ.out",
      });

      gsap.fromTo(
        navItems,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: animationDuration + 0.25,
          delay: animationDuration + 0.25,
          ease: "circ.out",
        }
      );
    }

    function menuCloseAnimation() {
      menuBars.forEach((bar, index) => {
        switch (index) {
          case 0:
            gsap.fromTo(
              bar,
              { rotation: -45 },
              { rotation: 0, duration: animationDuration }
            );
            break;
          case 2:
            gsap.fromTo(
              bar,
              { rotation: 45 },
              { rotation: 0, duration: animationDuration }
            );
            break;
        }
      });

      menuBars.forEach((bar, index) => {
        switch (index) {
          case 0:
            gsap.fromTo(
              bar,
              { y: 6 },
              { y: 0, duration: animationDuration, delay: animationDelay }
            );
            break;
          case 1:
            gsap.fromTo(
              bar,
              { opacity: "0" },
              {
                opacity: "1",
                duration: animationDuration,
                delay: animationDelay,
              }
            );
            break;
          case 2:
            gsap.fromTo(
              bar,
              { y: -6 },
              { y: 0, duration: animationDuration, delay: animationDelay }
            );
            break;
        }
      });
    }

    function navSlideOut() {
      gsap.fromTo(
        navItems,
        { yPercent: 0 },
        {
          yPercent: 100,
          duration: animationDuration + 0.25,
          ease: "circ.in",
        }
      );

      gsap.to(nav, {
        transform: "translateX(120%)",
        duration: animationDuration + 0.25,
        delay: animationDuration + 0.25,
        ease: "circ.in",
      });
    }

    if (isMobile) {
      if (isMenuOpen) {
        menuOpenAnimation();
        navSlideIn();
      } else {
        menuCloseAnimation();
        navSlideOut();
      }
    }
  }, [isMenuOpen]);

  function updateMenuState() {
    !isMenuOpen ? setIsMenuOpen(true) : setIsMenuOpen(false);
  }

  return (
    <div
      className={`ham-menu${isMenuOpen ? " menu-open" : ""}`}
      onClick={() => updateMenuState()}
    >
      <div className="menu-item"></div>
      <div className="menu-item"></div>
      <div className="menu-item"></div>
    </div>
  );
}
