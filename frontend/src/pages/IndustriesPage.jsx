import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Truck, HardHat, Shield, Factory, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function IndustriesPage() {
  const { setDemoModalOpen } = useAuth();

  const industries = [
    { title: 'Buses & Public Transit', path: '/industries/buses', desc: 'Municipal bus fleets, school buses, and express transit line reliability.' },
    { title: 'Ready-Mix Concrete Fleets', path: '/industries/concrete', desc: 'Mixer drum hydraulic motor analytics and batch delivery preservation.' },
    { title: 'Construction & Off-Highway', path: '/industries/construction', desc: 'Dozers, excavators, wheel loaders, and crane telemetry.' },
    { title: 'Federal & Defense', path: '/federal', desc: 'Military combat ground fleets, naval propulsion, and government enclaves.' },
    { title: 'Class 8 Heavy Trucks', path: '/industries/heavy-trucks', desc: 'Class 8 long-haul semi-trucks, diesel engines, and braking systems.' },
    { title: 'Class 4-7 Medium Trucks', path: '/industries/medium-trucks', desc: 'Last-mile urban delivery vans and medium-duty box trucks.' },
    { title: 'Mining & Open-Pit Excavation', path: '/industries/mining', desc: '400-ton haul trucks, hydraulic shovels, and rock crushers.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Target Sectors
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Industries Powered by MachPdMAI
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          From commercial trucking to open-pit mining and municipal transit, MachPdMAI physics AI models eliminate unplanned downtime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {industries.map((ind, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">{ind.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">{ind.desc}</p>
            </div>

            <Link
              to={ind.path}
              className="py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>View Industry Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
