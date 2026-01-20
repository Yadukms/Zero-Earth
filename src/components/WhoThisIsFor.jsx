import "../styles/who-this-is-for.css";

function WhoThisIsFor() {
  return (
    <section className="who-section">
      <div className="who-container">
        <h2 className="who-title">Who this is for</h2>
        <p className="who-subtitle">
          Designed to work for every part of the climate value chain.
        </p>

        <div className="who-cards">
          {/* CARD 1 */}
          <div
            className="who-card"
            style={{ backgroundImage: "url(/who-farmers.jpg)" }}
          >
            <div className="who-overlay"></div>
            <div className="who-content">
              <h3>Farmers</h3>
              <p>
                Earn income for sustainable practices with trust, transparency,
                and dignity.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="who-card"
            style={{ backgroundImage: "url(/who-cooperatives.jpg)" }}
          >
            <div className="who-overlay"></div>
            <div className="who-content">
              <h3>Cooperatives</h3>
              <p>
                Support farmers, manage verification, and share value fairly
                across communities.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="who-card"
            style={{ backgroundImage: "url(/who-buyers.jpg)" }}
          >
            <div className="who-overlay"></div>
            <div className="who-content">
              <h3>Buyers & Partners</h3>
              <p>
                Access verified climate impact with confidence and long-term
                credibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoThisIsFor;
