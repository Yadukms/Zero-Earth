import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">
        <h2 className="how-title">How it works</h2>
        <p className="how-subtitle">
          A simple, transparent process that puts farmers first.
        </p>

        <div className="how-cards">
          <div
            className="how-card"
            style={{ backgroundImage: "url(/how-1.jpg)" }}
          >
            <div className="how-card-overlay"></div>
            <div className="how-card-content">
              <h3>Farmers enrol</h3>
              <p>
                Farmers join the cooperative with clear terms, support, and no
                hidden risk.
              </p>
            </div>
          </div>

          <div
            className="how-card"
            style={{ backgroundImage: "url(/how-2.jpg)" }}
          >
            <div className="how-card-overlay"></div>
            <div className="how-card-content">
              <h3>Practices verified</h3>
              <p>
                Sustainable actions are measured and transparently verified
                using trusted methods.
              </p>
            </div>
          </div>

          <div
            className="how-card"
            style={{ backgroundImage: "url(/how-3.jpg)" }}
          >
            <div className="how-card-overlay"></div>
            <div className="how-card-content">
              <h3>Value shared</h3>
              <p>
                Carbon value flows back to farmers as income and long-term
                dignity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
