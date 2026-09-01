import React from 'react';
import MachPdMTelemetryCanvas from '../components/MachPdMTelemetryCanvas';
import { Activity, ShieldCheck, Cpu, Sliders, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TelemetryPage() {
  const { setDemoModalOpen, openCheckout } = useAuth();

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Live Stream Operations
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-heading text-white mt-1">
              Predictive Machinery Telemetry Console
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              Real-time high-speed spectral vibration FFT, bearing thermal degradation curves, and remaining useful life (RUL) modeling.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-5 py-2.5 rounded-full border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-500/50"
            >
              Request Sensor Hardware
            </button>
            <button
              onClick={() => openCheckout('Professional Predictive AI', 150)}
              className="px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400"
            >
              Activate Live Feed ($150/mo)
            </button>
          </div>
        </div>

        {/* Main Canvas Component */}
        <MachPdMTelemetryCanvas />

        {/* Telemetry Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">01 / Vibration FFT</span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">Spectral FFT Frequency Spikes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Detects inner-race bearing pitting, tooth mesh degradation, and rotor imbalance harmonics before thermal rise occurs.
            </p>
          </div>

          <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">02 / Thermal Kinetics</span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">Infrared & Temperature Kinetics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continuous ambient & bearing skin temperature monitoring with predictive thermal runaway alert triggers.
            </p>
          </div>

          <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6">
            <span className="text-xs font-mono text-teal-300 font-bold uppercase">03 / Fluid Hydrodynamics</span>
            <h3 className="text-lg font-bold text-white mt-1 mb-2">Hydraulic PSI & Viscosity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Monitors fluid pressure wave propagation and oil breakdown particles to prevent hydraulic pump destruction.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
