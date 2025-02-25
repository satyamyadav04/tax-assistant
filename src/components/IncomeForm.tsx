import React from 'react';
import { DollarSign } from 'lucide-react';
import { UserIncome } from '../types';

interface Props {
  income: UserIncome;
  onChange: (income: UserIncome) => void;
}

export const IncomeForm: React.FC<Props> = ({ income, onChange }) => {
  const handleChange = (field: keyof UserIncome) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...income,
      [field]: parseFloat(e.target.value) || 0
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Income Information</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Salary Income
          </label>
          <input
            type="number"
            value={income.salary}
            onChange={handleChange('salary')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Income
          </label>
          <input
            type="number"
            value={income.businessIncome}
            onChange={handleChange('businessIncome')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investment Income
          </label>
          <input
            type="number"
            value={income.investmentIncome}
            onChange={handleChange('investmentIncome')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Other Income
          </label>
          <input
            type="number"
            value={income.otherIncome}
            onChange={handleChange('otherIncome')}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};