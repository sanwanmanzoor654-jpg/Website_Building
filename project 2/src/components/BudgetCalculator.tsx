import React, { useState, useEffect } from 'react';
import { DollarSign, Calculator, TrendingUp } from 'lucide-react';
import { BudgetBreakdown } from '../types';

interface BudgetCalculatorProps {
  budget: BudgetBreakdown;
  currency: string;
  countryName: string;
}

const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ budget, currency, countryName }) => {
  const [exchangeRate, setExchangeRate] = useState(280); // Default PKR rate
  const [isLoading, setIsLoading] = useState(false);

  // Simulate exchange rate fetch (in real app, you'd use a live API)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      // Simulated exchange rates
      const rates: Record<string, number> = {
        USD: 280,
        CAD: 210,
        GBP: 350,
        AUD: 185,
        EUR: 300,
        NOK: 26,
        SEK: 26,
      };
      setExchangeRate(rates[currency] || 280);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currency]);

  const calculatePKR = (amount: number) => {
    return (amount * exchangeRate).toLocaleString();
  };

  const totalBudget = Object.values(budget).reduce((sum, item) => sum + item.max, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 text-white">
        <div className="flex items-center space-x-2">
          <Calculator className="w-5 h-5" />
          <h3 className="text-lg font-bold">Budget Calculator</h3>
        </div>
        <p className="text-green-100 text-sm mt-1">Estimated costs in {currency} and PKR</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Exchange Rate */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Exchange Rate</span>
            {isLoading ? (
              <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
            ) : (
              <span className="text-sm font-bold text-green-600">
                1 {currency} = {exchangeRate} PKR
              </span>
            )}
          </div>
        </div>

        {/* Budget Items */}
        <div className="space-y-3">
          {Object.entries(budget).map(([category, item]) => (
            <div key={category} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Range:</span>
                  <span className="font-medium">
                    {item.min.toLocaleString()} - {item.max.toLocaleString()} {currency}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">In PKR:</span>
                  <span className="font-medium text-green-600">
                    {calculatePKR(item.min)} - {calculatePKR(item.max)} PKR
                  </span>
                </div>
              </div>
              
              {item.description && (
                <p className="text-xs text-gray-500 mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-800">Total Estimated Cost</h4>
            <DollarSign className="w-5 h-5 text-purple-600" />
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-purple-600">
              ~{totalBudget.toLocaleString()} {currency}
            </div>
            <div className="text-lg font-semibold text-green-600">
              ~{calculatePKR(totalBudget)} PKR
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            This is an estimated range. Actual costs may vary based on your specific situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;