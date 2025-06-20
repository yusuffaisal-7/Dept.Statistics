import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import siteLogo from '../image/Logo.jpg'; // Assuming Logo.jpg is the correct logo file

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div className="mb-6 md:mb-0 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={siteLogo} alt="Department Logo" className="h-10 w-10 mr-3 rounded-full"/>
              <span className="text-xl font-semibold text-white">Dept. of Statistics</span>
            </div>
            <p className="text-gray-400">
              Committed to excellence in statistical education, research, and innovation to empower future leaders.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/faculty" className="hover:text-teal-400 transition-colors">Faculty</Link></li>
              <li><Link to="/notice-board" className="hover:text-teal-400 transition-colors">Notices</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <p>NSTU, Noakhali-3814, Bangladesh</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <p>+880 123-456-7890</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <p>statistics@nstu.edu.bd</p>
              </div>
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/statistics.nstu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="https://www.youtube.com/@DepartmentofStatisticsNSTU" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors"><Youtube className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Department of Statistics, NSTU. All Rights Reserved.
          </p>
           <p className="text-gray-600 text-sm mt-2">
            Developed by <a href='https://yusuf-faisal.netlify.app/' target="_blank" rel="noopener noreferrer" className="font-medium text-teal-500 hover:text-teal-400 italic transition-colors">Foxmen Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;