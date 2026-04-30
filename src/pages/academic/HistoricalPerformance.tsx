import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { ArrowLeft, TrendingUp, Award, Calendar } from 'lucide-react';

export const HistoricalPerformance = () => {
    const navigate = useNavigate();

    const historicalData = [
        { term: 'Term 1 - 2026', meanScore: '86%', grade: 'A-', rank: 'Top 10%', current: true },
        { term: 'Term 3 - 2025', meanScore: '82%', grade: 'B+', rank: 'Top 15%', current: false },
        { term: 'Term 2 - 2025', meanScore: '78%', grade: 'B', rank: 'Top 25%', current: false },
        { term: 'Term 1 - 2025', meanScore: '75%', grade: 'B-', rank: 'Top 30%', current: false },
    ];

    const subjectTrends = [
        { subject: 'Mathematics', scores: [65, 72, 80, 88] },
        { subject: 'Chemistry', scores: [70, 78, 85, 92] },
        { subject: 'English', scores: [78, 75, 76, 75] },
    ];

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5">
                    <div>
                        <Button variant="outline" className="mb-4 h-10 border-white/10 text-slate-300" onClick={() => navigate(-1)}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Dashboard
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
                            <TrendingUp className="w-8 h-8 text-sky-400" /> Historical Performance
                        </h1>
                        <p className="text-slate-400 font-medium mt-2">Ian Manyara | Form 3 - Simba House</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Term by Term Progression */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="p-0 overflow-hidden border-t-0 bg-slate-900/40">
                            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">Term-by-Term Progression</h2>
                                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                                    Overall Upward Trend
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-transparent">
                                    {historicalData.map((data, i) => (
                                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-slate-400 group-hover:bg-indigo-500 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10 font-bold text-xs relative">
                                                {historicalData.length - i}
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className={`font-bold text-lg ${data.current ? 'text-white' : 'text-slate-300'}`}>{data.term}</h3>
                                                    {data.current && <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Current</span>}
                                                </div>
                                                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                                                    <div className="bg-slate-900/50 p-2 rounded-xl border border-white/5">
                                                        <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Mean</p>
                                                        <p className="font-bold text-white">{data.meanScore}</p>
                                                    </div>
                                                    <div className="bg-slate-900/50 p-2 rounded-xl border border-white/5">
                                                        <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Grade</p>
                                                        <p className="font-bold text-sky-400">{data.grade}</p>
                                                    </div>
                                                    <div className="bg-slate-900/50 p-2 rounded-xl border border-white/5">
                                                        <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Rank</p>
                                                        <p className="font-bold text-amber-400">{data.rank}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Subject Heatmap / Analytics */}
                    <div className="space-y-6">
                        <Card className="bg-gradient-to-br from-indigo-900/20 to-slate-900 border-t-4 border-t-indigo-500">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Award className="w-5 h-5 text-indigo-400" /> Subject Trajectories
                            </h3>
                            <div className="space-y-8">
                                {subjectTrends.map((subj, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">{subj.subject}</p>
                                            <p className="text-xl font-black text-white">{subj.scores[3]}%</p>
                                        </div>
                                        <div className="flex items-end gap-1 h-12">
                                            {subj.scores.map((score, sIdx) => (
                                                <div key={sIdx} className="flex-1 flex flex-col items-center justify-end group px-0.5">
                                                    <div
                                                        className={`w-full rounded-sm transition-all duration-500 ${sIdx === 3 ? 'bg-indigo-500' : 'bg-slate-700 hover:bg-slate-600'}`}
                                                        style={{ height: `${score}%` }}
                                                    />
                                                    <span className="text-[8px] font-bold text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">T{sIdx + 1}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="bg-slate-900/40">
                            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-amber-400" /> Academic Milestones
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start border-l-2 border-amber-500/50 pl-4 py-1">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 -ml-[21px] ring-4 ring-slate-900" />
                                    <div>
                                        <p className="text-xs font-bold text-white">Most Improved Student</p>
                                        <p className="text-[10px] font-medium text-slate-500">Term 3 - 2025</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start border-l-2 border-sky-500/50 pl-4 py-1">
                                    <div className="w-2 h-2 rounded-full bg-sky-500 mt-1.5 -ml-[21px] ring-4 ring-slate-900" />
                                    <div>
                                        <p className="text-xs font-bold text-white">Science Fair Champion</p>
                                        <p className="text-[10px] font-medium text-slate-500">Term 2 - 2025</p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

// SomoBloom V1.0
