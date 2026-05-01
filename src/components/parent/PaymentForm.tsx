import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { usePayment } from '../../context/PaymentContext';
import { Loader2, ShieldCheck, Smartphone, CreditCard as CardIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const paymentSchema = z.object({
  method: z.enum(['card', 'mpesa']),
  amount: z.number().min(100, 'Minimum payment is KES 100'),
  phoneNumber: z.string().optional(),
  cardNumber: z.string().optional(),
  expiry: z.string().optional(),
  cvv: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.method === 'mpesa') {
    if (!data.phoneNumber || !/^(\+254|0)[17]\d{8}$/.test(data.phoneNumber)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Valid Safaricom number required (e.g., 0712345678)',
        path: ['phoneNumber'],
      });
    }
  }
  if (data.method === 'card') {
    if (!data.cardNumber || data.cardNumber.replace(/\s/g, '').length < 16) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '16-digit card number required',
        path: ['cardNumber'],
      });
    }
    if (!data.expiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(data.expiry)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Valid expiry required (MM/YY)',
        path: ['expiry'],
      });
    }
    if (!data.cvv || data.cvv.length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'CVV required',
        path: ['cvv'],
      });
    }
  }
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

export const PaymentForm: React.FC = () => {
  const { totalDue, processPayment } = usePayment();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset, setValue } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      method: 'mpesa',
      amount: totalDue > 0 ? totalDue : 0,
    }
  });

  const method = watch('method');

  // Sync amount with totalDue when it changes, only if not manually edited
  React.useEffect(() => {
    if (totalDue > 0) {
      setValue('amount', totalDue);
    }
  }, [totalDue, setValue]);

  const onSubmit = async (data: PaymentFormValues) => {
    try {
      await processPayment(data.amount, data.method === 'mpesa' ? 'M-Pesa' : 'Card', data);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        reset({ method: data.method, amount: totalDue > 0 ? totalDue : 0 });
      }, 3000);
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  if (totalDue === 0 && !isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">No Pending Payments</h3>
        <p className="text-slate-500 mt-2">You have cleared all your fee balances for this term.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Make Payment</h2>
          <p className="text-slate-500 text-sm mt-1">Secure checkout portal</p>
        </div>
        <ShieldCheck className="text-emerald-500 w-6 h-6" />
      </div>

      <div className="p-6 relative">
        <AnimatePresence>
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                >
                  <ShieldCheck className="w-10 h-10 text-emerald-600" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Payment Successful!</h3>
              <p className="text-slate-500">Your receipt has been generated and your balance updated.</p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Method Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Payment Method</label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`
                relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none
                ${method === 'mpesa' ? 'border-emerald-500 ring-1 ring-emerald-500 bg-emerald-50/20' : 'border-slate-300'}
              `}>
                <input type="radio" {...register('method')} value="mpesa" className="sr-only" />
                <span className="flex flex-1 items-center">
                  <span className="flex flex-col">
                    <span className="flex items-center text-sm font-medium text-slate-900">
                      <Smartphone className="w-5 h-5 mr-2 text-emerald-600" />
                      M-Pesa
                    </span>
                  </span>
                </span>
                <CheckCircleIcon active={method === 'mpesa'} />
              </label>

              <label className={`
                relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none
                ${method === 'card' ? 'border-emerald-500 ring-1 ring-emerald-500 bg-emerald-50/20' : 'border-slate-300'}
              `}>
                <input type="radio" {...register('method')} value="card" className="sr-only" />
                <span className="flex flex-1 items-center">
                  <span className="flex flex-col">
                    <span className="flex items-center text-sm font-medium text-slate-900">
                      <CardIcon className="w-5 h-5 mr-2 text-blue-600" />
                      Credit Card
                    </span>
                  </span>
                </span>
                <CheckCircleIcon active={method === 'card'} />
              </label>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Amount (KES)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-slate-500 sm:text-sm">KES</span>
              </div>
              <input
                type="number"
                {...register('amount', { valueAsNumber: true })}
                className="pl-12 block w-full rounded-lg border-slate-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm py-3 px-4 border"
                placeholder="0.00"
              />
            </div>
            {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>}
          </div>

          {/* Dynamic Fields */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            {method === 'mpesa' ? (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <label className="block text-sm font-medium text-slate-700 mb-1">Safaricom Phone Number</label>
                <input
                  type="text"
                  {...register('phoneNumber')}
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm py-2.5 px-3 border"
                  placeholder="07XX XXX XXX"
                />
                {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>}
                <p className="mt-2 text-xs text-slate-500 flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  You will receive an STK push prompt on your phone.
                </p>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    {...register('cardNumber')}
                    className="block w-full rounded-lg border-slate-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm py-2.5 px-3 border font-mono"
                    placeholder="0000 0000 0000 0000"
                  />
                  {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      {...register('expiry')}
                      className="block w-full rounded-lg border-slate-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm py-2.5 px-3 border"
                      placeholder="MM/YY"
                    />
                    {errors.expiry && <p className="mt-1 text-sm text-red-600">{errors.expiry.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">CVV</label>
                    <input
                      type="password"
                      {...register('cvv')}
                      className="block w-full rounded-lg border-slate-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm py-2.5 px-3 border"
                      placeholder="123"
                      maxLength={4}
                    />
                    {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv.message}</p>}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing Securely...
              </>
            ) : (
              <>
                Pay KES {watch('amount')?.toLocaleString() || '0'} Now
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 mt-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Payments are secure and encrypted.</span>
          </div>
        </form>
      </div>
    </div>
  );
};

const CheckCircleIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      className={`h-5 w-5 ${active ? 'text-emerald-600' : 'text-transparent'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
