import React from 'react';
import { ShieldCheck, Flag, Server } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function DefensePage() {
  const { setDemoModalOpen } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Military & Defense AI</span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">MachPdMAI Defense Telemetry</h1>
        <p className="text-sm text-slate-300">Predictive maintenance AI tailored for combat vehicle fleets, tactical equipment, and defense supply lines.</p>
      </div>

      <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold font-heading text-white mb-2">FedRAMP & IL5 Compliant AI Enclaves</h2>
        <p className="text-xs text-slate-400 max-w-lg mb-6">Deploys on tactical edge servers without cloud dependencies for mission-critical reliability.</p>
        <button onClick={() => setDemoModalOpen(true)} className="px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400">
          Request Defense Briefing
        </button>
      </div>
    </div>
  );
}
