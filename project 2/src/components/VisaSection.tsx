import React from 'react';
import { Clock, FileText, DollarSign, GraduationCap, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { VisaInfo } from '../types';

interface VisaSectionProps {
  visa: VisaInfo;
  type: 'student' | 'work';
  countryName: string;
}

const VisaSection: React.FC<VisaSectionProps> = ({ visa, type, countryName }) => {
  const Icon = type === 'student' ? GraduationCap : Briefcase;
  const bgColor = type === 'student' ? 'from-purple-500 to-pink-500' : 'from-cyan-500 to-blue-500';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`bg-gradient-to-r ${bgColor} rounded-2xl p-8 text-white`}>
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="w-8 h-8" />
          <h2 className="text-3xl font-bold">
            {type === 'student' ? 'Student' : 'Work'} Visa for {countryName}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Timeline: {visa.timeline}</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>Total Cost: ~{visa.totalCost}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Difficulty: {visa.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Requirements Steps */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Step-by-Step Requirements</h3>
          <p className="text-gray-600 text-sm mt-1">Follow these steps in order for the best results</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {visa.steps.map((step, index) => (
              <div key={index} className="flex space-x-4 group">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${bgColor} flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  {step.documents && step.documents.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Required Documents:</h5>
                      <ul className="space-y-1">
                        {step.documents.map((doc, docIndex) => (
                          <li key={docIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.timeline && (
                    <div className="mt-3 text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Estimated time: {step.timeline}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Notes */}
      {visa.importantNotes && visa.importantNotes.length > 0 && (
        <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
            Important Notes
          </h3>
          <ul className="space-y-2">
            {visa.importantNotes.map((note, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VisaSection;