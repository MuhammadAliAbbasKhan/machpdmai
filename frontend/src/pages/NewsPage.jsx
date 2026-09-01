import React from 'react';
import { Cpu, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export default function NewsPage() {
  const articles = [
    {
      title: 'Physics-Informed Neural Networks vs Black-Box ML in Machinery Health Monitoring',
      date: 'August 28, 2026',
      author: 'Dr. Marcus Vance, Chief AI Architect',
      tag: 'Engineering Paper',
      summary: 'Why traditional data-driven neural networks fail in low-fault industrial environments, and how physics digital twin equations guarantee early failure detection without massive historical training data.'
    },
    {
      title: 'MachPdMAI Announces v4.2 Release with High-Speed 10kHz Vibration FFT Engine',
      date: 'August 14, 2026',
      author: 'MachPdMAI Product Team',
      tag: 'Product Announcement',
      summary: 'Introducing native CAN-bus J1939 streaming, ISO 10816 vibration standard automated compliance, and instant SAP Plant Maintenance work order creation.'
    },
    {
      title: 'Reducing Hydraulic Pump Cavitation in Mining Excavators with High-Frequency Telemetry',
      date: 'July 30, 2026',
      author: 'Elena Rostova, Lead Telematics Engineer',
      tag: 'Field Case Paper',
      summary: 'A deep technical dive into high-pressure fluid dynamic wave modeling on Caterpillar and Komatsu open-pit hydraulic shovel booms.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Industrial AI Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Latest Engineering Articles & News
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Read technical whitepapers, product updates, and physics-informed AI research from the MachPdMAI engineering team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-6 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
                {art.tag}
              </span>
              <h3 className="text-lg font-bold font-heading text-white mt-4 mb-2">{art.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{art.summary}</p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>{art.date}</span>
              <span className="text-cyan-400 hover:underline cursor-pointer flex items-center gap-1 font-semibold">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
