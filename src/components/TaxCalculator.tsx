import React from 'react';
import { Calculator } from 'lucide-react';
import { TaxData } from '../types';

interface Props {
  taxData: TaxData;
  onCalculate: () => void;
}

export const TaxCalculator: React.FC<Props> = ({ taxData, onCalculate }) => {
  const calculateTotalIncome = () => {
    const { salary, businessIncome, investmentIncome, otherIncome } = taxData.income;
    return salary + businessIncome + investmentIncome + otherIncome;
  };

  const calculateTotalDeductions = () => {
    const { mortgage, studentLoan, charitable, medical, retirement } = taxData.deductions;
    return mortgage + studentLoan + charitable + medical + retirement;
  };

  const estimatedTax = () => {
    const taxableIncome = calculateTotalIncome() - calculateTotalDeductions();
    // Simplified tax calculation - should be replaced with actual tax brackets
    return Math.max(0, taxableIncome * 0.25);
  };

  const formatCurrencyINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Tax Calculator</h2>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-700">Total Income</h3>
          <p className="text-2xl font-bold text-green-600">{formatCurrencyINR(calculateTotalIncome())}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-700">Total Deductions</h3>
          <p className="text-2xl font-bold text-blue-600">{formatCurrencyINR(calculateTotalDeductions())}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-700">Estimated Tax</h3>
          <p className="text-2xl font-bold text-red-600">{formatCurrencyINR(estimatedTax())}</p>
        </div>

        <button
          onClick={onCalculate}
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calculate & File Taxes
        </button>
      </div>
    </div>
  );
};
