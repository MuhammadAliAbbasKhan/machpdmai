import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Lock, ShieldAlert, Zap, UserCheck, ArrowRight } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const { user, subscription, openAuth, openCheckout } = useAuth();

  const isPaidSubscriber = user && (user.is_paid || subscription.is_active);

  // Case 1: User is Logged In and Has an Active Paid Subscription -> Render Page
  if (isPaidSubscriber) {
    return children;
  }

  // Case 2: User is NOT Logged In
  if (!user) {
    return (
      <div className="min-h-[70vh] bg-[#07090E] text-slate-100 flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full bg-[#0F1420] border border-cyan-500/40 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(0,242,254,0.15)] flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-cyan-950/90 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              Authentication Required
            </span>
            <h2 className="text-2xl font-bold font-heading text-white">Sign In to Access Service</h2>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              This premium industrial AI portal requires a registered MachPdMAI subscriber account. Please sign in or create an account to proceed.
            </p>
          </div>

          <button
            onClick={() => openAuth('login')}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-xs hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all flex items-center justify-center gap-2"
          >
            <UserCheck className="w-4 h-4" />
            <span>Sign In / Create Account</span>
          </button>
        </div>
      </div>
    );
  }

  // Case 3: User is Logged In but HAS NOT PAID YET
  return (
    <div className="min-h-[70vh] bg-[#07090E] text-slate-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full bg-[#0F1420] border border-emerald-500/40 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
          <Zap className="w-8 h-8 fill-emerald-400" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
            Paid Subscriber Feature Locked
          </span>
          <h2 className="text-2xl font-bold font-heading text-white">Activate Paid Subscription</h2>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Welcome, <strong className="text-white">{user.email}</strong>! All MachPdMAI telemetry streams, predictive models, and sensor capabilities are exclusive paid services. Subscribe to any tier ($100, $150, or $200/mo) via Stripe to unlock instant 30-day access to all platform features.
          </p>
        </div>

        <div className="w-full bg-[#151C2C] border border-slate-800 rounded-2xl p-4 text-left flex flex-col gap-2 text-xs">
          <div className="flex items-center justify-between text-slate-300">
            <span>Basic Fleet & Asset Monitor</span>
            <span className="font-bold text-white font-mono">$100 / mo</span>
          </div>
          <div className="flex items-center justify-between text-cyan-300 font-semibold">
            <span>Professional Predictive AI</span>
            <span className="font-bold text-cyan-400 font-mono">$150 / mo</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span>Enterprise Autonomous Plant AI</span>
            <span className="font-bold text-white font-mono">$200 / mo</span>
          </div>
        </div>

        <button
          onClick={() => openCheckout('Professional Predictive AI', 150)}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          <span>Subscribe Now via Stripe ($150/mo)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
