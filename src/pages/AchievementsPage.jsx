import React from 'react';
import { Container, Card } from 'react-bootstrap';

const achievements = [
  {
    title: 'First Place in Hackathon',
    description: 'Won first place in a 24-hour hackathon for developing a mobile application that helps users find nearby volunteering opportunities.'
  },
  {
    title: 'Published Research Paper',
    description: 'Co-authored a research paper on the use of machine learning in financial forecasting, which was published in a peer-reviewed journal.'
  },
  {
    title: 'Employee of the Month',
    description: 'Recognized for outstanding performance and contributions to the team.'
  }
];

const AchievementsPage = () => {
  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">Achievements</h2>
      {achievements.map((achievement, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body>
            <Card.Title>{achievement.title}</Card.Title>
            <Card.Text>{achievement.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AchievementsPage;
