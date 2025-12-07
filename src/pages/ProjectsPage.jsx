import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaUnity, FaReact, FaNodeJs, FaCode, FaGithub, FaExternalLinkAlt, FaPalette } from 'react-icons/fa';
import { SiMongodb, SiGo, SiRedis, SiRabbitmq, SiDocker } from 'react-icons/si';
import { initialProjects } from '../data/projectsData';
import './ProjectsPage.css';
import './HomePage.css'; // For footer-divider style

const techIcons = {
  Unity: <FaUnity />,
  'C#': <FaCode />,
  Paint: <FaPalette />,
  React: <FaReact />,
  'Node.js': <FaNodeJs />,
  'MERN Stack': <FaReact />,
  Go: <SiGo />,
  Redis: <SiRedis />,
  RabbitMQ: <SiRabbitmq />,
  Docker: <SiDocker />,
  MongoDB: <SiMongodb />,
};

const ProjectsPage = () => {
    const [filteredProjects, setFilteredProjects] = useState(initialProjects);
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Web Application', 'Game Development'];
    
    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'All') {
            setFilteredProjects(initialProjects);
        } else {
            setFilteredProjects(initialProjects.filter(p => p.category === category));
        }
    };

  return (
    <>
      <Container fluid className="py-5">
        <h2 className="text-center mb-4">Projects</h2>
        
        {/* Filter Buttons */}
        <div className="text-center mb-4">
          {filters.map(filter => (
            <Button 
              key={filter} 
              variant="outline-primary"
              onClick={() => handleFilter(filter)}
              className={`btn-filter me-2 ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <Row>
          {filteredProjects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm project-card">
                <Card.Img variant="top" src={project.imageUrl} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <div className="mb-2">
                      {project.technologies.map((tech) => (
                          <Badge pill bg="secondary" key={tech} className="me-1">
                              {techIcons[tech]} {tech}
                          </Badge>
                      ))}
                  </div>
                  <Card.Text className="mt-2">
                      {project.description}
                  </Card.Text>
                  <div className="mt-auto pt-3">
                      <Button variant="dark" href={project.githubLink} target="_blank" className="me-2">
                          <FaGithub /> GitHub
                      </Button>
                      <Button variant="outline-dark" href={project.liveLink} target="_blank">
                          <FaExternalLinkAlt /> Live Demo
                      </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProjectsPage;