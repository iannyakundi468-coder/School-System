import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    ArrowLeft,
    CreditCard,
    Utensils,
    TrendingUp,
    ShieldCheck,
    AlertTriangle,
    Apple
} from 'lucide-react';

export const CanteenPage = () => {
    const navigate = useNavigate();

    const transactions = [
        { id: 1, name: 'Kelvin Omari', item: 'School Lunch Combo', amount: 'KES 150', time: '12:45 PM', status: 'Success' },
        { id: 2, name: 'Sarah W.', item: 'Apple + Yogurt', amount: 'KES 80', time: '12:47 PM', status: 'Success' },
        { id: 3, name: 'Brian K.', item: 'Soda + Mandazi', amount: 'KES 60', time: '12:50 PM', status: 'Flagged', flag: 'Nutritional Warning' },
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
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Cashless Canteen</h1>
                        <p className="text-slate-400 font-medium mt-2">Revenue protection & student nutritional analytics.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2">
                            <CreditCard className="w-4 h-4" /> Top-up Global Fund
                        </Button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Live Transactions */}
                    <Card className="lg:col-span-2">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Live Transactions</h2>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                                Speed: 4x Average (Tap-to-Eat)
                            </div>
                        </div>

                        <div className="space-y-4">
                            {transactions.map((tx) => (
                                <div key={tx.id} className="p-4 bg-slate-900/50 rounded-xl border border-white/5 flex flex-col md:flex-row justify-between gap-4">
                                    <div className="flex gap-4">
                                        <div className={`p-3 rounded-lg ${tx.flag ? 'bg-amber-500/10 text-amber-500' : 'bg-slate-800 text-slate-400'}`}>
                                            <Utensils className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{tx.name}</p>
                                            <p className="text-xs text-slate-500">{tx.item}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:justify-end gap-6">
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-emerald-400">{tx.amount}</p>
                                            <p className="text-[10px] text-slate-500 uppercase font-bold">{tx.time}</p>
                                        </div>
                                        {tx.flag ? (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 rounded-full group cursor-help relative">
                                                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                                                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-tight">AI Health Flag</span>
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-[10px] text-slate-300 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                                                    High sugar/carb ratio detected. Parental alert triggered.
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-full">
                                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tight">Verified Account</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Nutritional Insights */}
                    <div className="space-y-6">
                        <Card className="border-t-4 border-t-emerald-500">
                            <h3 className="font-bold text-white mb-6">Institutional Health Profile</h3>
                            <div className="flex items-center justify-center p-6 bg-slate-900/40 rounded-2xl border border-white/5 mb-6">
                                <div className="text-center">
                                    <Apple className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                                    <p className="text-2xl font-bold text-white">82.4%</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Balanced Meals</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-400">Protein Index</span>
                                    <span className="text-emerald-400 font-bold">+12% vs last term</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-400">Sugar Consumption</span>
                                    <span className="text-rose-400 font-bold">-4.5% Reduction</span>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-blue-600/10 border-blue-500/20">
                            <h3 className="font-bold text-white mb-4 flex items-center justify-between">
                                Revenue Protection
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                            </h3>
                            <p className="text-3xl font-bold text-white">KES 142k</p>
                            <p className="text-xs text-slate-500 mt-1">Processed today via Tap-to-Eat</p>
                            <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                                <div className="flex justify-between text-[10px] font-bold">
                                    <span className="text-slate-400 uppercase">Cashless Adoption</span>
                                    <span className="text-blue-400">98%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[98%]" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
