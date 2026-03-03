import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import {
    ArrowLeft,
    MessageSquare,
    Search,
    Filter,
    CheckCircle2,
    TrendingUp,
    AlertCircle,
    Heart,
    Zap
} from 'lucide-react';

export const MessagesPage = () => {
    const navigate = useNavigate();

    const messages = [
        { id: 1, sender: 'Mary Omari', role: 'Guardian', subject: 'Bus Delay - Route 04', preview: 'Is the bus delayed? It usually arrives at 7:10...', time: '10:15 AM', sentiment: 'Concerned', color: 'amber' },
        { id: 2, sender: 'Principal James', role: 'Admin', subject: 'Term 1 Strategy', preview: 'Regarding the new IoT rollout, we need to...', time: '09:45 AM', sentiment: 'Positive', color: 'emerald' },
        { id: 3, sender: 'John K.', role: 'Guardian', subject: 'Fees Query', preview: 'I paid via M-Pesa but the balance hasn\'t updated...', time: 'Yesterday', sentiment: 'Negative', color: 'rose' },
    ];

    const sentimentHotZones = [
        { zone: 'Grade 5 Blue', status: 'Rising Negative', reason: 'Recent Math Assessment', trend: 'down' },
        { zone: 'Bus Route 04', status: 'High Concern', reason: 'Fuel Sensor Anomalies', trend: 'down' },
        { zone: 'Sports Club', status: 'Optimistic', reason: 'Upcoming Tournament', trend: 'up' },
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Communication Hub</h1>
                        <p className="text-slate-400 font-medium mt-2">AI-driven sentiment analytics & community "Pulse" monitoring.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700 h-10">Broadcast Announcement</Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sentiment Pulse Dashboard */}
                    <Card className="lg:col-span-1 border-t-4 border-t-purple-500 bg-purple-500/5">
                        <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                            AI Sentiment Pulse
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-500 uppercase">Overall Mood</span>
                                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Optimistic</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1 p-3 bg-slate-900/50 rounded-xl border border-white/5 text-center">
                                    <Heart className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                                    <p className="text-xs font-bold text-white">84%</p>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Affinity</p>
                                </div>
                                <div className="flex-1 p-3 bg-slate-900/50 rounded-xl border border-white/5 text-center">
                                    <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                                    <p className="text-xs font-bold text-white">+12%</p>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Growth</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/5">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hot Zone Detection</p>
                                {sentimentHotZones.map((zone, i) => (
                                    <div key={i} className="p-3 bg-slate-900/40 rounded-lg border border-white/5 group hover:bg-white/5 transition-all">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-xs font-bold text-white">{zone.zone}</p>
                                            <span className={`text-[10px] font-bold ${zone.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                {zone.status}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-slate-500">{zone.reason}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Message Center */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="flex gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search messages, parents or staff..."
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
                                />
                            </div>
                            <Button variant="glass" className="h-12 w-12 p-0"><Filter className="w-4 h-4" /></Button>
                        </div>

                        <Card>
                            <div className="space-y-2">
                                {messages.map((msg) => (
                                    <div key={msg.id} className="p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 cursor-pointer flex gap-4 group">
                                        <div className={`p-3 bg-${msg.color}-500/10 rounded-xl text-${msg.color}-400 h-fit`}>
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-bold text-white text-sm">{msg.sender}</h4>
                                                    <span className="text-[10px] font-bold text-slate-500 px-2 py-0.5 bg-slate-800 rounded-full">{msg.role}</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-500">{msg.time}</span>
                                            </div>
                                            <p className="font-bold text-slate-200 text-sm mb-1">{msg.subject}</p>
                                            <p className="text-xs text-slate-400 truncate">{msg.preview}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <div className={`px-2 py-1 rounded-full bg-${msg.color}-500/10 text-${msg.color}-400 text-[10px] font-bold tracking-tighter uppercase flex items-center gap-1`}>
                                                {msg.sentiment === 'Positive' ? <Zap className="w-2 h-2" /> : <AlertCircle className="w-2 h-2" />}
                                                AI: {msg.sentiment}
                                            </div>
                                            <CheckCircle2 className="w-4 h-4 text-slate-700 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <div className="p-6 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-400">
                                    <Zap className="w-6 h-6 animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Crisis Prevention Mode</h4>
                                    <p className="text-xs text-slate-400">AI is scanning incoming feedback for "Mass Transfer" keywords.</p>
                                </div>
                            </div>
                            <Button className="bg-indigo-600 hover:bg-indigo-700 h-10 px-6">Configure Alerts</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
