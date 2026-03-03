import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { FeeCard } from '../components/finance/FeeCard';
import { PaymentModal } from '../components/finance/PaymentModal';
import { ArrowLeft, Wallet, TrendingUp, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FinancePage = () => {
    const navigate = useNavigate();
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedFee, setSelectedFee] = useState<{ title: string; amount: number } | null>(null);

    // Mock Data
    const [fees, setFees] = useState([
        { id: 1, title: 'Term 1 Tuition', amount: 35000, dueDate: '2026-01-05', status: 'paid' },
        { id: 2, title: 'Term 2 Tuition', amount: 35000, dueDate: '2026-05-05', status: 'pending' },
        { id: 3, title: 'Transport (May)', amount: 4500, dueDate: '2026-05-01', status: 'overdue' },
        { id: 4, title: 'Lunch Program', amount: 3000, dueDate: '2026-05-01', status: 'pending' },
    ]);

    const handlePay = (fee: any) => {
        setSelectedFee(fee);
        setIsPaymentModalOpen(true);
    };

    const handlePaymentSuccess = () => {
        if (selectedFee) {
            setFees(fees.map(f =>
                f.title === selectedFee.title ? { ...f, status: 'paid' } : f
            ));
        }
    };

    const totalDue = fees.reduce((acc, fee) => fee.status !== 'paid' ? acc + fee.amount : acc, 0);

    return (
        <div className="min-h-screen bg-mesh p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8 animate-in">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
                    <div>
                        <Button variant="outline" className="mb-4 h-10" onClick={() => navigate('/')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Finance & Revenue Hub</h1>
                        <p className="text-slate-500 font-medium">Real-time fiscal monitoring and automated fee collection.</p>
                    </div>
                    <div className="text-right glass-card p-6 border-rose-100 bg-rose-50/30">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Outstanding</p>
                        <p className="text-3xl font-bold text-rose-600">KES {totalDue.toLocaleString()}</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="stat-card border-t-4 border-emerald-500">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600">
                                <Wallet className="w-10 h-10" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">Total Paid (YTD)</p>
                                <p className="text-3xl font-bold text-slate-900">KES 3.8M</p>
                                <p className="text-[10px] text-emerald-600 font-bold mt-1">+15% above target</p>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card border-t-4 border-amber-500">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-amber-50 rounded-2xl text-amber-600">
                                <TrendingUp className="w-10 h-10" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">Projected Revenue</p>
                                <p className="text-3xl font-bold text-slate-900">KES 12.4M</p>
                                <p className="text-[10px] text-amber-600 font-bold mt-1">End of Term Projection</p>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card border-t-4 border-blue-500">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                                <AlertCircle className="w-10 h-10" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">Collection Efficiency</p>
                                <p className="text-3xl font-bold text-slate-900">92.4%</p>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div className="bg-blue-600 h-full w-[92%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fee Cards Grid */}
                <div className="flex justify-between items-end mt-12 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Personal Account Statement</h2>
                    <p className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">Download PDF Receipt</p>
                </div>

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
