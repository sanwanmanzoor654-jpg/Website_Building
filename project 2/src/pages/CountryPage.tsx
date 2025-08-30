import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Briefcase, Clock, DollarSign, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { countries } from '../data/countries';
import VisaSection from '../components/VisaSection';
import BudgetCalculator from '../components/BudgetCalculator';
import ProgressTracker from '../components/ProgressTracker';

const CountryPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [activeTab, setActiveTab] = useState<'student' | 'work'>('student');
  
  const country = countries.find(c => c.code === countryCode);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Country Not Found</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-800 underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Countries
          </Link>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="text-6xl md:text-8xl animate-bounce">
              {country.emoji}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
                {country.name}
              </h1>
              <p className="text-xl text-white/90 mb-4">
                {country.description}
              </p>
              <div className="flex items-center space-x-4 text-white/80">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Region: {country.region}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-1 bg-gray-100 rounded-full p-2">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-full transition-all duration-300 font-semibold ${
                activeTab === 'student'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:bg-white hover:shadow-md'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span>Student Visa</span>
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-full transition-all duration-300 font-semibold ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:bg-white hover:shadow-md'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Work Visa</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <VisaSection 
                visa={activeTab === 'student' ? country.studentVisa : country.workVisa}
                type={activeTab}
                countryName={country.name}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Tracker */}
              <ProgressTracker 
                steps={activeTab === 'student' ? country.studentVisa.steps : country.workVisa.steps}
                type={activeTab}
              />

              {/* Budget Calculator */}
              <BudgetCalculator 
                budget={activeTab === 'student' ? country.studentVisa.budget : country.workVisa.budget}
                currency={country.currency}
                countryName={country.name}
              />

              {/* Quick Tips */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
                  Pro Tips
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    Start your application process 6-8 months early
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    Keep multiple copies of all documents
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    Double-check embassy websites for latest updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-lg font-bold mb-2 text-gray-800">📢 Important Disclaimer</h3>
            <p className="text-gray-600">
              This platform is not a consultancy. We simply make official information easier to understand for Pakistani students and professionals. 
              Always verify requirements with official embassy websites and authorized agents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;