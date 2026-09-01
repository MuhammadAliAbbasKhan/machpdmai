import React from 'react';

export default function TiresPage() {
  return (
    <div className="tires-page" style={{ 
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000"
    }}>
      <div style={{ backgroundColor: "#111827", color: "#ffffff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ color: "#165ffb", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
            Tire Intelligence & TPMS Analytics
          </span>
          <h1 style={{ fontSize: "44px", fontWeight: "700", marginTop: "10px", marginBottom: "20px" }}>
            Uptake Predictive Tire Maintenance
          </h1>
          <p style={{ fontSize: "18px", color: "#9ca3af", maxWidth: "800px", margin: "0 auto 30px" }}>
            Monitor TPMS pressure drops, heat build-up, and tread degradation to prevent roadside blowouts.
          </p>
          <a href="https://calendly.com/d/cndn-pt9-ks6/uptake-fleet-demo" target="_blank" rel="noreferrer" style={{
            display: "inline-block", backgroundColor: "#165ffb", color: "#ffffff", padding: "14px 32px", borderRadius: "50px", fontWeight: "600", textDecoration: "none"
          }}>Book Tire Demo</a>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          <div style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "16px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>Thermal Runaway Alerts</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>Instant alerts on inner-wheel thermal buildup before structural casing failure.</p>
          </div>
          <div style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "16px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>Tread Wear Prediction</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>Data science models estimate remaining tire lifespan and optimal rotation windows.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
