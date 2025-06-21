import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, Users, Award, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Bot, MessageCircle, Sparkles, Zap, Brain, Send, MapPin, Phone, Mail, Facebook, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1920&q=80'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNextSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      goToNextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous slide
      goToPrevSlide();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section 
        className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
            }}
          />
        </AnimatePresence>
        
        {/* Overlay with less blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 to-teal-700/50"></div>
        
        {/* Slider Navigation */}
        <button 
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full text-white z-10 transition-all duration-200"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button 
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full text-white z-10 transition-all duration-200"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-3 sm:w-4' : 'bg-white/50'
              }`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex items-center h-full">
            <motion.div 
              className="text-white max-w-2xl mx-auto sm:mx-0 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                Welcome to the Department of Statistics
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
                Empowering future statisticians through excellence in education and research
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                <Link 
                  to="/about" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold inline-flex items-center justify-center w-full sm:w-auto text-sm sm:text-base transition-all duration-200"
                >
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Learn More
                </Link>
                <Link 
                  to="/faculty" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold inline-flex items-center justify-center w-full sm:w-auto text-sm sm:text-base transition-all duration-200"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Meet Our Faculty
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">400+</h3>
              <p className="text-sm sm:text-base text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">10</h3>
              <p className="text-sm sm:text-base text-gray-600">Faculty Members</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">85%</h3>
              <p className="text-sm sm:text-base text-gray-600">Employment Rate</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">9+</h3>
              <p className="text-sm sm:text-base text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About Our Department</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              The Department of Statistics at Noakhali Science and Technology University was established in 2014 
              with the vision of becoming a center of excellence in statistical education and research. Our department 
              offers comprehensive programs in statistical science, preparing students for careers in data analysis, 
              research, and various industries where statistical expertise is crucial.
            </p>
            <Link to="/about" className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center text-sm sm:text-base transition-colors duration-200">
              Learn More About Us
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ChiChat AI Assistant Section */}
      <section className="py-16 sm:py-20 bg-white text-gray-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-teal-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/10 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 sm:w-12 sm:h-12 bg-cyan-500/10 rounded-full animate-pulse delay-1500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-gray-800">Meet ChiChat</h2>
                  <p className="text-teal-600 text-sm sm:text-lg">Your AI Assistant</p>
                </div>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Experience the future of student support with ChiChat, our intelligent AI assistant powered by advanced machine learning. 
                Get instant answers about faculty, courses, research, and everything about our department.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Smart Knowledge Base</h3>
                    <p className="text-sm sm:text-base text-gray-600">Access comprehensive information about faculty, courses, and research</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Instant Responses</h3>
                    <p className="text-sm sm:text-base text-gray-600">Get real-time answers powered by Google's Gemini AI</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Interactive Experience</h3>
                    <p className="text-sm sm:text-base text-gray-600">Clickable links to faculty profiles and resources</p>
                  </div>
                </div>
              </div>

              <motion.button
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Trigger the chatbot to open
                  const chatButton = document.querySelector('[data-chat-trigger]') as HTMLElement;
                  if (chatButton) {
                    chatButton.click();
                  }
                }}
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Start Chatting with ChiChat</span>
              </motion.button>
            </motion.div>

            {/* Right Side - Digital Vector Art */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Chat Interface Vector */}
              <div className="relative">
                {/* Chat Window */}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">ChiChat</h3>
                      <p className="text-teal-600 text-sm">AI Assistant</p>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-start">
                      <div className="bg-teal-500/20 text-gray-800 p-3 rounded-2xl max-w-[80%]">
                        <p className="text-sm">Hello! How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gray-800 text-white p-3 rounded-2xl max-w-[80%]">
                        <p className="text-sm">Tell me about the faculty members</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-teal-500/20 text-gray-800 p-3 rounded-2xl max-w-[80%]">
                        <p className="text-sm">We have 13+ faculty members including Dr. Shohel Rana, Mimma Tabassum, and more. You can view their profiles for detailed information!</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input Bar */}
                  <div className="flex space-x-3">
                    <div className="flex-1 bg-gray-100 rounded-xl p-3">
                      <p className="text-gray-500 text-sm">Type your message...</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -right-8 w-16 h-16 border-2 border-teal-400/30 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Event 1: NSTU Research Fair 2025 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Research Fair"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">NSTU Research Fair 2025</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  Join us for the annual research fair showcasing innovative projects from all departments. The Department of Statistics will present cutting-edge statistical modeling and data visualization projects.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-teal-600 font-semibold">June 23, 2025</span>
                  <button className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center text-sm sm:text-base transition-colors duration-200">
                    Learn More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Event 2: NSTU Foundation Day */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="NSTU Birthday"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">NSTU Foundation Day Celebration</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  Celebrate the birth of Noakhali Science and Technology University! Join us for a day of festivities, cultural programs, and academic achievements showcasing our university's growth and excellence.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-teal-600 font-semibold">June 22, 2025</span>
                  <button className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center text-sm sm:text-base transition-colors duration-200">
                    Learn More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Event 3: World Statistics Day */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200 md:col-span-2 lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1523289333742-be1680c46d5e?auto=format&fit=crop&w=800&q=80"
                alt="Statistics Day"
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">World Statistics Day 2024</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  Celebrate the power of statistics in shaping our world! Join our department for workshops, seminars, and interactive sessions highlighting the importance of statistical literacy and data-driven decision making.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-teal-600 font-semibold">October 20, 2024</span>
                  <button className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center text-sm sm:text-base transition-colors duration-200">
                    Learn More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to connect? Reach out to us for any inquiries about our department, programs, or collaborations.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Department of Statistics<br />
                Bir Sreshtho Shahid Mohammad Ruhul Amin Auditorium, 2nd floor<br />
                NSTU, Noakhali-3814, Bangladesh
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                +880 1234567890<br />
                Sunday - Thursday<br />
                9:00 AM - 5:00 PM
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                statistics@nstu.edu.bd<br />
                We'll respond within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Have Questions?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're a prospective student, current student, or interested in collaboration, we're here to help. Send us a message and we'll get back to you as soon as possible.
              </p>
              <motion.button
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send us a Message</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facebook Highlight Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Stay Connected with Us</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Follow us on Facebook to stay updated with the latest news, events, and achievements from our department.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left Side - Facebook Preview */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 sm:p-6 flex flex-col justify-center">
                  <div className="text-center md:text-left">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3 sm:mb-4">
                      <Facebook className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Department of Statistics, NSTU</h3>
                    <p className="text-blue-100 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                      Join our Facebook community for updates on news, events, achievements, and networking opportunities.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs text-blue-100">
                      <li className="flex items-center space-x-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                        <span>Latest news and announcements</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                        <span>Upcoming events and seminars</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                        <span>Student achievements and research</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Side - Facebook Feed Preview */}
                <div className="p-4 sm:p-6 bg-gray-50">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Sample Facebook Post */}
                    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">Department of Statistics, NSTU</h4>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                        🎉 Congratulations to our students who participated in the National Statistics Competition! Your hard work and dedication make us proud! 📊✨
                      </p>
                      <div className="bg-gray-100 rounded-lg p-2">
                        <p className="text-xs text-gray-600">📈 45 likes • 12 comments • 8 shares</p>
                      </div>
                    </div>
                  </div>

                  {/* Facebook Follow Button */}
                  <motion.button
                    className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://www.facebook.com/statistics.nstu', '_blank')}
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Follow Us on Facebook</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;