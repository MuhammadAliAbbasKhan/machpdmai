import React from 'react';
import { Award, TrendingUp, ShieldCheck, ArrowRight, Building, Truck, Wind, HardHat } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CasesPage() {
  const { setDemoModalOpen } = useAuth();

  const cases = [
    {
      title: 'Global Mining Giant Avoids $42M in Catastrophic Haul Truck Failures',
      client: 'Rio Tinto Open-Pit Division',
      sector: 'Mining & Heavy Excavation',
      savings: '$42,000,000 USD Saved',
      timeframe: '12 Month Rollout',
      summary: 'Deployed MachPdMAI edge gateways across 180 Caterpillar 797F 400-ton ultra-class haul trucks. The physics AI model identified hydraulic pump cavitation and crankshaft journal bearing wear 28 days before catastrophic seize.',
      quote: '"MachPdMAI has redefined our entire mining fleet maintenance strategy. We went from emergency reactive repairs to scheduled, zero-downtime overhauls."'
    },
    {
      title: 'Offshore Wind Farm Achieves 99.4% Availability in North Sea',
      client: 'Siemens Renewable Grid Operator',
      sector: 'Wind Energy',
      savings: '$14,500,000 USD Saved',
      timeframe: '6 Month Deployment',
      summary: 'Offshore crane mobilizations cost over $180k per day. MachPdMAI planetary gear vibration FFT telemetry flagged inner-race bearing spalling in 14 offshore turbines, allowing single-crane batch maintenance.',
      quote: '"Predicting gearbox harmonic shifts weeks in advance saved our offshore operation millions in emergency crane mobilizations."'
    },
    {
      title: 'Logistics Fleet Reduces Roadside Towing Incidents by 94%',
      client: 'Apex Logistics Freight Services',
      sector: 'Heavy Freight Fleet',
      savings: '$6,800,000 USD Saved',
      timeframe: '90-Day Quick Pilot',
      summary: 'With 1,200 commercial semi-trucks operating nationwide, roadside breakdowns caused missed customer delivery SLAs. MachPdMAI CAN-bus telematics predicted turbocharger boost leaks and injector clogging before breakdown.',
      quote: '"Roadside breakdowns are virtually zero across our entire 1,200 truck fleet."'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Proven Enterprise ROI
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Industrial Success Stories & Case Studies
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          See how global leaders in mining, wind energy, transport, and manufacturing deploy MachPdMAI to eliminate equipment failures.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {cases.map((c, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
                  {c.sector}
                </span>
                <span className="text-xs text-slate-400 font-mono">• {c.client}</span>
              </div>

              <h2 className="text-2xl font-bold font-heading text-white mb-3">{c.title}</h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{c.summary}</p>
              
              <blockquote className="border-l-2 border-emerald-400 pl-4 py-1 text-xs italic text-emerald-300 bg-emerald-950/30 rounded-r-lg mb-4">
                {c.quote}
              </blockquote>
            </div>

            <div className="shrink-0 w-full lg:w-72 bg-[#151C2C] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Verified Financial ROI</span>
                <div className="text-2xl font-black font-heading text-emerald-400 mt-1">{c.savings}</div>
                <span className="text-xs text-slate-400 block mt-1 font-mono">{c.timeframe}</span>
              </div>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="mt-6 w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
