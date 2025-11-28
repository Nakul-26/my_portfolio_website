import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

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
            color: { value: "#0A192F" },
        },
        particles: {
            color: { value: "#64FFDA" }, 
            links: {
                color: "#64FFDA",
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
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            />
            
            <motion.div
                className="w-100"
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <Container className="p-5">
                    <Row className="align-items-center">
                        <Col md={4} className="text-center mb-4 mb-md-0">
                            <motion.div variants={itemVariants}>
                                <Image 
                                    src={profileImage} 
                                    roundedCircle 
                                    fluid 
                                    className="shadow-lg border border-3 border-info" 
                                />
                            </motion.div>
                        </Col>
                        
                        <Col md={8}>
                            <motion.h4 
                                className="text-info fw-bold mb-1"
                                variants={itemVariants}
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
                                Building scalable web applications with a focus on **performance** and **clean architecture** using React and Node.js.
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
