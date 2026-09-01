import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Activity, ShieldCheck, Cpu, User, Menu, X, ArrowRight, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, openAuth, setDemoModalOpen } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Platform', path: '/platform' },
    { name: 'Live Telemetry', path: '/telemetry' },
    { name: 'ROI Quiz', path: '/quiz' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/cases' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000] w-[94%] max-w-7xl">
      <div className="bg-[#0F1420]/85 backdrop-blur-xl border border-cyan-500/20 rounded-full px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] shadow-[0_0_15px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center font-heading font-black text-xl tracking-tight text-white">
              <span>Mach</span>
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent ml-0.5">PdM</span>
              <span className="text-xs ml-1.5 px-1.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-semibold tracking-wider uppercase">AI</span>
            </div>
            <span className="text-[9px] text-slate-400 tracking-widest uppercase font-mono -mt-1">Predictive Intelligence</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#090D16]/60 border border-slate-800 rounded-full px-4 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive(link.path)
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,242,254,0.2)]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setDemoModalOpen(true)}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            Request Demo
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <Link
                to="/paid-services"
                className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-emerald-900/60"
              >
                <Zap className="w-3 h-3 fill-emerald-400" />
                Subscriber Hub
              </Link>
              <button
                onClick={logout}
                className="text-xs font-medium text-slate-400 hover:text-white px-2 py-1"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => openAuth('login')}
              className="text-xs font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-slate-950" />
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-[#0F1420]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setDemoModalOpen(true);
              }}
              className="w-full py-2.5 rounded-xl border border-slate-700 text-slate-200 hover:border-cyan-500/50 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              Request Demo
            </button>

            {user ? (
              <>
                <Link
                  to="/paid-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm font-semibold text-center"
                >
                  Subscriber Hub
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="w-full py-2 text-slate-400 hover:text-white text-sm text-center"
                >
                  Sign Out ({user.email})
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuth('login');
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <User className="w-4 h-4" />
                Sign In / Register
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
