import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import axios from 'axios';
import { Cpu, Mail, Lock, User, Building, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthModal() {
  const { authModalOpen, setAuthModalOpen, authMode, login } = useAuth();
  const { addToast } = useToast();

  const [isRegister, setIsRegister] = useState(authMode === 'register');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    company: ''
  });

  if (!authModalOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isRegister ? '/api/v1/auth/register/' : '/api/v1/auth/login/';
      const response = await axios.post(endpoint, formData);

      if (response.data.success) {
        login(response.data.user);
        addToast(response.data.message || 'Authenticated successfully!', 'success');
        setAuthModalOpen(false);
      } else {
        addToast(response.data.message || 'Authentication failed', 'error');
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Server connection error. Please try again.';
      addToast(errorMsg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bounded-modal-overlay">
      <div className="bounded-modal-container">
        
        {/* Top-Right Circular Close Button (✕) that turns RED on hover */}
        <button
          onClick={() => setAuthModalOpen(false)}
          className="modal-close-btn"
          title="Close Modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] mb-3 shadow-[0_0_20px_rgba(0,242,254,0.4)]">
            <div className="w-full h-full bg-[#090D16] rounded-[14px] flex items-center justify-center">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
          </div>

          <h3 className="text-2xl font-bold font-heading text-white">
            {isRegister ? 'Create MachPdMAI Account' : 'Sign In to MachPdMAI'}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            {isRegister
              ? 'Access real-time machine telemetry, physics digital twins, and predictive failure alerts.'
              : 'Welcome back! Enter your enterprise account credentials.'}
          </p>
        </div>

        {/* Auth Mode Toggle Tabs */}
        <div className="grid grid-cols-2 gap-1 bg-[#151C2C] p-1 rounded-xl mb-6 border border-slate-800">
          <button
            type="button"
            onClick={() => setIsRegister(false)}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              !isRegister ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(true)}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              isRegister ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  name="username"
                  required={isRegister}
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Enterprise Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••••••"
                className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company / Organization</label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Industrial Fleet Logistics Inc."
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Processing...</span>
            ) : (
              <>
                <span>{isRegister ? 'Complete Account Registration' : 'Sign In Now'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </>
            )}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>256-bit SSL Encrypted & SOC2 Type II Certified</span>
        </div>
      </div>
    </div>
  );
}
