import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import AnimatedPage from './components/AnimatedPage';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme + '-mode';
  }, [theme]);

  return (
    <div className="app-container">
      <CustomCursor />
      <Header toggleTheme={toggleTheme} />
      <main className="content-wrap py-3">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
            <Route path="/education" element={<AnimatedPage><EducationPage /></AnimatedPage>} />
            <Route path="/skills" element={<AnimatedPage><SkillsPage /></AnimatedPage>} />
            <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
            <Route path="/achievements" element={<AnimatedPage><AchievementsPage /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
