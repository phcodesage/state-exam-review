'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-08T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToRegister = () => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#f7e0e0] pt-16 sm:pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7e0e0]/90 to-[#fce8e8]/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full mb-4 sm:mb-6">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#ca3433]" />
            <span className="text-[#0e1f3e] font-medium text-xs sm:text-sm">
              Starting March 8, 2026
            </span>
          </div>

          <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-7xl text-[#ca3433] leading-tight mb-4 sm:mb-6 px-2">
            STATE EXAM REVIEW
          </h1>

          <p className="font-poppins font-semibold text-base sm:text-xl lg:text-3xl text-[#0e1f3e] mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            STATE EXAM REVIEW FOR GRADE 3 TO 8 – STARTING MARCH 8:
            <br />
            ELA AND MATH REVIEWS FOR STATE EXAM
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="font-poppins font-semibold text-lg sm:text-2xl text-[#0e1f3e] mb-4 sm:mb-6">
            Classes Start In:
          </h3>
          <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-6 flex-wrap max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6 min-w-[70px] sm:min-w-[100px]"
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-poppins font-bold text-[#ca3433]">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-medium text-[#0e1f3e] mt-1 sm:mt-2">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <button
            onClick={scrollToRegister}
            className="group w-full sm:w-auto bg-[#ca3433] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-poppins font-semibold text-base sm:text-lg hover:bg-[#a82a29] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() =>
              document
                .querySelector('#schedule')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-full sm:w-auto border-2 border-[#0e1f3e] text-[#0e1f3e] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-poppins font-semibold text-base sm:text-lg hover:bg-[#0e1f3e] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            View Schedule
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '6', label: 'Weeks ELA' },
            { number: '8', label: 'Weeks Math' },
            { number: '3', label: 'Grade Groups' },
            { number: '100%', label: 'Expert Teachers' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md"
            >
              <div className="text-2xl sm:text-3xl font-poppins font-bold text-[#ca3433]">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#0e1f3e] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
