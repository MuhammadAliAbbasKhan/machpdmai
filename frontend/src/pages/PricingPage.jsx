import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Check, Zap, ShieldCheck, Cpu, ArrowRight, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const { openCheckout, subscription } = useAuth();
  const [isYearly, setIsYearly] = useState(false);

  const tiers = [
    {
      name: 'Basic Fleet & Asset Monitor',
      monthlyPrice: 100,
      yearlyPrice: 80,
      description: 'Ideal for small commercial fleets and regional equipment monitoring.',
      features: [
        'Up to 50 connected machinery assets',
        'Real-time vibration FFT anomaly alerts',
        'Mobile & web telemetry console',
        'CAN-bus J1939 sensor ingestion',
        'Standard email & SMS notifications',
        'Basic reporting & telemetry logs'
      ],
      recommended: false,
      buttonText: 'Select Basic Plan'
    },
    {
      name: 'Professional Predictive AI',
      monthlyPrice: 150,
      yearlyPrice: 120,
      description: 'Complete physics-informed predictive maintenance engine for industrial plants.',
      features: [
        'Up to 250 connected machinery assets',
        'Full Physics Digital Twin modeling',
        '3 to 6 weeks advance failure prediction',
        'Automated work order creation (SAP/Maximo)',
        'Thermal & hydraulic pressure wave FFT',
        'Edge gateway hardware dispatch',
        '24/7 priority engineering support'
      ],
      recommended: true,
      buttonText: 'Select Professional Plan'
    },
    {
      name: 'Enterprise Autonomous Plant AI',
      monthlyPrice: 200,
      yearlyPrice: 160,
      description: 'Autonomous multi-facility plant AI for global industrial leaders.',
      features: [
        'Unlimited connected enterprise assets',
        'Custom physics digital twin foundry',
        'Dedicated industrial AI engineer assigned',
        'On-premise edge server deployment',
        'Custom SCADA / OPC-UA bridge development',
        '100% Zero Downtime Service Guarantee',
        'Multi-user corporate lab licensing'
      ],
      recommended: false,
      buttonText: 'Select Enterprise Plan'
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Transparent Industrial Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
            Choose the Perfect MachPdMAI Tier
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Zero hidden fees. Every tier includes physics digital twin anomaly detection and immediate Stripe checkout activation.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#0F1420] border border-slate-800 p-1.5 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                !isYearly ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                isYearly ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[10px]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => {
            const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;
            const isCurrentPlan = subscription.is_active && subscription.plan === tier.name;

            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  tier.recommended
                    ? 'bg-[#0F1420] border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,242,254,0.15)] scale-[1.02]'
                    : 'bg-[#0F1420] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                    Most Popular for Plants
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold font-heading text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 mb-6 min-h-[36px]">{tier.description}</p>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl font-black font-heading text-white">${price}</span>
                    <span className="text-xs text-slate-400 font-mono">/ USD month</span>
                    {isYearly && <span className="text-[10px] text-emerald-400 font-mono font-semibold ml-2">Billed annually</span>}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      Included Features:
                    </span>
                    <ul className="space-y-3">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => openCheckout(tier.name, price)}
                  disabled={isCurrentPlan}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 ${
                    isCurrentPlan
                      ? 'bg-emerald-950 border border-emerald-500 text-emerald-300 cursor-default'
                      : tier.recommended
                      ? 'bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 hover:shadow-[0_0_25px_rgba(0,242,254,0.4)]'
                      : 'bg-[#151C2C] border border-slate-700 text-slate-100 hover:border-cyan-500/50 hover:bg-slate-800'
                  }`}
                >
                  {isCurrentPlan ? (
                    <span>Active Subscription</span>
                  ) : (
                    <>
                      <span>{tier.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
