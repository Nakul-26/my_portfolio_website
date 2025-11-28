import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          setFormStatus('success');
      }, (error) => {
          console.log(error.text);
          setFormStatus('error');
      });
    
    e.target.reset();
  };

  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Get in Touch</Card.Title>
              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message" name="message" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              {formStatus === 'success' && <Alert variant="success" className="mt-3">Message sent successfully!</Alert>}
              {formStatus === 'error' && <Alert variant="danger" className="mt-3">Failed to send message. Please try again later.</Alert>}
              {formStatus === 'sending' && <Alert variant="info" className="mt-3">Sending...</Alert>}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <p><strong>Email:</strong> nakul.b@example.com</p>
              <p><strong>Socials:</strong></p>
              <p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaGithub size={30} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} />
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
