import { useState } from 'react';
import { Card } from '../components/ui/Card';
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
        <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <Button variant="glass" className="mb-4" onClick={() => navigate('/dashboard')}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                        </Button>
                        <h1 className="text-3xl font-bold">Finance Portal</h1>
                        <p className="text-gray-400">Manage school fees and transactions safely.</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-sm text-gray-400">Total Outstanding</p>
                        <p className="text-3xl font-bold text-rose-400">KES {totalDue.toLocaleString()}</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-emerald-500/10 border-emerald-500/20">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-500/20 rounded-lg">
                                <Wallet className="w-8 h-8 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Total Paid (YTD)</p>
                                <p className="text-2xl font-bold">KES 35,000</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-amber-500/10 border-amber-500/20">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-500/20 rounded-lg">
                                <TrendingUp className="w-8 h-8 text-amber-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Next Due</p>
                                <p className="text-2xl font-bold">May 1st</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-rose-500/10 border-rose-500/20 md:hidden">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-rose-500/20 rounded-lg">
                                <AlertCircle className="w-8 h-8 text-rose-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Total Outstanding</p>
                                <p className="text-2xl font-bold">KES {totalDue.toLocaleString()}</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Fee Cards Grid */}
                <h2 className="text-xl font-bold mt-8">Fee Structure & Payments</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
