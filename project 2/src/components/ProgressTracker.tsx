import React, { useState } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { VisaStep } from '../types';

interface ProgressTrackerProps {
  steps: VisaStep[];
  type: 'student' | 'work';
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ steps, type }) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const bgColor = type === 'student' ? 'from-purple-500 to-pink-500' : 'from-cyan-500 to-blue-500';
  const progressPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className={`bg-gradient-to-r ${bgColor} px-6 py-4 text-white`}>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <h3 className="text-lg font-bold">Progress Tracker</h3>
        </div>
        <p className="text-white/90 text-sm mt-1">Track your visa application progress</p>
      </div>

      <div className="p-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Completion</span>
            <span className="font-semibold text-gray-800">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${bgColor} transition-all duration-500 ease-out rounded-full`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => toggleStep(index)}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-300 group"
            >
              <div className="flex-shrink-0">
                {completedSteps.includes(index) ? (
                  <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />
                )}
              </div>
              <div className="flex-1">
                <h4 className={`font-medium transition-colors duration-300 ${
                  completedSteps.includes(index) 
                    ? 'text-green-600 line-through' 
                    : 'text-gray-800 group-hover:text-purple-600'
                }`}>
                  {step.title}
                </h4>
                {step.timeline && (
                  <p className="text-xs text-gray-500 mt-1">
                    ⏱️ {step.timeline}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Message */}
        {progressPercentage === 100 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 animate-fade-in">
            <p className="text-center text-green-700 font-medium">
              🎉 Amazing! You've completed all steps. You're ready to apply!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;