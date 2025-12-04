import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';
import './HomePage.css';

const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            delay: 0.2,
            staggerChildren: 0.3 
        } 
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const HomePage = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        background: {
            color: { value: 'transparent' },
        },
        particles: {
            color: { value: 'var(--particles-color)' }, 
            links: {
                color: 'var(--particles-color)',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 80,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: { opacity: 1 }
                }
            }
        },
    };

    return (
        <div className="home-page-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                className="particles-container"
            />
            
            <motion.div
                className="w-100 home-page-content"
                variants={heroVariants}
                initial="hidden"
                animate="visible"
            >
                <Container className="p-5">
                    <Row className="align-items-center">
                        <Col md={4} className="text-center mb-4 mb-md-0">
                            <motion.div variants={itemVariants}>
                                <Image 
                                    src={profileImage} 
                                    roundedCircle 
                                    fluid 
                                    className="shadow-lg border border-3"
                                    style={{ borderColor: 'var(--primary)' }}
                                />
                            </motion.div>
                        </Col>
                        
                        <Col md={8}>
                            <motion.h4 
                                className="fw-bold mb-1"
                                variants={itemVariants}
                                style={{ color: 'var(--primary)' }}
                            >
                                Hi, I'm Nakul B
                            </motion.h4>

                            <motion.h1 
                                className="display-2 fw-bolder mb-3"
                                variants={itemVariants}
                            >
                                Software Developer
                            </motion.h1>

                            <motion.p 
                                className="lead mb-4"
                                variants={itemVariants}
                            >
                                Fast-learning and motivated software developer with strong coding, teamwork, and time-management skills.
                            </motion.p>
                            
                            <motion.div variants={itemVariants}>
                                <Link to="/projects">
                                    <Button variant="primary" size="lg" className="me-3">
                                        View My Work
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button variant="outline-primary" size="lg">
                                        Contact Me
                                    </Button>
                                </Link>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    );
};

export default HomePage;
