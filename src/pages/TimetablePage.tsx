import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    AlertTriangle,
    Clock,
    Zap
} from 'lucide-react';

export const TimetablePage = () => {
    const navigate = useNavigate();

    const conflicts = [
        { id: 1, teacher: 'Mrs. Alice', room: 'Lab 2', clash: 'Math vs Physics', time: '10:00 AM' },
        { id: 2, teacher: 'Mr. John', room: 'Field', clash: 'Agriculture vs Business Studies', time: '11:00 AM' },
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Smart Timetable Engine</h1>
                        <p className="text-slate-400 font-medium mt-2">AI-optimized master scheduling with automated clash resolution.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Re-Optimize Schedule
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Schedule Conflict Resolver */}
                    <Card className="lg:col-span-2 border-l-4 border-l-amber-500 bg-amber-500/5">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-500" />
                                <div>
                                    <h2 className="text-xl font-bold text-white">Active Clashes</h2>
                                    <p className="text-xs text-slate-500">Detected room or teacher overlaps</p>
                                </div>
                            </div>
                            <Button variant="ghost" className="text-xs text-amber-500 hover:bg-amber-500/10">Resolve All via AI</Button>
                        </div>

                        <div className="space-y-4">
                            {conflicts.map((item) => (
                                <div key={item.id} className="p-4 bg-slate-900/50 rounded-xl border border-white/5 flex flex-col md:flex-row justify-between gap-4">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-slate-800 rounded-lg text-slate-400">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{item.clash}</p>
                                            <p className="text-xs text-slate-500">{item.teacher} | {item.room} at {item.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-bold text-amber-500 border border-amber-500/30 px-2 py-1 rounded">High Priority</span>
                                        <Button variant="glass" className="h-8 text-[10px]">Manual Fix</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Optimization Metrics */}
                    <div className="space-y-6">
                        <Card className="border-t-4 border-t-indigo-500">
                            <h3 className="font-bold text-white mb-4">Optimization Efficiency</h3>
                            <div className="flex items-center justify-center py-6">
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                                        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-indigo-500" strokeDasharray="364.4" strokeDashoffset="43.7" />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-3xl font-bold text-white">88%</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase">Optimal</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-center text-slate-400 font-medium">Schedule score based on teacher preference and room utilization.</p>
                        </Card>

                        <Card>
                            <h3 className="font-bold text-white mb-4">Master View Status</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Total Weekly Lessons</span>
                                    <span className="text-white font-bold">1,240</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Room Utilization</span>
                                    <span className="text-indigo-400 font-bold">92.4%</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Teacher Loads Balance</span>
                                    <span className="text-amber-400 font-bold">Good</span>
                                </div>
                            </div>
                        </Card>

                        {/* NEW: Zeraki Inspired Smart Substitution */}
                        <Card className="bg-indigo-500/5 border-indigo-500/20">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-indigo-400" /> Smart Substitution
                            </h3>
                            <p className="text-[10px] text-slate-400 mb-4">Detecting teacher absences... 1 match found for Form 3 (8-4-4) Math.</p>
                            <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">SM</div>
                                    <div>
                                        <p className="text-xs font-bold text-white">Sarah Mwangi</p>
                                        <p className="text-[8px] text-slate-500">Free Period | Math Specialist</p>
                                    </div>
                                </div>
                                <Button size="sm" variant="premium" className="h-7 text-[8px] px-3">Assign</Button>
                            </div>
                        </Card>
                    </div>

                    {/* Schedule Grid Preview */}
                    <Card className="lg:col-span-3">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">Master Schedule Preview</h3>
                            <div className="flex gap-2">
                                <Button variant="outline" className="h-8 px-3 text-[10px] uppercase font-bold text-slate-400 border-white/5">Export PDF</Button>
                                <Button variant="outline" className="h-8 px-3 text-[10px] uppercase font-bold text-slate-400 border-white/5">Sync to Google Cal</Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 min-w-[800px]">
                            {['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                                <div key={day} className="p-3 text-center bg-slate-900/50 rounded-lg border border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    {day}
                                </div>
                            ))}
                            {[0, 1, 2, 3, 4].map((rIdx) => (
                                <div key={rIdx} className="contents">
                                    <div className="p-4 text-center text-xs font-bold text-slate-400 border-r border-white/5">08:00 - 09:00</div>
                                    {[0, 1, 2, 3, 4].map((cIdx) => (
                                        <div key={cIdx} className="p-3 bg-slate-800/30 rounded-lg border border-white/5 group hover:bg-sky-500/10 hover:border-sky-500/30 transition-all cursor-pointer">
                                            <p className="text-[10px] font-bold text-white truncate">Mathematics</p>
                                            <p className="text-[8px] text-slate-500 font-medium">Form 3 East | R204</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
