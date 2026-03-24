import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    FileText,
    Download,
    TrendingUp,
    Landmark,
    CheckCircle2,
    PieChart,
    Calendar
} from 'lucide-react';

export const ReportsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
                    <div>
                        <Button variant="outline" className="mb-4 h-10 border-white/10 text-slate-300" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Board-Ready Reporting</h1>
                        <p className="text-slate-400 font-medium mt-2">Executive termly summaries: Financial health and academic performance.</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="border-t-4 border-t-indigo-500">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Enrollment Growth</p>
                        <p className="text-3xl font-bold text-white mt-2">+12%</p>
                        <div className="flex items-center gap-2 mt-4 text-indigo-400 text-xs">
                            <TrendingUp className="w-4 h-4" />
                            <span>Outperforming Term 2, 2025</span>
                        </div>
                    </Card>
                    <Card className="border-t-4 border-t-sky-500">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Fee Collection</p>
                        <p className="text-3xl font-bold text-white mt-2">94.2%</p>
                        <div className="bg-slate-800 h-1 w-full mt-4 rounded-full overflow-hidden">
                            <div className="bg-sky-500 h-full w-[94%]" />
                        </div>
                    </Card>
                    <Card className="border-t-4 border-t-purple-500">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Academic Mean</p>
                        <p className="text-3xl font-bold text-white mt-2">B+</p>
                        <p className="text-xs mt-4 text-purple-400">Top 5% in the Region</p>
                    </Card>
                    <Card className="border-t-4 border-t-amber-500">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Compliance Score</p>
                        <p className="text-3xl font-bold text-white mt-2">100%</p>
                        <div className="flex items-center gap-2 mt-4 text-indigo-400 text-xs">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Audit Passed</span>
                        </div>
                    </Card>
                </div>

                {/* Report Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-2">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                            <h2 className="text-xl font-bold text-white">Generated Reports</h2>
                            <span className="text-xs text-slate-500">Term 1, 2026</span>
                        </div>
                        <div className="space-y-4">
                            {[
                                { title: 'Executive Financial Summary', type: 'Finance', date: 'Generated Today', size: '2.4 MB' },
                                { title: 'Termly Academic Performance', type: 'Academic', date: 'Generated 2 days ago', size: '4.8 MB' },
                                { title: 'Infrastructure & Safety Audit', type: 'Compliance', date: 'Generated 5 days ago', size: '1.2 MB' },
                                { title: 'Staff Performance Grid', type: 'HR', date: 'Generated 1 week ago', size: '800 KB' },
                            ].map((report, i) => (
                                <div key={i} className="group p-4 bg-slate-900/50 hover:bg-slate-800 rounded-xl border border-white/5 transition-all flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-800 group-hover:bg-slate-700 rounded-xl text-slate-400 group-hover:text-sky-400 transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{report.title}</p>
                                            <p className="text-[10px] text-slate-500 font-medium">{report.date} | {report.size}</p>
                                        </div>
                                    </div>
                                    <Button variant="glass" className="h-9 w-9 p-0 flex items-center justify-center rounded-lg hover:bg-sky-500/20 text-sky-400">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2 h-12">
                            <PieChart className="w-5 h-5" /> Compile New Master Report
                        </Button>

                        {/* NEW: Zeraki Inspired Stream Comparison */}
                        <div className="mt-12 pt-8 border-t border-white/5">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-indigo-400" /> Stream Comparison (Grade 6)
                            </h3>
                            <div className="flex items-end gap-4 h-48 px-4">
                                {[
                                    { name: '6 North', score: 82, color: 'bg-indigo-500/60' },
                                    { name: '6 South', score: 75, color: 'bg-indigo-500/40' },
                                    { name: '6 East', score: 88, color: 'bg-indigo-500' },
                                    { name: '6 West', score: 68, color: 'bg-indigo-500/20' },
                                ].map((stream, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
                                        <div className="text-[10px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity">{stream.score}%</div>
                                        <div className={`w-full ${stream.color} rounded-t-lg transition-all group-hover:brightness-125`} style={{ height: `${stream.score}%` }} />
                                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{stream.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-8">
                        <Card className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border-indigo-500/20">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Landmark className="w-5 h-5 text-indigo-400" /> Stakeholder View
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                These reports are automatically formatted for board presentations. The AI ensures all data points are audit-trailed and visualized for maximum clarity.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Board Meeting</p>
                                    <p className="text-sm font-bold text-white mt-1">March 28th, 2026</p>
                                    <div className="flex items-center gap-2 mt-2 text-rose-400 text-[10px] font-bold">
                                        <Calendar className="w-3 h-3" />
                                        <span>24 Days Remaining</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* NEW: Zeraki Inspired Topical Strength Heatmap */}
                        <Card className="bg-slate-900/40 border-slate-800">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-indigo-400" /> Topical Strength Heatmap
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { topic: 'Algebra', strength: 85, color: 'indigo' },
                                    { topic: 'Geometry', strength: 42, color: 'rose' },
                                    { topic: 'Calculus', strength: 71, color: 'sky' },
                                    { topic: 'Statistics', strength: 63, color: 'amber' },
                                ].map((topic, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-[10px] font-bold text-slate-400 w-16 uppercase">{topic.topic}</span>
                                        <div className="flex-1 h-3 bg-slate-800 rounded-sm overflow-hidden flex gap-0.5">
                                            {[...Array(10)].map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-full flex-1 rounded-sm ${idx < topic.strength / 10
                                                        ? `bg-${topic.color}-500/60`
                                                        : 'bg-slate-700/20'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className={`text-[10px] font-black text-${topic.color}-400`}>{topic.strength}%</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] text-slate-500 mt-6 italic font-medium">
                                * Based on latest formative assessments. Red zones indicate topics requiring immediate intervention.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
