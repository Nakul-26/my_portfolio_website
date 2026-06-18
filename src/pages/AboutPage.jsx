import React from 'react';
import { FiMonitor, FiServer, FiDatabase, FiShield, FiCheckCircle } from 'react-icons/fi';
// import profileImage from '../assets/image.png';

const capabilities = {
  "Frontend Architecture": ['React 19', 'TypeScript', 'Vite', 'Material UI', 'Tailwind CSS'],
  "Backend & APIs": ['Node.js', 'Express', 'FastAPI', 'REST', 'GraphQL'],
  "Core Systems": ['Go', 'Python', 'Java', 'C/C++'],
  "Databases": ['MongoDB', 'Redis', 'PostgreSQL'],
  "Infrastructure": ['Docker', 'RabbitMQ', 'Cloudinary', 'Git', 'Vercel']
};

const changelog = [
  {
    version: 'v2027.08',
    date: 'Expected Graduation',
    title: 'B.S. in Computer Science',
    details: 'BMSIT, Bangalore. GPA: 8.6/10.0. Core focus on Data Structures, Algorithms, and System Design.'
  },
  {
    version: 'v2024.11',
    date: 'Recent Deployment',
    title: 'Placement Assessment Microservice',
    details: 'Architected and launched a full-stack assessment platform featuring a Go-based judge service, Docker container pooling, and real-time RabbitMQ orchestration.'
  },
  {
    version: 'v2024.06',
    date: 'System Upgrade',
    title: 'Retail ERP & POS Integration',
    details: 'Shipped a comprehensive ERP solution with live inventory tracking, barcode scanning, and JWT-secured RBAC for shop operations.'
  },
  {
    version: 'v0.100.0',
    date: 'Milestone',
    title: 'Algorithmic Mastery',
    details: 'Successfully cleared 100+ complex problems on LeetCode, optimizing for time and space complexity.'
  }
];

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="saas-container">
        
        {/* Profile Overview */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20 pb-20" style={{ borderBottom: '1px solid var(--border)' }}>
          {/* <img 
            src={profileImage} 
            alt="Nakul B" 
            className="saas-avatar"
            style={{ width: '120px', height: '120px', borderRadius: '24px' }}
          /> */}
          <div style={{ maxWidth: '800px' }}>
            <h1 className="mb-4">System Administrator</h1>
            <p className="text-xl mb-6">
              I am a highly motivated software developer focusing on system architecture, algorithmic optimization, and building robust full-stack solutions. I organize my workflow like a production pipeline—prioritizing efficiency, security, and continuous deployment.
            </p>
            <div className="flex gap-4">
              <span className="saas-badge badge-easy flex items-center gap-2"><FiCheckCircle /> Status: Available</span>
              <span className="saas-badge badge-outline">Location: Bangalore</span>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20 pb-20" style={{ borderBottom: '1px solid var(--border)' }}>
          <h2 className="mb-8">System Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(capabilities).map(([category, skills]) => (
              <div key={category} className="saas-card" style={{ padding: '24px' }}>
                <h3 className="text-lg mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="saas-badge badge-outline text-sm py-1 px-3">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Changelog (Journey) */}
        <div>
          <h2 className="mb-8">Release Changelog</h2>
          <div className="flex flex-col gap-6">
            {changelog.map((log, index) => (
              <div key={index} className="saas-card flex flex-col md:flex-row gap-6 items-start" style={{ padding: '32px' }}>
                <div className="flex flex-col gap-1" style={{ minWidth: '150px' }}>
                  <span className="text-primary font-mono font-bold">{log.version}</span>
                  <span className="text-sm text-secondary">{log.date}</span>
                </div>
                <div>
                  <h3 className="text-xl mb-2">{log.title}</h3>
                  <p className="text-secondary m-0">{log.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
