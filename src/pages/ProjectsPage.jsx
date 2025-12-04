import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaUnity, FaReact, FaNodeJs, FaDatabase, FaCode, FaGithub, FaExternalLinkAlt, FaJava, FaPython, FaJs, FaPalette } from 'react-icons/fa';
import { SiMongodb, SiGo, SiRedis, SiRabbitmq, SiDocker } from 'react-icons/si';

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

const initialProjects = [
  {
    title: "Unity 2D Game: 'Swordcraft'",
    category: "Game Development",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Swordcraft+Game",
    technologies: ['Unity', 'C#', 'Paint'],
    description: "Developed an entire 2D game independently using C#. Handled all aspects including programming, debugging, asset creation, and gameplay design. Created visual assets using Ibis Paint and Paint, using online references for guidance. Gained strong skills in C# scripting, problem-solving, fixing syntax and runtime errors, and improved digital art abilities.",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Automated Timetable Generation",
    category: "Web Application",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Timetable+App",
    technologies: ['MERN Stack'],
    description: "Developed a complete web application independently using the MERN stack. Built the frontend in React, backend using Node.js and Express, and used MongoDB for scalable data management. Designed and implemented a backtracking-based algorithm for automated timetable creation. Strengthened full-stack web development skills, including API integration and database handling.",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "LeetCode Clone",
    category: "Web Application",
    imageUrl: "https://via.placeholder.com/400x300.png?text=LeetCode+Clone",
    technologies: ['React', 'Node.js', 'Go', 'Redis', 'RabbitMQ', 'Docker'],
    description: "Developing a scalable online coding judge platform inspired by LeetCode, with features for problem management, secure code execution, and result evaluation. Built using a React frontend, Node.js backend, and a Go-based judge service, supported by Redis and RabbitMQ for performance and asynchronous processing. Fully containerized with Docker for modular and production-ready deployment.",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Web Application: ERP Application",
    category: "Web Application",
    imageUrl: "https://via.placeholder.com/400x300.png?text=ERP+Application",
    technologies: ['MERN Stack'],
    description: "Developed a fully responsive frontend for an enterprise resource planning (ERP) system using React. Worked closely with a 3-member development team to design and implement key features and user interfaces. Utilized Git and GitHub for version control and efficient collaboration throughout the development cycle. Successfully deployed the frontend on Vercel, ensuring fast performance, scalability, and production-grade reliability.",
    githubLink: "#",
    liveLink: "#"
  }
];

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
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">Projects</h2>
      
      {/* Filter Buttons */}
      <div className="text-center mb-4">
        {filters.map(filter => (
          <Button 
            key={filter} 
            variant={activeFilter === filter ? 'primary' : 'outline-primary'} 
            onClick={() => handleFilter(filter)}
            className="me-2"
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
  );
};

export default ProjectsPage;