import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/nakulb24' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/nakul-b-629676238/' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/nakulb24' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-5 pb-3">
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} className="text-center">
                        <p className="lead mb-4">
                            Ready to build something great? Let's connect!
                        </p>
                        <hr className="bg-secondary mb-4 mx-auto" style={{ width: '50%' }} />
                        <div className="mb-4">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Connect on ${link.name}`}
                                    className="mx-3 footer-icon-hover" 
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
