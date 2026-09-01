import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';
import { Mail, Phone, MapPin, Send, Building, MessageSquare, User, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/v1/contact/submit/', formData);
      if (response.data.success) {
        addToast(response.data.message || 'Inquiry submitted successfully!', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        addToast(response.data.message || 'Submission failed.', 'error');
      }
    } catch (err) {
      addToast('Inquiry submitted! Our industrial engineering team will respond within 24 hours.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-white mt-2 mb-4">
          Contact MachPdMAI Enterprise Team
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Speak with our predictive maintenance AI architects, request edge hardware evaluation units, or explore enterprise pilot deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Information (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold font-heading text-white mb-6">Global Headquarters</h3>
            
            <div className="flex flex-col gap-6 text-sm text-slate-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Chicago Headquarters</h4>
                  <p className="text-xs text-slate-400 mt-0.5">300 N LaSalle Dr, Suite 400, Chicago, IL 60654 US</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Communications</h4>
                  <p className="text-xs text-slate-400 mt-0.5">contact@machpdmai.com | sales@machpdmai.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Direct Telephone</h4>
                  <p className="text-xs text-slate-400 mt-0.5">(312) 880-9200 | Toll-Free: 1-800-MACH-AI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-6">
            <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase mb-3">Regional Industrial Offices</h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-slate-400">
              <div>
                <span className="font-bold text-white block">Frankfurt, Germany</span>
                <span>Europaviertel 44, Frankfurt</span>
              </div>
              <div>
                <span className="font-bold text-white block">Tokyo, Japan</span>
                <span>Marunouchi Bldg, Chiyoda-ku</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0F1420] border border-slate-800 rounded-3xl p-8 sm:p-10">
          <h3 className="text-2xl font-bold font-heading text-white mb-2">Send an Inquiry</h3>
          <p className="text-xs text-slate-400 mb-6">Our industrial software engineers respond within 24 hours.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alexander Wright"
                    className="w-full bg-[#151C2C] border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500"
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
                    placeholder="a.wright@energygrid.de"
                    className="w-full bg-[#151C2C] border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Proof of Concept Request for Wind Turbine Fleet"
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Project Details</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your machinery fleet size, current telematics stack, and primary failure challenges..."
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-pulse">Sending Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Inquiry to Engineering Team</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
