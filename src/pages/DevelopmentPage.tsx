import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowLeft, Construction, TrendingUp, Landmark, Shield, Zap } from 'lucide-react';

export const DevelopmentPage = () => {
    const navigate = useNavigate();

    const projects = [
        { id: 1, title: 'New Science Lab', status: 'In Progress', completion: 65, budget: 'KES 2.5M', priority: 'High' },
        { id: 2, title: 'Solar Power Integration', status: 'Planning', completion: 15, budget: 'KES 1.2M', priority: 'Medium' },
        { id: 3, title: 'Library Expansion', status: 'Completed', completion: 100, budget: 'KES 800K', priority: 'Low' },
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">School Development</h1>
                        <p className="text-slate-400 font-medium mt-2">Strategic growth, infrastructure, and institutional projects.</p>
                    </div>
                </header>

                {/* Growth Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-t-4 border-amber-500">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Active Projects</p>
                                <p className="text-3xl font-bold text-white mt-2">5</p>
                                <p className="text-xs text-amber-400 mt-2 font-medium">2 Ahead of schedule</p>
                            </div>
                            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                                <Construction className="w-6 h-6" />
                            </div>
                        </div>
                    </Card>
                    <Card className="border-t-4 border-indigo-500">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Growth Index</p>
                                <p className="text-3xl font-bold text-white mt-2">+18.4%</p>
                                <p className="text-xs text-indigo-400 mt-2 font-medium">Annualized projection</p>
                            </div>
                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                        </div>
                    </Card>
                    <Card className="border-t-4 border-sky-500">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Institutional Valor</p>
                                <p className="text-3xl font-bold text-white mt-2">94.2</p>
                                <p className="text-xs text-sky-400 mt-2 font-medium">Quality assurance score</p>
                            </div>
                            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
                                <Landmark className="w-6 h-6" />
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Roadmap */}
                    <Card className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-6">Strategic Roadmap</h3>
                        <div className="space-y-6">
                            {projects.map((project) => (
                                <div key={project.id} className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-white">{project.title}</h4>
                                            <p className="text-xs text-slate-500 mt-1">Budget: {project.budget} | Priority: {project.priority}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${project.status === 'Completed' ? 'bg-indigo-500/20 text-indigo-400' :
                                                project.status === 'In Progress' ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-700 text-slate-400'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-500 ${project.completion === 100 ? 'bg-indigo-500' : 'bg-sky-500'
                                                }`}
                                            style={{ width: `${project.completion}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full mt-8 border-white/5 hover:bg-white/5 text-slate-400">
                            Download Project Briefs (PDF)
                        </Button>
                    </Card>

                    {/* Infrastructure Status */}
                    <Card>
                        <h3 className="text-xl font-bold text-white mb-6">System Health</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-white">Power Grid</p>
                                    <p className="text-xs text-slate-500 mt-0.5">Stable - Primary Source</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-white">Security Ops</p>
                                    <p className="text-xs text-slate-500 mt-0.5">All Checkpoints Active</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                            </div>
                        </div>
                        <Button className="w-full mt-8 bg-sky-600 hover:bg-sky-700">
                            Infrastructure Audit
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};
