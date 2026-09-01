import React from 'react';
import { Bus, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function BusesPage() {
  const { setDemoModalOpen } = useAuth();
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Transit & Bus Fleets</span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">MachPdMAI Bus Fleet Maintenance</h1>
        <p className="text-sm text-slate-300">Prevent passenger delay and transmission failure in municipal transit and school bus fleets.</p>
      </div>
      <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-2">99.1% On-Time Transit Availability</h2>
        <button onClick={() => setDemoModalOpen(true)} className="mt-4 px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs">Request Bus Fleet Demo</button>
      </div>
    </div>
  );
}
