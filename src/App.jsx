import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AnimatedPage from './components/AnimatedPage';
import './App.css';
import './dark.css';

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
      <Header toggleTheme={toggleTheme} />
      <main className="content-wrap py-3">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><HomePage theme={theme} /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><AboutPage theme={theme} /></AnimatedPage>} />
            <Route path="/projects" element={<AnimatedPage><ProjectsPage theme={theme} /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><ContactPage theme={theme} /></AnimatedPage>} />
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
