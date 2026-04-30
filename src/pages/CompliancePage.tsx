import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    ShieldCheck,
    AlertCircle,
    FileText,
    Calendar,
    BadgeCheck,
    Clock
} from 'lucide-react';

export const CompliancePage = () => {
    const navigate = useNavigate();

    const complianceItems = [
        { id: 1, title: 'TSC Certifications', progress: 95, detail: '42/45 Staff Verified', status: 'Optimal', icon: BadgeCheck, color: 'text-indigo-400' },
        { id: 2, title: 'Insurance (Student)', progress: 100, detail: 'All students covered', status: 'Optimal', icon: ShieldCheck, color: 'text-indigo-400' },
        { id: 3, title: 'Fire Safety Audit', progress: 20, detail: 'Expiring in 14 days', status: 'Action Required', icon: AlertCircle, color: 'text-rose-400' },
        { id: 4, title: 'Health Certificates', progress: 80, detail: 'Kitchen staff pending', status: 'Pending', icon: FileText, color: 'text-amber-400' },
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Compliance Guardian</h1>
                        <p className="text-slate-400 font-medium mt-2">Active monitoring of institutional legal and safety standards.</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {complianceItems.map((item) => (
                        <Card key={item.id} className={`border-l-4 ${item.status === 'Optimal' ? 'border-indigo-500' : item.status === 'Pending' ? 'border-amber-500' : 'border-rose-500'}`}>
                            <div className="flex justify-between items-start">
                                <div className="flex gap-4">
                                    <div className={`p-3 rounded-xl bg-slate-900/50 ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                        <p className="text-xs text-slate-500 font-medium">{item.detail}</p>
                                    </div>
                                </div>
                                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${item.status === 'Optimal' ? 'bg-indigo-500/10 text-indigo-400' :
                                        item.status === 'Pending' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>
                            <div className="mt-6 space-y-2">
                                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                                    <span>Compliance Level</span>
                                    <span>{item.progress}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-700 ${item.progress === 100 ? 'bg-indigo-500' :
                                                item.progress > 50 ? 'bg-sky-500' : 'bg-rose-500'
                                            }`}
                                        style={{ width: `${item.progress}%` }}
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Audit Roadmap */}
                <Card>
                    <h2 className="text-xl font-bold text-white mb-6">Upcoming Audits</h2>
                    <div className="space-y-4">
                        {[
                            { title: 'Quality Assurance Visit', date: 'March 15, 2026', type: 'State Audit' },
                            { title: 'Fleet Maintenance Cycle', date: 'March 20, 2026', type: 'Safety Check' },
                        ].map((audit, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-white/5">
                                <div className="flex items-center gap-4">
                                    <Calendar className="w-5 h-5 text-sky-400" />
                                    <div>
                                        <p className="text-sm font-bold text-white">{audit.title}</p>
                                        <p className="text-xs text-slate-500">{audit.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                                    <Clock className="w-4 h-4 text-slate-500" />
                                    {audit.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};
