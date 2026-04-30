import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    UserCheck,
    Scan,
    Clock,
    Shield,
    Share2,
    CheckCircle2,
    Activity
} from 'lucide-react';

export const GatePage = () => {
    const navigate = useNavigate();

    const entryLogs = [
        { id: 1, name: 'Kelvin Omari', type: 'Student', grade: 'Form 3', time: '07:15 AM', status: 'In', notified: true },
        { id: 2, name: 'Mrs. Jane Doe', type: 'Staff', grade: 'Admin', time: '07:12 AM', status: 'In', notified: false },
        { id: 3, name: 'John Kimani', type: 'Student', grade: 'JSS Grade 8', time: '07:10 AM', status: 'In', notified: true },
        { id: 4, name: 'Visitor: Moses W.', type: 'Visitor', grade: 'ID: 29***34', time: '07:05 AM', status: 'Pending', notified: false },
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Smart Gate Hub</h1>
                        <p className="text-slate-400 font-bold mt-3 text-lg">Real-time Biometric Surveillance & Perimeter Control.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="premium" size="lg" className="shadow-2xl shadow-indigo-500/20">
                            <Shield className="w-5 h-5 mr-1" /> Perimeter Lockdown
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Real-time Entry Feed */}
                    <Card className="lg:col-span-3 border-t-0 p-0 overflow-hidden" hover={false}>
                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                            <h2 className="text-2xl font-bold text-white">Live Operations Feed</h2>
                            <div className="flex items-center gap-3 text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse outline outline-4 outline-indigo-500/20" />
                                Sensors Online
                            </div>
                        </div>

                        <div className="p-8 space-y-4">
                            {entryLogs.map((log, i) => (
                                <motion.div
                                    key={log.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-6 flex-1 w-full md:w-auto">
                                        <div className={`p-4 bg-slate-800 rounded-2xl text-slate-400 group-hover:scale-110 transition-transform duration-500 border border-white/5
                                            ${log.type === 'Student' ? 'group-hover:text-sky-400' : 'group-hover:text-indigo-400'}`}>
                                            {log.type === 'Student' ? <Scan className="w-6 h-6" /> : <UserCheck className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform">{log.name}</p>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{log.type}</span>
                                                <span className="h-1 w-1 rounded-full bg-slate-700" />
                                                <span className="text-xs font-bold text-slate-400">{log.grade}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:justify-end gap-10 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                                        <div className="text-center md:text-right">
                                            <p className="text-sm font-bold text-white mb-1.5">{log.time}</p>
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
                                                <Clock className="w-3.5 h-3.5 text-slate-600" /> Sector A-West
                                            </div>
                                        </div>

                                        <div className="min-w-[140px] flex justify-end">
                                            {log.notified ? (
                                                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-xl border border-indigo-500/10">
                                                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Parent Link OK</span>
                                                </div>
                                            ) : (
                                                <Button variant="ghost" className="h-9 px-4 text-[10px] border border-white/5 hover:bg-white/5">
                                                    Manual Notification
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    {/* Stats & Controls */}
                    <div className="space-y-8">
                        <Card variant="premium" className="p-8 border-t-0">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <Activity className="w-5 h-5 text-indigo-400" /> Presence Pulse
                            </h3>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                                        <span>Student Payload</span>
                                        <span className="text-white">842 / 900</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '93%' }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-indigo-600 to-sky-500 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                                        <span>Staff Roster</span>
                                        <span className="text-white">45 / 48</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '94%' }}
                                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card variant="glass" className="p-8">
                            <h3 className="text-lg font-bold text-white mb-6">Security Mesh</h3>
                            <div className="space-y-4">
                                <Button variant="outline" className="w-full justify-between text-[10px] h-11 border-white/5 hover:bg-rose-500/10 hover:border-rose-500/30 group">
                                    <span className="text-slate-400 group-hover:text-rose-400 transition-colors font-bold uppercase tracking-widest">Panic Protocol</span>
                                    <Shield className="w-4 h-4 text-rose-500 group-hover:scale-110" />
                                </Button>
                                <Button variant="outline" className="w-full justify-between text-[10px] h-11 border-white/5 hover:bg-sky-500/10 hover:border-sky-500/30 group">
                                    <span className="text-slate-400 group-hover:text-sky-400 transition-colors font-bold uppercase tracking-widest">Share Manifest</span>
                                    <Share2 className="w-4 h-4 text-sky-400 group-hover:scale-110" />
                                </Button>
                            </div>
                        </Card>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-[2rem] bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Scan className="w-16 h-16 text-amber-500 rotate-12" />
                            </div>
                            <p className="text-[10px] font-black text-amber-500 uppercase mb-3 tracking-[0.2em]">Operational Insight</p>
                            <p className="text-sm text-slate-300 leading-relaxed font-bold">
                                Hardware sync occurs every 500ms. Triple-fail Biometrics triggers silent Haptic alerts for floor security.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
