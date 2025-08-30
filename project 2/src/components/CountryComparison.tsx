import React, { useState } from 'react';
import { GraduationCap, Briefcase, Clock, DollarSign, BarChart3 } from 'lucide-react';
import { Country } from '../types';

interface CountryComparisonProps {
  countries: Country[];
}

const CountryComparison: React.FC<CountryComparisonProps> = ({ countries }) => {
  const [compareType, setCompareType] = useState<'student' | 'work'>('student');

  const getVisaInfo = (country: Country) => {
    return compareType === 'student' ? country.studentVisa : country.workVisa;
  };

  const getBudgetTotal = (country: Country) => {
    const visa = getVisaInfo(country);
    return Object.values(visa.budget).reduce((sum, item) => sum + item.max, 0);
  };

  return (
    <div className="space-y-8">
      {/* Tab Selector */}
      <div className="flex justify-center">
        <div className="flex space-x-1 bg-gray-100 rounded-full p-2">
          <button
            onClick={() => setCompareType('student')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
              compareType === 'student'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Student Visa</span>
          </button>
          <button
            onClick={() => setCompareType('work')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
              compareType === 'work'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Work Visa</span>
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            {compareType === 'student' ? 'Student' : 'Work'} Visa Comparison
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-800">Criteria</th>
                {countries.map(country => (
                  <th key={country.code} className="text-center p-4 font-semibold text-gray-800 min-w-48">
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-3xl">{country.emoji}</span>
                      <span>{country.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Difficulty */}
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Difficulty Level</span>
                  </div>
                </td>
                {countries.map(country => {
                  const visa = getVisaInfo(country);
                  const color = visa.difficulty === 'Easy' ? 'text-green-600' : 
                               visa.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600';
                  return (
                    <td key={country.code} className={`p-4 text-center font-semibold ${color}`}>
                      {visa.difficulty}
                    </td>
                  );
                })}
              </tr>

              {/* Timeline */}
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Processing Time</span>
                  </div>
                </td>
                {countries.map(country => (
                  <td key={country.code} className="p-4 text-center text-gray-600">
                    {getVisaInfo(country).timeline}
                  </td>
                ))}
              </tr>

              {/* Total Budget */}
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Est. Total Budget</span>
                  </div>
                </td>
                {countries.map(country => (
                  <td key={country.code} className="p-4 text-center">
                    <div className="font-semibold text-green-600">
                      ~{getBudgetTotal(country).toLocaleString()} {country.currency}
                    </div>
                    <div className="text-xs text-gray-500">
                      ~{(getBudgetTotal(country) * 280).toLocaleString()} PKR
                    </div>
                  </td>
                ))}
              </tr>

              {/* Number of Steps */}
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span>Application Steps</span>
                  </div>
                </td>
                {countries.map(country => (
                  <td key={country.code} className="p-4 text-center text-gray-600">
                    {getVisaInfo(country).steps.length} steps
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {countries.map(country => {
          const visa = getVisaInfo(country);
          return (
            <div key={country.code} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{country.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold">{country.name}</h3>
                    <p className="text-white/90 text-sm">{compareType === 'student' ? 'Student' : 'Work'} Visa</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Difficulty:</span>
                    <div className="font-semibold text-gray-800">{visa.difficulty}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Timeline:</span>
                    <div className="font-semibold text-gray-800">{visa.timeline}</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <span className="text-gray-500 text-sm">Total Budget:</span>
                  <div className="font-bold text-lg text-green-600">
                    ~{getBudgetTotal(country).toLocaleString()} {country.currency}
                  </div>
                  <div className="text-sm text-gray-500">
                    ~{(getBudgetTotal(country) * 280).toLocaleString()} PKR
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryComparison;