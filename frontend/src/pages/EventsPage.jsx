import React from 'react';
import { Calendar, MapPin, ArrowRight, Video } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function EventsPage() {
  const { setDemoModalOpen } = useAuth();

  const events = [
    {
      title: 'Global Industrial Telematics Summit 2026',
      date: 'September 24 - 26, 2026',
      location: 'McCormick Place, Chicago, IL',
      description: 'Keynote presentation by MachPdMAI engineering leadership on 10kHz piezo-vibration FFT spectrum analysis for heavy mining excavators.'
    },
    {
      title: 'Wind Energy & Offshore Reliability Expo',
      date: 'October 12 - 14, 2026',
      location: 'Frankfurt Messe, Germany',
      description: 'Live demonstration of Siemens planetary gearbox digital twin modeling and crane mobilization cost reduction.'
    },
    {
      title: 'Commercial Fleet Maintenance Symposium',
      date: 'November 05, 2026',
      location: 'Virtual Broadcast & Live Q&A',
      description: 'Panel discussion on CAN-bus J1939 telematics ingestion and automated SAP PM work order dispatch.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Upcoming Events & Conferences
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Meet MachPdMAI Industrial AI Engineers
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Join our technical workshops, keynote speeches, and live industrial telematics demonstrations around the globe.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {events.map((ev, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 text-xs font-mono text-cyan-400 font-bold mb-2">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{ev.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{ev.location}</span>
              </div>
              <h2 className="text-2xl font-bold font-heading text-white mb-2">{ev.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{ev.description}</p>
            </div>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="shrink-0 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all"
            >
              Reserve VIP Pass
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
