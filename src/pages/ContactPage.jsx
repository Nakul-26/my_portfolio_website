import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './ContactPage.css';
import './HomePage.css'; // For footer-divider style

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null);
  
  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // IMPORTANT: Replace with your own EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || userID === 'YOUR_USER_ID') {
      setFormStatus('error');
      console.error("EmailJS credentials are not set. Please update them in ContactPage.jsx");
      return;
    }

    emailjs.sendForm(serviceID, templateID, e.target, userID)
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
    <>
      <Container fluid className="contact-page-container">
        <h2 className="text-center mb-5">Get In Touch</h2>
        <Row className="justify-content-center">
          {/* --- CONTACT FORM --- */}
          <Col md={10} lg={6} className="mb-4">
            <div className="contact-form-section">
              <h4 className="mb-4">Send me a message</h4>
              <Alert variant="warning" className="emailjs-notice">
                <strong>Note:</strong> To enable email sending, please replace the placeholder credentials in <code>src/pages/ContactPage.jsx</code> with your own from EmailJS.
              </Alert>
              <Form onSubmit={sendEmail} className="mt-4">
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
                <Button variant="primary" type="submit" className="w-100 submit-btn" size="lg">
                  Send Message
                </Button>
              </Form>
              {formStatus === 'success' && <Alert variant="success" className="mt-3">Message sent successfully!</Alert>}
              {formStatus === 'error' && <Alert variant="danger" className="mt-3">Failed to send message. Please check your EmailJS credentials or try again later.</Alert>}
              {formStatus === 'sending' && <Alert variant="info" className="mt-3">Sending...</Alert>}
            </div>
          </Col>

          {/* --- CONTACT INFO --- */}
          <Col md={10} lg={4}>
            <div className="contact-info-section">
              <h4 className="mb-4">Contact Information</h4>
              <div className="contact-info-item">
                  <FaEnvelope size={24} />
                  <a href="mailto:1by23cs132@bmsit.in">1by23cs132@bmsit.in</a>
              </div>
              
              <hr className="my-4"/>

              <h5 className="mb-3">Find me on social media</h5>
              <div className="social-icons mb-4">
                  <a href="https://github.com/Nakul-26" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/nakul-b-60a3b2290/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                  </a>
                  <a href="https://twitter.comhttps://x.com/Nakulb137019" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                  </a>
              </div>

              <hr className="my-4"/>

              <h5 className="mb-3">Schedule a meeting</h5>
              <Button variant="outline-primary" href="#" target="_blank" size="lg" className="w-100">
                  <FaCalendarAlt className="me-2"/>
                  Book a Call (Calendly)
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;