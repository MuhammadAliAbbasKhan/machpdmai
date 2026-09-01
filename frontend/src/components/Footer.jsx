import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 sm:px-12 font-sans border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/60">
          
          {/* Left Column: CONNECT WITH MACHPDMAI (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-wider uppercase font-heading text-white">
              CONNECT WITH MACHPDMAI
            </h2>

            {/* Blue Contact Us Button */}
            <button
              onClick={() => navigate('/contact')}
              className="w-fit px-8 py-3.5 bg-[#165FFB] hover:bg-[#004AD1] text-white font-extrabold text-sm tracking-wider uppercase transition-colors shadow-lg"
            >
              CONTACT US
            </button>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 text-sm text-slate-300 font-normal pt-2">
              <p className="hover:text-white transition-colors cursor-pointer font-mono">
                312.242.2200
              </p>
              <p className="hover:text-white transition-colors cursor-pointer">
                info@machpdmai.com
              </p>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                2045 W. Grand Avenue, Ste B PMB 67705, Chicago, IL, 60612
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#165FFB] transition-colors" title="X (Twitter)">
                {/* SVG X icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#165FFB] transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#165FFB] transition-colors" title="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Columns: SOLUTIONS, RESOURCES, COMPANY (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            
            {/* SOLUTIONS COLUMN */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold tracking-wider uppercase font-heading text-white mb-1">
                SOLUTIONS
              </h3>

              <span className="text-xs font-bold font-mono tracking-widest uppercase text-[#165FFB]">
                PRODUCTS
              </span>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-200">
                <li><Link to="/solutions" className="hover:text-[#165FFB] transition-colors">Fleet</Link></li>
                <li><Link to="/federal" className="hover:text-[#165FFB] transition-colors">Federal</Link></li>
              </ul>

              <span className="text-xs font-bold font-mono tracking-widest uppercase text-[#165FFB] mt-4">
                PORTALS
              </span>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-200">
                <li><Link to="/paid-services" className="hover:text-[#165FFB] transition-colors">Fleet Login</Link></li>
              </ul>
            </div>

            {/* RESOURCES COLUMN */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold tracking-wider uppercase font-heading text-white mb-1">
                RESOURCES
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-200">
                <li><Link to="/news" className="hover:text-[#165FFB] transition-colors">Blog</Link></li>
                <li><Link to="/cases" className="hover:text-[#165FFB] transition-colors">Case Studies</Link></li>
                <li><Link to="/resources/ebooks" className="hover:text-[#165FFB] transition-colors">eBooks</Link></li>
                <li><Link to="/resources/videos" className="hover:text-[#165FFB] transition-colors">Videos</Link></li>
                <li><Link to="/resources/webinars" className="hover:text-[#165FFB] transition-colors">Webinars</Link></li>
                <li><Link to="/news" className="hover:text-[#165FFB] transition-colors">White Papers</Link></li>
              </ul>
            </div>

            {/* COMPANY COLUMN */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold tracking-wider uppercase font-heading text-white mb-1">
                COMPANY
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-200">
                <li><Link to="/about" className="hover:text-[#165FFB] transition-colors">About</Link></li>
                <li><Link to="/news" className="hover:text-[#165FFB] transition-colors">News</Link></li>
                <li><Link to="/events" className="hover:text-[#165FFB] transition-colors">Events</Link></li>
                <li><Link to="/partners" className="hover:text-[#165FFB] transition-colors">Partners</Link></li>
                <li><Link to="/security" className="hover:text-[#165FFB] transition-colors">Security</Link></li>
                <li><Link to="/privacy" className="hover:text-[#165FFB] transition-colors">Legal</Link></li>
                <li><Link to="/careers" className="hover:text-[#165FFB] transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-[#165FFB] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Footer Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MachPdMAI Inc. All rights reserved. Industrial Predictive Maintenance AI.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
