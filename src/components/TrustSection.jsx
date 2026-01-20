import "../styles/trust-section.css";

function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <h2 className="trust-title">
          Built on trust, verified by data
        </h2>

        <p className="trust-subtitle">
          Every action is measured, verified, and transparently shared across
          the value chain.
        </p>

        <div className="trust-cards">
          {/* CARD 1 */}
          <div
            className="trust-card"
            style={{ backgroundImage: "url(/trust-1.jpg)" }}
          >
            <div className="trust-overlay"></div>
            <div className="trust-content">
              <h3>Measured impact</h3>
              <p>
                Carbon outcomes are tracked using auditable methodologies
                aligned with global standards.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="trust-card"
            style={{ backgroundImage: "url(/trust-2.jpg)" }}
          >
            <div className="trust-overlay"></div>
            <div className="trust-content">
              <h3>Independent verification</h3>
              <p>
                Practices and outcomes are reviewed through transparent,
                third-party verification processes.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="trust-card"
            style={{ backgroundImage: "url(/trust-3.jpg)" }}
          >
            <div className="trust-overlay"></div>
            <div className="trust-content">
              <h3>Transparent value flow</h3>
              <p>
                Value created flows back to farmers clearly, fairly, and without
                hidden deductions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
