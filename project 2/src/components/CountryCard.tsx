import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
  index: number;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, index }) => {
  const gradients = [
    'from-purple-400 via-pink-400 to-red-400',
    'from-blue-400 via-cyan-400 to-teal-400',
    'from-green-400 via-emerald-400 to-cyan-400',
    'from-yellow-400 via-orange-400 to-red-400',
    'from-pink-400 via-rose-400 to-purple-400',
    'from-indigo-400 via-purple-400 to-pink-400',
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <Link
      to={`/country/${country.code}`}
      className="group block transform transition-all duration-700 hover:scale-105 interactive-card"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-up">
        {/* Animated Background */}
        <div className={`h-40 bg-gradient-to-br ${gradient} relative overflow-hidden animate-gradient`}>
          {/* Floating Shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Country Emoji with Wiggle Animation */}
          <div className="absolute top-6 right-6 text-5xl group-hover:animate-wiggle transition-transform duration-300">
            {country.emoji}
          </div>

          {/* Region Badge */}
          <div className="absolute bottom-4 left-4">
            <div className="text-white font-bold text-sm bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 glass-effect">
              {country.region}
            </div>
          </div>

          {/* Trending Icon */}
          <div className="absolute top-4 left-4 text-white/80 group-hover:text-white transition-colors duration-300">
            <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 bg-gradient-to-b from-white to-gray-50">
          <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
            {country.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {country.description}
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
              <div className="text-sm font-medium text-gray-600 mb-1">Student</div>
              <div className={`text-xs font-bold ${
                country.studentVisa.difficulty === 'Easy' ? 'text-green-600' :
                country.studentVisa.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {country.studentVisa.difficulty}
              </div>
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
              <div className="text-sm font-medium text-gray-600 mb-1">Work</div>
              <div className={`text-xs font-bold ${
                country.workVisa.difficulty === 'Easy' ? 'text-green-600' :
                country.workVisa.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {country.workVisa.difficulty}
              </div>
            </div>
          </div>

          {/* Budget Display */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-4 border border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-600">Budget Range</span>
              </div>
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
            <div className="mt-2 text-lg font-bold text-green-700">
              {(country.budgetRange.min / 100000).toFixed(1)}L - {(country.budgetRange.max / 100000).toFixed(1)}L PKR
            </div>
            <div className="text-xs text-gray-500 mt-1">Estimated total cost</div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-bold text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
              Explore Details
            </span>
            <div className="flex items-center space-x-1">
              <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            </div>
          </div>
        </div>

        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
        
        {/* Shimmer Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;