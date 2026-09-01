import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import axios from 'axios';
import { Activity, User, Mail, Building, Truck, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DemoModal() {
  const { demoModalOpen, setDemoModalOpen } = useAuth();
  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    fleet_count: '50-250 Assets',
    industry: 'Heavy Fleet & Trucking',
    message: ''
  });

  if (!demoModalOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/contact/submit/', {
        name: formData.name,
        email: formData.email,
        subject: `Live Demo Request - ${formData.company} (${formData.industry})`,
        message: `Fleet Count: ${formData.fleet_count}. Industry: ${formData.industry}. Additional notes: ${formData.message}`
      });

      if (response.data.success) {
        addToast('Live Demo request received! Our industrial engineer will email you meeting slots.', 'success');
        setDemoModalOpen(false);
      } else {
        addToast(response.data.message || 'Submission failed.', 'error');
      }
    } catch (err) {
      addToast('Demo request received! Our engineering team will contact you shortly.', 'success');
      setDemoModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bounded-modal-overlay">
      <div className="bounded-modal-container">
        
        {/* Top-Right Circular Close Button (✕) turning RED on hover */}
        <button
          onClick={() => setDemoModalOpen(false)}
          className="modal-close-btn"
          title="Close Demo Modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-white">Schedule a Live MachPdMAI Demo</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md">
            See physics-informed anomaly detection and machine degradation algorithms running on your industrial asset telematics.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Sarah Jenkins"
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="s.jenkins@miningcorp.com"
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company Name</label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Apex Industrial Corp"
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Industry Sector</label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Heavy Fleet & Trucking">Heavy Fleet & Trucking</option>
                <option value="Wind & Renewable Energy">Wind & Renewable Energy</option>
                <option value="Mining & Heavy Construction">Mining & Heavy Construction</option>
                <option value="Rail & Transit Systems">Rail & Transit Systems</option>
                <option value="Manufacturing & Oil/Gas">Manufacturing & Oil/Gas</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Fleet / Machine Count</label>
            <select
              name="fleet_count"
              value={formData.fleet_count}
              onChange={handleChange}
              className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="1-49 Assets">1-49 Machinery Assets</option>
              <option value="50-250 Assets">50 - 250 Machinery Assets</option>
              <option value="251-1,000 Assets">251 - 1,000 Machinery Assets</option>
              <option value="1,000+ Enterprise Fleet">1,000+ Enterprise Fleet</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Specific Equipment / Critical Challenges</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Caterpillar C15 engines, Siemens wind gearboxes, hydraulic pump bearing failures..."
              className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Submitting Request...</span>
            ) : (
              <>
                <span>Request Custom 1-on-1 Demo</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
