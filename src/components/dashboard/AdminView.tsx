import { useNavigate } from 'react-router-dom';
import { Button } from "../ui/Button";
import { Users, AlertCircle, DollarSign, Activity, Calendar, Construction, LayoutDashboard, ShieldCheck, BadgeCheck } from 'lucide-react';
import { AIInsights } from './AIInsights';

export const AdminView = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8 animate-in">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="px-5 h-10 shadow-sm" onClick={() => navigate('/finance')}>Financial Reports</Button>
                <Button variant="outline" className="px-5 h-10 shadow-sm" onClick={() => navigate('/reports')}>Board Reports</Button>
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
                {/* Financial Overview Chart */}
                <div className="glass-card p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-white">Financial Growth</h3>
                        <select className="bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 rounded-lg px-3 py-1.5 outline-none">
                            <option>This Academic Term</option>
                            <option>Last Academic Term</option>
                            <option>Annual View</option>
                        </select>
                    </div>
                    <div className="h-64 flex items-end justify-between px-2 pb-4 gap-3 border-b border-white/5">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="w-full bg-emerald-500/20 hover:bg-emerald-500/30 transition-all duration-300 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    KES {h},000
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4 px-2">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                {/* Operations Feed */}
                <div className="glass-card p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-white">Operations Hub</h3>
                        <Button variant="ghost" className="text-xs text-blue-400 hover:bg-blue-400/10" onClick={() => navigate('/operations')}>View All Activity</Button>
                    </div>
                    <div className="space-y-6">
                        {[
                            { icon: Users, color: 'blue', title: 'New Student Enrollment', desc: 'Sarah Connor joined Grade 5 Blue.', time: '10 mins ago' },
                            { icon: DollarSign, color: 'emerald', title: 'Fee Payment Received', desc: 'James Bond paid KES 15,000 (Tuition).', time: '24 mins ago' },
                            { icon: Calendar, color: 'amber', title: 'Staff Meeting Scheduled', desc: 'Principal set a meeting for Friday 2pm.', time: '1 hour ago' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 items-start">
                                <div className={`p-3 bg-${item.color}-500/10 rounded-xl text-${item.color}-400`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
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
