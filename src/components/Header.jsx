import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = ({ toggleTheme }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'scrolled' : ''}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Nakul B
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey={location.pathname}>
            <Nav.Link as={Link} to="/" href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/Nakul-26" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/nakul-b-60a3b2290/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </Nav.Link>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label=""
              onClick={toggleTheme}
              className="ms-3"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;