import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const location = useLocation();

  return (
    <nav className="saas-navbar">
      <div className="saas-container">
        <div className="saas-nav-content">
          
          <Link to="/" className="font-bold text-xl text-primary-color flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Nakul.dev
          </Link>

          <div className="saas-nav-links d-none md:flex">
            {['/', '/about', '/projects', '/contact'].map((path) => {
              const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2);
              const isActive = location.pathname === path;
              return (
                <Link 
                  key={path} 
                  to={path} 
                  className={`saas-nav-link ${isActive ? 'active' : ''}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Nakul-26" target="_blank" rel="noopener noreferrer" className="saas-icon-btn d-none md:flex">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/nakul-b-60a3b2290/" target="_blank" rel="noopener noreferrer" className="saas-icon-btn d-none md:flex">
              <FaLinkedin size={18} />
            </a>
            <button className="saas-icon-btn flex md:hidden border-0">
              <FiMenu size={24} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
