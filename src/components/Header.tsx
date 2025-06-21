import logoimage from '../image/Logo.jpg';
import React from 'react';
import { Menu, X, Facebook, Youtube, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/chairman-message", label: "Chairman's Message" },
    { to: "/about", label: "About" },
    { to: "/faculty", label: "Faculty Members" },
    { to: "/seminar-library", label: "Seminar Library" },
    { to: "/batch-info", label: "Batch Info" },
    { to: "/notice-board", label: "Notice Board" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600 text-white sticky top-0 z-50 shadow-xl backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center space-x-3 md:space-x-4 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a href="https://nstu.edu.bd/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white p-1.5 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={logoimage} 
                  alt="NSTU Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">Department of Statistics</h1>
              <p className="text-xs sm:text-sm text-teal-100/90 font-medium">Noakhali Science and Technology University</p>
            </div>
          </motion.div>

          {/* Desktop Navigation - Now fills from the right */}
          <nav className="hidden lg:flex items-center justify-end flex-1 ml-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    className={`px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold relative overflow-hidden ${
                      isActive(item.to) 
                        ? 'bg-white/20 text-white shadow-lg' 
                        : 'hover:bg-white/10 hover:shadow-md'
                    }`}
                  >
                    {item.label}
                    {isActive(item.to) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Social media links are now in the footer */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:shadow-md flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="lg:hidden py-4 border-t border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      to={item.to} 
                      className={`px-4 py-3 rounded-xl transition-all duration-300 block font-medium ${
                        isActive(item.to) 
                          ? 'bg-white/20 text-white shadow-lg' 
                          : 'hover:bg-white/10 hover:shadow-md'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Social Links */}
              <motion.div 
                className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Social media links are now in the footer */}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;