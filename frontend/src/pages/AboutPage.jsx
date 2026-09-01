import React from 'react';
import { Cpu, Award, ShieldCheck, Users, Target, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AboutPage() {
  const { setDemoModalOpen } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-16">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          About MachPdMAI
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Pioneering Physics-Informed Predictive Maintenance AI
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          MachPdMAI transforms raw industrial sensor telemetry into actionable operational intelligence to eliminate catastrophic equipment failure across global supply chains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <Target className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold font-heading text-white mb-2">Our Mission</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Guarantee zero unplanned downtime for industrial fleets, energy grids, mining excavators, and manufacturing plants worldwide.
          </p>
        </div>

        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <Cpu className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-xl font-bold font-heading text-white mb-2">Physics AI Innovation</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Combining mechanical stress dynamics, Paris crack growth equations, and 10kHz vibration FFT analysis into unified neural digital twins.
          </p>
        </div>

        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <Users className="w-8 h-8 text-teal-300 mb-4" />
          <h3 className="text-xl font-bold font-heading text-white mb-2">Global Impact</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Monitoring over 14,200 connected machinery assets and saving enterprise clients over $42,000,000 in emergency repair costs annually.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-emerald-950/80 border border-cyan-500/40 rounded-3xl p-8 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white font-heading mb-2">Partner with MachPdMAI</h2>
        <p className="text-xs text-slate-300 max-w-lg mb-6">Learn how our Chicago-headquartered team delivers enterprise industrial predictive maintenance.</p>
        <button
          onClick={() => setDemoModalOpen(true)}
          className="px-8 py-3.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all"
        >
          Schedule Executive Briefing
        </button>
      </div>

    </div>
  );
}
