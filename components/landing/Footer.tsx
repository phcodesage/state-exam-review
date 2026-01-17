'use client';

import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1f3e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8 text-[#ca3433]" />
              <span className="font-poppins font-bold text-xl">
                Exceed Learning Center
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering students in grades 3-8 to excel on their state exams
              through expert instruction, comprehensive materials, and
              personalized attention.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: 'https://facebook.com/ExceedLearningCenter' },
                { icon: Instagram, href: 'https://instagram.com/exceed_learning_center/' },
                { icon: Linkedin, href: 'https://linkedin.com/company/exceed-learning-center-ny' },
                { icon: Youtube, href: 'https://youtube.com/@ExceedLearningCenterNY' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-[#ca3433] transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Schedule', href: '#schedule' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Main Website', href: 'https://www.exceedlearningcenterny.com/' },
                { name: 'Contact', href: 'https://www.exceedlearningcenterny.com/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/80 hover:text-[#ca3433] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#ca3433] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:ExceedLearningcenterNY@gmail.com"
                  className="text-white/80 hover:text-[#ca3433] transition-colors duration-200 break-all"
                >
                  ExceedLearningcenterNY@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#ca3433] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:+15162263114"
                    className="text-white/80 hover:text-[#ca3433] transition-colors duration-200"
                  >
                    (516) 226-3114
                  </a>
                  <a
                    href="tel:+17186831750"
                    className="text-white/80 hover:text-[#ca3433] transition-colors duration-200"
                  >
                    (718) 683-1750
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ca3433] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/Exceed+Learning+Center/@40.8289448,-73.80108,11z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#ca3433] transition-colors duration-200"
                >
                  1360 Willis Ave
                  <br />
                  Albertson, NY 11507
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Exceed Learning Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="https://www.exceedlearningcenterny.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ca3433] transition-colors duration-200"
              >
                Main Website
              </a>
              <a
                href="https://www.exceedlearningcenterny.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ca3433] transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
