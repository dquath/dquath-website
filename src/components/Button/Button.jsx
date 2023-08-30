import PropTypes from "prop-types";
import "./Button.css";

export default function Button({ href, className, text }) {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  href: "#",
  text: "Button",
};
