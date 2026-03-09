import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    MessageSquare,
    Search,
    Filter,
    CheckCircle2,
    TrendingUp,
    AlertCircle,
    Heart,
    Zap,
    Send,
    Plus
} from 'lucide-react';

export const MessagesPage = () => {
    const navigate = useNavigate();

    const messages = [
        { id: 1, sender: 'Mary Omari', role: 'Guardian', subject: 'Bus Delay - Route 04', preview: 'Is the bus delayed? It usually arrives at 7:10...', time: '10:15 AM', sentiment: 'Concerned', color: 'amber', avatar: '👩' },
        { id: 2, sender: 'Principal James', role: 'Admin', subject: 'Term 1 Strategy', preview: 'Regarding the new IoT rollout, we need to...', time: '09:45 AM', sentiment: 'Positive', color: 'emerald', avatar: '👨' },
        { id: 3, sender: 'John K.', role: 'Guardian', subject: 'Fees Query', preview: 'I paid via M-Pesa but the balance hasn\'t updated...', time: 'Yesterday', sentiment: 'Negative', color: 'rose', avatar: '🧔' },
    ];

    const sentimentHotZones = [
        { zone: 'Grade 5 Blue', status: 'Rising Negative', reason: 'Recent Math Assessment', trend: 'down' },
        { zone: 'Bus Route 04', status: 'High Concern', reason: 'Fuel Sensor Anomalies', trend: 'down' },
        { zone: 'Sports Club', status: 'Optimistic', reason: 'Upcoming Tournament', trend: 'up' },
    ];

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-10">
            <div className="max-w-7xl mx-auto space-y-12 animate-in">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/5">
                    <div>
                        <Button variant="ghost" className="mb-6 h-10 border border-white/10 text-slate-300 px-4" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Digital Command
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Communication Hub</h1>
                        <p className="text-slate-400 font-bold mt-3 text-lg">AI-driven sentiment analytics & community "Pulse" monitoring.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="premium" size="lg" className="shadow-2xl shadow-blue-500/20">
                            <Send className="w-5 h-5 mr-1" /> Broadcast Announcement
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Sentiment Pulse Dashboard */}
                    <div className="space-y-8 lg:col-span-1">
                        <Card variant="premium" className="p-8 border-t-0 border-l-4 border-l-purple-500">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <Zap className="w-5 h-5 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" /> AI Sentiment Pulse
                            </h3>
                            <div className="space-y-8">
                                <div className="p-6 bg-white/[0.03] rounded-[2rem] border border-white/5 text-center relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 relative z-10">Institutional Mood</p>
                                    <div className="flex items-center justify-center gap-3 relative z-10">
                                        <Heart className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                                        <p className="text-4xl font-black text-emerald-400">Optimistic</p>
                                    </div>
                                    <p className="text-xs text-slate-500 font-bold mt-3 relative z-10">84% Engagement Affinity</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 p-5 bg-slate-900/50 rounded-2xl border border-white/5 text-center">
                                        <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                                        <p className="text-2xl font-black text-white">+12%</p>
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">Growth</p>
                                    </div>
                                    <div className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 text-center">
                                        <Heart className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                                        <p className="text-2xl font-black text-white">4.8/5</p>
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">Loyalty</p>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-8 border-t border-white/5">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Hot Zone Detection</p>
                                    {sentimentHotZones.map((zone, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 4 }}
                                            className="p-5 bg-slate-900/40 rounded-2xl border border-white/5 group hover:border-white/20 transition-all cursor-default"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <p className="text-sm font-black text-white">{zone.zone}</p>
                                                <span className={`text-[10px] font-black uppercase tracking-tighter ${zone.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                    {zone.status}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium">{zone.reason}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap className="w-16 h-16 text-indigo-500 animate-pulse" />
                            </div>
                            <p className="text-[10px] font-black text-indigo-400 uppercase mb-3 tracking-[0.2em]">Crisis Shield</p>
                            <p className="text-sm text-slate-300 leading-relaxed font-bold">
                                Solian AI is actively scanning feedback for "At-Risk" keywords to preempt bulk student transfers.
                            </p>
                            <Button variant="ghost" className="mt-6 w-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/10 h-10 text-[10px] font-black uppercase tracking-widest">
                                Manage Alerts
                            </Button>
                        </motion.div>

                        {/* NEW: Zeraki Inspired Bulk Communication Portal */}
                        <Card className="p-8 border-t-0 bg-indigo-950/20 border-indigo-500/20">
                            <h3 className="text-lg font-black text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                                <Send className="w-5 h-5 text-indigo-400" /> Broadcast Templates
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { title: 'Fee Balance Reminder', icon: '💰' },
                                    { title: 'Exam Results Portal Pin', icon: '📝' },
                                    { title: 'School Trip Logistics', icon: '🚌' },
                                ].map((temp, i) => (
                                    <div key={i} className="p-4 bg-slate-900/40 hover:bg-slate-800 rounded-[1.5rem] border border-white/5 transition-all cursor-pointer flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-lg">{temp.icon}</div>
                                        <div className="flex-1">
                                            <p className="text-xs font-black text-white group-hover:text-indigo-400 transition-colors">{temp.title}</p>
                                            <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Tap to broadcast to groups</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 h-12 text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/20">
                                Launch SMS Portal
                            </Button>
                        </Card>
                    </div>

                    {/* Message Center */}
                    <div className="lg:col-span-3 space-y-10">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="relative flex-1">
                                <Input
                                    placeholder="Search parents, staff or subjects..."
                                    icon={<Search className="w-5 h-5" />}
                                    className="bg-slate-900/50 border-white/5 h-14 rounded-2xl text-lg pl-14"
                                />
                            </div>
                            <div className="flex gap-4">
                                <Button variant="glass" className="h-14 w-14 rounded-2xl"><Filter className="w-5 h-5" /></Button>
                                <Button variant="premium" className="h-14 px-8 rounded-2xl shadow-xl">
                                    <Plus className="w-5 h-5 mr-2" /> New Message
                                </Button>
                            </div>
                        </div>

                        <Card variant="glass" className="p-0 overflow-hidden border-t-0">
                            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-indigo-400" /> Inbox Manifest
                                </h2>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Unread: 04</span>
                            </div>
                            <div className="divide-y divide-white/5">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-8 hover:bg-white/[0.03] transition-all cursor-pointer flex flex-col md:flex-row gap-8 group relative overflow-hidden"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-blue-500 transition-colors" />

                                        <div className="flex items-center gap-6 flex-1">
                                            <div className="relative">
                                                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-800 flex items-center justify-center text-3xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                                                    {msg.avatar}
                                                </div>
                                                <div className={`absolute -bottom-1 -right-1 p-1.5 rounded-full ${msg.color === 'emerald' ? 'bg-emerald-500' : msg.color === 'amber' ? 'bg-amber-500' : 'bg-rose-500'} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                    <h4 className="font-black text-white text-lg group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{msg.sender}</h4>
                                                    <span className="text-[10px] font-black text-slate-500 px-3 py-1 bg-slate-800 rounded-full border border-white/5 uppercase tracking-widest">{msg.role}</span>
                                                    <span className="text-[10px] font-black text-slate-600 ml-auto uppercase tracking-widest">{msg.time}</span>
                                                </div>
                                                <p className="font-bold text-slate-200 text-base mb-2 group-hover:translate-x-1 transition-transform">{msg.subject}</p>
                                                <p className="text-sm text-slate-400 font-medium line-clamp-1 leading-relaxed">{msg.preview}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 border-white/5 pt-6 md:pt-0">
                                            <div className={`px-4 py-2 rounded-2xl bg-${msg.color}-500/10 border border-${msg.color}-500/20 text-${msg.color}-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-3 shadow-xl`}>
                                                {msg.sentiment === 'Positive' ? <Heart className="w-3 h-3 fill-current" /> : <AlertCircle className="w-3 h-3" />}
                                                AI: {msg.sentiment}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="w-6 h-6 text-slate-700 group-hover:text-blue-500 transition-all duration-500 group-hover:scale-110" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
};
