import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { ArrowLeft, Clock, Search, Filter, AlertTriangle, ShieldCheck, Database, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_LOGS = [
    { id: '1', user: 'James Kimani (Super Admin)', action: 'Modified System Settings', target: 'Global Term Dates', status: 'Success', time: '10:45 AM', type: 'system', icon: ShieldCheck, color: 'indigo' },
    { id: '2', user: 'Mary Njogu (Principal)', action: 'Approved Report Card Batch', target: 'Form 3 North', status: 'Success', time: '09:12 AM', type: 'academic', icon: FileText, color: 'sky' },
    { id: '3', user: 'Mercy Wamalwa (Bursar)', action: 'Deleted Payment Record', target: 'Transaction TXN-49281', status: 'Warning', time: 'Yesterday', type: 'finance', icon: AlertTriangle, color: 'amber' },
    { id: '4', user: 'System Auto-Job', action: 'Daily Backup Completed', target: 'Database Backup', status: 'Success', time: '02:00 AM', type: 'system', icon: Database, color: 'emerald' },
    { id: '5', user: 'David Omondi (Teacher)', action: 'Failed Login Attempt', target: 'Auth Portal', status: 'Danger', time: '2 days ago', type: 'security', icon: AlertTriangle, color: 'rose' },
];

export const AuditLogs = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
                    <div>
                        <Button variant="outline" className="mb-4 h-10 border-white/10 text-slate-300" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Digital Command
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
                            <Clock className="w-8 h-8 text-sky-400" /> Immutable Audit Ledger
                        </h1>
                        <p className="text-slate-400 font-medium mt-2">Chronological timeline of critical system modifications and events.</p>
                    </div>
                </header>

                <Card className="p-0 overflow-hidden border-t-0">
                    <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center bg-white/[0.02]">
                        <div className="relative w-full md:w-96">
                            <Input
                                placeholder="Search logs computationally..."
                                icon={<Search className="w-5 h-5" />}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-slate-900/50 border-white/5 h-12"
                            />
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <Button variant="outline" className="h-12 border-white/5"><Filter className="w-4 h-4 mr-2" /> Event Type</Button>
                            <Button variant="outline" className="h-12 border-white/5"><Clock className="w-4 h-4 mr-2" /> Date Range</Button>
                        </div>
                    </div>

                    <div className="p-6 md:p-10">
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[2.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-transparent">
                            {MOCK_LOGS.map((log, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.4 }}
                                    key={log.id}
                                    className="relative flex items-center justify-between md:justify-normal group cursor-pointer"
                                >
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-${log.color}-400 group-hover:bg-${log.color}-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--${log.color}-500),0.4)] shadow shrink-0 md:translate-x-6 transition-all duration-500 z-10`}>
                                        <log.icon className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 ml-auto flex flex-col md:flex-row md:items-center justify-between gap-4 group-hover:-translate-y-1">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <p className="font-bold text-white group-hover:text-sky-300 transition-colors drop-shadow-sm">{log.user}</p>
                                                <span className={`text-[8px] uppercase tracking-widest font-black px-2 py-0.5 rounded border border-${log.color}-500/20 text-${log.color}-400 bg-${log.color}-500/10`}>
                                                    {log.type}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-300">
                                                <span className="font-medium">{log.action}:</span> <span className="text-slate-400">"{log.target}"</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2 border-t border-white/5 md:border-t-0 pt-4 md:pt-0">
                                            <span className="text-xs font-bold text-slate-500">{log.time}</span>
                                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${log.status === 'Success' ? 'bg-emerald-500/10 text-emerald-400' :
                                                    log.status === 'Warning' ? 'bg-amber-500/10 text-amber-400' :
                                                        'bg-rose-500/10 text-rose-400'
                                                }`}>
                                                {log.status === 'Warning' ? 'Requires Audit' : log.status === 'Danger' ? 'Security Flag' : 'Action Permitted'}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

// SomoBloom V1.0
