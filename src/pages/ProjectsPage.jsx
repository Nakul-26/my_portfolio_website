import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUnity, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const techIcons = {
  Unity: <FaUnity />,
  'C#': <FaCode />,
  React: <FaReact />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Database: <FaDatabase />
};

const projects = [
  {
    title: "Unity 2D Game: 'Swordcraft'",
    technologies: ['Unity', 'C#'],
    duration: "6 months",
    description: "I worked on this game by myself, so I developed it myself compeletely. I used C# to code with little help from ChatGPT, ibis Paint on phone and paint on laptop to create assets, used existing assets from net as reference. I learnt C#, solve errors and bugs, syntax and runtime and improved my drawing skills.",
    link: "#"
  },
  {
    title: "Automated Timetable Generation",
    technologies: ['React', 'Node.js', 'MongoDB'],
    duration: "1 month",
    description: "I worked on this web application by myself, so I developed it myself compeletely. I used react to code with little help from ChatGPT, express and node for backend , and MongoDB for database. I learnt improved my skills in web development, and also worked on a backtracking algorithm to create timetables.",
    link: "#"
  }
];

const ProjectsPage = () => {
  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="me-2">{techIcons[tech]} {tech}</span>
                  ))}
                   | {project.duration}
                </Card.Subtitle>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">Go to Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsPage;
