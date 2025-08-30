import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Globe, GraduationCap, Briefcase, Users, Sparkles, Zap, Heart, Star } from 'lucide-react';
import CountryCard from '../components/CountryCard';
import AnimatedCounter from '../components/AnimatedCounter';
import FAQSection from '../components/FAQSection';
import { countries } from '../data/countries';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const testimonials = [
    { name: "Ayesha K.", country: "Canada", text: "This site made visa requirements super clear! Got my study permit approved! 🇨🇦" },
    { name: "Ali R.", country: "Germany", text: "Finally found proper info without consultant fees. Thanks GoAbroad Hub! 🇩🇪" },
    { name: "Fatima S.", country: "Australia", text: "The budget calculator saved me so much planning time! 🇦🇺" }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 animate-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-cyan-300/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Sparkle Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            <Zap className="w-6 h-6 text-cyan-300 animate-bounce" />
            <Heart className="w-6 h-6 text-pink-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Star className="w-6 h-6 text-yellow-300 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 text-white animate-bounce-in leading-tight">
            Your Easy Guide to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 animate-pulse">
              Studying & Working Abroad
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-bold text-white/90 mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            No Confusion, Just Clarity 
            <span className="inline-block animate-wiggle ml-2">🚀</span>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
            We make official visa information super easy to understand for Pakistani students and professionals. 
            Get all the info you need without the hassle! 
            <span className="inline-block animate-bounce ml-1">✨</span>
          </p>
          
          {/* Search Bar with Enhanced Styling */}
          <div className="relative max-w-lg mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-purple-400" />
            </div>
            <input
              type="text"
              placeholder="Search your dream destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-5 text-lg border-0 rounded-full focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300 shadow-2xl bg-white/90 backdrop-blur-md placeholder-gray-500 font-medium"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 -z-10 blur-xl"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <Link
              to="#countries"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-purple-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl neon-button"
            >
              <Globe className="mr-2 w-5 h-5" />
              Explore Countries
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl border border-white/30 backdrop-blur-md neon-button"
            >
              <Briefcase className="mr-2 w-5 h-5" />
              Compare Options
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Stats Section with Enhanced Animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <div className="text-center transform hover:scale-110 transition-all duration-300 interactive-card">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 animate-pulse-glow">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-white/90 font-bold text-sm md:text-base">Countries Covered</p>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 interactive-card">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <p className="text-white/90 font-bold text-sm md:text-base">Success Stories</p>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-cyan-300 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 interactive-card">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-white/90 font-bold text-sm md:text-base">Universities Listed</p>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-300 to-purple-300 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 interactive-card">
              <div className="text-4xl md:text-6xl font-black text-white mb-3 animate-pulse-glow" style={{ animationDelay: '1.5s' }}>
                Free
              </div>
              <p className="text-white/90 font-bold text-sm md:text-base">Always & Forever</p>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-300 to-red-300 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient-primary animate-slide-up">
              Why Choose GoAbroad Hub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              We're different from the rest - here's why Gen-Z loves us! 
              <span className="inline-block animate-bounce ml-1">💫</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl interactive-card animate-slide-up border border-purple-200">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-800">Student-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">Simple explanations of complex visa processes, written specifically for Pakistani students. No confusing jargon! 📚</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-cyan-100 via-blue-100 to-teal-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl interactive-card animate-slide-up border border-cyan-200" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-800">Work Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">Complete guide for work visas, job hunting, and professional migration paths. Your career awaits! 💼</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl interactive-card animate-slide-up border border-orange-200" style={{ animationDelay: '0.6s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-800">Real Information</h3>
              <p className="text-gray-600 leading-relaxed">No fake promises. Just official requirements presented in an easy-to-understand way. Honest & transparent! ✨</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 px-4 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient-secondary animate-slide-up">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Click on any country to explore student and work visa requirements
            </p>
            <div className="flex justify-center space-x-2 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <span className="text-2xl animate-bounce">🌍</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>✈️</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🎓</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.6s' }}>💼</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCountries.map((country, index) => (
              <CountryCard
                key={country.code}
                country={country}
                index={index}
              />
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className="text-center py-16 animate-bounce-in">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-black text-gray-800 mb-4">Oops! Nothing found</h3>
              <p className="text-xl text-gray-600 mb-8">Try searching for a different country</p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 neon-button"
              >
                Show All Countries
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-slide-up">
              Success Stories 
              <span className="inline-block animate-pulse ml-2">⭐</span>
            </h2>
            <p className="text-xl text-white/90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Real people, real success! 
              <span className="inline-block animate-wiggle ml-1">🎉</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-white transform hover:scale-105 transition-all duration-500 interactive-card animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4 animate-bounce">💬</div>
                <p className="text-lg mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-white/80 text-sm">Now in {testimonial.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Disclaimer */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 animate-bounce-in">
            <div className="text-6xl mb-6 animate-wiggle">📢</div>
            <h3 className="text-3xl font-black mb-6 text-gray-800">Important Disclaimer</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              This platform is <span className="font-black text-red-600">NOT a consultancy service</span>. 
              We simply make official government information easier to understand for Pakistani students and professionals. 
              Always verify requirements with official embassy websites and authorized agents.
            </p>
            <div className="flex justify-center space-x-2">
              <span className="text-2xl animate-bounce">🏛️</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>📋</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>✅</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 animate-slide-up">
            Ready to Start Your Journey?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 animate-pulse">
              Let's Make It Happen!
            </span>
          </h2>
          <p className="text-2xl text-white/90 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Choose your dream destination and get started today! 
            <span className="inline-block animate-wiggle ml-2">🚀</span>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link
              to="#countries"
              className="inline-flex items-center px-12 py-5 text-2xl font-black text-purple-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl neon-button"
            >
              <Globe className="mr-3 w-8 h-8" />
              Explore Countries
              <ArrowRight className="ml-3 w-8 h-8" />
            </Link>
            <Link
              to="/search"
              className="inline-flex items-center px-12 py-5 text-2xl font-black text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl neon-button"
            >
              <Search className="mr-3 w-8 h-8" />
              Start Searching
              <Sparkles className="ml-3 w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;