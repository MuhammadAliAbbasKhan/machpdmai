import React from 'react';
import { Cpu, Activity, ShieldCheck, Database, Sliders, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function FeaturesPage() {
  const { setDemoModalOpen } = useAuth();

  const features = [
    { title: 'Fleet Insight Dashboards', path: '/features/dashboards', desc: 'Real-time asset health scores, remaining useful life (RUL) estimates, and fleet risk heatmaps.' },
    { title: 'Maintenance Value Optimization', path: '/features/maintenance-optimization', desc: 'Prioritize high-ROI repairs and prevent unnecessary parts replacement.' },
    { title: 'Mixed Fleet Data Hub', path: '/features/data-hub', desc: 'Unified SCADA, CAN-bus, and telematics ingestion across multi-OEM fleets.' },
    { title: 'Remote Diagnostics', path: '/features/remote-diagnostics', desc: 'Sub-second remote fault code decoding and acoustic spectral analysis.' },
    { title: 'Risk Explorer', path: '/features/risk-explorer', desc: 'Simulate component failure probabilities over 30, 60, and 90-day windows.' },
    { title: 'Sensor Insights', path: '/features/sensor-insights', desc: '10kHz piezo-vibration FFT and infrared thermal stream profiling.' },
    { title: 'Warranty Tracking', path: '/features/warranty', desc: 'Automated OEM warranty claim generation based on sensor telemetry.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">MachPdMAI Capabilities</span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">Enterprise AI Maintenance Features</h1>
        <p className="text-sm text-slate-300">Explore the advanced physics-informed AI modules that keep your industrial fleet running.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all">
            <h3 className="text-xl font-bold font-heading text-white mb-2">{f.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
