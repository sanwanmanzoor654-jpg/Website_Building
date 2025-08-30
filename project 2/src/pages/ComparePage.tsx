import React, { useState } from 'react';
import { BarChart3, Plus, X } from 'lucide-react';
import { countries } from '../data/countries';
import CountryComparison from '../components/CountryComparison';

const ComparePage = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [showSelector, setShowSelector] = useState(false);

  const addCountry = (countryCode: string) => {
    if (selectedCountries.length < 3 && !selectedCountries.includes(countryCode)) {
      setSelectedCountries([...selectedCountries, countryCode]);
      setShowSelector(false);
    }
  };

  const removeCountry = (countryCode: string) => {
    setSelectedCountries(selectedCountries.filter(c => c !== countryCode));
  };

  const selectedCountryObjects = selectedCountries.map(code => 
    countries.find(c => c.code === code)!
  ).filter(Boolean);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Compare Countries
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare visa requirements, budgets, and timelines side by side
          </p>
        </div>

        {/* Country Selector */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Select Countries to Compare
            </h2>
            <span className="text-sm text-gray-500">
              {selectedCountries.length}/3 selected
            </span>
          </div>

          {/* Selected Countries */}
          <div className="flex flex-wrap gap-3 mb-4">
            {selectedCountryObjects.map(country => (
              <div
                key={country.code}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200"
              >
                <span className="text-2xl">{country.emoji}</span>
                <span className="font-medium text-gray-800">{country.name}</span>
                <button
                  onClick={() => removeCountry(country.code)}
                  className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            
            {selectedCountries.length < 3 && (
              <button
                onClick={() => setShowSelector(!showSelector)}
                className="flex items-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-full hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
                <span>Add Country</span>
              </button>
            )}
          </div>

          {/* Country Selector Dropdown */}
          {showSelector && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-gray-50 rounded-lg">
              {countries
                .filter(c => !selectedCountries.includes(c.code))
                .map(country => (
                  <button
                    key={country.code}
                    onClick={() => addCountry(country.code)}
                    className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-purple-50 hover:shadow-md transition-all duration-300 text-left"
                  >
                    <span className="text-2xl">{country.emoji}</span>
                    <span className="text-sm font-medium text-gray-800">{country.name}</span>
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Comparison Results */}
        {selectedCountryObjects.length > 0 ? (
          <CountryComparison countries={selectedCountryObjects} />
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Start Comparing Countries</h3>
            <p className="text-gray-600 mb-6">Select 2-3 countries to see a detailed comparison</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;