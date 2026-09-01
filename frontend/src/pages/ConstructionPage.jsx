import React from 'react';

export default function ConstructionPage() {
  return (
    <div className="construction-page" style={{ 
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000"
    }}>
      <div style={{ backgroundColor: "#111827", color: "#ffffff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ color: "#165ffb", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
            Construction & Off-Highway Equipment
          </span>
          <h1 style={{ fontSize: "44px", fontWeight: "700", marginTop: "10px", marginBottom: "20px" }}>
            Uptake for Heavy Construction Fleet
          </h1>
          <p style={{ fontSize: "18px", color: "#9ca3af", maxWidth: "800px", margin: "0 auto 30px" }}>
            Real-time health insights for dozers, excavators, loaders, and mobile cranes.
          </p>
          <a href="https://calendly.com/d/cndn-pt9-ks6/uptake-fleet-demo" target="_blank" rel="noreferrer" style={{
            display: "inline-block", backgroundColor: "#165ffb", color: "#ffffff", padding: "14px 32px", borderRadius: "50px", fontWeight: "600", textDecoration: "none"
          }}>Book Construction Demo</a>
        </div>
      </div>
    </div>
  );
}
