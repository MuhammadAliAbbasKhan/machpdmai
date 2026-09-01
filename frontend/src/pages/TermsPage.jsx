import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-20 text-slate-300">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck className="w-5 h-5 text-cyan-400" />
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">Legal Agreement</span>
      </div>
      <h1 className="text-3xl font-bold font-heading text-white mb-6">MachPdMAI Terms of Service</h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <p>Effective Date: September 1, 2026</p>
        <p>
          By accessing or subscribing to MachPdMAI predictive maintenance platform, edge hardware gateways, or physics digital twin models, you agree to these Terms of Service.
        </p>

        <h2 className="text-xl font-bold font-heading text-white pt-4 border-t border-slate-800">1. License & Industrial Use</h2>
        <p>
          MachPdMAI grants subscribers a non-exclusive, non-transferable license to deploy our telemetry algorithms across your registered machinery assets.
        </p>

        <h2 className="text-xl font-bold font-heading text-white pt-4 border-t border-slate-800">2. Service SLA & Zero Downtime Guarantee</h2>
        <p>
          MachPdMAI guarantees 99.9% uptime for cloud telemetry streaming. Predictive failure notifications serve as physics-informed advice; certified site mechanics remain responsible for final physical lock-out tag-out operations.
        </p>

        <h2 className="text-xl font-bold font-heading text-white pt-4 border-t border-slate-800">3. Contact</h2>
        <p>
          Inquiries regarding terms should be directed to <span className="text-cyan-400 font-mono">legal@machpdmai.com</span>.
        </p>
      </div>
    </div>
  );
}
