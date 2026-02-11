import { useNavigate } from 'react-router-dom';
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { TrendingUp, Users, AlertCircle, DollarSign, Activity, Calendar } from 'lucide-react';

export const AdminView = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Quick Actions */}
            <div className="flex gap-4">
                <Button variant="glass" onClick={() => navigate('/finance')}>Financial Reports</Button>
                <Button variant="glass">Manage Staff</Button>
                <Button variant="glass">School Events</Button>
            </div>

            {/* High Level Stats */}
            <div className="grid md:grid-cols-4 gap-6">
                <Card className="border-l-4 border-l-emerald-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Total Revenue</p>
                            <p className="text-2xl font-bold text-white mt-1">KES 14.2M</p>
                            <p className="text-xs text-emerald-400 mt-1">+12% vs last term</p>
                        </div>
                        <DollarSign className="w-5 h-5 text-emerald-500" />
                    </div>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Active Students</p>
                            <p className="text-2xl font-bold text-white mt-1">1,240</p>
                            <p className="text-xs text-gray-400 mt-1">98% Retention</p>
                        </div>
                        <Users className="w-5 h-5 text-blue-500" />
                    </div>
                </Card>

                <Card className="border-l-4 border-l-amber-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Staff Preset</p>
                            <p className="text-2xl font-bold text-white mt-1">42 / 45</p>
                            <p className="text-xs text-amber-400 mt-1">3 on Leave</p>
                        </div>
                        <Activity className="w-5 h-5 text-amber-500" />
                    </div>
                </Card>

                <Card className="border-l-4 border-l-rose-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Pending Issues</p>
                            <p className="text-2xl font-bold text-white mt-1">7</p>
                            <p className="text-xs text-rose-400 mt-1">Requires Attention</p>
                        </div>
                        <AlertCircle className="w-5 h-5 text-rose-500" />
                    </div>
                </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Financial Overview Chart Placeholder */}
                <Card>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-white">Financial Overview</h3>
                        <select className="bg-slate-800 border-none text-xs text-gray-400 rounded-lg">
                            <option>This Term</option>
                            <option>Last Term</option>
                            <option>Year to Date</option>
                        </select>
                    </div>
                    <div className="h-64 flex items-end justify-between px-4 pb-4 gap-2 border-b border-slate-700">
                        {/* Mock Bar Chart */}
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}k
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </Card>

                {/* Recent Activity Feed */}
                <Card>
                    <h3 className="text-lg font-bold text-white mb-4">Operations Feed</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start pb-4 border-b border-slate-800/50">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                                <Users className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm text-white font-medium">New Student Enrollment</p>
                                <p className="text-xs text-gray-400">Sarah Connor joined Grade 5 Blue.</p>
                                <p className="text-xs text-gray-500 mt-1">10 mins ago</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start pb-4 border-b border-slate-800/50">
                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1">
                                <DollarSign className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm text-white font-medium">Fee Payment Received</p>
                                <p className="text-xs text-gray-400">James Bond paid KES 15,000 (Tuition).</p>
                                <p className="text-xs text-gray-500 mt-1">24 mins ago</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 mt-1">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm text-white font-medium">Staff Meeting Scheduled</p>
                                <p className="text-xs text-gray-400">Principal set a meeting for Friday 2pm.</p>
                                <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
