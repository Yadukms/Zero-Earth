import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>ZERO EARTH</h3>
          <p>
            Turning climate action into dignity and income for farmers.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#why">Why this matters</a>
            <a href="#how">How it works</a>
            <a href="#who">Who this is for</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
          </div>

          <div className="footer-column">
            <h4>Action</h4>
            <a href="#join" className="footer-cta">
              Join the cooperative
            </a>
            <a href="#start">Get started</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Zero Earth. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
