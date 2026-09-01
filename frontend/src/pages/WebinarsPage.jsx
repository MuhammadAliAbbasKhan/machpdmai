import React from 'react';
import { Video, Calendar, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function WebinarsPage() {
  const { setDemoModalOpen } = useAuth();

  const webinars = [
    { title: 'Physics-Informed AI vs Black Box Machine Learning in Heavy Machinery', date: 'On-Demand Broadcast', speaker: 'Dr. Marcus Vance' },
    { title: 'Automating SAP PM & Maximo Work Orders with Real-Time Telematics', date: 'October 18, 2026', speaker: 'Elena Rostova' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">On-Demand Webinars</span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">MachPdMAI Technical Webinars</h1>
        <p className="text-sm text-slate-300">Register for interactive industrial predictive maintenance webinars with live Q&A.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {webinars.map((w, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">{w.date}</span>
              <h3 className="text-xl font-bold font-heading text-white mt-2 mb-2">{w.title}</h3>
              <p className="text-xs text-slate-400">Featured Speaker: {w.speaker}</p>
            </div>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="mt-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              <span>Watch Webinar On-Demand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
