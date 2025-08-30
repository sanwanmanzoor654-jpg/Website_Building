import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'student' | 'work' | 'financial';
}

const faqs: FAQ[] = [
  {
    question: "Do I need IELTS for all countries?",
    answer: "Most countries require English proficiency tests like IELTS or TOEFL. However, some universities may waive this requirement if you've studied in English or are from an English-speaking country. Minimum scores vary: typically 6.0-6.5 for undergraduate and 6.5-7.0 for postgraduate programs.",
    category: "student"
  },
  {
    question: "How much money should I show for student visa?",
    answer: "Financial requirements vary by country: Canada requires CAD 10,000+ per year, UK requires £1,334 per month, Australia requires AUD 21,041 per year, and Germany requires €11,208 per year. Always check the latest requirements on official embassy websites.",
    category: "financial"
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Yes, most countries allow part-time work for international students: Canada (20 hours/week), UK (20 hours/week), Australia (48 hours/fortnight), Germany (120 full days/year), and US (on-campus only for F-1 students). Work hours may increase during holidays.",
    category: "student"
  },
  {
    question: "What is the easiest country to get a student visa?",
    answer: "Canada, Australia, and Germany are generally considered easier for Pakistani students due to straightforward processes and higher acceptance rates. However, 'easiest' depends on your profile, chosen program, and financial situation.",
    category: "general"
  },
  {
    question: "How long does visa processing take?",
    answer: "Processing times vary: Canada (4-6 weeks), Australia (2-4 weeks), UK (3-4 weeks), Germany (4-6 weeks), and US (3-5 weeks after interview). Apply early as processing times can increase during peak seasons.",
    category: "general"
  },
  {
    question: "Can I get permanent residency after studies?",
    answer: "Many countries offer pathways to permanent residency: Canada (Express Entry, PNP), Australia (skilled migration), Germany (EU Blue Card), and UK (Graduate Route then Skilled Worker). Requirements include work experience, language proficiency, and meeting points criteria.",
    category: "work"
  },
  {
    question: "What if my visa gets rejected?",
    answer: "If rejected, you can: 1) Reapply addressing the rejection reasons, 2) Appeal the decision (if allowed), 3) Apply to a different country, or 4) Strengthen your profile and reapply later. Always understand the specific rejection reasons first.",
    category: "general"
  },
  {
    question: "Do I need a consultant or agent?",
    answer: "While not mandatory, consultants can help with complex cases or if you're unsure about the process. However, you can apply independently using official government websites. If using a consultant, ensure they're registered and have good reviews.",
    category: "general"
  },
  {
    question: "What are the cheapest countries to study?",
    answer: "Germany (free tuition at public universities), Norway (free tuition), Finland (free for EU students), and some programs in France are most affordable. Consider living costs too - Eastern European countries often have lower living expenses.",
    category: "financial"
  },
  {
    question: "Can I bring my family on a student visa?",
    answer: "Dependent visas are available in most countries but requirements vary. Generally, you need to show additional financial support (spouse + children). Some countries like Canada and Australia are more family-friendly for international students.",
    category: "student"
  },
  {
    question: "What documents do I need for work visa?",
    answer: "Common documents include: valid passport, job offer letter, educational certificates, work experience letters, English proficiency test, medical examination, police clearance certificate, and financial proof. Specific requirements vary by country and visa type.",
    category: "work"
  },
  {
    question: "How much does it cost to study abroad?",
    answer: "Total costs vary widely: US ($25,000-50,000/year), UK (£20,000-35,000/year), Canada (CAD 20,000-35,000/year), Australia (AUD 30,000-50,000/year), Germany (€8,000-15,000/year). This includes tuition, living expenses, and visa costs.",
    category: "financial"
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Questions', icon: '🌟' },
    { value: 'general', label: 'General', icon: '❓' },
    { value: 'student', label: 'Student Visa', icon: '🎓' },
    { value: 'work', label: 'Work Visa', icon: '💼' },
    { value: 'financial', label: 'Financial', icon: '💰' }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient-primary animate-slide-up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Get answers to the most common questions about studying and working abroad
            <span className="inline-block animate-bounce ml-2">🤔</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${0.9 + index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-purple-500 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 transform transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-purple-100 mb-6">
              Remember, we're not consultants, but we're here to help you understand the process better!
            </p>
            <div className="flex justify-center space-x-2">
              <span className="text-3xl animate-bounce">💡</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>📚</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌟</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;