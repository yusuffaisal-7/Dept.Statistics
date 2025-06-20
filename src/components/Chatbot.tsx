import React, { useState } from 'react';
import { MessageCircle, Send, X, Loader2, Bot, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllFacultyMembers } from '../data/facultyData';

interface Message {
  text: string;
  isUser: boolean;
  isLoading?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hello! I'm ChiChat, your AI assistant for the Department of Statistics at NSTU. I can help you with information about our faculty, courses, research, publications, and more. How can I assist you today?", 
      isUser: false 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Get all faculty data for context
  const facultyMembers = getAllFacultyMembers();

  // Helper function to render clickable links in text
  const renderClickableLinks = (text: string) => {
    // Regular expression to find URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    // Regular expression to find profile links like /faculty/name
    const profileRegex = /\/faculty\/[^\s]+/g;
    
    let result = text;
    
    // Replace URLs with clickable links
    result = result.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1">${url} <ExternalLink className="w-3 h-3" /></a>`;
    });
    
    // Replace profile links with clickable links
    result = result.replace(profileRegex, (profilePath) => {
      return `<a href="${profilePath}" class="text-blue-600 hover:text-blue-800 underline">View Profile</a>`;
    });
    
    return result;
  };

  // Create comprehensive context about the department
  const createDepartmentContext = () => {
    const facultyInfo = facultyMembers.map(member => {
      const publications = member.publications?.map(pub => 
        `- ${pub.title} (${pub.year}) in ${pub.journal}`
      ).join('\n') || 'No publications listed';
      
      return `
Faculty Member: ${member.name}
Designation: ${member.designation}
Email: ${member.email || 'Not provided'}
Phone: ${member.phone || 'Not provided'}
Education: ${member.education?.join(', ') || 'Not provided'}
Research Interests: ${member.researchInterests?.join(', ') || 'Not provided'}
Profile Link: /faculty/${member.id}
Publications:
${publications}
`;
    }).join('\n\n');

    return `
DEPARTMENT OF STATISTICS - NOAKHALI SCIENCE AND TECHNOLOGY UNIVERSITY (NSTU)

Department Information:
- Established in 2014/2016
- Location: Bir Sreshtho Shahid Mohammad Ruhul Amin Auditorium, 2nd floor, NSTU, Noakhali-3814, Bangladesh
- Contact: statistics@nstu.edu.bd, Phone: +880 1234567890
- Office Hours: Sunday - Thursday: 9:00 AM - 5:00 PM

Academic Programs:
- Four-year B.Sc. (Honors) degree in Statistics
- Courses include: Demography, Regression and Modeling, Biostatistics, Econometrics, Bioinformatics, Data Mining, Mathematics, Economics, Computer Programming

Department Highlights:
- Average annual intake: ~50 undergraduate students
- 13+ faculty members
- 95% employment rate for graduates
- 9+ years of excellence in statistical education

Faculty Members and Their Details:
${facultyInfo}

Research Areas:
- Statistical Modeling and Analysis
- Time Series Analysis and Forecasting
- Biostatistics and Medical Research
- Machine Learning and Data Mining
- Quality Control and Industrial Statistics
- Survey Methodology and Official Statistics
- Bayesian Statistics and Computational Methods
- Multivariate Analysis and Bioinformatics

Career Prospects:
Graduates are prepared for careers in:
- Data Analysis and Research
- Government and Public Sector
- Healthcare and Medical Research
- Finance and Banking
- Academia and Education
- Industry and Manufacturing
- Environmental Statistics
- Social Research and Demographics

Chairman: Mamun Mia (Associate Professor & Chairman)

RECENT EVENTS AND ACTIVITIES:
- Annual Statistics Day Celebration (October 20, 2024)
- International Year of Statistics and Data Science Symposium
- Student Research Presentation Competition
- Faculty Development Workshop on Modern Statistical Methods
- Alumni Meet and Career Guidance Session
- Department Picnic and Team Building Activities
- Statistical Software Training Workshop (R, Python, SPSS)
- Guest Lecture Series with Industry Experts

IMPORTANT DATES AND CELEBRATIONS:
- NSTU Foundation Day: June 22 (University Birthday)
- World Statistics Day: October 20 (Annual Celebration)
- International Day of Mathematics: March 14 (Pi Day)
- National Statistics Day: Various dates based on country
- International Year of Statistics: Celebrated throughout the year
- Data Science Day: Various events throughout the year

UPCOMING EVENTS:
- NSTU Research Fair 2025: June 23, 2025
  * Location: NSTU Campus
  * Theme: "Innovation in Science and Technology"
  * Department of Statistics will showcase:
    - Statistical modeling projects
    - Data visualization displays
    - Research presentations
    - Interactive statistical demonstrations
    - Student project exhibitions
  * Open to all students, faculty, and visitors
  * Registration deadline: June 15, 2025

STATISTICAL DAYS AND CELEBRATIONS:
- World Statistics Day (October 20): Global celebration of statistics
- International Day of Mathematics (March 14): Pi Day celebration
- National Statistics Day: Country-specific celebrations
- International Year of Statistics: Extended celebrations
- Data Science Day: Modern statistical methods celebration
- Quality Month: Statistical quality control awareness
- Survey Day: Survey methodology appreciation

The department is committed to excellence in statistical education, research, and innovation, preparing students for the data-driven world with comprehensive theoretical foundations and practical applications.

WEBSITE DEVELOPMENT INFORMATION:
- Developer: Engineer Yusuf Faisal
- Company: Fox-men Studio (Launching Soon)
- Portfolio Website: https://yusuf-faisal.netlify.app/
- This website and ChiChat AI assistant were developed by Yusuf Faisal
- Fox-men Studio is a development company that will be launching soon
`;
  };

  const callGeminiAPI = async (userMessage: string) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const departmentContext = createDepartmentContext();
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are ChiChat, a helpful AI assistant for the Department of Statistics at Noakhali Science and Technology University (NSTU). 
              
              Here is comprehensive information about the department:
              ${departmentContext}
              
              Instructions:
              - Use ONLY the information provided above to answer questions
              - If asked about something not in the provided data, politely say you don't have that information
              - Be friendly, professional, and helpful
              - Keep responses concise but informative
              - If asked about faculty, provide their designation, research interests, and key publications
              - ALWAYS mention that users can view detailed faculty profiles by visiting the faculty page or clicking on faculty names
              - If asked about courses or programs, mention the B.Sc. (Honors) program and key subjects
              - If asked about contact information, provide the department email and location
              - When mentioning faculty members, suggest visiting their profile page for more detailed information
              - If asked about recent events, mention the latest activities and celebrations
              - If asked about upcoming events, highlight the NSTU Research Fair 2025 on June 23, 2025
              - If asked about statistical days, mention World Statistics Day (October 20), Pi Day (March 14), and other relevant celebrations
              - If asked about NSTU birthday, mention June 22 as the university foundation day
              - If asked about the website developer, creator, or who built this website, mention Engineer Yusuf Faisal, his company Fox-men Studio (launching soon), and his portfolio at https://yusuf-faisal.netlify.app/
              - If asked about ChiChat or the AI assistant, mention that it was developed by Yusuf Faisal as part of the website
              - When mentioning links, include the full URL so they can be made clickable
              
              User question: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid response format from API');
      }
      
      const aiResponse = data.candidates[0].content.parts[0].text;
      return aiResponse;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again later or contact the department directly at statistics@nstu.edu.bd";
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);

    // Add loading message
    setMessages(prev => [...prev, { text: '', isUser: false, isLoading: true }]);

    try {
      // Get AI response
      const aiResponse = await callGeminiAPI(userMessage);
      
      // Remove loading message and add AI response
      setMessages(prev => prev.filter(msg => !msg.isLoading).concat({ text: aiResponse, isUser: false }));
    } catch (error) {
      // Remove loading message and add error response
      setMessages(prev => prev.filter(msg => !msg.isLoading).concat({ 
        text: "I'm sorry, something went wrong. Please try again or contact the department at statistics@nstu.edu.bd", 
        isUser: false 
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        data-chat-trigger
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 z-40 border-2 border-white"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <Bot className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-black text-white p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ChiChat</h3>
                  <p className="text-gray-300 text-sm">AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      message.isUser
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-white text-gray-800 shadow-md border border-gray-200'
                    }`}
                  >
                    {message.isLoading ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                          <span className="text-gray-600">ChiChat is thinking...</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {!message.isUser && (
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                              <Bot className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-xs font-medium text-gray-500">ChiChat</span>
                          </div>
                        )}
                        <div 
                          className="text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ 
                            __html: renderClickableLinks(message.text) 
                          }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-200 bg-white rounded-b-2xl">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask ChiChat about faculty, courses, research..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50 text-sm"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-black text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;