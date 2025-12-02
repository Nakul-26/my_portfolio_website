import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaUnity, FaReact, FaNodeJs, FaDatabase, FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const techIcons = {
  Unity: <FaUnity />,
  'C#': <FaCode />,
  React: <FaReact />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Database: <FaDatabase />
};

const initialProjects = [
  {
    title: "Swordcraft: A 2D RPG Adventure",
    category: "Game Development",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Swordcraft+Game",
    technologies: ['Unity', 'C#'],
    problem: "Solo-developing a 2D RPG required mastering a complete development lifecycle, from game mechanics and asset creation to bug resolution, within the Unity engine.",
    approach: "Leveraged C# for core gameplay logic, designed and created 2D assets using digital painting tools, and implemented core RPG features like combat, inventory, and dialogue systems.",
    outcome: "Successfully developed a playable game demo, demonstrating proficiency in C# and the Unity engine. This project honed my skills in problem-solving, asset creation, and end-to-end project management.",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Automated Timetable Generator",
    category: "Web Application",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Timetable+App",
    technologies: ['React', 'Node.js', 'MongoDB'],
    problem: "Manually creating complex academic timetables is time-consuming and prone to errors. The goal was to build a web application to automate this process.",
    approach: "Designed a MERN stack application with a React frontend for a dynamic user interface. The Node.js/Express.js backend implements a backtracking algorithm to solve scheduling constraints, and MongoDB stores course and schedule data.",
    outcome: "The application significantly reduces the time needed to create a valid timetable. It served as a strong practical exercise in full-stack development, algorithm design, and database management.",
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
                        <Badge pill bg="secondary" key={tech} className="me-1">{tech}</Badge>
                    ))}
                </div>
                <Card.Text className="mt-2">
                    <strong>Problem:</strong> {project.problem}
                </Card.Text>
                <Card.Text>
                    <strong>Outcome:</strong> {project.outcome}
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