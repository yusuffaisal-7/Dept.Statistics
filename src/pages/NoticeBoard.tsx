import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Calendar, ExternalLink, AlertTriangle, FileText, ImageIcon, Star } from 'lucide-react';
import { getAllNotices, Notice } from '../data/noticeData';
import ImageModal from '../components/ImageModal';

const NoticeBoard = () => {
  const allNotices = getAllNotices();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNotices, setFilteredNotices] = useState<Notice[]>(allNotices);
  const [activeFilter, setActiveFilter] = useState<'all' | 'text' | 'image'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterNotices(term, activeFilter);
  };

  const handleFilterChange = (filter: 'all' | 'text' | 'image') => {
    setActiveFilter(filter);
    filterNotices(searchTerm, filter);
  };

  const filterNotices = (term: string, filter: 'all' | 'text' | 'image') => {
    let filtered = allNotices;
    
    if (filter !== 'all') {
      filtered = filtered.filter(notice => notice.type === filter);
    }
    
    if (term.trim() !== '') {
      filtered = filtered.filter(notice => 
        notice.title.toLowerCase().includes(term.toLowerCase()) || 
        notice.content.toLowerCase().includes(term.toLowerCase()) ||
        new Date(notice.date).toLocaleDateString().includes(term)
      );
    }
    
    setFilteredNotices(filtered);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500">
            Notice Board
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and crucial information from the Department of Statistics.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 mb-12 sticky top-24 z-30 backdrop-blur-sm bg-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-2/5">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notices by keyword, title, or date..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-xl">
              {[
                { label: 'All', value: 'all', icon: Bell },
                { label: 'Text', value: 'text', icon: FileText },
                { label: 'Image', value: 'image', icon: ImageIcon },
              ].map(filter => (
                <button 
                  key={filter.value}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter.value 
                      ? 'bg-teal-600 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-white hover:shadow-sm'
                  }`}
                  onClick={() => handleFilterChange(filter.value as 'all' | 'text' | 'image')}
                >
                  <filter.icon className="w-4 h-4" />
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Notices Grid */}
        <AnimatePresence>
          {filteredNotices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredNotices.map((notice) => (
                <motion.div 
                  key={notice.id}
                  variants={item}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group ${
                    notice.isImportant ? 'shadow-red-500/20 hover:shadow-red-500/40' : 'hover:shadow-xl'
                  }`}
                >
                  {notice.isImportant && (
                    <div className="absolute top-0 right-0 p-3 z-10">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Star className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                  {notice.type === 'image' && notice.imageUrl && (
                    <div 
                      className="relative h-56 cursor-pointer overflow-hidden"
                      onClick={() => setSelectedImage(notice.imageUrl)}
                    >
                      <img 
                        src={notice.imageUrl} 
                        alt={notice.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-4">
                      {notice.type === 'text' && (
                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                          <FileText className="w-6 h-6 text-teal-600" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{notice.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(notice.date)}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{notice.content}</p>
                    {notice.link && (
                      <a 
                        href={notice.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold group"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="col-span-full text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Notices Found</h3>
              <p className="text-gray-500">Your search for "{searchTerm}" did not match any notices.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <ImageModal
        imageUrl={selectedImage || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default NoticeBoard;