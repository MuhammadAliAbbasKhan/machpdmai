import React from 'react';
import { Truck, Wind, HardHat, Train, Factory, Cpu, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SolutionsPage() {
  const { setDemoModalOpen, openCheckout } = useAuth();

  const solutions = [
    {
      id: 'fleet',
      title: 'Commercial Fleet & Heavy Trucking',
      icon: Truck,
      highlight: 'Eliminate roadside breakdowns & expensive towing',
      description: 'Continuous monitoring of heavy diesel engines (Caterpillar, Cummins, Detroit Diesel), transmission fluid degradation, turbocharger boost pressure, and brake system acoustics across commercial vehicle fleets.',
      metrics: ['94% Reduction in Roadside Failures', '18% Fuel Efficiency Improvement', '4.2x ROI in First 90 Days'],
      features: ['CAN-bus J1939 telematics ingestion', 'Real-time oil viscosity estimation', 'Automated work order creation in SAP/Fleetio']
    },
    {
      id: 'wind',
      title: 'Wind Turbines & Renewable Grids',
      icon: Wind,
      highlight: 'Predict planetary gearbox & bearing failure 6 weeks in advance',
      description: 'Deploy high-frequency piezo-accelerometers and infrared thermal telemetry on wind turbine planetary gearboxes, main shaft bearings, and high-voltage grid inverters to prevent catastrophe in offshore & onshore farms.',
      metrics: ['99.1% Turbine Availability', '$180,000 Saved per Crane Operation', 'Zero Offshore Catastrophic Lockups'],
      features: ['3D planetary gear mesh FFT analysis', 'Grid thermal inverter surge protection', 'SCADA protocol native bridging']
    },
    {
      id: 'mining',
      title: 'Heavy Mining & Construction',
      icon: HardHat,
      highlight: 'Keep 400-ton haul trucks & shovels operating 24/7/365',
      description: 'Open-pit mining machinery operates in extreme dust, vibration, and thermal shock. MachPdMAI monitors hydraulic pump cavitation, engine rod bearings, and structural boom fatigue on excavators and dump trucks.',
      metrics: ['$42M Total Maintenance Costs Avoided', '340+ Hours Extra Heavy Truck Uptime', 'Zero Hydraulic Hose Blowouts'],
      features: ['Dust-resistant edge processing gateway', 'Hydraulic fluid particle count telemetry', 'Structural stress strain-gauge integration']
    },
    {
      id: 'rail',
      title: 'Locomotives & Rail Transit',
      icon: Train,
      highlight: 'Ensure track safety & wheel-set integrity across rail networks',
      description: 'Monitor diesel traction motors, rolling stock wheel flat-spots, and pantograph electrical arcs across thousands of miles of freight and passenger rail track.',
      metrics: ['98.8% On-Time Train Dispatch', '80% Reduction in Derailment Risk', 'Real-time Track Anomaly Mapping'],
      features: ['Acoustic wayside detector integration', 'Traction motor thermal profiling', 'Automated rail depot maintenance alerts']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Industrial Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Tailored AI Predictive Maintenance for Heavy Assets
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Discover how MachPdMAI physics digital twin models eliminate unplanned downtime across transport fleets, renewable energy grids, open-pit mining, and rail transit networks.
        </p>
      </div>

      {/* Solutions Cards */}
      <div className="flex flex-col gap-12">
        {solutions.map((sol, idx) => {
          const IconComp = sol.icon;
          return (
            <div
              key={sol.id}
              className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row gap-8 items-start justify-between hover:border-cyan-500/40 transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                      {sol.highlight}
                    </span>
                    <h2 className="text-2xl font-bold font-heading text-white">{sol.title}</h2>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed my-4">{sol.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  {sol.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-[#151C2C] border border-slate-800 rounded-xl p-3 text-center">
                      <span className="text-xs font-bold font-mono text-cyan-300">{m}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                  {sol.features.map((f, fIdx) => (
                    <span key={fIdx} className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-72 bg-[#151C2C] border border-slate-800 rounded-2xl p-6 flex flex-col gap-4">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">Deploy Solution</span>
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all text-center"
                >
                  Request Sector Demo
                </button>
                <button
                  onClick={() => openCheckout('Professional Predictive AI', 150)}
                  className="w-full py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 transition-all text-center"
                >
                  Start Professional Tier ($150/mo)
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
