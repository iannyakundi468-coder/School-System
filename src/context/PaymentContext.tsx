import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FeeItem {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'overdue' | 'paid';
}

export interface Receipt {
  id: string;
  date: string;
  amount: number;
  method: string;
  reference: string;
  items: string[];
}

interface PaymentContextType {
  fees: FeeItem[];
  receipts: Receipt[];
  totalDue: number;
  processPayment: (amount: number, method: string, details: any) => Promise<boolean>;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Initial mock data
const MOCK_FEES: FeeItem[] = [
  { id: 'f1', name: 'Term 2 Tuition', amount: 45000, dueDate: '2026-05-15', status: 'pending' },
  { id: 'f2', name: 'Transport (Bus)', amount: 15000, dueDate: '2026-05-01', status: 'overdue' },
  { id: 'f3', name: 'Meals & Canteen', amount: 8000, dueDate: '2026-05-15', status: 'pending' },
];

const MOCK_RECEIPTS: Receipt[] = [
  {
    id: 'RCP-2026-001',
    date: '2026-01-10T10:30:00Z',
    amount: 68000,
    method: 'M-Pesa',
    reference: 'QW12ER34TY',
    items: ['Term 1 Tuition', 'Transport (Bus)', 'Meals'],
  },
  {
    id: 'RCP-2026-002',
    date: '2026-03-05T14:15:00Z',
    amount: 5000,
    method: 'Card',
    reference: 'CARD-9876',
    items: ['Club Activities (Swimming)'],
  },
];

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fees, setFees] = useState<FeeItem[]>(MOCK_FEES);
  const [receipts, setReceipts] = useState<Receipt[]>(MOCK_RECEIPTS);

  const totalDue = fees.filter(f => f.status !== 'paid').reduce((sum, f) => sum + f.amount, 0);

  const processPayment = async (amount: number, method: string, details: any) => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock logic: Pay off the oldest/overdue fees first
    let remainingPayment = amount;
    const updatedFees = [...fees];
    const paidItems: string[] = [];

    // Sort: overdue first, then by due date
    updatedFees.sort((a, b) => {
      if (a.status === 'overdue' && b.status !== 'overdue') return -1;
      if (b.status === 'overdue' && a.status !== 'overdue') return 1;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });

    for (let i = 0; i < updatedFees.length; i++) {
      if (updatedFees[i].status !== 'paid' && remainingPayment > 0) {
        if (remainingPayment >= updatedFees[i].amount) {
          remainingPayment -= updatedFees[i].amount;
          updatedFees[i].status = 'paid';
          paidItems.push(updatedFees[i].name);
        } else {
          // Partial payment mock logic - for simplicity in this MVP, we just decrease the amount
          updatedFees[i].amount -= remainingPayment;
          paidItems.push(`${updatedFees[i].name} (Partial)`);
          remainingPayment = 0;
        }
      }
    }

    setFees(updatedFees);

    const newReceipt: Receipt = {
      id: `RCP-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      date: new Date().toISOString(),
      amount: amount - remainingPayment, // Actual amount used
      method: method,
      reference: method === 'M-Pesa' ? `MP${Math.random().toString(36).substring(2, 8).toUpperCase()}` : `CARD-${details.cardNumber?.slice(-4) || '0000'}`,
      items: paidItems,
    };

    setReceipts([newReceipt, ...receipts]);
    return true;
  };

  return (
    <PaymentContext.Provider value={{ fees, receipts, totalDue, processPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
