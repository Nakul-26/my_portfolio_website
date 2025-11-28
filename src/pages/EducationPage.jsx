import React from 'react';
import { Container, Card } from 'react-bootstrap';

const EducationPage = () => {
  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">Education</h2>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Master of Science in Computer Science</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">University of Example</Card.Subtitle>
          <Card.Text>
            Graduated with a focus on Artificial Intelligence and Machine Learning. My thesis was on the application of neural networks in natural language processing.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Bachelor of Science in Computer Science</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">University of Example</Card.Subtitle>
          <Card.Text>
            Completed a comprehensive curriculum covering fundamental computer science concepts, including data structures, algorithms, and software engineering principles.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EducationPage;
