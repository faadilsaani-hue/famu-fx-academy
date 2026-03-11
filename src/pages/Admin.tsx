import React from 'react';
import { Table, Check, X, Eye, User, CreditCard, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const Admin = () => {
  const pendingPayments = [
    { id: '1', user: 'Abebe Bikila', course: 'Forex Fundamentals', amount: '$99', date: '2024-05-20', status: 'Pending' },
    { id: '2', user: 'Ahmed Ali', course: 'Technical Mastery', amount: '$199', date: '2024-05-19', status: 'Pending' },
    { id: '3', user: 'Fatima Omar', course: 'Institutional Trading', amount: '$399', date: '2024-05-18', status: 'Approved' },
  ];

  const handleAction = (id: string, action: 'approve' | 'reject') => {
    toast.success(`Payment ${id} ${action === 'approve' ? 'approved' : 'rejected'}`);
  };

  return (
    <div className="min-h-screen pt-32 pb-12 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage students, courses, and payment verifications.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 flex items-center gap-3">
               <User className="text-[#D4AF37]" />
               <div>
                 <span className="text-xs text-gray-500 block">Total Students</span>
                 <span className="text-xl font-bold text-white">5,234</span>
               </div>
             </div>
             <div className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 flex items-center gap-3">
               <CreditCard className="text-[#1E3A8A]" />
               <div>
                 <span className="text-xs text-gray-500 block">Revenue</span>
                 <span className="text-xl font-bold text-white">$45,900</span>
               </div>
             </div>
          </div>
        </header>

        <div className="bg-[#111111] rounded-3xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Recent Payment Submissions</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-full">2 Pending</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#1a1a1a] text-gray-400 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Course</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Screenshot</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {pendingPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-900/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">{payment.user[0]}</div>
                        <span className="text-white font-medium">{payment.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{payment.course}</td>
                    <td className="px-6 py-4 text-white font-bold">{payment.amount}</td>
                    <td className="px-6 py-4 text-gray-400">
                       <div className="flex items-center gap-2">
                         <Calendar size={14} />
                         {payment.date}
                       </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2 text-[#D4AF37] hover:underline text-sm font-medium">
                        <Eye size={16} /> View Image
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleAction(payment.id, 'approve')}
                          className="p-2 bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white rounded-lg transition-all"
                        >
                          <Check size={18} />
                        </button>
                        <button 
                          onClick={() => handleAction(payment.id, 'reject')}
                          className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;