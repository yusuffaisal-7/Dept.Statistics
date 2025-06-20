import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Users, UserCircle, UserCheck, MapPin } from 'lucide-react';
import { getBatchById, Student } from '../data/batchData';

const BatchStudents = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const batch = id ? getBatchById(parseInt(id)) : null;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(batch?.students || []);
  
  if (!batch) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Batch not found</p>
        <button 
          onClick={() => navigate('/batch-info')}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          Back to Batch List
        </button>
      </div>
    );
  }
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredStudents(batch.students);
    } else {
      const filtered = batch.students.filter(student => 
        student.name.toLowerCase().includes(term.toLowerCase()) || 
        student.rollId.toLowerCase().includes(term.toLowerCase()) ||
        student.gender.toLowerCase().includes(term.toLowerCase()) ||
        (student.homeDistrict && student.homeDistrict.toLowerCase().includes(term.toLowerCase()))
      );
      setFilteredStudents(filtered);
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
        <motion.button
          className="mb-6 flex items-center text-teal-600 hover:text-teal-800 font-medium"
          onClick={() => navigate('/batch-info')}
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Batch List
        </motion.button>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{batch.name} Students</h1>
          <p className="text-gray-600">
            Session: {batch.session} | Advisor: {batch.advisor} | Graduation Year: {batch.graduationYear}
          </p>
        </motion.div>
        
        {/* Search and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, roll ID, gender or district..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 rounded-lg shadow-md flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Users className="w-7 h-7 md:w-8 md:h-8 text-teal-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">{batch.totalStudents}</h3>
              <p className="text-gray-600 text-sm">Total Students</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 rounded-lg shadow-md flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <UserCheck className="w-7 h-7 md:w-8 md:h-8 text-teal-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">{filteredStudents.length}</h3>
              <p className="text-gray-600 text-sm">Showing Students</p>
            </div>
          </motion.div>
        </div>
        
        {/* Students Table */}
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll ID</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Home District</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
                </tr>
              </thead>
              <motion.tbody 
                className="bg-white divide-y divide-gray-200"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredStudents.map((student) => (
                  <motion.tr 
                    key={student.id}
                    variants={item}
                    whileHover={{ backgroundColor: "#f9fafb", transition: { duration: 0.2 } }}
                  >
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{student.rollId}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <UserCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${student.gender === 'Male' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
                        {student.gender}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 mr-1 flex-shrink-0" />
                        <span className="text-sm text-gray-500">{student.homeDistrict}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.email}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.phone}
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {student.bloodGroup}
                      </span>
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

export default BatchStudents;