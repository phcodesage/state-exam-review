'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, Calculator } from 'lucide-react';

export default function Schedule() {
  const schedules = [
    {
      grade: 'Grades 3-4',
      color: 'bg-white',
      ela: {
        day: 'Mondays',
        time: '4:00 PM - 5:00 PM',
        dates: 'March 8, 15, 22, 29 | April 5, 12',
      },
      math: {
        day: 'Wednesdays',
        time: '4:00 PM - 5:00 PM',
        dates: 'March 11, 18, 25 | April 1, 8, 15, 22, 29',
      },
    },
    {
      grade: 'Grades 5-6',
      color: 'bg-[#f7e0e0]',
      ela: {
        day: 'Tuesdays',
        time: '4:00 PM - 5:00 PM',
        dates: 'March 9, 16, 23, 30 | April 7, 14',
      },
      math: {
        day: 'Thursdays',
        time: '4:00 PM - 5:00 PM',
        dates: 'March 12, 19, 26 | April 2, 9, 16, 23, 30',
      },
    },
    {
      grade: 'Grades 7-8',
      color: 'bg-white',
      ela: {
        day: 'Mondays',
        time: '5:00 PM - 6:00 PM',
        dates: 'March 8, 15, 22, 29 | April 5, 12',
      },
      math: {
        day: 'Fridays',
        time: '5:00 PM - 6:00 PM',
        dates: 'March 13, 20, 27 | April 3, 10, 17, 24 | May 1',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="schedule" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0e1f3e] mb-3 sm:mb-4">
            Class Schedule
          </h2>
          <p className="text-base sm:text-lg text-[#0e1f3e]/80 max-w-3xl mx-auto px-4">
            Convenient after-school times designed to fit your schedule.
            Choose the grade group that matches your student.
          </p>
          <div className="mt-4 sm:mt-6 inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-[#f7e0e0] px-4 sm:px-6 py-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#ca3433]" />
              <span className="font-semibold text-sm sm:text-base text-[#0e1f3e]">
                6 Weeks ELA Review
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#0e1f3e]/20"></div>
            <div className="flex items-center space-x-2">
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-[#ca3433]" />
              <span className="font-semibold text-sm sm:text-base text-[#0e1f3e]">
                8 Weeks Math Review
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {schedules.map((schedule, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${schedule.color} rounded-2xl shadow-lg overflow-hidden border-2 border-[#0e1f3e]/10 hover:border-[#ca3433] transition-all duration-300 transform hover:scale-105`}
            >
              <div className="bg-[#0e1f3e] p-4 sm:p-6 text-center">
                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white">
                  {schedule.grade}
                </h3>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="bg-[#f7e0e0] rounded-xl p-4 sm:p-5">
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#ca3433]" />
                    <h4 className="font-poppins font-semibold text-base sm:text-lg text-[#0e1f3e]">
                      ELA Review
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#ca3433]" />
                      <span className="font-semibold text-[#0e1f3e]">
                        {schedule.ela.day}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#ca3433]" />
                      <span className="text-[#0e1f3e]">
                        {schedule.ela.time}
                      </span>
                    </div>
                    <p className="text-[#0e1f3e]/80 mt-2 leading-relaxed">
                      {schedule.ela.dates}
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#f7e0e0] rounded-xl p-4 sm:p-5">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-[#ca3433]" />
                    <h4 className="font-poppins font-semibold text-base sm:text-lg text-[#0e1f3e]">
                      Math Review
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#ca3433]" />
                      <span className="font-semibold text-[#0e1f3e]">
                        {schedule.math.day}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#ca3433]" />
                      <span className="text-[#0e1f3e]">
                        {schedule.math.time}
                      </span>
                    </div>
                    <p className="text-[#0e1f3e]/80 mt-2 leading-relaxed">
                      {schedule.math.dates}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
