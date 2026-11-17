import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import { ShieldCheck, Lock, Users, CreditCard, HelpCircle, Mail, Database, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function AdminPage() {
  const { addToast } = useToast();
  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState(null);

  const fetchAnalytics = async (codeToUse) => {
    setLoading(true);
    try {
      const response = await axios.get('/api/v1/admin/analytics/', {
        headers: {
          'X-Admin-Passcode': codeToUse
        }
      });

      if (response.data.success) {
        setAnalytics(response.data.analytics);
        setAuthenticated(true);
        addToast('Executive Admin Access Granted', 'success');
      } else {
        addToast('Invalid Passcode', 'error');
      }
    } catch (err) {
      addToast('Forbidden: Invalid Admin Passcode', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    fetchAnalytics(passcode);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#07090E] text-slate-100 pt-20 pb-32">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="bg-[#0F1420] border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold font-heading text-white">Executive Control Console</h1>
            <p className="text-xs text-slate-400 mt-1 mb-6">Enter secure admin passcode header credentials.</p>

            <form onSubmit={handlePasscodeSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="password"
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter Admin Passcode..."
                  className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-center text-sm font-mono text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-xs hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all"
              >
                {loading ? 'Authenticating...' : 'Unlock Executive Console'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h1 className="text-2xl font-bold font-heading text-white">MachPdMAI Executive Analytics Console</h1>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Real-time Django SQLite ORM & MongoDB Cloud Atlas Dual Sync Telemetry</p>
          </div>

          <button
            onClick={() => fetchAnalytics(passcode)}
            className="px-4 py-2 rounded-xl bg-[#151C2C] border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-500 flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Refresh Live Database Metrics</span>
          </button>
        </div>

        {/* Analytics Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase">Total Registered Users</span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-black font-heading text-white">{analytics?.total_users || 0}</div>
          </div>

          <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase">Stripe Subscription Orders</span>
              <CreditCard className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black font-heading text-emerald-400">{analytics?.total_subscribers || 0}</div>
          </div>

          <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase">ROI Quiz Submissions</span>
              <HelpCircle className="w-4 h-4 text-teal-300" />
            </div>
            <div className="text-3xl font-black font-heading text-teal-300">{analytics?.total_quizzes || 0}</div>
          </div>

          <div className="bg-[#0F1420] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-mono uppercase">Contact Inquiries</span>
              <Mail className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-black font-heading text-purple-400">{analytics?.total_inquiries || 0}</div>
          </div>
        </div>

        {/* Dual Database Sync Status Banner */}
        <div className="bg-[#0F1420] border border-cyan-500/30 rounded-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Database className="w-6 h-6 text-cyan-400" />
            <div>
              <h4 className="text-sm font-bold text-white">Dual Database Engine Health</h4>
              <p className="text-xs text-slate-400">Primary Store: SQLite (db.sqlite3) • Fail-soft Cloud Mirror: MongoDB Atlas (machpdmai_db)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-emerald-400">MongoDB Atlas Active</span>
          </div>
        </div>

        {/* Subscription Orders Table */}
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-6">
          <h3 className="text-lg font-bold font-heading text-white mb-4">Recent Subscription Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                <tr>
                  <th className="pb-3">ID</th>
                  <th className="pb-3">Plan Name</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Cardholder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {analytics?.subscriptions?.length > 0 ? (
                  analytics.subscriptions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-900/50">
                      <td className="py-3 font-mono text-slate-400">#{sub.id}</td>
                      <td className="py-3 font-semibold text-white">{sub.plan_name}</td>
                      <td className="py-3 text-emerald-400 font-bold font-mono">${sub.amount}</td>
                      <td className="py-3">{sub.email}</td>
                      <td className="py-3">{sub.cardholder_name}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-6 text-center text-slate-500 font-mono">No subscription orders recorded yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
