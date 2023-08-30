import { useState } from "react";
import PropTypes from "prop-types";

export default function NavItem({ href, text }) {
  const [isPageActive, setIsPageActive] = useState(false);

  function updateClassName(e) {
    e.preventDefault();

    if (!isPageActive) {
      setIsPageActive(true);
    } else {
      setIsPageActive(false);
    }
  }

  return (
    <li>
      <a
        href={href}
        onClick={(e) => updateClassName(e)}
        className={isPageActive ? "page-active" : ""}
      >
        {text}
      </a>
    </li>
  );
}

NavItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

NavItem.defaultProps = {
  href: "#",
  text: "Dead link",
};
