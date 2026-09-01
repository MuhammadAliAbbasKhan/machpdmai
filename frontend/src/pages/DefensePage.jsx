import React from 'react';

export default function DefensePage() {
  return (
    <div className="defense-page" style={{ 
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000"
    }}>
      {/* Hero */}
      <div style={{
        backgroundColor: "#111827",
        color: "#ffffff",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ color: "#165ffb", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
            Department of Defense & Military AI
          </span>
          <h1 style={{ fontSize: "44px", fontWeight: "700", marginTop: "10px", marginBottom: "20px" }}>
            Uptake for Defense & Military Fleet Telemetry
          </h1>
          <p style={{ fontSize: "18px", color: "#9ca3af", maxWidth: "800px", margin: "0 auto 30px" }}>
            FedRAMP High and IL5-certified edge AI enclaves for ground combat vehicles, tactical transport, and military logistics.
          </p>
          <a href="https://calendly.com/d/cndn-pt9-ks6/uptake-fleet-demo" target="_blank" rel="noreferrer" style={{
            display: "inline-block",
            backgroundColor: "#165ffb",
            color: "#ffffff",
            padding: "14px 32px",
            borderRadius: "50px",
            fontWeight: "600",
            textDecoration: "none"
          }}>Request Defense Briefing</a>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          <div style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "16px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>Mission Readiness</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>Ensure tactical vehicles remain mission-ready with 99.4% fleet availability and proactive component replacement.</p>
          </div>
          <div style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "16px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>Air-Gapped Edge AI</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>Deploy self-contained edge gateways that process sensor signals locally without relying on cloud connectivity.</p>
          </div>
          <div style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "16px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>Automated Logistics</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>Trigger automatic supply chain alerts and replacement part logistics before physical failure occurs in the field.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
