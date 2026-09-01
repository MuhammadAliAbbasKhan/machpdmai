import React from 'react';
import { Handshake, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function PartnersPage() {
  const { setDemoModalOpen } = useAuth();

  const partners = [
    { name: 'Caterpillar VisionLink Integration', type: 'OEM Telematics Alliance' },
    { name: 'Siemens MindSphere Platform', type: 'Industrial IoT Partner' },
    { name: 'SAP Plant Maintenance (PM)', type: 'ERP Ecosystem Partner' },
    { name: 'IBM Maximo Enterprise', type: 'Asset Management Partner' },
    { name: 'Fleetio Fleet Management', type: 'Commercial Transport Alliance' },
    { name: 'Amazon Web Services (AWS) Industrial', type: 'Cloud Infrastructure Partner' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Partner Ecosystem
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Global Machinery & Technology Alliances
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          MachPdMAI integrates seamlessly with major OEMs, SCADA providers, telematics networks, and enterprise ERP systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-6 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30 uppercase">
                {p.type}
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-3 mb-2">{p.name}</h3>
              <p className="text-xs text-slate-400">Pre-built API connectors for real-time telemetry streaming and automated work orders.</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-semibold cursor-pointer">
              <span>View Integration Specs</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
