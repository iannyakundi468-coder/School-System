import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { useNavigate } from 'react-router-dom';
import { User, Wallet, Calendar, TrendingUp } from 'lucide-react';

export const GuardianView = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="glass" className="h-24 flex flex-col gap-2" onClick={() => navigate('/finance')}>
                    <Wallet className="w-6 h-6 text-emerald-400" />
                    <span>Pay Fees</span>
                </Button>
                <Button variant="glass" className="h-24 flex flex-col gap-2" onClick={() => navigate('/events')}>
                    <Calendar className="w-6 h-6 text-blue-400" />
                    <span>Events</span>
                </Button>
                <Button variant="glass" className="h-24 flex flex-col gap-2" onClick={() => navigate('/learning')}>
                    <div className="p-1 bg-purple-500/20 rounded-md">
                        <span className="text-xl">🎓</span>
                    </div>
                    <span>Home Learning</span>
                </Button>
                <Button variant="glass" className="h-24 flex flex-col gap-2">
                    <User className="w-6 h-6 text-amber-400" />
                    <span>My Child</span>
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <h2 className="text-xl font-bold mb-4">Student Profile</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                            <span className="text-2xl">👦</span>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-white">Ian Doe</p>
                            <p className="text-gray-400">Grade 4 - Green House</p>
                        </div>
                    </div>
                </Card>

                <Card className="hover:bg-slate-800 transition-colors cursor-pointer group" onClick={() => navigate('/report')}>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-gray-400 text-sm">Performance</p>
                            <p className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">B+ (Avg)</p>
                        </div>
                        <div className="p-2 bg-amber-500/20 rounded-lg"><TrendingUp className="w-5 h-5 text-amber-400" /></div>
                    </div>
                    <div className="text-xs text-gray-500">Top 15% of class</div>
                </Card>

                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-bold">School Updates</h2>
                        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">New</span>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                            <h3 className="font-bold text-sm text-white">School Closed Tomorrow</h3>
                            <p className="text-xs text-gray-400 mt-1">Due to heavy rains, the school will be closed...</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[10px] text-gray-500">2 hrs ago • Principal James</span>
                                <button onClick={() => navigate('/messages')} className="text-xs text-emerald-400 hover:underline">Read More</button>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h2 className="text-xl font-bold mb-4">Fee Status</h2>
                    <p className="text-sm text-gray-400 mb-2">Term 2 Balance</p>
                    <p className="text-3xl font-bold text-rose-400">KES 12,500</p>
                    <Button className="w-full mt-4" onClick={() => navigate('/finance')}>Clear Balance</Button>
                </Card>
            </div>
        </div>
    );
};

// Solian Wolves V1.0
