import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Github, ShieldAlert } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F18] border-t border-slate-800 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Glow ambient circle */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Left Column: Brand & Tagline (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center font-heading font-black text-2xl tracking-tight text-white">
                  <span>Mach</span>
                  <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent ml-0.5">PdM</span>
                  <span className="text-xs ml-1.5 px-1.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-semibold tracking-wider uppercase">AI</span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase font-mono -mt-1">Predictive Intelligence</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering global industrial fleets, energy grids, mining operations, and manufacturing plants with physics-informed predictive maintenance AI to eliminate equipment failures and guarantee zero unplanned downtime.
            </p>

            {/* Subscriptions badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs text-cyan-400 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Sensor Telemetry Engine v4.2
              </div>
            </div>
          </div>

          {/* Middle Column: 3 Sub-Column Links Grid (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Sub-col 1: Solutions */}
            <div>
              <h4 className="text-xs font-bold font-mono tracking-widest text-slate-100 uppercase mb-4 text-cyan-400">Solutions</h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li><Link to="/solutions" className="hover:text-cyan-300 transition-colors">Heavy Fleet & Logistics</Link></li>
                <li><Link to="/solutions" className="hover:text-cyan-300 transition-colors">Wind & Solar Energy</Link></li>
                <li><Link to="/solutions" className="hover:text-cyan-300 transition-colors">Mining & Excavation</Link></li>
                <li><Link to="/solutions" className="hover:text-cyan-300 transition-colors">Rail & Locomotive</Link></li>
                <li><Link to="/solutions" className="hover:text-cyan-300 transition-colors">Manufacturing Lines</Link></li>
              </ul>
            </div>

            {/* Sub-col 2: Platform */}
            <div>
              <h4 className="text-xs font-bold font-mono tracking-widest text-slate-100 uppercase mb-4 text-cyan-400">Platform</h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li><Link to="/platform" className="hover:text-cyan-300 transition-colors">Physics Digital Twins</Link></li>
                <li><Link to="/platform" className="hover:text-cyan-300 transition-colors">SCADA & IoT Data Engine</Link></li>
                <li><Link to="/telemetry" className="hover:text-cyan-300 transition-colors">Live Vibration FFT Canvas</Link></li>
                <li><Link to="/platform" className="hover:text-cyan-300 transition-colors">Work Order Automation</Link></li>
                <li><Link to="/quiz" className="hover:text-cyan-300 transition-colors">ROI Assessment Calculator</Link></li>
              </ul>
            </div>

            {/* Sub-col 3: Company */}
            <div>
              <h4 className="text-xs font-bold font-mono tracking-widest text-slate-100 uppercase mb-4 text-cyan-400">Company</h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li><Link to="/cases" className="hover:text-cyan-300 transition-colors">Case Studies ($40M Saved)</Link></li>
                <li><Link to="/pricing" className="hover:text-cyan-300 transition-colors">Pricing & Plans</Link></li>
                <li><Link to="/news" className="hover:text-cyan-300 transition-colors">Engineering Insights</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-300 transition-colors">Contact Sales</Link></li>
                <li><Link to="/paid-services" className="hover:text-cyan-300 transition-colors">Subscriber Hub</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Column: HQ Contact & Back to Top (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold font-mono tracking-widest text-slate-100 uppercase mb-1 text-cyan-400">Global Headquarters</h4>
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>MachPdMAI Inc. 300 N LaSalle Dr, Suite 400, Chicago, IL 60654 US</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>contact@machpdmai.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>(312) 880-9200</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="flex items-center justify-between pt-4">
              <span className="text-xs text-slate-400">Back to Top</span>
              <button
                onClick={scrollToTop}
                className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:scale-110 active:scale-95 transition-all"
                title="Scroll to Top"
              >
                <ArrowUp className="w-5 h-5 font-bold" />
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom Footer Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-col gap-2 max-w-2xl">
            <p className="leading-relaxed">
              <ShieldAlert className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />
              MachPdMAI predictive analytics results are based on physics-informed artificial intelligence, machine learning vibration FFT spectrums, and thermal telemetry models. Always consult certified maintenance engineers for heavy machinery protocol verification.
            </p>
            <div className="flex flex-wrap gap-4 pt-1 font-medium text-slate-400">
              <Link to="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-cyan-300 transition-colors">Cookie Policy</Link>
              <span>•</span>
              <span>© {new Date().getFullYear()} MachPdMAI Inc. All rights reserved.</span>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Facebook, href: '#' },
              { icon: Youtube, href: '#' },
              { icon: Github, href: '#' }
            ].map((social, idx) => {
              const IconComp = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/60 hover:bg-slate-800 flex items-center justify-center transition-all"
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}
