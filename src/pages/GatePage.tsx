import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    Smartphone,
    UserCheck,
    Scan,
    Clock,
    Shield,
    Share2
} from 'lucide-react';

export const GatePage = () => {
    const navigate = useNavigate();

    const entryLogs = [
        { id: 1, name: 'Kelvin Omari', type: 'Student', grade: 'Grade 5', time: '07:15 AM', status: 'In', notified: true },
        { id: 2, name: 'Mrs. Jane Doe', type: 'Staff', grade: 'Admin', time: '07:12 AM', status: 'In', notified: false },
        { id: 3, name: 'John Kimani', type: 'Student', grade: 'Grade 4', time: '07:10 AM', status: 'In', notified: true },
        { id: 4, name: 'Visitor: Moses W.', type: 'Visitor', grade: 'ID: 29***34', time: '07:05 AM', status: 'Pending', notified: false },
    ];

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
                    <div>
                        <Button variant="outline" className="mb-4 h-10 border-white/10 text-slate-300" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Smart Gate Hub</h1>
                        <p className="text-slate-400 font-medium mt-2">Biometric data-collection & automated safety notifications.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Live Perimeter Feed
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Real-time Entry Feed */}
                    <Card className="lg:col-span-2">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Live Entry Feed</h2>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded uppercase tracking-tighter">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Hardware Sync: Active
                            </div>
                        </div>

                        <div className="space-y-4">
                            {entryLogs.map((log) => (
                                <div key={log.id} className="p-4 bg-slate-900/50 rounded-xl border border-white/5 flex flex-col md:flex-row justify-between gap-4 group hover:bg-white/5 transition-all">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-slate-800 rounded-lg text-slate-400 group-hover:text-blue-400 transition-colors">
                                            {log.type === 'Student' ? <Scan className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{log.name}</p>
                                            <p className="text-xs text-slate-500">{log.type} | {log.grade}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:justify-end gap-6">
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-white mb-1">{log.time}</p>
                                            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
                                                <Clock className="w-3 h-3" /> Gate A-West
                                            </div>
                                        </div>
                                        {log.notified && (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-full">
                                                <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
                                                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tight">Parent SMS Sent</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Stats & Controls */}
                    <div className="space-y-6">
                        <Card className="bg-indigo-600/10 border-indigo-500/20">
                            <h3 className="font-bold text-white mb-4">Daily Attendance Pulse</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                                        <span>Student Presence</span>
                                        <span className="text-white">842/900</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 w-[93%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                                        <span>Staff Presence</span>
                                        <span className="text-white">45/48</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[94%]" />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="font-bold text-white mb-4">Gate Security Configuration</h3>
                            <div className="space-y-3">
                                <Button variant="outline" className="w-full justify-between text-xs h-10 border-white/5 hover:bg-white/5 group">
                                    <span className="text-slate-400 group-hover:text-white transition-colors">Panic Lockdown Mode</span>
                                    <Shield className="w-4 h-4 text-rose-500" />
                                </Button>
                                <Button variant="outline" className="w-full justify-between text-xs h-10 border-white/5 hover:bg-white/5 group">
                                    <span className="text-slate-400 group-hover:text-white transition-colors">Share Live Manifest</span>
                                    <Share2 className="w-4 h-4 text-blue-400" />
                                </Button>
                            </div>
                        </Card>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/10">
                            <p className="text-[10px] font-bold text-amber-500 uppercase mb-2">IoT System Tip</p>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                Hardware sync occurs every 500ms. If FaceID fails 3x, the duty guard's tablet will vibrate immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
