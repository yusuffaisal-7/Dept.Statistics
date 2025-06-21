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
      <div className="container mx-auto px-4 flex justify-between items-center py-3 md:py-4">
        {/* Logo and Brand */}
        <motion.div 
          className="flex items-center space-x-3 md:space-x-4"
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
          <div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight">Department of Statistics</h1>
            <p className="text-xs md:text-sm text-teal-100/90 font-medium">Noakhali Science and Technology University</p>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:shadow-md flex-shrink-0 z-20"
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

        {/* Desktop Navigation */}
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
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-teal-800 to-teal-600 z-10"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-4 pt-20 pb-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index + 0.2 } }}
                  exit={{ opacity: 0, y: -20, transition: { delay: 0.1 * (navItems.length - index) } }}
                  whileHover={{ scale: 1.05, x: 0 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-4/5"
                >
                  <Link 
                    to={item.to} 
                    className={`px-6 py-4 rounded-xl transition-all duration-300 block font-medium text-center text-lg ${
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;