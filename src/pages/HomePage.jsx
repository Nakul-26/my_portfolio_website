import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { initialProjects } from '../data/projectsData';
import cv from '../assets/NAKUL_1BY23CS132_BMSIT.pdf';

const getBadgeClass = (category) => {
  if (category.includes('Game')) return 'badge-medium';
  if (category.includes('Platform') || category.includes('ERP') || category.includes('System')) return 'badge-primary';
  return 'badge-easy';
};

const HomePage = () => {
  // Display only top 3 projects on home page
  const featuredProjects = initialProjects.slice(0, 3);

  return (
    <div className="py-20">
      <div className="saas-container">
        
        {/* Hero Section */}
        <div className="flex flex-col items-start mb-20 py-12" style={{ maxWidth: '800px' }}>
          <h1 className="mb-6" style={{ fontSize: '4.5rem', lineHeight: '1.1' }}>
            Nakul B.<br/>
            <span style={{ color: 'var(--text-secondary)' }}>Full Stack Engineer.</span>
          </h1>
          <p className="text-xl mb-12" style={{ maxWidth: '600px' }}>
            I build scalable microservices, robust ERPs, and high-performance assessment platforms. 
            Focused on secure architecture, intuitive UI, and optimal developer experience.
          </p>
          <div className="flex gap-4">
            <Link to="/projects" className="btn-primary">
              View Work <FiArrowRight size={18} />
            </Link>
            <a href={cv} download className="btn-secondary">
              Download CV
            </a>
          </div>
        </div>

        {/* Featured Projects Preview */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="mb-2">Featured Systems</h2>
            <p className="text-secondary">Recent production-grade platforms and applications.</p>
          </div>
          <Link to="/projects" className="font-semibold flex items-center gap-2 d-none md:flex">
            View all projects <FiArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div key={index} className="saas-card flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className={`saas-badge ${getBadgeClass(project.category)}`}>
                  {project.category.toUpperCase()}
                </span>
              </div>
              <h3 className="mb-3">{project.title}</h3>
              <p className="flex-grow mb-8 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="saas-badge badge-outline text-sm py-1 px-3">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="saas-badge badge-outline text-sm py-1 px-3">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
              <div className="mt-auto flex items-center gap-4">
                {project.liveLink !== '#' && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold flex items-center gap-2 text-primary-color"
                    style={{ width: 'max-content' }}
                  >
                    View Project <FiArrowRight size={16} />
                  </a>
                )}
                {project.githubLink !== '#' && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold flex items-center gap-2 text-secondary hover:text-white"
                    style={{ width: 'max-content', transition: 'color 0.2s' }}
                  >
                    GitHub <FaGithub size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex md:hidden justify-center">
          <Link to="/projects" className="btn-secondary w-full">
            View all projects
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
