import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const skills = {
  languages: ['C#', 'JavaScript', 'HTML', 'CSS', 'Python'],
  technologies: ['MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Unity'],
  tools: ['Git', 'GitHub', 'Android Studio', 'Visual Studio'],
  softSkills: ['Teamwork', 'Communication', 'Adaptability', 'Problem-solving']
};

const SkillsPage = () => {
  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">Skills</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Languages & Technologies</Card.Title>
              <hr />
              {skills.languages.map((skill, index) => (
                <Badge pill bg="primary" key={index} className="me-2 mb-2">{skill}</Badge>
              ))}
              <br />
              {skills.technologies.map((skill, index) => (
                <Badge pill bg="success" key={index} className="me-2 mb-2">{skill}</Badge>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Tools & Platforms</Card.Title>
              <hr />
              {skills.tools.map((skill, index) => (
                <Badge pill bg="info" key={index} className="me-2 mb-2">{skill}</Badge>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Soft Skills</Card.Title>
              <hr />
              {skills.softSkills.map((skill, index) => (
                <Badge pill bg="secondary" key={index} className="me-2 mb-2">{skill}</Badge>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsPage;
