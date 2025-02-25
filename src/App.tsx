import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { TaxCalculator } from './components/TaxCalculator';
import { IncomeForm } from './components/IncomeForm';
import { DeductionsForm } from './components/DeductionsForm';
import { TaxData, UserIncome, Deductions } from './types';

function App() {
  const [taxData, setTaxData] = useState<TaxData>({
    income: {
      salary: 0,
      businessIncome: 0,
      investmentIncome: 0,
      otherIncome: 0
    },
    deductions: {
      mortgage: 0,
      studentLoan: 0,
      charitable: 0,
      medical: 0,
      retirement: 0
    },
    year: new Date().getFullYear()
  });

  const handleIncomeChange = (income: UserIncome) => {
    setTaxData(prev => ({ ...prev, income }));
  };

  const handleDeductionsChange = (deductions: Deductions) => {
    setTaxData(prev => ({ ...prev, deductions }));
  };

  const handleCalculate = () => {
    // In a real application, this would connect to a tax filing API
    alert('Tax calculation complete! In a production environment, this would initiate the filing process.');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tax Assistant
          </h1>
          <p className="text-lg text-gray-600">
            Simplify your tax filing process with our secure and intelligent assistant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IncomeForm 
            income={taxData.income}
            onChange={handleIncomeChange}
          />
          
          <DeductionsForm
            deductions={taxData.deductions}
            onChange={handleDeductionsChange}
          />
          
          <TaxCalculator
            taxData={taxData}
            onCalculate={handleCalculate}
          />
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>🔒 Your data is encrypted and secure</p>
          <p>Tax calculations are based on current tax laws and regulations</p>
        </div>
      </div>
    </div>
  );
}

export default App;