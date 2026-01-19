'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Users,
  Award,
  BookOpen,
  Target,
  Sparkles,
  DollarSign,
} from 'lucide-react';

export default function Pricing() {
  const [selectedGrade, setSelectedGrade] = useState('3-4');
  const [selectedSubject, setSelectedSubject] = useState('both');

  const gradeOptions = [
    { value: '3-4', label: 'Grades 3-4' },
    { value: '5-6', label: 'Grades 5-6' },
    { value: '7-8', label: 'Grades 7-8' },
  ];

  const subjectOptions = [
    { value: 'ela', label: 'ELA Only', price: 329 },
    { value: 'math', label: 'Math Only', price: 429 },
    { value: 'both', label: 'ELA + Math', price: 700, savings: 58 },
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Certified teachers with proven exam success rates',
    },
    {
      icon: Users,
      title: 'Small Group Classes',
      description: 'Maximum 10 students per class for personalized attention',
    },
    {
      icon: Target,
      title: 'Practice Tests',
      description: 'Weekly assessments mirroring actual state exam format',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Materials',
      description: 'All study materials and resources included',
    },
    {
      icon: Sparkles,
      title: 'Progress Tracking',
      description: 'Regular updates on your student\'s improvement',
    },
    {
      icon: Check,
      title: 'Money-Back Guarantee',
      description: 'Full refund if not satisfied after first class',
    },
  ];

  const selectedPrice =
    subjectOptions.find((opt) => opt.value === selectedSubject)?.price || 0;
  const selectedSavings =
    subjectOptions.find((opt) => opt.value === selectedSubject)?.savings || 0;

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-[#f7e0e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0e1f3e] mb-3 sm:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-[#0e1f3e]/80 max-w-3xl mx-auto px-4">
            Choose the plan that best fits your student's needs. All plans
            include expert instruction and comprehensive materials.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-[#0e1f3e]/10">
              <div className="mb-6">
                <label className="block font-poppins font-semibold text-[#0e1f3e] mb-3">
                  Select Grade Level
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {gradeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedGrade(option.value)}
                      className={`py-2 sm:py-3 px-2 sm:px-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 ${selectedGrade === option.value
                        ? 'bg-[#ca3433] text-white shadow-lg scale-105'
                        : 'bg-[#f7e0e0] text-[#0e1f3e] hover:bg-[#ca3433]/10'
                        }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-poppins font-semibold text-[#0e1f3e] mb-3">
                  Select Subject(s)
                </label>
                <div className="space-y-3">
                  {subjectOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedSubject(option.value)}
                      className={`w-full p-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-between ${selectedSubject === option.value
                        ? 'bg-[#ca3433] text-white shadow-lg scale-105 border-2 border-[#ca3433]'
                        : 'bg-[#f7e0e0] text-[#0e1f3e] hover:bg-[#ca3433]/10 border-2 border-transparent'
                        }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{option.label}</span>
                        {option.savings && (
                          <span
                            className={`text-xs px-2 py-1 rounded ${selectedSubject === option.value
                              ? 'bg-white/20'
                              : 'bg-[#ca3433] text-white'
                              }`}
                          >
                            Save ${option.savings}
                          </span>
                        )}
                      </span>
                      <span className="font-poppins font-bold">
                        ${option.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#0e1f3e] rounded-xl p-6 text-white mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">Total Investment:</span>
                  <div className="text-right">
                    <div className="font-poppins font-bold text-4xl">
                      ${selectedPrice}
                    </div>
                    {selectedSavings > 0 && (
                      <div className="text-sm text-[#ca3433] font-semibold">
                        You save ${selectedSavings}!
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-white/80 mt-4">
                  All materials included. Payment plans available.
                </p>
              </div>

              <button
                onClick={() => window.open('https://buy.stripe.com/6oU6oAg8IcEq1lDcsPdfG0c', '_blank')}
                className="w-full bg-[#ca3433] text-white py-4 rounded-lg font-poppins font-bold text-lg hover:bg-[#a82a29] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>Proceed to Payment</span>
              </button>

              <p className="text-center text-sm text-[#0e1f3e]/60 mt-4">
                Secure payment powered by Stripe
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#0e1f3e] mb-4 sm:mb-6">
              What's Included
            </h3>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white rounded-lg p-4 sm:p-5 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="bg-[#f7e0e0] rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ca3433]" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-sm sm:text-base text-[#0e1f3e] mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0e1f3e]/70">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-[#ca3433] rounded-xl p-6 text-white">
              <h4 className="font-poppins font-bold text-xl mb-2">
                Early Bird Special!
              </h4>
              <p className="text-white/90">
                Register before February 1st and get an exclusive bonus package
                of practice materials worth $99 absolutely free!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
