import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border)', 
      padding: '40px 0', 
      marginTop: 'auto'
    }}>
      <div className="saas-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-primary-color flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Nakul.dev
            </span>
            <p className="text-sm" style={{ color: 'var(--text-secondary)', margin: 0 }}>
              © {new Date().getFullYear()} Nakul B. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Nakul-26" target="_blank" rel="noopener noreferrer" className="saas-icon-btn">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/nakul-b-60a3b2290/" target="_blank" rel="noopener noreferrer" className="saas-icon-btn">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:nakul123426@gmail.com" className="saas-icon-btn">
              <FaEnvelope size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
