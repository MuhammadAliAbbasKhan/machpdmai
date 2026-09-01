import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Cpu, ChevronDown, Activity, User, Menu, X, Zap, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, logout, openAuth, setDemoModalOpen } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navMenus = [
    {
      name: 'Products',
      path: '/solutions',
      dropdown: [
        { name: 'Fleet AI Engine', path: '/solutions' },
        { name: 'Defense & Military', path: '/products/defense' },
        { name: 'Tire Analytics', path: '/products/tires' },
        { name: 'Custom Fleet Software', path: '/products/custom-software' },
      ]
    },
    {
      name: 'Industries',
      path: '/solutions',
      dropdown: [
        { name: 'Buses & Transit', path: '/industries/buses' },
        { name: 'Concrete & Mixers', path: '/industries/concrete' },
        { name: 'Construction & Off-Highway', path: '/industries/construction' },
        { name: 'Federal & Government', path: '/federal' },
        { name: 'Heavy Trucks & Freight', path: '/industries/heavy-trucks' },
        { name: 'Medium Trucks & Logistics', path: '/industries/medium-trucks' },
        { name: 'Mining & Open-Pit Excavation', path: '/industries/mining' },
      ]
    },
    {
      name: 'Features',
      path: '/features',
      dropdown: [
        { name: 'Fleet Insight Dashboards', path: '/features/dashboards' },
        { name: 'Maintenance Value Optimization', path: '/features/maintenance-optimization' },
        { name: 'Mixed Fleet Data Hub', path: '/features/data-hub' },
        { name: 'Remote Diagnostics', path: '/features/remote-diagnostics' },
        { name: 'Risk Explorer', path: '/features/risk-explorer' },
        { name: 'Sensor Insights', path: '/features/sensor-insights' },
        { name: 'Warranty Tracking', path: '/features/warranty' },
      ]
    },
    { name: 'Become a Partner', path: '/partners' },
    {
      name: 'Resources',
      path: '/news',
      dropdown: [
        { name: 'Blog & Insights', path: '/news' },
        { name: 'Case Studies ($42M Saved)', path: '/cases' },
        { name: 'Technical eBooks', path: '/resources/ebooks' },
        { name: 'Video Demos', path: '/resources/videos' },
        { name: 'Webinars', path: '/resources/webinars' },
        { name: 'White Papers', path: '/news' },
      ]
    },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000] w-[96%] max-w-7xl">
      <div className="bg-[#0F1420]/90 backdrop-blur-xl border border-cyan-500/25 rounded-full px-5 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#090D16]/80 border border-slate-800 rounded-full px-3 py-1">
          {navMenus.map((menu, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={menu.path}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1"
              >
                <span>{menu.name}</span>
                {menu.dropdown && <ChevronDown className="w-3 h-3 text-cyan-400 group-hover:rotate-180 transition-transform" />}
              </Link>

              {/* Dropdown Menu */}
              {menu.dropdown && activeDropdown === idx && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#0D111A] border border-cyan-500/30 rounded-2xl p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
                  {menu.dropdown.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.path}
                      className="block px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 transition-all"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDemoModalOpen(true)}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Request Demo</span>
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <Link
                to="/paid-services"
                className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-emerald-900/60"
              >
                <Zap className="w-3 h-3 fill-emerald-400" />
                <span>Subscriber Hub</span>
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
              className="text-xs font-bold px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-slate-950" />
              <span>Sign In</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-[#0D111A]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 max-h-[75vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navMenus.map((menu, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <Link
                  to={menu.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-slate-800 flex items-center justify-between"
                >
                  <span>{menu.name}</span>
                </Link>
                {menu.dropdown && (
                  <div className="pl-6 flex flex-col gap-1 border-l-2 border-slate-800">
                    {menu.dropdown.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-1.5 text-xs font-medium text-slate-400 hover:text-cyan-300"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setDemoModalOpen(true);
              }}
              className="w-full py-2.5 rounded-xl border border-slate-700 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Request Demo</span>
            </button>

            {user ? (
              <Link
                to="/paid-services"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-sm font-semibold text-center"
              >
                Subscriber Hub
              </Link>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuth('login');
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Sign In / Register</span>
              </button>
            )}
          </div>
        </div>
      )}

    </header>
  );
}