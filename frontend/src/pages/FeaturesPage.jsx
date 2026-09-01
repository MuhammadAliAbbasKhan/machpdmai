import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  const featureList = [
    { title: 'Fleet Insight Dashboards', path: '/features/dashboards', desc: 'At-a-glance fleet health scores, remaining useful life estimates, and high-risk truck prioritization.' },
    { title: 'Maintenance Value Optimization', path: '/features/maintenance-optimization', desc: 'Prioritize repairs that yield the highest uptime ROI and prevent unnecessary part swaps.' },
    { title: 'Mixed Fleet Data Hub', path: '/features/data-hub', desc: 'Single platform connecting telematics across Caterpillar, Cummins, Geotab, Trimble, and Samsara.' },
    { title: 'Remote Diagnostics', path: '/features/remote-diagnostics', desc: 'Identify fault codes and sensor anomalies remotely without physically pulling the truck into the shop.' },
    { title: 'Risk Explorer', path: '/features/risk-explorer', desc: 'Simulate component failure probabilities over 30, 60, and 90-day maintenance horizons.' },
    { title: 'Sensor Insights', path: '/features/sensor-insights', desc: 'Deep data science models tracking alternators, batteries, cooling systems, and fluid breakdown.' },
    { title: 'Warranty Claim Intelligence', path: '/features/warranty', desc: 'Automate eligible OEM warranty claims backed by immutable sensor proof.' }
  ];

  return (
    <div className="features-page" style={{ 
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000"
    }}>
      <div style={{ backgroundColor: "#111827", color: "#ffffff", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ color: "#165ffb", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>
            Platform Modules
          </span>
          <h1 style={{ fontSize: "44px", fontWeight: "700", marginTop: "10px", marginBottom: "20px" }}>
            Uptake Predictive Features
          </h1>
          <p style={{ fontSize: "18px", color: "#9ca3af", maxWidth: "800px", margin: "0 auto 30px" }}>
            Everything you need to turn raw sensor data into actionable maintenance work orders.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
          {featureList.map((f, idx) => (
            <div key={idx} style={{ padding: "30px", border: "1px solid #e5e7eb", borderRadius: "16px", backgroundColor: "#ffffff" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "12px" }}>{f.title}</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.7", marginBottom: "20px" }}>{f.desc}</p>
              <Link to={f.path} style={{ color: "#165ffb", fontWeight: "600", textDecoration: "none" }}>Learn Feature Details →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
