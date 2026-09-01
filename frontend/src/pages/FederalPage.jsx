import React from 'react';
import { ShieldCheck, Flag, Server, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function FederalPage() {
  const { setDemoModalOpen } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Defense & Government Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          MachPdMAI Federal & Defense Telemetry
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Predictive maintenance AI tailored for military vehicle fleets, naval propulsion systems, and aerospace ground equipment.
        </p>
      </div>

      <div className="bg-[#0F1420] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold font-heading text-white mb-2">FedRAMP High & IL5 Security Compliance</h2>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
            Deploys within government cloud enclaves or air-gapped tactical edge servers for ground combat vehicles and defense supply networks.
          </p>
        </div>

        <button
          onClick={() => setDemoModalOpen(true)}
          className="px-8 py-3.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shrink-0"
        >
          Request Defense Briefing
        </button>
      </div>

    </div>
  );
}
