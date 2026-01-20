import "../styles/WhyThisMatters.css";

function WhyThisMatters() {
  return (
    <section className="why-section">
      {/* watermark logo */}
      {/* <div className="why-watermark"></div> */}

      <div className="why-container">
        <h2 className="why-title">Why this matters</h2>

        <div className="why-cards">
          {/* CARD 1 */}
          <div
            className="why-card"
            style={{ backgroundImage: "url(/card-farmer.jpg)" }}
          >
            <div className="why-card-overlay"></div>
            <p className="why-card-text">
              Farmers do the right thing, but get nothing back
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="why-card"
            style={{ backgroundImage: "url(/card-forest.jpg)" }}
          >
            <div className="why-card-overlay"></div>
            <p className="why-card-text">
              Climate action feels risky without trust
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="why-card"
            style={{ backgroundImage: "url(/card-cooperation.jpg)" }}
          >
            <div className="why-card-overlay"></div>
            <p className="why-card-text">
              Cooperation makes change possible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyThisMatters;
