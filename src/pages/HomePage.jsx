import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiRedis } from 'react-icons/si';
import profileImage from '../assets/profile.jpg';
import cv from '../assets/NAKULB_1BY23CS132.pdf';
import Footer from '../components/Footer';
import './HomePage.css';

const heroVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.2,
            staggerChildren: 0.3
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const skills = [
    { name: "Java", icon: <FaJava size={50} /> },
    { name: "Python", icon: <FaPython size={50} /> },
    { name: "JavaScript", icon: <FaJs size={50} /> },
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "Git", icon: <FaGit size={50} /> },
    { name: "GitHub", icon: <FaGithub size={50} /> },
    { name: "Docker", icon: <FaDocker size={50} /> },
    { name: "Redis", icon: <SiRedis size={50} /> },
];

const TypingEffect = ({ text, speed, eraseSpeed, eraseDelay, typingDelay }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % text.length;
            const fullText = text[i];

            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            );

            if (!isDeleting && displayedText === fullText) {
                setTimeout(() => setIsDeleting(true), eraseDelay);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? eraseSpeed : speed
        );

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, text, speed, eraseSpeed, eraseDelay]);

    return <span className="typing-effect">{displayedText}</span>;
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
            color: { value: 'var(--text-color)' },
            links: {
                color: 'var(--text-color)',
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
                value: 50,
            },
            opacity: { value: 0.3, anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 }, anim: { enable: true, speed: 2, size_min: 0.5 } },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: { opacity: 0.5 }
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
            <div className="scrollable-content">
                <motion.div
                    className="home-page-content"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Container fluid>
                        <Row className="align-items-center text-center">
                            <Col>
                                <motion.div variants={itemVariants} className="mb-4">
                                    <Image
                                        src={profileImage}
                                        roundedCircle
                                        width={150}
                                        height={150}
                                        className="shadow-lg border border-4"
                                        style={{ borderColor: 'var(--primary)' }}
                                    />
                                </motion.div>

                                <motion.h1
                                    className="display-4 fw-bold mb-3"
                                    variants={itemVariants}
                                >
                                    Hey, I'm <span style={{ color: 'var(--primary)' }}>Nakul B</span>
                                </motion.h1>

                                <motion.div variants={itemVariants} className="mb-4">
                                    <TypingEffect
                                        text={["Software Developer", "Full Stack Engineer", "Problem Solver"]}
                                        speed={100}
                                        eraseSpeed={50}
                                        eraseDelay={2000}
                                        typingDelay={500}
                                    />
                                </motion.div>

                                <motion.p
                                    className="lead mb-4"
                                    variants={itemVariants}
                                    style={{ maxWidth: '600px', margin: '0 auto' }}
                                >
                                    A passionate and creative developer focused on building beautiful and functional web applications.
                                </motion.p>

                                <motion.div variants={itemVariants} className="d-flex justify-content-center gap-3 mt-4">
                                    <Link to="/contact">
                                        <Button variant="primary" size="lg">
                                            Hire Me
                                        </Button>
                                    </Link>
                                    <a href={cv} download="NakulB_Resume.pdf">
                                        <Button variant="outline-light" size="lg">
                                            Download CV
                                        </Button>
                                    </a>
                                    <Link to="/projects">
                                        <Button variant="outline-light" size="lg">
                                            My Work
                                        </Button>
                                    </Link>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </motion.div>

                <motion.div
                    className="skills-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <Container>
                        <h2 className="text-center mb-5">My Skills</h2>
                        <Row className="justify-content-center">
                            {skills.map((skill, index) => (
                                <Col key={index} xs={4} md={2} className="text-center mb-4">
                                    <div className="skill-item">
                                        {skill.icon}
                                        <p className="mt-2">{skill.name}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </motion.div>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
