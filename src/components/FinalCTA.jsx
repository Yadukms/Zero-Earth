import "../styles/final-cta.css";

function FinalCTA() {
  return (
    <section
      className="final-cta"
      style={{ backgroundImage: "url(/final-cta-bg.jpg)" }}
    >
      <div className="final-cta-overlay"></div>

      <div className="final-cta-content">
        <h2>
          Build climate impact that works for everyone
        </h2>

        <p>
          Join a system designed for farmers, communities, and long-term trust.
        </p>

        <button className="final-cta-btn">
          Get started
        </button>
      </div>
    </section>
  );
}

export default FinalCTA;
