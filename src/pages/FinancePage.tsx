import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { FeeCard } from '../components/finance/FeeCard';
import { PaymentModal } from '../components/finance/PaymentModal';
import { Card } from '../components/ui/Card';
import { ArrowLeft, Wallet, TrendingUp, AlertCircle, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FinancePage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedFee, setSelectedFee] = useState<{ id: number; title: string; amount: number } | null>(null);

    // Mock Data
    const [fees, setFees] = useState([
        { id: 1, title: 'Term 1 Tuition', amount: 35000, dueDate: '2026-01-05', status: 'paid' },
        { id: 2, title: 'Term 2 Tuition', amount: 35000, dueDate: '2026-05-05', status: 'paid' },
        { id: 3, title: 'Activity Fee', amount: 5000, dueDate: '2026-03-10', status: 'pending' },
        { id: 4, title: 'Lunch Program', amount: 7500, dueDate: '2026-05-01', status: 'pending' },
    ]);

    const handlePay = (fee: any) => {
        setSelectedFee(fee);
        setIsPaymentModalOpen(true);
    };

    const handlePaymentSuccess = () => {
        if (selectedFee) {
            setFees(fees.map(f =>
                f.id === selectedFee.id ? { ...f, status: 'paid' } : f
            ));
        }
    };

    const totalDue = fees.reduce((acc, fee) => fee.status !== 'paid' ? acc + fee.amount : acc, 0);
    const adminTotalOutstanding = 2450000; // Mock school-wide total for admin

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in text-white">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
                    <div>
                        <Button variant="outline" className="mb-4 h-10 border-white/10 text-slate-300" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">Finance & Revenue Hub</h1>
                        <p className="text-slate-400 font-medium tracking-tight">
                            {isAdmin ? 'Real-time institutional fiscal monitoring.' : 'Personal fee management and payment portal.'}
                        </p>
                    </div>
                    <div className="text-right glass-card p-6 border-rose-500/20 bg-rose-500/5">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            {isAdmin ? 'Total School Outstanding' : 'Your Outstanding Balance'}
                        </p>
                        <p className="text-3xl font-bold text-rose-500">
                            KES {isAdmin ? adminTotalOutstanding.toLocaleString() : totalDue.toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Stats Grid - Role Based */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {isAdmin ? (
                        <>
                            <div className="stat-card border-t-4 border-emerald-500">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400">
                                        <Wallet className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-2">Total Paid (YTD)</p>
                                        <p className="text-3xl font-bold text-white">KES 3.8M</p>
                                        <p className="text-[10px] text-emerald-400 font-bold mt-1">+15% above target</p>
                                    </div>
                                </div>
                            </div>

                            <div className="stat-card border-t-4 border-amber-500">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-400">
                                        <TrendingUp className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-2">Projected Revenue</p>
                                        <p className="text-3xl font-bold text-white">KES 12.4M</p>
                                        <p className="text-[10px] text-amber-400 font-bold mt-1">End of Term Projection</p>
                                    </div>
                                </div>
                            </div>

                            <div className="stat-card border-t-4 border-blue-500">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                        <AlertCircle className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-2">Collection Efficiency</p>
                                        <p className="text-3xl font-bold text-white">92.4%</p>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                            <div className="bg-blue-600 h-full w-[92%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="stat-card border-t-4 border-emerald-500">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400">
                                        <Wallet className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-2">Last Payment</p>
                                        <p className="text-2xl font-bold text-white">KES 35,000</p>
                                        <p className="text-[10px] text-slate-400 mt-1">Confirmed 15 Jan 2026</p>
                                    </div>
                                </div>
                            </div>

                            <div className="stat-card border-t-4 border-amber-500">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-400">
                                        <TrendingUp className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-2">Payment Adherence</p>
                                        <p className="text-3xl font-bold text-white">On Track</p>
                                        <p className="text-[10px] text-amber-400 font-bold mt-1">No missed deadlines</p>
                                    </div>
                                </div>
                            </div>

                            <div className="stat-card border-t-4 border-blue-500">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                        <AlertCircle className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-2">Next Payment Due</p>
                                        <p className="text-2xl font-bold text-white">Mar 10, 2026</p>
                                        <p className="text-[10px] text-slate-400 mt-1">Activity Fees</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Content Header */}
                <div className="flex justify-between items-end mt-12 mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        {isAdmin ? 'Institutional Revenue Stream' : 'Personal Account Statement'}
                    </h2>
                    <p className="text-xs font-bold text-blue-400 cursor-pointer hover:underline">
                        {isAdmin ? 'Export Full Report' : 'Download PDF Receipt'}
                    </p>
                </div>

                {isAdmin ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-card p-6">
                            <h3 className="font-bold text-white mb-4">Revenue Attribution</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Tuition Fees', value: 'KES 8.2M', color: 'bg-emerald-500' },
                                    { label: 'Transport', value: 'KES 1.4M', color: 'bg-blue-500' },
                                    { label: 'Extracurricular', value: 'KES 900K', color: 'bg-amber-500' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${item.color}`} />
                                            <span className="text-sm text-slate-300">{item.label}</span>
                                        </div>
                                        <span className="text-sm font-bold text-white">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card p-6">
                            <h3 className="font-bold text-white mb-4">Recent Institutional Transactions</h3>
                            <div className="space-y-4">
                                {[
                                    { desc: 'Bulk SMS Service Renewal', amount: '-KES 12,000', date: 'Today' },
                                    { desc: 'Laboratory Equipment Purchase', amount: '-KES 450,000', date: 'Yesterday' },
                                    { desc: 'Global Fee Collection', amount: '+KES 1.2M', date: '2 days ago' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                                        <div>
                                            <p className="text-sm font-medium text-white">{item.desc}</p>
                                            <p className="text-[10px] text-slate-500">{item.date}</p>
                                        </div>
                                        <span className={`text-sm font-bold ${item.amount.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                                            {item.amount}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {fees.map((fee) => (
                            <FeeCard
                                key={fee.id}
                                title={fee.title}
                                amount={fee.amount}
                                dueDate={fee.dueDate}
                                status={fee.status as any}
                                onPay={() => handlePay(fee)}
                            />
                        ))}
                    </div>
                )}

                {/* NEW: Zeraki Inspired Mobile-First Fee Ledger */}
                <Card className="mt-12 p-8 border-t-0 bg-slate-950/40">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-white tracking-tight">Fee Ledger Analytics</h3>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Mobile-first transaction tracking & sharing</p>
                        </div>
                        <Button variant="glass" className="h-10 text-[10px] border-white/5">
                            <Download className="w-4 h-4 mr-2" /> Export Ledger
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-4 text-sm font-medium">
                            <thead>
                                <tr className="text-slate-500 text-[8px] font-black uppercase tracking-[0.2em]">
                                    <th className="pb-4">Transaction ID</th>
                                    <th className="pb-4">Description</th>
                                    <th className="pb-4">Channel</th>
                                    <th className="pb-4 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: 'TX-9921', desc: 'Term 1 Balance Clearance', channel: 'M-PESA', amount: 'KES 35,000', color: 'emerald' },
                                    { id: 'TX-8810', desc: 'Canteen Top-up (RFID)', channel: 'Wallet', amount: 'KES 1,200', color: 'blue' },
                                ].map((row, i) => (
                                    <tr key={i} className="group">
                                        <td className="py-4 pl-4 bg-slate-900/60 border-y border-l border-white/5 rounded-l-xl font-mono text-xs text-slate-400">{row.id}</td>
                                        <td className="py-4 bg-slate-900/60 border-y border-white/5 text-slate-200">{row.desc}</td>
                                        <td className="py-4 bg-slate-900/60 border-y border-white/5">
                                            <span className="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">{row.channel}</span>
                                        </td>
                                        <td className="py-4 pr-4 bg-slate-900/60 border-y border-r border-white/5 rounded-r-xl text-right font-black text-white">{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* NEW: Zeraki Inspired Advanced Financial Tools */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <Card className="md:col-span-2 p-8 border-t-0 bg-slate-900/40">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold text-white tracking-tight">Institutional Cashflow Summary</h3>
                            <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Live Audit</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { label: 'Operational Costs', value: 'KES 2.1M', trend: 'stable' },
                                { label: 'Reserved Funds', value: 'KES 5.4M', trend: 'up' },
                                { label: 'Uncollected Pledges', value: 'KES 450K', trend: 'down' },
                            ].map((stat, i) => (
                                <div key={i} className="p-4 bg-slate-950/40 rounded-2xl border border-white/5">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">{stat.label}</p>
                                    <p className="text-xl font-black text-white">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-8 border-t-4 border-t-amber-500 bg-amber-500/5">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            Promissory Pledge Tracker
                        </h3>
                        <div className="space-y-4">
                            {[
                                { parent: 'Maina K.', amount: 'KES 15,000', deadline: 'Mar 15' },
                                { parent: 'Sarah W.', amount: 'KES 8,000', deadline: 'Mar 20' },
                            ].map((pledge, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-slate-900/60 rounded-xl border border-white/5">
                                    <div>
                                        <p className="text-xs font-bold text-white">{pledge.parent}</p>
                                        <p className="text-[8px] text-slate-500">Expiring {pledge.deadline}</p>
                                    </div>
                                    <span className="text-xs font-black text-amber-500">{pledge.amount}</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="glass" className="w-full mt-6 h-10 text-[10px] font-black border-amber-500/20 text-amber-500">
                            Register New Pledge
                        </Button>
                    </Card>
                </div>

                {/* MPESA Modal */}
                <PaymentModal
                    isOpen={isPaymentModalOpen}
                    onClose={() => setIsPaymentModalOpen(false)}
                    title={selectedFee?.title || ''}
                    amount={selectedFee?.amount || 0}
                    onSuccess={handlePaymentSuccess}
                />
            </div>
        </div>
    );
};
