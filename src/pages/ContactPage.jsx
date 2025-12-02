import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    /* 
      TODO: Replace with your own EmailJS credentials.
      1. Go to https://www.emailjs.com/
      2. Create an account and a new service (e.g., Gmail).
      3. Create a new email template.
      4. Get your Service ID, Template ID, and User ID from your EmailJS dashboard.
    */
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
      <h2 className="text-center mb-5">Get In Touch</h2>
      <Row>
        {/* --- CONTACT FORM --- */}
        <Col md={7} className="mb-4">
          <h4 className="mb-3">Send me a message</h4>
          <Form onSubmit={sendEmail}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" name="name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" name="email" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message..." name="message" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" size="lg">
              Send Message
            </Button>
          </Form>
          {formStatus === 'success' && <Alert variant="success" className="mt-3">Message sent successfully!</Alert>}
          {formStatus === 'error' && <Alert variant="danger" className="mt-3">Failed to send message. Please try again later.</Alert>}
          {formStatus === 'sending' && <Alert variant="info" className="mt-3">Sending...</Alert>}
        </Col>

        {/* --- CONTACT INFO --- */}
        <Col md={5}>
            <h4 className="mb-3">Contact Information</h4>
            <div className="d-flex align-items-center mb-3">
                <FaEnvelope size={20} className="me-3 text-primary" />
                <a href="mailto:nakul.b@example.com" className="text-decoration-none">nakul.b@example.com</a>
            </div>
            <hr/>
            <h5 className="my-3">Find me on social media</h5>
            <div className="mb-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="me-3 display-6">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3 display-6">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="display-6">
                    <FaTwitter />
                </a>
            </div>
            <hr/>
            <h5 className="my-3">Schedule a meeting</h5>
            <Button variant="outline-primary" href="#" target="_blank" size="lg">
                <FaCalendarAlt className="me-2"/>
                Book a Call (Calendly)
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;