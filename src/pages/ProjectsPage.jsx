import React from 'react';
import { initialProjects } from '../data/projectsData';
import { FiArrowRight } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

// Helper to assign specific badge colors based on tech or category
const getBadgeClass = (category) => {
  if (category.includes('Game')) return 'badge-medium';
  if (category.includes('Platform') || category.includes('ERP') || category.includes('System')) return 'badge-primary';
  return 'badge-easy';
};

const ProjectsPage = () => {
  return (
    <div className="py-20">
      <div className="saas-container">
        
        <div className="mb-12">
          <h1 className="mb-4">Featured Projects</h1>
          <p className="text-lg" style={{ maxWidth: '600px' }}>
            Production-grade systems and platforms. Built with modern architectures, 
            focusing on scalability, performance, and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialProjects.map((project, index) => (
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
                {project.technologies.slice(0, 5).map(tech => (
                  <span key={tech} className="saas-badge badge-outline text-sm py-1 px-3">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="saas-badge badge-outline text-sm py-1 px-3">
                    +{project.technologies.length - 5}
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

      </div>
    </div>
  );
};

export default ProjectsPage;
