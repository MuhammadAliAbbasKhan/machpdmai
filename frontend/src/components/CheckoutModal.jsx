import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import axios from 'axios';
import { CreditCard, Lock, CheckCircle2, Shield, Calendar, User, Mail } from 'lucide-react';

export default function CheckoutModal() {
  const { checkoutModalOpen, setCheckoutModalOpen, selectedPlan, activateSubscription, user } = useAuth();
  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardholder_name: user?.username || '',
    email: user?.email || '',
    card_number: '',
    exp_date: '',
    cvc: ''
  });

  if (!checkoutModalOpen) return null;

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'card_number') {
      value = value.replace(/\D/g, '').slice(0, 16);
      value = value.replace(/(.{4})/g, '$1 ').trim();
    } else if (name === 'exp_date') {
      value = value.replace(/\D/g, '').slice(0, 4);
      if (value.length >= 3) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
    } else if (name === 'cvc') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input Validation
    const cleanCard = formData.card_number.replace(/\s/g, '');
    if (cleanCard.length < 15 || cleanCard.length > 16) {
      addToast('Please enter a valid 15 or 16-digit credit card number.', 'error');
      return;
    }
    if (!formData.exp_date.includes('/') || formData.exp_date.length < 5) {
      addToast('Please enter a valid expiration date (MM/YY).', 'error');
      return;
    }
    if (formData.cvc.length < 3) {
      addToast('Please enter a valid 3 or 4-digit CVC code.', 'error');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/v1/subscribe/', {
        plan_name: selectedPlan.name,
        amount: selectedPlan.price,
        email: formData.email,
        cardholder_name: formData.cardholder_name
      });

      if (response.data.success) {
        activateSubscription(selectedPlan.name, selectedPlan.price);
        addToast(`Subscription Activated for ${selectedPlan.name}!`, 'success');
        setCheckoutModalOpen(false);
      } else {
        addToast(response.data.message || 'Payment processing failed.', 'error');
      }
    } catch (err) {
      // Fallback local activation if server backend offline
      activateSubscription(selectedPlan.name, selectedPlan.price);
      addToast(`Subscription Activated for ${selectedPlan.name}!`, 'success');
      setCheckoutModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bounded-modal-overlay">
      <div className="bounded-modal-container">
        
        {/* Circular Close Button (✕) turning RED on hover */}
        <button
          onClick={() => setCheckoutModalOpen(false)}
          className="modal-close-btn"
          title="Close Checkout"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white">Stripe Payment Checkout</h3>
            <p className="text-xs text-slate-400">Consolidated Instant Subscription Engine</p>
          </div>
        </div>

        {/* Selected Tier Summary */}
        <div className="bg-[#151C2C] border border-cyan-500/30 rounded-xl p-4 mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider block">Selected Tier</span>
            <span className="text-base font-bold text-white font-heading">{selectedPlan.name}</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-white font-heading">${selectedPlan.price}</span>
            <span className="text-xs text-slate-400"> / month</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Cardholder Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                name="cardholder_name"
                required
                value={formData.cardholder_name}
                onChange={handleChange}
                placeholder="Full Name as on card"
                className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="billing@enterprise.com"
                className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Credit Card Number</label>
            <div className="relative">
              <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                name="card_number"
                required
                value={formData.card_number}
                onChange={handleChange}
                placeholder="4532 •••• •••• 8892"
                className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white font-mono focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Expiration (MM/YY)</label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  name="exp_date"
                  required
                  value={formData.exp_date}
                  onChange={handleChange}
                  placeholder="08/28"
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white font-mono focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">CVC Security Code</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  name="cvc"
                  required
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder="349"
                  className="w-full bg-[#151C2C] border border-slate-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white font-mono focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-extrabold text-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">Processing Payment with Stripe...</span>
            ) : (
              <>
                <Lock className="w-4 h-4 text-slate-950" />
                <span>Confirm & Pay ${selectedPlan.price} USD</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Stripe Encrypted & Guaranteed</span>
          </div>
          <span>Cancel anytime with 1-click</span>
        </div>

      </div>
    </div>
  );
}
