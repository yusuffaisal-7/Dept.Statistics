import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { getAllFacultyMembers } from '../data/facultyData';

const Faculty = () => {
  const navigate = useNavigate();
  const facultyMembers = getAllFacultyMembers();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = facultyMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (member.researchInterests && member.researchInterests.some(interest => 
      interest.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Background pattern */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Meet Our Faculty</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our department is proud to have a team of dedicated and experienced educators and researchers.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, designation, or research interest..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group relative"
                style={{ perspective: '1000px' }}
                onClick={() => navigate(`/faculty/${member.id}`)}
              >
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
                  whileHover={{
                    rotateY: 10,
                    boxShadow: '0px 20px 40px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                  <div className="aspect-w-4 aspect-h-5 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center flex-grow flex flex-col justify-between relative bg-white">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-teal-600 font-medium mb-4">{member.designation}</p>
                    </div>
                    <motion.button 
                      className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Profile
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white/50 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Faculty Found</h3>
              <p className="text-gray-500">Please try a different search term.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Faculty;