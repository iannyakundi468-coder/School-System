import React from 'react';
import { usePayment } from '../../context/PaymentContext';
import { CreditCard, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeeOverview: React.FC = () => {
  const { fees, totalDue } = usePayment();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Fee Overview</h2>
          <p className="text-slate-500 text-sm mt-1">Current term balances</p>
        </div>
        <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-emerald-600" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white mb-6 shadow-md relative overflow-hidden">
        {/* Abstract background design */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black opacity-10 blur-xl"></div>
        
        <p className="text-emerald-100 text-sm font-medium mb-1 relative z-10">Total Outstanding Balance</p>
        <h3 className="text-4xl font-bold tracking-tight relative z-10">{formatCurrency(totalDue)}</h3>
        
        {totalDue === 0 && (
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm relative z-10">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            All fees cleared for this term
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wider">Fee Breakdown</h4>
        {fees.length === 0 ? (
          <p className="text-slate-500 text-sm">No fees recorded.</p>
        ) : (
          <div className="space-y-3">
            {fees.map((fee, index) => (
              <motion.div 
                key={fee.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  fee.status === 'overdue' ? 'border-red-200 bg-red-50/50' : 
                  fee.status === 'paid' ? 'border-emerald-100 bg-emerald-50/50' : 
                  'border-slate-100 bg-slate-50'
                }`}
              >
                <div>
                  <p className="font-medium text-slate-800">{fee.name}</p>
                  <div className="flex items-center mt-1">
                    {fee.status === 'overdue' && <AlertCircle className="w-3 h-3 text-red-500 mr-1" />}
                    <p className={`text-xs ${
                      fee.status === 'overdue' ? 'text-red-600 font-medium' : 
                      fee.status === 'paid' ? 'text-emerald-600 font-medium' : 
                      'text-slate-500'
                    }`}>
                      {fee.status === 'paid' ? 'Paid fully' : `Due: ${new Date(fee.dueDate).toLocaleDateString()}`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${fee.status === 'paid' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                    {formatCurrency(fee.amount)}
                  </p>
                  {fee.status !== 'paid' && (
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      fee.status === 'overdue' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {fee.status}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
