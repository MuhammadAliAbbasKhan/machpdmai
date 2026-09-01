import React from 'react';
import { Cpu, ShieldCheck, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TiresPage() {
  const { setDemoModalOpen } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Tire Analytics Engine</span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">MachPdMAI Predictive Tire Intelligence</h1>
        <p className="text-sm text-slate-300">Continuous TPMS pressure, temperature, and tread degradation analytics for heavy commercial trucks and mining haul fleets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold font-heading text-white mb-2">TPMS Pressure & Heat</h3>
          <p className="text-xs text-slate-400">Detect slow leaks and thermal runaway before tire blowout occurs on highway.</p>
        </div>
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold font-heading text-white mb-2">Tread Wear Estimation</h3>
          <p className="text-xs text-slate-400">Physics AI wear algorithms predict tire lifespan within 2,000 miles accuracy.</p>
        </div>
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold font-heading text-white mb-2">Automated Rotation Alerts</h3>
          <p className="text-xs text-slate-400">Generates optimal wheel-position rotation schedule to extend tire life by 24%.</p>
        </div>
      </div>
    </div>
  );
}
