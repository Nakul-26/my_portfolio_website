import React from 'react';
import { Container, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Card>
        <Card.Body>
          <Card.Text>
            Hello! I'm Nakul B, a software developer with a passion for building innovative and user-friendly applications. My journey in tech started with a curiosity for how things work, and it has since grown into a fulfilling career where I can solve problems and create meaningful experiences.
          </Card.Text>
          <Card.Text>
            I specialize in front-end development with expertise in React, and I'm always eager to learn new technologies. I'm a firm believer in lifelong learning and constantly seek out opportunities to grow my skills.
          </Card.Text>
          <Card.Text>
            When I'm not coding, you can find me exploring the great outdoors, reading a good book, or experimenting with new recipes in the kitchen.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutPage;
