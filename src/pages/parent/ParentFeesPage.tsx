import React from 'react';
import { PaymentProvider } from '../../context/PaymentContext';
import { FeeOverview } from '../../components/parent/FeeOverview';
import { PaymentForm } from '../../components/parent/PaymentForm';
import { ReceiptHistory } from '../../components/parent/ReceiptHistory';
import { motion } from 'framer-motion';

const ParentFeesContent = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Fee Management</h1>
            <p className="text-slate-500 mt-1">View balances, make secure payments, and download receipts.</p>
          </div>
        </div>

        {/* Top Section: Overview & Payment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FeeOverview />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <PaymentForm />
          </motion.div>
        </div>

        {/* Bottom Section: History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ReceiptHistory />
        </motion.div>

      </div>
    </div>
  );
};

export const ParentFeesPage: React.FC = () => {
  return (
    <PaymentProvider>
      <ParentFeesContent />
    </PaymentProvider>
  );
};
