import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Utensils,
    TrendingUp,
    ShieldCheck,
    AlertTriangle,
    Apple,
    Wallet,
    History
} from 'lucide-react';

export const CanteenPage = () => {
    const navigate = useNavigate();

    const transactions = [
        { id: 1, name: 'Kelvin Omari', item: 'School Lunch Combo', amount: 'KES 150', time: '12:45 PM', status: 'Success' },
        { id: 2, name: 'Sarah W.', item: 'Apple + Yogurt', amount: 'KES 80', time: '12:47 PM', status: 'Success' },
        { id: 3, name: 'Brian K.', item: 'Soda + Mandazi', amount: 'KES 60', time: '12:50 PM', status: 'Flagged', flag: 'Nutritional Warning' },
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Cashless Canteen</h1>
                        <p className="text-slate-400 font-bold mt-3 text-lg">Revenue Shield & Student Nutritional Intelligence.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="premium" size="lg" className="shadow-2xl shadow-amber-500/20">
                            <Wallet className="w-5 h-5 mr-1" /> Global Top-up
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Live Transactions */}
                    <Card className="lg:col-span-3 border-t-0 p-0 overflow-hidden" hover={false}>
                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <History className="w-6 h-6 text-indigo-400" /> Live Transactions
                            </h2>
                            <div className="px-5 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/10 text-[10px] font-black text-indigo-400 uppercase tracking-[0.1em]">
                                Speed: 4x Average (Tap-to-Eat)
                            </div>
                        </div>

                        <div className="p-8 space-y-4">
                            {transactions.map((tx, i) => (
                                <motion.div
                                    key={tx.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-6 flex-1 w-full md:w-auto">
                                        <div className={`p-4 bg-slate-800 rounded-2xl text-slate-400 transition-all duration-500 border border-white/5
                                            ${tx.flag ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 'group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20'}`}>
                                            <Utensils className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform">{tx.name}</p>
                                            <p className="text-sm font-bold text-slate-400 mt-1">{tx.item}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:justify-end gap-10 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                                        <div className="text-center md:text-right">
                                            <p className="text-xl font-black text-emerald-400">{tx.amount}</p>
                                            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">{tx.time}</p>
                                        </div>

                                        <div className="min-w-[160px] flex justify-end">
                                            {tx.flag ? (
                                                <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-xl border border-amber-500/20 group/tip relative cursor-help">
                                                    <AlertTriangle className="w-4 h-4 text-amber-500 animate-pulse" />
                                                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Nutritional Flag</span>
                                                    <div className="absolute bottom-full right-0 mb-3 w-64 p-4 bg-slate-800 text-xs text-slate-300 rounded-2xl border border-white/10 opacity-0 group-hover/tip:opacity-100 transition-all transform translate-y-2 group-hover/tip:translate-y-0 z-20 shadow-2xl pointer-events-none font-medium leading-relaxed">
                                                        AI detected a high glycemic load in this student's choice. Automatic nutritional report sent to guardian.
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/10">
                                                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Verified Tx</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    {/* Nutritional Insights */}
                    <div className="space-y-8">
                        <Card variant="premium" className="p-8 border-t-0 overflow-visible">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <Apple className="w-5 h-5 text-emerald-400" /> Health Profile
                            </h3>
                            <div className="flex items-center justify-center p-8 bg-white/[0.03] rounded-3xl border border-white/5 mb-8 relative group">
                                <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-center relative z-10">
                                    <Apple className="w-14 h-14 text-emerald-400 mx-auto mb-3" />
                                    <p className="text-4xl font-black text-white">82.4%</p>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-2">Balanced Index</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Protein Index</span>
                                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">+12%</span>
                                </div>
                                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sugar Load</span>
                                    <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">-4.5%</span>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-8 overflow-hidden relative">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full" />
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
                                Daily Revenue Shield
                                <TrendingUp className="w-5 h-5 text-emerald-400" />
                            </h3>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Volume</p>
                                <p className="text-4xl font-black text-white">KES 142k</p>
                            </div>
                            <p className="text-xs text-slate-400 mt-4 font-bold flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                98% via Tap-to-Eat RFID
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/5">
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '98%' }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
