import React from 'react';
import { BookOpen, Download, ArrowRight } from 'lucide-react';

export default function EbooksPage() {
  const ebooks = [
    { title: 'The Ultimate Guide to Physics Digital Twins in Heavy Manufacturing', pages: '48 Pages PDF', downloads: '12,400+ Downloads' },
    { title: 'Predicting Bearing Failure: 10kHz Vibration FFT Acceleration Blueprint', pages: '36 Pages PDF', downloads: '8,900+ Downloads' },
    { title: 'Reducing Haul Truck Downtime in Open-Pit Mining Operations', pages: '52 Pages PDF', downloads: '15,200+ Downloads' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Resource Library</span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">MachPdMAI Technical eBooks</h1>
        <p className="text-sm text-slate-300">Download comprehensive engineering guides and physics-informed AI blueprints.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ebooks.map((b, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <BookOpen className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-bold font-heading text-white mb-2">{b.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{b.pages} • {b.downloads}</p>
            </div>
            <button className="mt-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              <span>Download Free PDF</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
