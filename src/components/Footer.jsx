import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import resume from '../assets/NAKULB_1BY23CS132.pdf';
import './Footer.css';

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/nakulb26' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/nakul-b-a477b7294/' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-5 pb-3">
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} className="text-center">
                        <h4 className="mb-3">Ready to build something great?</h4>
                        <p className="lead mb-4">
                            Let's connect and turn your ideas into reality.
                        </p>
                        <div className="mb-4">
                            <Button
                                variant="primary"
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="lg"
                                className="me-3"
                            >
                                <FaFileDownload className="me-2" />
                                Download Resume
                            </Button>
                        </div>
                        <hr className="bg-secondary mb-4 mx-auto hr-footer" />
                        <div className="mb-4">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Connect on ${link.name}`}
                                    className="mx-3 footer-icon" 
                                >
                                    <link.icon size={30} /> 
                                </a>
                            ))}
                        </div>
                        <p className="small text-muted mb-0">
                            &copy; {currentYear} Nakul B. Built with React, ❤️, and lots of caffeine.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;