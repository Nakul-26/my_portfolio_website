import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Nakul-26' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/nakul-b-60a3b2290/' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col md={4} className="footer-about mb-4 mb-md-0">
                        <h5>
                            <FaCode className="me-2" />
                            Nakul B's Portfolio
                        </h5>
                        <p>
                            A passionate and creative developer focused on building beautiful and functional web applications.
                        </p>
                    </Col>
                    
                    <Col md={{ span: 2, offset: 1 }} sm={6} xs={6} className="footer-links mb-4 mb-md-0">
                        <h6>Pages</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>

                    <Col md={2} sm={6} xs={6} className="footer-links mb-4 mb-md-0">
                        <h6>Contact</h6>
                        <ul className="list-unstyled">
                            <li><a href="mailto:nakul123426@gmail.com"><FaEnvelope className="me-2" />Email</a></li>
                        </ul>
                    </Col>

                    <Col md={3} className="footer-social">
                        <h6>Follow Me</h6>
                        <div className="d-flex">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Connect on ${link.name}`}
                                    className="social-icon"
                                >
                                    <link.icon size={28} />
                                </a>
                            ))}
                        </div>
                    </Col>
                </Row>
                <div className="footer-bottom text-center pt-4 mt-4">
                    <p className="small mb-0">&copy; {currentYear} Nakul B. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;