import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Building2, GraduationCap, Mail, Phone, Droplets, CalendarDays, Binary, ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { getFacultyMemberById } from '../data/facultyData';

const FacultyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const faculty = id ? getFacultyMemberById(id) : null;

  if (!faculty) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Faculty member not found</p>
        <button 
          onClick={() => navigate('/faculty')}
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
        >
          Back to Faculty List
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.button
            className="mb-6 flex items-center text-teal-600 hover:text-teal-800 font-medium"
            onClick={() => navigate('/faculty')}
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Faculty List
          </motion.button>
          
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header Section */}
            <div className="bg-teal-800 text-white p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <motion.img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.div 
                  className="text-center md:text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">{faculty.name}</h1>
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                    <Building2 className="w-5 h-5" />
                    <span className="text-lg md:text-xl">{faculty.designation}</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {faculty.education && (
                    <div>
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <GraduationCap className="w-6 h-6 mr-2 text-teal-600" />
                        Education
                      </h2>
                      <ul className="space-y-2">
                        {faculty.education.map((edu, index) => (
                          <motion.li 
                            key={index} 
                            className="text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                          >
                            {edu}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {faculty.researchInterests && (
                    <div>
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Binary className="w-6 h-6 mr-2 text-teal-600" />
                        Research Interests
                      </h2>
                      <ul className="space-y-2">
                        {faculty.researchInterests.map((interest, index) => (
                          <motion.li 
                            key={index} 
                            className="text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + (index * 0.1), duration: 0.3 }}
                          >
                            {interest}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>

                {/* Right Column */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      {faculty.email && (
                        <motion.div 
                          className="flex items-center space-x-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <a href={`mailto:${faculty.email}`} className="text-gray-700 hover:text-teal-600 break-all">
                            {faculty.email}
                          </a>
                        </motion.div>
                      )}
                      
                      {faculty.phone && (
                        <motion.div 
                          className="flex items-center space-x-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">{faculty.phone}</span>
                        </motion.div>
                      )}
                      
                      {faculty.bloodGroup && (
                        <motion.div 
                          className="flex items-center space-x-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Droplets className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">Blood Group: {faculty.bloodGroup}</span>
                        </motion.div>
                      )}
                      
                      {faculty.joiningDate && (
                        <motion.div 
                          className="flex items-center space-x-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CalendarDays className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">Joined: {new Date(faculty.joiningDate).toLocaleDateString()}</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Publications Section */}
              {faculty.publications && faculty.publications.length > 0 && (
                <motion.div 
                  className="mt-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <h2 className="text-xl font-semibold mb-6 flex items-center border-b pb-2">
                    <BookOpen className="w-6 h-6 mr-2 text-teal-600" />
                    Published Papers
                  </h2>
                  
                  <div className="space-y-6">
                    {faculty.publications.map((pub, index) => (
                      <motion.div 
                        key={pub.id}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + (index * 0.1), duration: 0.4 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      >
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">{pub.title}</h3>
                        <p className="text-gray-600 mb-2"><span className="font-medium">Authors:</span> {pub.authors}</p>
                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Published in:</span> {pub.journal}, {pub.year}
                        </p>
                        {pub.doi && (
                          <p className="text-gray-600 mb-2">
                            <span className="font-medium">DOI:</span> {pub.doi}
                          </p>
                        )}
                        {pub.url && (
                          <a 
                            href={pub.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-teal-600 hover:text-teal-800 mt-2"
                          >
                            View Publication <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;