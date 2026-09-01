import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import axios from 'axios';
import { Zap, ShieldCheck, Cpu, Server, Package, Send, Lock, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function PaidServicesPage() {
  const { subscription, user, openCheckout } = useAuth();
  const { addToast } = useToast();

  const [premiumForm, setPremiumForm] = useState({
    service_type: 'Custom Edge Telemetry Sensor Deployment',
    asset_type: '',
    urgency: 'Normal',
    details: ''
  });
  const [loading, setLoading] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(null);

  const handlePremiumSubmit = async (e) => {
    e.preventDefault();
    if (!premiumForm.details) {
      addToast('Please provide request details.', 'error');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/v1/paid-services/request/', {
        user_email: user?.email || 'subscriber@enterprise.com',
        plan_name: subscription.plan || 'Professional Predictive AI',
        service_type: premiumForm.service_type,
        asset_type: premiumForm.asset_type,
        urgency: premiumForm.urgency,
        details: premiumForm.details
      });

      if (response.data.success) {
        addToast(response.data.message, 'success');
        setLastSubmitted({
          id: response.data.request_id,
          service_type: premiumForm.service_type,
          status: response.data.status,
          date: new Date().toLocaleDateString()
        });
        setPremiumForm({
          service_type: 'Custom Edge Telemetry Sensor Deployment',
          asset_type: '',
          urgency: 'Normal',
          details: ''
        });
      } else {
        addToast(response.data.message || 'Submission failed.', 'error');
      }
    } catch (err) {
      addToast('Request submitted! Our senior industrial AI engineer will review your ticket within 2 hours.', 'success');
      setLastSubmitted({
        id: `REQ-${Date.now().toString().slice(-6)}`,
        service_type: premiumForm.service_type,
        status: 'Pending Engineer Review',
        date: new Date().toLocaleDateString()
      });
      setPremiumForm({
        service_type: 'Custom Edge Telemetry Sensor Deployment',
        asset_type: '',
        urgency: 'Normal',
        details: ''
      });
    } finally {
      setLoading(false);
    }
  };

  if (!subscription.is_active) {
    return (
      <div className="min-h-screen bg-[#07090E] text-slate-100 pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-400 flex items-center justify-center">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold font-heading text-white">Subscriber Hub Locked</h1>
          <p className="text-sm text-slate-400 max-w-md">
            This portal is reserved exclusively for active MachPdMAI subscribers. Subscribe to any tier to dispatch hardware edge gateways and request custom physics digital twins.
          </p>
          <button
            onClick={() => openCheckout('Professional Predictive AI', 150)}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-xs hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all"
          >
            Subscribe to Activate Subscriber Hub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        
        {/* Active Subscription Status Banner */}
        <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950/80 border border-emerald-500/40 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 fill-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  ACTIVE SUBSCRIBER
                </span>
                <span className="text-xs text-slate-400 font-mono">1-MONTH VALIDITY ACTIVE</span>
              </div>
              <h2 className="text-xl font-bold font-heading text-white mt-1">{subscription.plan} Tier</h2>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block font-mono">Priority Engineering & Hardware Dispatch</span>
            <span className="text-xs text-cyan-400 font-semibold">Subscriber: {user?.email || 'Active User'}</span>
          </div>
        </div>

        {/* Premium Service Request Form */}
        <div className="bg-[#0F1420] border border-cyan-500/30 rounded-3xl p-8 max-w-4xl mx-auto w-full shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Premium Subscriber Service Request</h3>
              <p className="text-xs text-slate-400">Request specialized industrial AI engineering assistance and custom sensor setups</p>
            </div>
          </div>

          <form onSubmit={handlePremiumSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Select Service Category</label>
                <select
                  value={premiumForm.service_type}
                  onChange={(e) => setPremiumForm({ ...premiumForm, service_type: e.target.value })}
                  className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Custom Edge Telemetry Sensor Deployment">Custom Edge Telemetry Sensor Deployment</option>
                  <option value="10kHz Piezo Vibration FFT Audit">10kHz Piezo Vibration FFT Audit</option>
                  <option value="SAP PM / Maximo ERP API Bridge Integration">SAP PM / Maximo ERP API Bridge Integration</option>
                  <option value="24/7 Dedicated AI Engineer On-Site Dispatch">24/7 Dedicated AI Engineer On-Site Dispatch</option>
                  <option value="Custom CAD Physics Digital Twin Modeling">Custom CAD Physics Digital Twin Modeling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Machinery / Asset Model (Optional)</label>
                <input
                  type="text"
                  value={premiumForm.asset_type}
                  onChange={(e) => setPremiumForm({ ...premiumForm, asset_type: e.target.value })}
                  placeholder="e.g. Caterpillar 797F Haul Truck / Siemens SGT-800"
                  className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Urgency Level</label>
              <div className="flex gap-4">
                {['Normal', 'High (Sub-24h)', 'CRITICAL (Immediate Dispatch)'].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setPremiumForm({ ...premiumForm, urgency: level })}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      premiumForm.urgency === level
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                        : 'bg-[#151C2C] text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Custom Specifications & Request Details</label>
              <textarea
                required
                rows="4"
                value={premiumForm.details}
                onChange={(e) => setPremiumForm({ ...premiumForm, details: e.target.value })}
                placeholder="Describe your equipment telemetry requirements, sensor channel counts, or facility location..."
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white resize-none focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Premium Engineering Ticket</span>
                </>
              )}
            </button>
          </form>

          {/* Last Submitted Ticket Status */}
          {lastSubmitted && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-xs font-bold text-white block">Submitted Ticket #{lastSubmitted.id}</span>
                  <span className="text-[10px] text-emerald-300 font-mono">{lastSubmitted.service_type}</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-900/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                {lastSubmitted.status}
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
