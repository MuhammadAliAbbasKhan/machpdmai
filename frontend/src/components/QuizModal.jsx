import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import axios from 'axios';
import { HelpCircle, ArrowRight, ArrowLeft, CheckCircle2, TrendingUp, DollarSign, Cpu, AlertTriangle } from 'lucide-react';

export default function QuizModal() {
  const { quizModalOpen, setQuizModalOpen, openCheckout } = useAuth();
  const { addToast } = useToast();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState({
    fleet_size: '50-250 Assets',
    primary_asset_type: 'Heavy Transport & Logistics',
    annual_downtime_hours: '150 - 300 Hours',
    email: ''
  });

  const [result, setResult] = useState(null);

  if (!quizModalOpen) return null;

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const calculateROI = () => {
    let baseSavings = 180000;
    if (quizData.fleet_size === '251-1,000 Assets') baseSavings = 450000;
    if (quizData.fleet_size === '1,000+ Enterprise Fleet') baseSavings = 1200000;
    if (quizData.annual_downtime_hours === '300+ Critical Hours') baseSavings += 150000;
    return `$${baseSavings.toLocaleString()} / year`;
  };

  const getRecommendedPackage = () => {
    if (quizData.fleet_size === '1,000+ Enterprise Fleet') return { name: 'Enterprise Autonomous Plant AI', price: 200 };
    if (quizData.fleet_size === '251-1,000 Assets') return { name: 'Professional Predictive AI', price: 150 };
    return { name: 'Basic Fleet & Asset Monitor', price: 100 };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!quizData.email) {
      addToast('Please enter your work email to receive the full ROI report.', 'error');
      return;
    }

    setLoading(true);
    const estimatedSavings = calculateROI();
    const recommendedPkg = getRecommendedPackage();

    try {
      const response = await axios.post('/api/v1/quiz/submit/', {
        email: quizData.email,
        fleet_size: quizData.fleet_size,
        primary_asset_type: quizData.primary_asset_type,
        annual_downtime_hours: quizData.annual_downtime_hours,
        recommended_package: recommendedPkg.name,
        estimated_savings: estimatedSavings
      });

      setResult({
        savings: estimatedSavings,
        package: recommendedPkg
      });
      addToast('ROI Assessment completed!', 'success');
      setStep(4); // Results step
    } catch (err) {
      setResult({
        savings: estimatedSavings,
        package: recommendedPkg
      });
      addToast('ROI Assessment completed!', 'success');
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bounded-modal-overlay">
      <div className="bounded-modal-container">
        
        {/* Top-Right Circular Close Button (✕) turning RED on hover */}
        <button
          onClick={() => {
            setQuizModalOpen(false);
            setStep(1);
            setResult(null);
          }}
          className="modal-close-btn"
          title="Close ROI Diagnostic"
        >
          ✕
        </button>

        {/* Step Indicator Bar */}
        {step <= 3 && (
          <div className="flex items-center justify-between mb-6 pt-2">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              Step {step} of 3 — Machine ROI Calculator
            </span>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step ? 'w-8 bg-cyan-400' : i < step ? 'w-4 bg-emerald-500' : 'w-4 bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Fleet Size & Asset Sector */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Select Asset Fleet Scale & Equipment Sector
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Identify your machine fleet composition to calculate telemetry sensor coverage.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Fleet Size / Machinery Count</label>
                <div className="grid grid-cols-2 gap-3">
                  {['1-49 Assets', '50-250 Assets', '251-1,000 Assets', '1,000+ Enterprise Fleet'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setQuizData({ ...quizData, fleet_size: size })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        quizData.fleet_size === size
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                          : 'border-slate-800 bg-[#151C2C] text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Equipment Sector</label>
                <select
                  value={quizData.primary_asset_type}
                  onChange={(e) => setQuizData({ ...quizData, primary_asset_type: e.target.value })}
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Heavy Transport & Logistics">Heavy Transport & Commercial Truck Fleets</option>
                  <option value="Wind Turbines & Renewable Grids">Wind Turbines & Solar Power Inverters</option>
                  <option value="Mining & Open-Pit Excavators">Mining Excavators & Heavy Haul Trucks</option>
                  <option value="Rail & Locomotive Engines">Locomotive Engines & Rolling Stock</option>
                  <option value="Manufacturing & Processing Plant">Manufacturing Assembly Pumps & CNCs</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center gap-2"
              >
                <span>Continue to Downtime Metrics</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Downtime & Failure History */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Unplanned Downtime & Equipment Failure History
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Estimate annual emergency repairs and lost production hours.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Annual Unplanned Downtime Hours</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Under 50 Hours', '150 - 300 Hours', '300+ Critical Hours'].map((hours) => (
                    <button
                      key={hours}
                      type="button"
                      onClick={() => setQuizData({ ...quizData, annual_downtime_hours: hours })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        quizData.annual_downtime_hours === hours
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-200 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                          : 'border-slate-800 bg-[#151C2C] text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {hours}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center gap-2"
              >
                <span>Calculate ROI Results</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Work Email & Submit */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Generate Detailed Industrial AI Savings Report
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Enter your work email address to calculate your instant ROI baseline and receive the full physics digital twin proposal.
            </p>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email Address</label>
              <input
                type="email"
                required
                value={quizData.email}
                onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                placeholder="plant.manager@industrial.com"
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-xs hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all flex items-center gap-2"
              >
                {loading ? 'Calculating...' : 'Calculate Instant Savings ROI'}
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Results Display */}
        {step === 4 && result && (
          <div className="text-center py-2 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold font-heading text-white">Estimated Annual Downtime Savings</h3>
            
            <div className="my-4 py-4 px-6 bg-gradient-to-r from-cyan-950/80 via-slate-900 to-emerald-950/80 border border-cyan-500/40 rounded-2xl">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-heading">
                {result.savings}
              </span>
              <p className="text-xs text-slate-300 mt-1 font-mono">
                Based on {quizData.fleet_size} in {quizData.primary_asset_type}
              </p>
            </div>

            <div className="bg-[#151C2C] border border-slate-800 rounded-xl p-4 text-left mb-6">
              <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-1">Recommended AI Deployment</span>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">{result.package.name}</h4>
                  <p className="text-xs text-slate-400">Includes real-time FFT telemetry canvas & 24/7 predictive alerts</p>
                </div>
                <span className="text-lg font-bold text-emerald-400 font-mono">${result.package.price}/mo</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setQuizModalOpen(false);
                  openCheckout(result.package.name, result.package.price);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-extrabold text-xs hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all"
              >
                Subscribe Now (${result.package.price}/mo)
              </button>
              <button
                onClick={() => setQuizModalOpen(false)}
                className="px-5 py-3 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-slate-800"
              >
                Close Report
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
