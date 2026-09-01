import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-20 text-slate-300">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck className="w-5 h-5 text-cyan-400" />
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Privacy Controls</span>
      </div>
      <h1 className="text-3xl font-bold font-heading text-white mb-6">MachPdMAI Cookie Policy</h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <p>Effective Date: September 1, 2026</p>
        <p>
          MachPdMAI uses functional essential cookies and local storage tokens to preserve user sign-in sessions, active subscription states, and custom live telemetry canvas preferences.
        </p>

        <h2 className="text-xl font-bold font-heading text-white pt-4 border-t border-slate-800">1. Essential Session Storage</h2>
        <p>
          Local storage parameters like <code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded font-mono">machpdmai_user</code> and <code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded font-mono">machpdmai_sub</code> enable seamless navigation without re-authenticating on every telemetry page refresh.
        </p>
      </div>
    </div>
  );
}
