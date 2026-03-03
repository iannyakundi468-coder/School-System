import { useNavigate } from 'react-router-dom';
import { Button } from "../ui/Button";
import {
    Users,
    AlertCircle,
    DollarSign,
    Activity,
    Construction,
    LayoutDashboard,
    ShieldCheck,
    BadgeCheck,
    Scan,
    Utensils,
    FileText
} from 'lucide-react';
import { AIInsights } from './AIInsights';

export const AdminView = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8 animate-in">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="px-5 h-10 shadow-sm" onClick={() => navigate('/finance')}>Financial Reports</Button>
                <Button variant="outline" className="px-5 h-10 shadow-sm" onClick={() => navigate('/events')}>School Events</Button>
                <Button variant="primary" className="px-5 h-10 bg-amber-600 hover:bg-amber-700 flex items-center gap-2" onClick={() => navigate('/development')}>
                    <Construction className="w-4 h-4" /> School Development
                </Button>
                <Button variant="primary" className="px-5 h-10 bg-blue-600 hover:bg-blue-700 flex items-center gap-2" onClick={() => navigate('/infrastructure')}>
                    <LayoutDashboard className="w-4 h-4" /> Infrastructure
                </Button>
                <Button variant="primary" className="px-5 h-10 bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2" onClick={() => navigate('/compliance')}>
                    <ShieldCheck className="w-4 h-4" /> Compliance
                </Button>
                <Button variant="primary" className="px-5 h-10 bg-rose-600 hover:bg-rose-700 flex items-center gap-2" onClick={() => navigate('/safety')}>
                    <BadgeCheck className="w-4 h-4" /> Safety Hub
                </Button>
            </div>

            {/* Premium Insight Hub (Investor Spotlight) */}
            <AIInsights />

            {/* High Level Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="stat-card border-t-4 border-emerald-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Revenue</p>
                            <p className="text-3xl font-bold text-white mt-2">KES 14.2M</p>
                            <div className="flex items-center gap-1 mt-2">
                                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+12.5%</span>
                                <span className="text-[10px] text-slate-500">vs last term</span>
                            </div>
                        </div>
                        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                            <DollarSign className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="stat-card border-t-4 border-blue-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Students</p>
                            <p className="text-3xl font-bold text-white mt-2">1,240</p>
                            <div className="flex items-center gap-1 mt-2">
                                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">98%</span>
                                <span className="text-[10px] text-slate-500">Retention rate</span>
                            </div>
                        </div>
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                            <Users className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="stat-card border-t-4 border-amber-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Staff Presence</p>
                            <p className="text-3xl font-bold text-white mt-2">42 / 45</p>
                            <div className="flex items-center gap-1 mt-2">
                                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">3 Away</span>
                                <span className="text-[10px] text-slate-500">on active leave</span>
                            </div>
                        </div>
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                            <Activity className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="stat-card border-t-4 border-rose-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pending Issues</p>
                            <p className="text-3xl font-bold text-white mt-2">7</p>
                            <div className="flex items-center gap-1 mt-2">
                                <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">High Priority</span>
                            </div>
                        </div>
                        <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* IoT & Operations Control */}
                <div className="glass-card p-8 bg-gradient-to-br from-slate-900 to-indigo-900/10">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-white">Ecosystem Master Control</h3>
                        <Button variant="ghost" className="text-xs text-indigo-400 hover:bg-indigo-400/10" onClick={() => navigate('/operations')}>Operational Deep-Dive</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="glass" className="h-24 flex flex-col items-center justify-center gap-2 border-white/5 hover:border-emerald-500/30 transition-all" onClick={() => navigate('/gate')}>
                            <Scan className="w-6 h-6 text-emerald-400" />
                            <span className="text-xs font-bold text-slate-300">Smart Gate</span>
                        </Button>
                        <Button variant="glass" className="h-24 flex flex-col items-center justify-center gap-2 border-white/5 hover:border-amber-500/30 transition-all" onClick={() => navigate('/canteen')}>
                            <Utensils className="w-6 h-6 text-amber-400" />
                            <span className="text-xs font-bold text-slate-300">Cashless Canteen</span>
                        </Button>
                        <Button variant="glass" className="h-24 flex flex-col items-center justify-center gap-2 border-white/5 hover:border-blue-500/30 transition-all" onClick={() => navigate('/safety')}>
                            <Activity className="w-6 h-6 text-blue-400" />
                            <span className="text-xs font-bold text-slate-300">Bus Sentinel</span>
                        </Button>
                        <Button variant="glass" className="h-24 flex flex-col items-center justify-center gap-2 border-white/5 hover:border-purple-500/30 transition-all" onClick={() => navigate('/reports')}>
                            <FileText className="w-6 h-6 text-purple-400" />
                            <span className="text-xs font-bold text-slate-300">Board Reports</span>
                        </Button>
                    </div>
                </div>

                {/* Operations Feed */}
                <div className="glass-card p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-white">Institutional Pulse</h3>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Hardware Sync: OK</span>
                    </div>
                    <div className="space-y-6">
                        {[
                            { icon: Scan, color: 'emerald', title: 'Gate Entrance Verified', desc: 'Kelvin Omari arrived at 7:15 AM. Parent notified.', time: '10 mins ago' },
                            { icon: Utensils, color: 'amber', title: 'Canteen Flash-Sale', desc: '142 meals processed in last 30 mins.', time: '30 mins ago' },
                            { icon: AlertCircle, color: 'rose', title: 'Fuel Anomaly Detected', desc: 'Sudden drop in Bus 04 fuel level.', time: '1 hour ago' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 items-start group">
                                <div className={`p-3 bg-slate-800 rounded-xl text-slate-400 group-hover:bg-${item.color}-500/10 group-hover:text-${item.color}-400 transition-all`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 border-b border-white/5 pb-4 last:border-0">
                                    <div className="flex justify-between items-start">
                                        <p className="text-white font-semibold text-sm">{item.title}</p>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase">{item.time}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
