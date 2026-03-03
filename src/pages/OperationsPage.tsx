import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    ShieldAlert,
    Zap,
    Droplets,
    ShoppingCart,
    AlertTriangle,
    RefreshCw
} from 'lucide-react';

export const OperationsPage = () => {
    const navigate = useNavigate();

    const leakageData = [
        { id: 1, type: 'M-Pesa', amount: 'KES 4,500', reason: 'Unallocated - No Student ID', status: 'Flagged', time: '10 mins ago' },
        { id: 2, type: 'Bank Transfer', amount: 'KES 15,000', reason: 'Amount Mismatch (Reference: #994)', status: 'Pending', time: '1 hour ago' },
    ];

    const procurementData = [
        { item: 'Rice (Grade A)', currentStock: '45kg', forecast: 'Run-out in 4 days', action: 'Order 200kg', status: 'Urgent' },
        { item: 'Diesel Generator', currentStock: '120L', forecast: 'Run-out in 12 days', action: 'Order 500L', status: 'Scheduled' },
        { item: 'A4 Printing Paper', currentStock: '12 Reams', forecast: 'Term usage spike expected', action: 'Order 50 Bundles', status: 'Optimal' },
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">AI Institutional Operations</h1>
                        <p className="text-slate-400 font-medium mt-2">Active auditing, predictive procurement and utility surveillance.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="glass" className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" /> Rescan Ledger
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* AI Leakage Detection */}
                    <Card className="lg:col-span-2 border-l-4 border-l-rose-500 bg-rose-500/5">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400">
                                    <ShieldAlert className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">AI Leakage Detection</h2>
                                    <p className="text-xs text-slate-500">Real-time ledger audit vs external statements</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold px-2 py-1 rounded bg-rose-500/20 text-rose-400 animate-pulse uppercase">
                                2 Anomalies Found
                            </span>
                        </div>

                        <div className="space-y-4">
                            {leakageData.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-white/5 group hover:border-rose-500/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-400">
                                            {item.type[0]}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                                {item.amount} <span className="text-[10px] text-slate-500 font-normal">via {item.type}</span>
                                            </div>
                                            <p className="text-xs text-rose-400 font-medium">{item.reason}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-slate-500 uppercase font-bold">{item.time}</p>
                                        <Button variant="ghost" className="h-7 text-[10px] text-blue-400 hover:bg-blue-400/10 px-2 mt-1">
                                            Fix Allocation
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Utility Monitoring */}
                    <Card className="border-t-4 border-t-blue-500">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Utility Surveillance</h2>
                            <Zap className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="space-y-6">
                            <div className="p-4 bg-slate-900/50 rounded-xl border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-amber-400" />
                                        <span className="text-sm font-bold">Electricity</span>
                                    </div>
                                    <span className="text-xs text-emerald-400 font-bold">Normal</span>
                                </div>
                                <p className="text-2xl font-bold text-white">2.4 kW/h</p>
                                <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 w-[45%]" />
                                </div>
                            </div>

                            <div className="p-4 bg-rose-500/10 rounded-xl border border-rose-500/20">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <Droplets className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm font-bold">Water Flow</span>
                                    </div>
                                    <span className="text-xs text-rose-400 font-bold flex items-center gap-1">
                                        <AlertTriangle className="w-3 h-3" /> Potential Leak
                                    </span>
                                </div>
                                <p className="text-2xl font-bold text-white">14.2 L/min</p>
                                <p className="text-[10px] text-rose-400 mt-1">12% above average term flow</p>
                            </div>
                        </div>
                    </Card>

                    {/* Predictive Procurement */}
                    <Card className="lg:col-span-3 border-t-4 border-t-amber-500">
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                                    <ShoppingCart className="w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-bold text-white">Predictive Procurement Engine</h2>
                            </div>
                            <Button className="bg-amber-600 hover:bg-amber-700 h-9">Bulk Generate LPOs</Button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-500 text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
                                        <th className="pb-4">Resources</th>
                                        <th className="pb-4">Inventory Level</th>
                                        <th className="pb-4">AI Forecast</th>
                                        <th className="pb-4">Recommended Action</th>
                                        <th className="pb-4 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {procurementData.map((item, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-5 font-bold text-white">{item.item}</td>
                                            <td className="py-5 text-slate-300">{item.currentStock}</td>
                                            <td className="py-5">
                                                <span className={`text-xs font-medium ${item.status === 'Urgent' ? 'text-rose-400' : 'text-slate-400'}`}>
                                                    {item.forecast}
                                                </span>
                                            </td>
                                            <td className="py-5">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                                        {item.action}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-5 text-right">
                                                <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase ${item.status === 'Urgent' ? 'bg-rose-500/20 text-rose-400' :
                                                        item.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
