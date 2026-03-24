import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ShieldAlert,
    Zap,
    ShoppingCart,
    RefreshCw,
    Timer,
    Activity,
    Droplets,
    AlertTriangle
} from 'lucide-react';

export const OperationsPage = () => {
    const navigate = useNavigate();

    const leakageData = [
        { id: 1, type: 'M-Pesa', amount: 'KES 4,500', reason: 'Unallocated - No Student ID', status: 'Flagged', time: '10 mins ago' },
        { id: 2, type: 'Bank Transfer', amount: 'KES 15,000', reason: 'Amount Mismatch (Reference: #994)', status: 'Pending', time: '1 hour ago' },
    ];

    const procurementData = [
        { item: 'Rice (Grade A)', currentStock: '45kg', forecast: 'Run-out in 4 days', action: 'Order 200kg', status: 'Urgent' },
        { item: 'Diesel Generator', currentStock: '120L', forecast: 'Run-out in 12 days', action: 'Order 500L', status: 'Scheduled' },
        { item: 'A4 Printing Paper', currentStock: '12 Reams', forecast: 'Term usage spike expected', action: 'Order 50 Bundles', status: 'Optimal' },
    ];

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-10">
            <div className="max-w-7xl mx-auto space-y-12 animate-in">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/5">
                    <div>
                        <Button variant="ghost" className="mb-6 h-10 border border-white/10 text-slate-300 px-4" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Global Hub
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Institutional Ecosystem</h1>
                        <p className="text-slate-400 font-bold mt-3 text-lg">Hardware auditing, predictive procurement and IoT energy surveillance.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="glass" className="h-12 border-white/10 text-sky-400 hover:text-white group">
                            <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" /> Rescan Infrastructure
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* AI Energy Guardian */}
                    <Card variant="premium" className="lg:col-span-1 p-0 overflow-hidden border-t-0">
                        <div className="p-8 border-b border-white/5 bg-sky-500/5">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-sky-400" /> Energy Guardian
                                </h2>
                                <span className="flex items-center gap-2 text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/10">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" /> Live
                                </span>
                            </div>
                        </div>

                        <div className="p-8 space-y-8">
                            <div className="p-6 bg-slate-900/50 rounded-3xl border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Activity className="w-16 h-16 text-sky-400" />
                                </div>
                                <div className="flex justify-between items-baseline mb-6">
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Active Power Load</p>
                                    <p className="text-4xl font-black text-white tracking-tighter">2.4 <span className="text-lg text-slate-500">kW/h</span></p>
                                </div>
                                <div className="h-28 flex items-end gap-1.5 px-1 relative">
                                    {[20, 35, 45, 30, 60, 40, 35, 50, 40, 55, 30, 45].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05, duration: 1, ease: "easeOut" }}
                                            className="flex-1 bg-gradient-to-t from-sky-600/10 to-sky-500/40 rounded-t-lg group-hover:to-sky-400 transition-all cursor-crosshair relative"
                                        >
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <Card variant="danger" className="border-t-0 p-6" hover={false}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-rose-500/20 rounded-2xl text-rose-500 border border-rose-500/20">
                                        <Droplets className="w-6 h-6 animate-bounce" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-rose-400 uppercase tracking-widest leading-none">2:14 AM: Burst Alert</h4>
                                        <p className="text-[10px] text-rose-500/70 font-bold mt-1 uppercase tracking-tighter">Sector C Main Feed</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed font-bold">
                                    Sudden flow spike (14.2 L/min) detected. SomoBloom AI engaged emergency shutoff and alerted Caretaker.
                                </p>
                                <Button variant="premium" className="w-full mt-6 bg-gradient-to-r from-rose-600 to-rose-700 shadow-rose-900/50 h-10 text-[10px] font-black tracking-widest uppercase">
                                    <ShieldAlert className="w-4 h-4 mb-0.5" /> Manual Valve Override
                                </Button>
                            </Card>
                        </div>
                    </Card>

                    {/* AI Leakage Detection */}
                    <Card variant="glass" className="lg:col-span-2 border-l-4 border-l-rose-500 p-8 h-full">
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-rose-500/10 rounded-2xl text-rose-400 border border-rose-500/10">
                                    <ShieldAlert className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white tracking-tight">AI Financial Integrity</h2>
                                    <p className="text-sm text-slate-500 font-bold mt-1">Real-time deep audit of institutional ledger vs statements.</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-black px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 uppercase tracking-[0.2em] border border-rose-500/20">
                                2 Discrepancies
                            </span>
                        </div>

                        <div className="space-y-4">
                            {leakageData.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-6 bg-slate-900/40 rounded-3xl border border-white/5 group hover:border-rose-500/30 hover:bg-white/[0.02] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center font-black text-slate-600 text-lg border border-white/5 group-hover:bg-slate-700 transition-colors">
                                            {item.type[0]}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 text-xl font-black text-white group-hover:translate-x-1 transition-transform">
                                                {item.amount} <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">via {item.type}</span>
                                            </div>
                                            <p className="text-sm text-rose-400 font-black mt-1 flex items-center gap-2">
                                                <AlertTriangle className="w-3.5 h-3.5" /> {item.reason}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{item.time}</p>
                                        <Button variant="ghost" className="h-10 text-[10px] font-black tracking-widest uppercase text-sky-400 hover:bg-sky-400/10 hover:text-sky-300 px-4 mt-2 bg-white/5 border border-white/5">
                                            Re-Allocate
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    {/* Predictive Procurement */}
                    <Card variant="premium" className="lg:col-span-3 p-10 mt-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/10">
                                    <ShoppingCart className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Predictive Resource Planning</h2>
                                    <p className="text-sm text-slate-500 font-bold mt-1">AI analyzing consumption velocity to preempt institutional stock-outs.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <div className="flex-1 flex items-center gap-4 px-6 py-3 bg-slate-800/50 rounded-2xl border border-white/5">
                                    <Timer className="w-5 h-5 text-amber-500" />
                                    <span className="text-xs font-black text-white uppercase tracking-widest">Next Run: in 48h</span>
                                </div>
                                <Button variant="premium" size="lg" className="bg-amber-600 hover:bg-amber-500 shadow-amber-900/40">Bulk Process Purchases</Button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-separate border-spacing-y-4">
                                <thead>
                                    <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                        <th className="pb-4 pl-6">Institutional Asset</th>
                                        <th className="pb-4">Real-time Inventory</th>
                                        <th className="pb-4">AI Critical Velocity</th>
                                        <th className="pb-4">Automated Protocol</th>
                                        <th className="pb-4 text-right pr-6">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {procurementData.map((item, i) => (
                                        <tr key={i} className="group cursor-default">
                                            <td className="py-6 pl-8 bg-slate-900/40 border-y border-l border-white/5 rounded-l-3xl group-hover:bg-white/[0.04] transition-colors font-bold text-white text-lg">{item.item}</td>
                                            <td className="py-6 bg-slate-900/40 border-y border-white/5 group-hover:bg-white/[0.04] transition-colors text-slate-400 font-black tracking-widest">{item.currentStock}</td>
                                            <td className="py-6 bg-slate-900/40 border-y border-white/5 group-hover:bg-white/[0.04] transition-colors">
                                                <span className={`text-xs font-black uppercase tracking-widest ${item.status === 'Urgent' ? 'text-rose-400' : 'text-slate-500'}`}>
                                                    {item.forecast}
                                                </span>
                                            </td>
                                            <td className="py-6 bg-slate-900/40 border-y border-white/5 group-hover:bg-white/[0.04] transition-colors">
                                                <span className="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-xl border border-indigo-500/10 uppercase tracking-[0.1em]">
                                                    {item.action}
                                                </span>
                                            </td>
                                            <td className="py-6 text-right pr-8 bg-slate-900/40 border-y border-r border-white/5 rounded-r-3xl group-hover:bg-white/[0.04] transition-colors">
                                                <span className={`inline-block px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg ${item.status === 'Urgent' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/20 shadow-rose-900/20' :
                                                        item.status === 'Scheduled' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/20 shadow-sky-900/20' : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 shadow-indigo-900/20'
                                                    }`}>
                                                    {item.status}
                                                </span>
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
