import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    MapPin,
    AlertTriangle,
    Smartphone,
    Navigation,
    Shield,
    Fuel,
    Gauge,
    Zap,
    Radio
} from 'lucide-react';

export const SafetyPage = () => {
    const navigate = useNavigate();

    const buses = [
        { id: 'BUS-01', location: 'Gate A-South', status: 'En-route', speed: '42 km/h', fuel: '82%', driver: 'Peter M.', behavior: 'Safe' },
        { id: 'BUS-02', location: 'Utawala Route', status: 'Idle', speed: '0 km/h', fuel: '45%', driver: 'Simon K.', behavior: 'Idle' },
        { id: 'BUS-03', location: 'Airport Road', status: 'Warning', fuel: '12%', driver: 'Luka T.', behavior: 'Harsh Braking', flag: 'Fuel Siphoning Alert' },
    ];

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-10">
            <div className="max-w-7xl mx-auto space-y-12 animate-in">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/5">
                    <div>
                        <Button variant="ghost" className="mb-6 h-10 border border-white/10 text-slate-300 px-4" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Operations Hub
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Smart Bus Sentinel</h1>
                        <p className="text-slate-400 font-bold mt-3 text-lg">Fleet IoT & Driver AI for maximum safety and fuel protection.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="premium" size="lg" className="bg-rose-600 hover:bg-rose-500 shadow-rose-900/40">
                            <Radio className="w-5 h-5 mr-1 animate-pulse" /> Emergency Broadcast
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* IoT Fleet Status */}
                    <div className="space-y-8 lg:col-span-1">
                        <Card variant="premium" className="p-8 border-t-0">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <Shield className="w-5 h-5 text-indigo-400" /> Fleet Pulse
                            </h3>
                            <div className="space-y-8">
                                <div className="p-6 bg-slate-900/50 rounded-3xl border border-white/5 group hover:bg-white/[0.04] transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Total Fuel Burn</p>
                                    <p className="text-4xl font-black text-white tracking-tighter">42 <span className="text-lg text-slate-500">L/h</span></p>
                                    <div className="flex items-center gap-2 mt-4 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                        <Zap className="w-4 h-4 shadow-[0_0_10px_rgba(16,185,129,0.5)]" /> Optimized
                                    </div>
                                </div>
                                <div className="p-6 bg-slate-900/50 rounded-3xl border border-white/5 group hover:bg-white/[0.04] transition-all">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Safety Index</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-4xl font-black text-white">94.2</p>
                                        <span className="text-[10px] font-black text-emerald-400 uppercase">Excellent</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full mt-4 overflow-hidden p-0.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '94%' }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="p-8 rounded-[2rem] bg-indigo-500/10 border border-indigo-500/10">
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">AI Recommendation</p>
                            <p className="text-sm text-slate-300 font-bold leading-relaxed">
                                Redirect BUS-02 via Bypass to skip heavy congestion at Terminal A. Estimating 12 min saving.
                            </p>
                        </div>
                    </div>

                    {/* Live Tracking Map (Mock) */}
                    <Card variant="glass" className="lg:col-span-3 min-h-[500px] relative overflow-hidden bg-slate-950 p-0 border-white/5 shadow-2xl rounded-[3rem]">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5" />

                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="relative w-full h-full">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/[0.02] rounded-full" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/[0.03] rounded-full" />

                                <h3 className="text-white/20 font-black uppercase tracking-[1em] text-center mt-48 pointer-events-none text-xs">Dynamic Fleet Connectivity Mesh</h3>

                                {/* Mock Bus Markers */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute top-1/4 left-1/3 group cursor-pointer z-10"
                                >
                                    <div className="p-3 bg-emerald-500 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] border-2 border-white/20 relative">
                                        <Navigation className="w-5 h-5 text-white rotate-45" />
                                        <div className="absolute -inset-4 bg-emerald-500/20 rounded-full animate-ping" />
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-2xl text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-2xl">
                                        <p className="font-black text-white text-xs mb-1">BUS-01</p>
                                        <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest">
                                            <span className="text-emerald-400">42 km/h</span> | Safe Ops
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="absolute bottom-1/3 right-1/4 group cursor-pointer z-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="p-3 bg-rose-500 rounded-2xl shadow-[0_0_40px_rgba(244,63,94,0.6)] border-2 border-white/20"
                                    >
                                        <Fuel className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <Card variant="danger" className="absolute top-full right-0 mt-4 w-64 p-5 shadow-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 border-rose-500/50">
                                        <div className="flex items-center gap-3 mb-3">
                                            <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" />
                                            <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest leading-none">Critical: BUS-03</p>
                                        </div>
                                        <p className="text-sm font-black text-white mb-2 leading-tight">Siphoning Anomaly Detected</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter leading-relaxed">
                                            Fuel level dropped 8.2L in 120sec while vehicle at 0 km/h. Caretaker alert sent.
                                        </p>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Top Controls */}
                        <div className="absolute top-10 right-10">
                            <div className="flex items-center gap-4 px-6 py-3 bg-slate-900/80 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">GPS Core: Online</span>
                            </div>
                        </div>
                    </Card>

                    {/* Transit Details Grid */}
                    <Card variant="premium" className="lg:col-span-4 mt-12 p-10 border-t-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-separate border-spacing-y-4">
                                <thead>
                                    <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] px-6">
                                        <th className="pb-4 pl-8">Vehicle Terminal ID</th>
                                        <th className="pb-4">Active Sector</th>
                                        <th className="pb-4 text-center">Fuel Integrity</th>
                                        <th className="pb-4 text-center">Driver Profiling</th>
                                        <th className="pb-4 text-right pr-8">Parent Mesh Sync</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {buses.map((bus) => (
                                        <tr key={bus.id} className="group transition-all">
                                            <td className="py-6 pl-8 bg-slate-900/40 border-y border-l border-white/5 rounded-l-[2rem] group-hover:bg-white/[0.04] transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-3 h-3 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] ${bus.status === 'Warning' ? 'bg-rose-500 shadow-rose-500/40' : 'bg-emerald-500 shadow-emerald-500/40'}`} />
                                                    <span className="font-black text-white text-lg tracking-tight">{bus.id}</span>
                                                </div>
                                            </td>
                                            <td className="py-6 bg-slate-900/40 border-y border-white/5 group-hover:bg-white/[0.04] transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <MapPin className="w-4 h-4 text-slate-500" />
                                                    <span className="text-slate-300 font-bold">{bus.location}</span>
                                                </div>
                                            </td>
                                            <td className="py-6 bg-slate-900/40 border-y border-white/5 group-hover:bg-white/[0.04] transition-colors text-center">
                                                <div className="flex flex-col items-center gap-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <Gauge className={`w-4 h-4 ${bus.fuel === '12%' ? 'text-rose-500' : 'text-emerald-500'}`} />
                                                        <span className={`font-black text-lg ${bus.fuel === '12%' ? 'text-rose-500' : 'text-white'}`}>{bus.fuel}</span>
                                                    </div>
                                                    {bus.flag && <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2 py-0.5 rounded">Theft Risk</span>}
                                                </div>
                                            </td>
                                            <td className="py-6 bg-slate-900/40 border-y border-white/5 group-hover:bg-white/[0.04] transition-colors text-center">
                                                <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${bus.behavior === 'Safe' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-emerald-500/5' :
                                                        bus.behavior === 'Idle' ? 'bg-slate-800 text-slate-500 border border-white/5' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-rose-500/5'
                                                    }`}>
                                                    {bus.behavior}
                                                </span>
                                            </td>
                                            <td className="py-6 text-right pr-8 bg-slate-900/40 border-y border-r border-white/5 rounded-r-[2rem] group-hover:bg-white/[0.04] transition-colors">
                                                <div className="flex items-center justify-end gap-3 text-indigo-400 text-[10px] font-black tracking-widest uppercase">
                                                    <Smartphone className="w-4 h-4" /> Map Shared
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
