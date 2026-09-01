import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MachPdMTelemetryCanvas from '../components/MachPdMTelemetryCanvas';
import { Cpu, ArrowRight, ShieldCheck, Activity, TrendingUp, Zap, ChevronDown, CheckCircle2, Truck, Wind, HardHat, Train, Factory, Award } from 'lucide-react';

export default function HomePage() {
  const { openAuth, setDemoModalOpen, setQuizModalOpen } = useAuth();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How does MachPdMAI predict equipment failure before it happens?',
      a: 'MachPdMAI ingests high-frequency vibration FFT spectrums, thermal infrared sensor streams, hydraulic pressure waves, and CAN-bus telemetry into physics-informed digital twin models. By detecting minute acoustic harmonic shifts long before audible noise or physical failure, it provides 3 to 6 weeks of advance notice.'
    },
    {
      q: 'Can MachPdMAI integrate with existing SCADA, telematics, and ERP software?',
      a: 'Yes. MachPdMAI features plug-and-play connectors for major industrial platforms including SAP PM, Maximo, Caterpillar VisionLink, Siemens MindSphere, OPC-UA, Modbus TCP, and MQTT edge gateways.'
    },
    {
      q: 'What industrial asset sectors are supported?',
      a: 'We support heavy diesel engine fleets, wind turbine gearboxes, solar power inverters, open-pit mining excavators, locomotive engines, hydraulic pumps, CNC spindles, centrifuges, and industrial compressors.'
    },
    {
      q: 'Is there a free trial or proof-of-concept available?',
      a: 'Yes! You can start with our Basic Fleet Monitor plan or request a 30-day proof-of-concept pilot with edge gateway hardware dispatched to your facility.'
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 px-6 max-w-7xl mx-auto w-full">
        {/* Glow ambient backgrounds */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-teal-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-semibold text-cyan-300 mb-6 shadow-[0_0_15px_rgba(0,242,254,0.25)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MachPdMAI 4.2 Release: Physics Digital Twin Engine</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.08] mb-6">
            Zero Unplanned Downtime with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Predictive Maintenance AI
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
            Empower your industrial fleets, wind energy turbines, mining machinery, and manufacturing plants with real-time physics telemetry and AI vibration FFT anomaly detection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openAuth('register')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#0F1420] border border-cyan-500/40 text-slate-100 font-bold text-sm hover:bg-slate-800 hover:border-cyan-400 transition-all flex items-center gap-2"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Schedule Live Demo</span>
            </button>

            <button
              onClick={() => setQuizModalOpen(true)}
              className="px-6 py-4 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold text-sm hover:bg-emerald-900 transition-all flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Calculate ROI</span>
            </button>
          </div>

          {/* Micro metrics bar */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl font-black font-heading text-cyan-400">$42M+</span>
              <p className="text-xs text-slate-400 font-mono">Downtime Cost Saved</p>
            </div>
            <div>
              <span className="text-3xl font-black font-heading text-emerald-400">98.4%</span>
              <p className="text-xs text-slate-400 font-mono">Equipment Uptime</p>
            </div>
            <div>
              <span className="text-3xl font-black font-heading text-teal-300">14,200+</span>
              <p className="text-xs text-slate-400 font-mono">Connected Machinery</p>
            </div>
            <div>
              <span className="text-3xl font-black font-heading text-cyan-300">&lt; 15 min</span>
              <p className="text-xs text-slate-400 font-mono">Edge Setup Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL TRUST TICKER */}
      <section className="border-y border-slate-800/80 bg-[#0B0F18]/80 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold shrink-0">
            Trusted by Enterprise Industrial Leaders
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-heading font-extrabold text-sm opacity-70">
            <span className="hover:text-white transition-colors">CATERPILLAR FLEET</span>
            <span className="hover:text-white transition-colors">SIEMENS ENERGY</span>
            <span className="hover:text-white transition-colors">KOMATSU MINING</span>
            <span className="hover:text-white transition-colors">UNION PACIFIC RAIL</span>
            <span className="hover:text-white transition-colors">RIO TINTO GLOBAL</span>
          </div>
        </div>
      </section>

      {/* LIVE TELEMETRY ENGINE CANVAS SECTION */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Physics Digital Twin Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2">
            Real-Time Vibration FFT & Anomaly Telemetry
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
            Interact with live machinery sensor streams. Toggle anomaly mode to see physics failure harmonics.
          </p>
        </div>

        <MachPdMTelemetryCanvas />
      </section>

      {/* SECTOR SOLUTIONS MATRIX */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Industrial Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2">
              Purpose-Built for Heavy Industries
            </h2>
          </div>
          <Link
            to="/solutions"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 mt-4 md:mt-0"
          >
            <span>Explore All Industrial Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Truck,
              title: 'Heavy Trucking & Logistics Fleets',
              desc: 'Monitor diesel engine knock, injector pressure spikes, transmission fluid thermal breakdown, and brake pad wear across thousands of fleet vehicles.',
              tag: 'Transportation'
            },
            {
              icon: Wind,
              title: 'Wind & Solar Renewable Energy',
              desc: 'Detect planet-gear pitch anomalies, bearing inner-race pitting, and inverter thermal overload weeks before catastrophic tower failure.',
              tag: 'Renewables'
            },
            {
              icon: HardHat,
              title: 'Mining & Open-Pit Excavators',
              desc: 'Protect 400-ton haul trucks and hydraulic shovels from hydraulic pump cavitation, main bearing failure, and boom fatigue.',
              tag: 'Mining'
            },
            {
              icon: Train,
              title: 'Rail & Locomotive Operations',
              desc: 'Track wheel-set flat spots, diesel traction motor overheating, and rail-car bearing vibration FFT spikes in real time.',
              tag: 'Locomotive'
            },
            {
              icon: Factory,
              title: 'Manufacturing & Processing Plants',
              desc: 'Continuous spectral FFT monitoring for CNC high-speed spindles, industrial centrifuges, slurry pumps, and air compressors.',
              tag: 'Manufacturing'
            },
            {
              icon: Cpu,
              title: 'Physics Digital Twins',
              desc: 'Simulate structural fatigue, lubricant viscosity breakdown, and thermal dynamics with mathematical accuracy.',
              tag: 'Physics AI'
            }
          ].map((sector, idx) => {
            const IconComp = sector.icon;
            return (
              <div
                key={idx}
                className="bg-[#0F1420] border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">
                  {sector.tag}
                </span>
                <h3 className="text-lg font-bold font-heading text-white mt-3 mb-2">{sector.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{sector.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ROI CALCULATOR CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-gradient-to-r from-cyan-950/90 via-slate-900 to-emerald-950/90 border border-cyan-500/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Instant ROI Diagnostic
            </span>
            <h2 className="text-3xl font-bold font-heading text-white mt-2">
              Calculate Your Facility's Annual Downtime Savings
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Answer 3 simple questions about your machine count and failure frequency to receive a customized ROI financial breakdown.
            </p>
          </div>

          <button
            onClick={() => setQuizModalOpen(true)}
            className="shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-extrabold text-sm shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <TrendingUp className="w-5 h-5 text-slate-950" />
            <span>Launch ROI Calculator</span>
          </button>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-bold font-heading text-white mt-2">
            Everything You Need to Know
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0F1420] border border-slate-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-cyan-300"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
