import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-20 text-slate-300">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck className="w-5 h-5 text-cyan-400" />
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Legal Document</span>
      </div>
      <h1 className="text-3xl font-bold font-heading text-white mb-6">MachPdMAI Privacy Policy</h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <p>Effective Date: September 1, 2026</p>
        <p>
          At MachPdMAI Inc. ("MachPdMAI", "we", "us"), we are committed to safeguarding the industrial telemetry, CAN-bus sensor feeds, and enterprise credentials collected through our predictive maintenance artificial intelligence platform.
        </p>

        <h2 className="text-xl font-bold font-heading text-white pt-4 border-t border-slate-800">1. Data Ingestion & Collection</h2>
        <p>
          MachPdMAI collects technical telematics including vibration accelerations (FFT frequency domain data), thermal sensor streams, hydraulic pressure waves, and engine RPM. We do not collect consumer personal data outside of work email addresses and billing information necessary to service enterprise contracts.
        </p>

        <h2 className="text-xl font-bold font-heading text-white pt-4 border-t border-slate-800">2. Dual Database Security</h2>
        <p>
          Primary telemetry data is encrypted using AES-256 at rest and TLS 1.3 in transit. Databases synced between relational storage (SQLite) and cloud fail-soft clusters (MongoDB Atlas) reside within SOC2 Type II certified data centers.
        </p>

        <h2 className="text-xl font-bold font-heading text-white pt-4 border-t border-slate-800">3. Contact Us</h2>
        <p>
          For questions regarding data protection or GDPR compliance, email <span className="text-cyan-400 font-mono">privacy@machpdmai.com</span>.
        </p>
      </div>
    </div>
  );
}
