import LogoFooter from "../../assets/logo-footer.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <section className="footer-text">
            <img src={LogoFooter} alt="DQuath logo" />
            <span>&copy; 2023 DQuath Technologies. All rights reserved.</span>
          </section>

          <section className="social-links">
            <ul className="list-reset">
              <li>
                <a href="https://www.facebook.com/DQuath.in" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dquath.in/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/dquath-technologies/about/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/dquath" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="mailto:info.dquath@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
