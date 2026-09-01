import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ShieldCheck, Truck, Shield, Disc, Code, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ProductsPage() {
  const { setDemoModalOpen, openCheckout } = useAuth();

  const products = [
    {
      title: 'Fleet AI Engine',
      path: '/solutions',
      icon: Truck,
      tag: 'Core Telematics',
      desc: 'Real-time CAN-bus J1939 engine telemetry, transmission fluid degradation, and acoustic vibration FFT analysis.'
    },
    {
      title: 'Defense & Military Enclave',
      path: '/products/defense',
      icon: Shield,
      tag: 'Government & Defense',
      desc: 'FedRAMP High & IL5 compliant edge AI enclaves for ground combat vehicles, naval propulsion, and defense supply lines.'
    },
    {
      title: 'Tire Intelligence Analytics',
      path: '/products/tires',
      icon: Disc,
      tag: 'TPMS & Tread Wear',
      desc: 'Predictive TPMS thermal runaway alerts and physics-based tire tread wear lifespan estimation.'
    },
    {
      title: 'Custom Fleet Software',
      path: '/products/custom-software',
      icon: Code,
      tag: 'Bespoke Engineering',
      desc: 'Custom physics digital twin CAD modeling and proprietary SCADA/telematics API bridges.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          MachPdMAI Product Suite
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Industrial Predictive AI Products
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Discover our full portfolio of physics-informed artificial intelligence products designed for commercial fleets, defense enclaves, and industrial machinery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((p, idx) => {
          const IconComp = p.icon;
          return (
            <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">
                      {p.tag}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white mt-1">{p.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{p.desc}</p>
              </div>

              <div className="flex gap-4">
                <Link
                  to={p.path}
                  className="flex-1 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openCheckout('Professional Predictive AI', 150)}
                  className="px-5 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 transition-all"
                >
                  Buy ($150/mo)
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
