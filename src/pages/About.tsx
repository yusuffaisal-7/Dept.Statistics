import React from 'react';
import { BookOpen, Target, Award, Users, GraduationCap, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-800 text-white py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Our Department</h1>
          <p className="text-xl text-teal-100">Excellence in Statistical Education and Research</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Welcome to the Department of Statistics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Department of Statistics was established in 2016 and from then it successfully engaged in teaching and research activities. With an average annual intake of about 50 undergraduates students and it has 5 faculty positions in the department.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Department of Statistics offers the four-year B.Sc. (Honors) degree programme where students are taught courses in statistics (Demography, Regression and Modeling, Bio statistics, Econometrics, Bioinformatics, Data Mining etc.) and other basic sciences (mathematics, economics), computer programming as well as Bangladesh and Liberation War Studies and Bangla Language course.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Thus, the interest of statistical methods has increased significantly. In this age of information, generation of huge data facilitates to create immense opportunities for the statistics graduates. The Department of Statistics is working to address all these issues so that our students would be competent to not only nationally but also globally.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <BookOpen className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To provide excellence in statistical education and research</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Target className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be a leading center for statistical innovation and learning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">Excellence, Innovation, and Integrity in all we do</p>
            </div>
          </motion.div>
          
          {/* Department Highlights */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Department Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Users className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experienced Faculty</h3>
                  <p className="text-gray-700">
                    Our department boasts highly qualified faculty members with expertise in various statistical fields, dedicated to providing quality education and mentorship.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <GraduationCap className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Curriculum</h3>
                  <p className="text-gray-700">
                    Our curriculum is designed to provide a strong foundation in statistical theory while emphasizing practical applications and computational skills.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Research Opportunities</h3>
                  <p className="text-gray-700">
                    Students have opportunities to engage in research projects, working alongside faculty on real-world statistical problems and applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Career Prospects</h3>
                  <p className="text-gray-700">
                    Our graduates are well-prepared for careers in data analysis, research, government, healthcare, finance, and many other fields requiring statistical expertise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;