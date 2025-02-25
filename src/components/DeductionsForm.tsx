import React from 'react';
import { Receipt } from 'lucide-react';
import { Deductions } from '../types';

interface Props {
  deductions: Deductions;
  onChange: (deductions: Deductions) => void;
}

export const DeductionsForm: React.FC<Props> = ({ deductions, onChange }) => {
  const handleChange = (field: keyof Deductions) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...deductions,
      [field]: parseFloat(e.target.value) || 0
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Receipt className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Deductions</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mortgage Interest
          </label>
          <input
            type="number"
            value={deductions.mortgage}
            onChange={handleChange('mortgage')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Loan Interest
          </label>
          <input
            type="number"
            value={deductions.studentLoan}
            onChange={handleChange('studentLoan')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Charitable Contributions
          </label>
          <input
            type="number"
            value={deductions.charitable}
            onChange={handleChange('charitable')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Medical Expenses
          </label>
          <input
            type="number"
            value={deductions.medical}
            onChange={handleChange('medical')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Retirement Contributions
          </label>
          <input
            type="number"
            value={deductions.retirement}
            onChange={handleChange('retirement')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};