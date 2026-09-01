import React from 'react';
import { useAuth } from '../context/AuthContext';
import { TrendingUp, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function QuizPage() {
  const { setQuizModalOpen } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-20 text-center flex flex-col items-center gap-8">
      
      <div className="w-16 h-16 rounded-3xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(0,242,254,0.3)]">
        <TrendingUp className="w-8 h-8 animate-pulse" />
      </div>

      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Interactive Machine Health & ROI Calculator
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Calculate Your Annual Industrial Savings Baseline
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Our physics digital twin ROI diagnostic analyzes your asset fleet size, machine types, and historical downtime to estimate exact financial savings.
        </p>
      </div>

      <div className="w-full bg-[#0F1420] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-8 text-left">
          <div className="bg-[#151C2C] p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono text-cyan-400 font-bold">Step 1</span>
            <h4 className="text-sm font-bold text-white mt-1">Fleet Scale & Sector</h4>
            <p className="text-xs text-slate-400 mt-1">Select truck fleet, wind turbines, mining excavators, or rail.</p>
          </div>

          <div className="bg-[#151C2C] p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono text-emerald-400 font-bold">Step 2</span>
            <h4 className="text-sm font-bold text-white mt-1">Downtime Metrics</h4>
            <p className="text-xs text-slate-400 mt-1">Enter annual failure frequency & emergency repair costs.</p>
          </div>

          <div className="bg-[#151C2C] p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono text-teal-300 font-bold">Step 3</span>
            <h4 className="text-sm font-bold text-white mt-1">Instant ROI Output</h4>
            <p className="text-xs text-slate-400 mt-1">Receive calculated savings & recommended AI deployment tier.</p>
          </div>
        </div>

        <button
          onClick={() => setQuizModalOpen(true)}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:scale-105 transition-all flex items-center gap-2"
        >
          <span>Launch 3-Step ROI Assessment</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </button>
      </div>

    </div>
  );
}
