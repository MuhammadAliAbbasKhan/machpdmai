import React from 'react';
import { Users, Briefcase, MapPin, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    { title: 'Senior Industrial AI Research Scientist', location: 'Chicago, IL (Hybrid)', type: 'Full-Time' },
    { title: 'Lead Vibration Analysis Engineer (ISO Category IV)', location: 'Chicago, IL or Remote', type: 'Full-Time' },
    { title: 'Embedded Systems & CAN-bus Firmware Engineer', location: 'Frankfurt, Germany', type: 'Full-Time' },
    { title: 'Enterprise Solutions Architect - Renewable Grids', location: 'Tokyo, Japan', type: 'Full-Time' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Join Our Team
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Careers at MachPdMAI
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Help us build physics-informed AI algorithms that keep the global industrial infrastructure running smoothly.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {jobs.map((j, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">{j.title}</h3>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-mono">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" />{j.location}</span>
                <span>•</span>
                <span className="text-emerald-400">{j.type}</span>
              </div>
            </div>

            <button className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
