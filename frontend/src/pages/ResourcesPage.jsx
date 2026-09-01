import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Film, Award, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ResourcesPage() {
  const { setDemoModalOpen } = useAuth();

  const resources = [
    { title: 'Blog & Engineering Insights', path: '/news', icon: BookOpen, desc: 'Technical whitepapers and articles from our Chief AI Architect.' },
    { title: 'Case Studies ($42M Saved)', path: '/cases', icon: Award, desc: 'Proven ROI metrics from Rio Tinto, Siemens Energy, and Apex Freight.' },
    { title: 'Technical eBooks', path: '/resources/ebooks', icon: BookOpen, desc: 'Downloadable PDF engineering blueprints and vibration FFT guides.' },
    { title: 'Video Demonstrations', path: '/resources/videos', icon: Film, desc: 'Watch live telemetry stream walkthroughs and edge gateway setups.' },
    { title: 'Interactive Webinars', path: '/resources/webinars', icon: Video, desc: 'On-demand technical webinars with live Q&A sessions.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Knowledge Base & Assets
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          MachPdMAI Resource Hub
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Access our comprehensive collection of engineering whitepapers, case studies, technical eBooks, and video tutorials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((r, idx) => {
          const IconComp = r.icon;
          return (
            <div key={idx} className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">{r.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{r.desc}</p>
              </div>

              <Link
                to={r.path}
                className="py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>Browse Resources</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
}
