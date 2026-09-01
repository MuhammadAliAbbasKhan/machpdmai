import React from 'react';
import { ShieldCheck, Lock, Server, CheckCircle2 } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Enterprise Security Architecture
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Industrial-Grade Cyber Security & SOC2 Compliance
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          MachPdMAI protects critical infrastructure telematics with military-grade encryption and air-gapped edge gateway options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <Lock className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold font-heading text-white mb-2">AES-256 & TLS 1.3 Encryption</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All CAN-bus, Modbus TCP, and vibration FFT streams are encrypted end-to-end both in transit and at rest.
          </p>
        </div>

        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
          <h3 className="text-xl font-bold font-heading text-white mb-2">SOC2 Type II & ISO 27001</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Independently audited annually to ensure enterprise compliance for critical defense, rail, and energy assets.
          </p>
        </div>

        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <Server className="w-8 h-8 text-teal-300 mb-4" />
          <h3 className="text-xl font-bold font-heading text-white mb-2">Air-Gapped Edge Processing</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Deploy DIN-rail edge servers that process physics neural models locally without internet connectivity.
          </p>
        </div>
      </div>

    </div>
  );
}
