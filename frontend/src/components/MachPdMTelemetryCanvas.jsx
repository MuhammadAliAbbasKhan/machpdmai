import React, { useRef, useEffect, useState } from 'react';
import { Activity, AlertTriangle, ShieldCheck, Cpu, RefreshCw, Zap, Sliders } from 'lucide-react';

export default function MachPdMTelemetryCanvas() {
  const canvasRef = useRef(null);
  const [selectedAsset, setSelectedAsset] = useState('CAT-C15-884');
  const [anomalyMode, setAnomalyMode] = useState(false);
  const [machineStatus, setMachineStatus] = useState({
    rul: 88,
    temp: 74,
    vibrationG: 0.24,
    pressurePsi: 2150,
    statusText: 'Optimal Health'
  });

  const assets = [
    { id: 'CAT-C15-884', name: 'CAT C15 Heavy Fleet Diesel Engine', type: 'Trucking Fleet' },
    { id: 'SIEMENS-WIND-34', name: 'Siemens 3.4MW Wind Turbine Gearbox', type: 'Renewable Grid' },
    { id: 'MINING-CAT-6060', name: 'Cat 6060 Mining Shovel Hydraulics', type: 'Heavy Mining' },
    { id: 'CNC-SPINDLE-X10', name: '5-Axis High-Speed Milling CNC Spindle', type: 'Manufacturing' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let tick = 0;

    const render = () => {
      tick += 1;
      const width = canvas.width;
      const height = canvas.height;

      // Clear background
      ctx.fillStyle = '#090D16';
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Vibration Waveform (Sine + Noise FFT simulation)
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = anomalyMode ? '#EF4444' : '#00F2FE';

      const amplitude = anomalyMode ? 45 : 18;
      const noiseLevel = anomalyMode ? 25 : 5;
      const centerY = height / 2;

      for (let x = 0; x < width; x += 3) {
        const noise = (Math.random() - 0.5) * noiseLevel;
        const freq1 = Math.sin((x + tick * 4) * 0.02) * amplitude;
        const freq2 = Math.cos((x - tick * 2) * 0.05) * (amplitude * 0.5);
        const anomalyHarmonic = anomalyMode ? Math.sin((x + tick * 8) * 0.1) * 30 : 0;
        
        const y = centerY + freq1 + freq2 + anomalyHarmonic + noise;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Glow effect under line
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const gradient = ctx.createLinearGradient(0, centerY - 50, 0, height);
      if (anomalyMode) {
        gradient.addColorStop(0, 'rgba(239, 68, 68, 0.25)');
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0.0)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 242, 254, 0.25)');
        gradient.addColorStop(1, 'rgba(0, 242, 254, 0.0)');
      }
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw FFT Frequency Peaks
      const barWidth = 12;
      const numBars = 16;
      const startX = width - (numBars * (barWidth + 6)) - 20;

      for (let i = 0; i < numBars; i++) {
        let barHeight = Math.sin(tick * 0.05 + i) * 20 + 35;
        if (anomalyMode && (i === 4 || i === 11)) {
          barHeight += Math.random() * 40 + 30; // Anomaly resonance frequency peak
        }

        const barX = startX + i * (barWidth + 6);
        const barY = height - 25 - barHeight;

        ctx.fillStyle = (anomalyMode && (i === 4 || i === 11)) ? '#EF4444' : '#10B981';
        ctx.fillRect(barX, barY, barWidth, barHeight);
      }

      // Draw FFT Text Overlay
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '10px monospace';
      ctx.fillText('FFT SPECTRUM (0 - 10 kHz)', startX, height - 10);
      ctx.fillText('TIME DOMAIN VIBRATION ACCELERATION (G)', 20, 25);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [anomalyMode, selectedAsset]);

  // Update metrics based on anomaly mode
  useEffect(() => {
    if (anomalyMode) {
      setMachineStatus({
        rul: 34,
        temp: 118,
        vibrationG: 1.85,
        pressurePsi: 2840,
        statusText: 'BEARING ANOMALY DETECTED'
      });
    } else {
      setMachineStatus({
        rul: 92,
        temp: 72,
        vibrationG: 0.22,
        pressurePsi: 2150,
        statusText: 'Optimal Health'
      });
    }
  }, [anomalyMode, selectedAsset]);

  return (
    <div className="bg-[#0D111A] border border-cyan-500/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
      {/* Header controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <h3 className="text-lg font-bold font-heading text-white">Live Physics Telemetry Canvas</h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              100 Hz Ingestion
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Real-time vibration spectral FFT and thermal degradation sensor stream</p>
        </div>

        {/* Asset Selector */}
        <div className="flex items-center gap-3">
          <select
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
            className="bg-[#151C2C] border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-400 font-semibold"
          >
            {assets.map((ast) => (
              <option key={ast.id} value={ast.id}>
                {ast.id} - {ast.name}
              </option>
            ))}
          </select>

          {/* Anomaly Simulation Toggle */}
          <button
            onClick={() => setAnomalyMode(!anomalyMode)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              anomalyMode
                ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <AlertTriangle className={`w-4 h-4 ${anomalyMode ? 'text-white' : 'text-amber-400'}`} />
            <span>{anomalyMode ? 'Anomaly Mode: ACTIVE' : 'Simulate Fault'}</span>
          </button>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
        <canvas
          ref={canvasRef}
          width={800}
          height={280}
          className="w-full h-[280px] block"
        />

        {/* Live Overlay Status Tag */}
        <div className="absolute top-4 right-4 bg-[#090D16]/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${anomalyMode ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`} />
          <span className={`text-xs font-mono font-bold ${anomalyMode ? 'text-rose-400' : 'text-emerald-400'}`}>
            {machineStatus.statusText}
          </span>
        </div>
      </div>

      {/* Metric Counters Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        
        {/* Metric 1: RUL */}
        <div className="bg-[#151C2C] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-mono uppercase">Remaining Useful Life (RUL)</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className={`text-3xl font-black font-heading ${anomalyMode ? 'text-rose-400' : 'text-cyan-400'}`}>
              {machineStatus.rul}%
            </span>
            <span className="text-xs text-slate-400 font-mono">~{Math.round(machineStatus.rul * 4.2)} hrs</span>
          </div>
        </div>

        {/* Metric 2: Bearing Temperature */}
        <div className="bg-[#151C2C] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-mono uppercase">Bearing Temp (°C)</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className={`text-3xl font-black font-heading ${anomalyMode ? 'text-rose-400' : 'text-emerald-400'}`}>
              {machineStatus.temp}°C
            </span>
            <span className="text-xs text-slate-400 font-mono">{anomalyMode ? '+46° High' : 'Nominal'}</span>
          </div>
        </div>

        {/* Metric 3: Vibration Acceleration */}
        <div className="bg-[#151C2C] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-mono uppercase">Vibration Peak (G)</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className={`text-3xl font-black font-heading ${anomalyMode ? 'text-amber-400' : 'text-teal-300'}`}>
              {machineStatus.vibrationG} G
            </span>
            <span className="text-xs text-slate-400 font-mono">ISO 10816</span>
          </div>
        </div>

        {/* Metric 4: Hydraulic Pressure */}
        <div className="bg-[#151C2C] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between">
          <span className="text-xs text-slate-400 font-mono uppercase">Fluid Pressure (PSI)</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-black font-heading text-slate-100">
              {machineStatus.pressurePsi}
            </span>
            <span className="text-xs text-slate-400 font-mono">CAN-bus</span>
          </div>
        </div>

      </div>
    </div>
  );
}
