import React from 'react';
import { Cpu, Database, Activity, Zap, ShieldCheck, ArrowRight, Server, Layers, GitPullRequest } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function PlatformPage() {
  const { setDemoModalOpen, setQuizModalOpen } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-16">
      
      {/* Platform Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          The MachPdMAI Architecture
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Physics-Informed Industrial AI Platform
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Bridging real-world mechanical physics equations with high-throughput machine learning telemetry to guarantee sub-millisecond anomaly detection and zero unplanned equipment downtime.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pillar 1 */}
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
            <Cpu className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Engine 01</span>
          <h2 className="text-2xl font-bold font-heading text-white mt-1 mb-3">Physics Digital Twin Engine</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Unlike black-box machine learning that requires millions of historical failure points, MachPdMAI embeds Navier-Stokes fluid dynamics, Hertzian contact stress equations, and Paris Law crack growth models directly into neural network loss functions.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
            <Database className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Engine 02</span>
          <h2 className="text-2xl font-bold font-heading text-white mt-1 mb-3">Unified Industrial Sensor Ingestion</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Natively process high-speed time-series sensor feeds including 10kHz piezo-vibration accelerometers, CAN-bus J1939 telemetry, Modbus TCP, OPC-UA SCADA tags, infrared thermography, and fluid oil particle counters.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-500/30 text-teal-300 flex items-center justify-center mb-4">
            <GitPullRequest className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider">Engine 03</span>
          <h2 className="text-2xl font-bold font-heading text-white mt-1 mb-3">Automated Work Order Dispatch</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            When an anomaly is flagged, MachPdMAI automatically generates root-cause diagnostic reports and dispatches maintenance work orders to SAP Plant Maintenance, IBM Maximo, or Fleetio with required spare part numbers.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-4">
            <Server className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">Engine 04</span>
          <h2 className="text-2xl font-bold font-heading text-white mt-1 mb-3">Edge Hardware & Hybrid Cloud</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Run physics AI models directly on ruggedized DIN-rail industrial edge gateways without internet latency, while seamlessly syncing operational summaries to cloud data lakes.
          </p>
        </div>

      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-emerald-950/80 border border-cyan-500/40 rounded-3xl p-8 text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold font-heading text-white mb-2">Ready to Deploy MachPdMAI Platform?</h2>
        <p className="text-xs text-slate-300 max-w-xl mb-6">
          Schedule a live demonstration or calculate your estimated downtime reduction in minutes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setDemoModalOpen(true)}
            className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all"
          >
            Schedule Live Technical Demo
          </button>
          <button
            onClick={() => setQuizModalOpen(true)}
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 transition-all"
          >
            Calculate ROI & Savings
          </button>
        </div>
      </div>

    </div>
  );
}
