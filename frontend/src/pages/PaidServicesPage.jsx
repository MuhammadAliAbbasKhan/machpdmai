import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Zap, ShieldCheck, Cpu, Server, Package, Send, Lock, AlertCircle } from 'lucide-react';

export default function PaidServicesPage() {
  const { subscription, user, openCheckout } = useAuth();
  const { addToast } = useToast();

  const [hardwareForm, setHardwareForm] = useState({
    gatewayType: 'DIN-Rail Edge Gateway v4',
    quantity: '2',
    deliveryAddress: ''
  });

  const [twinForm, setTwinForm] = useState({
    machineName: '',
    manufacturer: '',
    specSheetUrl: ''
  });

  const handleHardwareSubmit = (e) => {
    e.preventDefault();
    addToast(`Edge Gateway Dispatch Order submitted! Dispatch reference #HW-${Date.now().toString().slice(-6)}`, 'success');
    setHardwareForm({ ...hardwareForm, deliveryAddress: '' });
  };

  const handleTwinSubmit = (e) => {
    e.preventDefault();
    addToast('Custom Physics Digital Twin modeling ticket created. Engineer assigned!', 'success');
    setTwinForm({ machineName: '', manufacturer: '', specSheetUrl: '' });
  };

  if (!subscription.is_active) {
    return (
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center flex flex-col items-center gap-6">
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
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 flex flex-col gap-12">
      
      {/* Active Subscription Banner */}
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
              <span className="text-xs text-slate-400 font-mono">ID: SUB-{Date.now().toString().slice(-8)}</span>
            </div>
            <h2 className="text-xl font-bold font-heading text-white mt-1">{subscription.plan} Tier</h2>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs text-slate-400 block font-mono">Priority Lab Access & Hardware Gateway Dispatch</span>
          <span className="text-xs text-cyan-400 font-semibold">Account: {user?.email || 'Active User'}</span>
        </div>
      </div>

      {/* Grid: 2 Service Portals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Portal 1: Hardware Gateway Dispatch */}
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">Edge Gateway Hardware Dispatch</h3>
              <p className="text-xs text-slate-400">Order rugged DIN-rail IoT vibration & CAN-bus edge hardware</p>
            </div>
          </div>

          <form onSubmit={handleHardwareSubmit} className="flex flex-col gap-4 mt-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Select Edge Hardware Unit</label>
              <select
                value={hardwareForm.gatewayType}
                onChange={(e) => setHardwareForm({ ...hardwareForm, gatewayType: e.target.value })}
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white"
              >
                <option value="DIN-Rail Edge Gateway v4">MachPdM DIN-Rail Edge Gateway v4 (4x Piezo Input)</option>
                <option value="Heavy Fleet CAN-bus Dongle">Heavy Fleet CAN-bus J1939 Edge Dongle</option>
                <option value="Explosion-Proof Mining Sensor Pack">Explosion-Proof Mining Sensor Pack (Class I Div 1)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                max="20"
                value={hardwareForm.quantity}
                onChange={(e) => setHardwareForm({ ...hardwareForm, quantity: e.target.value })}
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Delivery Destination Address</label>
              <textarea
                required
                rows="3"
                value={hardwareForm.deliveryAddress}
                onChange={(e) => setHardwareForm({ ...hardwareForm, deliveryAddress: e.target.value })}
                placeholder="Plant Maintenance Warehouse, Bay 4, 1200 Industrial Pkwy..."
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Dispatch Priority Hardware Order</span>
            </button>
          </form>
        </div>

        {/* Portal 2: Custom Digital Twin Foundry */}
        <div className="bg-[#0F1420] border border-slate-800 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">Custom Physics Digital Twin Request</h3>
              <p className="text-xs text-slate-400">Request custom CAD/physics modeling for complex machinery</p>
            </div>
          </div>

          <form onSubmit={handleTwinSubmit} className="flex flex-col gap-4 mt-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Machinery / Asset Model Name</label>
              <input
                type="text"
                required
                value={twinForm.machineName}
                onChange={(e) => setTwinForm({ ...twinForm, machineName: e.target.value })}
                placeholder="e.g. Siemens SGT-800 Gas Turbine Gearbox"
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Manufacturer & Year</label>
              <input
                type="text"
                required
                value={twinForm.manufacturer}
                onChange={(e) => setTwinForm({ ...twinForm, manufacturer: e.target.value })}
                placeholder="e.g. Siemens Energy (2023)"
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Technical Manual / Spec Sheet URL</label>
              <input
                type="url"
                value={twinForm.specSheetUrl}
                onChange={(e) => setTwinForm({ ...twinForm, specSheetUrl: e.target.value })}
                placeholder="https://..."
                className="w-full bg-[#151C2C] border border-slate-700 rounded-xl p-3 text-xs text-white"
              />
            </div>

            <button
              type="submit"
              className="py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              <span>Submit Digital Twin CAD Ticket</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
