import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Users, BookOpen, GraduationCap, MapPin } from 'lucide-react';
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ChairmanMessage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#126C65] to-[#0F8F84] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Message from the Chairman</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Welcome to the Department of Statistics at Noakhali Science and Technology University
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Chairman Profile Card */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8 mb-12"
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#126C65]/20 shadow-xl">
                    <img 
                      src={chairmanImage} 
                      alt="Department Chairman" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#126C65] rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="text-center lg:text-left flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Mamun Mia</h2>
                <p className="text-xl text-[#126C65] font-semibold mb-4">Assistant Professor and Chairman</p>
                <div className="w-20 h-1 bg-[#126C65] mx-auto lg:mx-0 mb-6"></div>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-[#126C65]" />
                    <span>Department of Statistics</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <MapPin className="w-4 h-4 text-[#126C65]" />
                    <span>NSTU, Noakhali</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Message */}
            <motion.div 
              className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8"
              variants={itemVariants}
            >
              <div className="flex items-start mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#126C65]/10 to-[#0F8F84]/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Quote className="w-8 h-8 text-[#126C65]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">A Personal Message</h3>
                  <p className="text-gray-600">Leading with Excellence in Statistical Education</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p className="text-lg">
                  It is my great pleasure to welcome you to the Department of Statistics at Noakhali Science and Technology University. 
                  Since our establishment in 2014, we have been dedicated to providing quality education and research opportunities in the field of statistics.
                </p>
                
                <p className="text-lg">
                  In today's data-driven world, the role of statisticians has become increasingly important. Our department is committed to 
                  preparing students with the knowledge and skills needed to excel in this dynamic field. We offer a comprehensive curriculum 
                  that combines theoretical foundations with practical applications, ensuring our graduates are well-equipped for careers in 
                  academia, industry, government, and research institutions.
                </p>
                
                <p className="text-lg">
                  Our faculty members are dedicated educators and active researchers who bring their expertise and passion into the classroom. 
                  We foster a supportive learning environment where students are encouraged to think critically, solve complex problems, and 
                  develop innovative approaches to statistical analysis.
                </p>

                <p className="text-lg">
                  I invite you to explore our website to learn more about our academic programs, research activities, and the achievements of 
                  our faculty and students. Whether you are a prospective student, a current member of our community, or an interested visitor, 
                  I hope you find the information you seek.
                </p>
              </div>
            </motion.div>

            {/* Sidebar Stats */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              {/* Department Stats */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Department Highlights</h4>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#126C65]/10 to-[#0F8F84]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-[#126C65]" />
                    </div>
                    <h5 className="font-bold text-gray-800 text-lg">11</h5>
                    <p className="text-sm text-gray-600">Faculty Members</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#126C65]/10 to-[#0F8F84]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-[#126C65]" />
                    </div>
                    <h5 className="font-bold text-gray-800 text-lg">50+</h5>
                    <p className="text-sm text-gray-600">Annual Students</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#126C65]/10 to-[#0F8F84]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-[#126C65]" />
                    </div>
                    <h5 className="font-bold text-gray-800 text-lg">95%</h5>
                    <p className="text-sm text-gray-600">Employment Rate</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-[#126C65] to-[#0F8F84] text-white rounded-3xl shadow-xl p-8">
                <h4 className="text-xl font-bold mb-6 text-center">Get In Touch</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-white/80" />
                    <span>Bir Sreshtho Shahid Mohammad Ruhul Amin Auditorium, 2nd floor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-white/80" />
                    <span>NSTU, Noakhali-3814, Bangladesh</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Academic Family</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the exciting opportunities that await you in the Department of Statistics. 
                We look forward to welcoming you to our academic family and supporting your journey toward excellence in statistical education and research.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChairmanMessage;