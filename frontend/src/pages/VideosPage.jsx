import React from 'react';
import { Play, Film } from 'lucide-react';

export default function VideosPage() {
  const videos = [
    { title: 'Live Demonstration: High-Frequency Vibration FFT Anomaly Detection', duration: '12:40', category: 'Product Demo' },
    { title: 'How MachPdMAI Predicts Wind Turbine Gearbox Failure 6 Weeks in Advance', duration: '18:15', category: 'Case Study' },
    { title: 'Deploying DIN-Rail Industrial Edge Gateways in Extreme Dust Environments', duration: '09:50', category: 'Hardware Tutorial' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Video Library</span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">MachPdMAI Video Demonstrations</h1>
        <p className="text-sm text-slate-300">Watch live sensor streams, physics digital twin simulations, and hardware walkthroughs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((v, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <div className="w-full h-40 bg-[#151C2C] rounded-2xl flex items-center justify-center mb-4 relative">
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">{v.duration}</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">{v.category}</span>
              <h3 className="text-base font-bold font-heading text-white mt-1">{v.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
