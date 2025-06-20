import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import chairmanImage from '../image/Mamun mia.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ChairmanMessage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex"
        >
          {/* Left Side: Image and Title */}
          <div className="md:w-1/3 bg-gradient-to-br from-[#126C65] to-[#0F8F84] text-white p-8 flex flex-col items-center justify-center">
            <motion.div 
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/80 shadow-lg mb-4"
              variants={itemVariants}
            >
              <img 
                src={chairmanImage} 
                alt="Department Chairman" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h3 className="text-2xl font-bold text-center" variants={itemVariants}>
              Mamun Mia
            </motion.h3>
            <motion.p className="text-white/80 text-center" variants={itemVariants}>
              Associate Professor & Chairman
            </motion.p>
          </div>

          {/* Right Side: Message */}
          <div className="md:w-2/3 p-8 md:p-12">
            <motion.div variants={containerVariants}>
              <motion.div className="flex items-start mb-6" variants={itemVariants}>
                <Quote className="w-16 h-16 text-gray-200 mr-4 flex-shrink-0 transform -scale-x-100" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Message from the Chairman</h1>
                  <p className="text-lg text-gray-500">Welcome to the Department of Statistics</p>
                </div>
              </motion.div>

              <motion.div className="prose max-w-none text-gray-600" variants={containerVariants}>
                <motion.p variants={itemVariants}>
                  It is my great pleasure to welcome you to the Department of Statistics at Noakhali Science and Technology University. 
                  Since our establishment in 2014, we have been dedicated to providing quality education and research opportunities in the field of statistics.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  In today's data-driven world, the role of statisticians has become increasingly important. Our department is committed to 
                  preparing students with the knowledge and skills needed to excel in this dynamic field. We offer a comprehensive curriculum 
                  that combines theoretical foundations with practical applications, ensuring our graduates are well-equipped for careers in 
                  academia, industry, government, and research institutions.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  Our faculty members are dedicated educators and active researchers who bring their expertise and passion into the classroom. 
                  We foster a supportive learning environment where students are encouraged to think critically, solve complex problems, and 
                  develop innovative approaches to statistical analysis.
                </motion.p>

                <motion.p variants={itemVariants}>
                  I invite you to explore our website to learn more about our academic programs, research activities, and the achievements of 
                  our faculty and students. Whether you are a prospective student, a current member of our community, or an interested visitor, 
                  I hope you find the information you seek.
                </motion.p>
              </motion.div>

              <motion.div className="mt-8 flex items-center" variants={itemVariants}>
                <img 
                  src="https://i.imgur.com/signature.png" 
                  alt="Chairman's Signature" 
                  className="h-16 mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">Mamun Mia</p>
                  <p className="text-sm text-gray-500">Chairman, Department of Statistics, NSTU</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChairmanMessage;