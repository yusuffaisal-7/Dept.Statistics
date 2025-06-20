import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Calendar, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllBatches } from '../data/batchData';

const BatchInfo = () => {
  const navigate = useNavigate();
  const batches = getAllBatches();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBatches, setFilteredBatches] = useState(batches);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredBatches(batches);
    } else {
      const filtered = batches.filter(batch => 
        batch.name.toLowerCase().includes(term.toLowerCase()) || 
        batch.session.toLowerCase().includes(term.toLowerCase()) ||
        batch.advisor.toLowerCase().includes(term.toLowerCase()) ||
        batch.batchNo.toString().includes(term)
      );
      setFilteredBatches(filtered);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Batch Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Overview of all batches in the Department of Statistics at NSTU.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by batch number, name or session..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </motion.div>

        {/* Batch Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-center">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mr-4" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">{batches.reduce((acc, batch) => acc + batch.totalStudents, 0)}</h3>
              <p className="text-gray-600">Total Students</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-center">
            <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mr-4" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">{batches.length}</h3>
              <p className="text-gray-600">Total Batches</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex items-center">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-teal-600 mr-4" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">{batches[0].session.split('-')[0]} - Present</h3>
              <p className="text-gray-600">Academic Years</p>
            </div>
          </div>
        </motion.div>

        {/* Batches Table */}
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch No.</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Session</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Students</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Male</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Female</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Graduation Year</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch Advisor</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <motion.tbody 
                className="bg-white divide-y divide-gray-200"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredBatches.map((batch) => (
                  <motion.tr 
                    key={batch.id}
                    variants={item}
                    whileHover={{ backgroundColor: "#f9fafb", transition: { duration: 0.2 } }}
                  >
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{batch.batchNo}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{batch.name}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{batch.session}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {batch.totalStudents}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {batch.maleStudents}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {batch.femaleStudents}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {batch.graduationYear}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{batch.advisor}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <motion.button
                        onClick={() => navigate(`/batch-info/${batch.id}`)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Students
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BatchInfo;