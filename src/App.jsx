import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero section */}
        <section id="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-heading">
                  Your online presence, <br />
                  taken care by us.
                </h1>
                <p className="hero-subheading">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div className="hero-cta">
                <Button href="#services" className="btn" text="Know more" />
                <a href="tel:0123456789">
                  <i className="fa-solid fa-phone"></i>Contact us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-text">
                <h2>Get in touch</h2>
                <p>Give us a call or schedule a meeting at your convenience</p>
              </div>
              <div className="contact-buttons">
                <Button
                  href="mailto:info.dquath@gmail.com"
                  className="btn"
                  text="Contact us"
                />
                <Button href="#" className="btn" text="Schedule meeting" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
