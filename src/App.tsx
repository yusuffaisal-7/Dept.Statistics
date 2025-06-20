import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import FacultyProfile from './pages/FacultyProfile';
import Contact from './pages/Contact';
import SeminarLibrary from './pages/SeminarLibrary';
import BatchInfo from './pages/BatchInfo';
import BatchStudents from './pages/BatchStudents';
import ChairmanMessage from './pages/ChairmanMessage';
import NoticeBoard from './pages/NoticeBoard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/faculty/:id" element={<FacultyProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/seminar-library" element={<SeminarLibrary />} />
            <Route path="/batch-info" element={<BatchInfo />} />
            <Route path="/batch-info/:id" element={<BatchStudents />} />
            <Route path="/chairman-message" element={<ChairmanMessage />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;