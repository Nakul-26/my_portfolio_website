import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FaCode, FaReact, FaNodeJs, FaUnity, FaGit, FaGithub, FaAndroid, FaMicrosoft, FaBrain, FaProjectDiagram, FaUserFriends, FaRocket, FaBullseye, FaGraduationCap, FaAward, FaJava, FaPython, FaJs, FaLightbulb } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import './AboutPage.css';
import './HomePage.css'; // For footer-divider style

const services = [
    {
        title: 'Frontend Development',
        description: 'Crafting responsive and dynamic user interfaces with React, ensuring a seamless user experience across all devices.',
        icon: <FaReact size={40} className="mb-3" />
    },
    {
        title: 'Backend Development',
        description: 'Building robust and scalable server-side applications with Node.js and Express, with a focus on clean architecture.',
        icon: <FaNodeJs size={40} className="mb-3" />
    },
    {
        title: 'Game Development',
        description: 'Bringing creative ideas to life with Unity and C#, from initial concept to a fully playable game.',
        icon: <FaUnity size={40} className="mb-3" />
    }
];

const skills = {
    "Technical Skills": [
        { name: 'C/C++', icon: <FaCode /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'C#', icon: <FaCode /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MERN Stack', icon: <FaReact /> },
    ],
    "Tools & Platforms": [
        { name: 'Git', icon: <FaGit /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Android Studio', icon: <FaAndroid /> },
        { name: 'Unity', icon: <FaUnity /> },
        { name: 'Visual Studio Code', icon: <FaMicrosoft /> }
    ],
    "Core Concepts": [
        { name: 'Data Structures', icon: <FaBrain /> },
        { name: 'Algorithms', icon: <FaProjectDiagram /> },
        { name: 'Databases', icon: <FaCode /> },
        { name: 'Artificial Intelligence', icon: <FaLightbulb /> }
    ],
    "Professional Skills": [
        { name: 'Problem-Solving', icon: <FaBullseye /> },
        { name: 'Teamwork', icon: <FaUserFriends /> },
        { name: 'Adaptability', icon: <FaRocket /> },
    ],
};

const journey = [
    {
        type: 'education',
        date: 'Expected Graduation: Aug 2027',
        title: 'Bachelor of Science in Computer Science',
        subtitle: 'BMSIT, Bangalore, Karnataka',
        description: 'GPA: 8.6/10.0 | Relevant Coursework: Data Structures, Algorithms, Databases, Artificial Intelligence',
        icon: <FaGraduationCap />
    },
    {
        type: 'achievement',
        date: 'Ongoing',
        title: 'LeetCode: 100 problems solved',
        description: 'Completed 100 programming problems on LeetCode.',
        icon: <FaAward />
    },
    {
        type: 'achievement',
        date: 'Ongoing',
        title: 'Google ML crash course',
        description: 'Currently enrolled in the Google ML crash course.',
        icon: <FaAward />
    },
    {
        type: 'achievement',
        date: 'Ongoing',
        title: 'Apna College web dev course on YouTube',
        description: 'Following the Apna College web development course on YouTube.',
        icon: <FaAward />
    }
];

const hobbies = [
    { name: 'Cricket', icon: '🏏' },
    { name: 'Football', icon: '⚽' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Carrom', icon: '🎯' },
    { name: 'Reading Books', icon: '📚' },
    { name: 'Exploring Science & Tech', icon: '🔬' }
];

const AboutPage = () => {
    return (
        <>
            <Container fluid className="py-5">
                {/* --- ABOUT ME SECTION --- */}
                <Row className="align-items-center mb-5">
                    <Col md={4} className="text-center mb-4 mb-md-0">
                        <Image
                            src={profileImage}
                            roundedCircle
                            fluid
                            className="shadow-lg w-75"
                        />
                    </Col>
                    <Col md={8}>
                        <h2 className="mb-3">About Me</h2>
                        <p className="lead">
                        Fast-learning and motivated software developer with strong coding, teamwork, and time-management skills. Proactive in task organization and workflow planning, with a passion for continuous learning and building efficient software solutions. Seeking opportunities to contribute to impactful real-world projects and grow as a full-stack developer.
                        </p>
                    </Col>
                </Row>

                {/* --- WHAT I DO SECTION --- */}
                <div className="my-5">
                    <h2 className="text-center mb-5">What I Do</h2>
                    <Row>
                        {services.map((service, index) => (
                            <Col md={4} key={index} className="mb-4 text-center">
                                <Card className="h-100 p-4 shadow-sm service-card">
                                    {service.icon}
                                    <h4 className="fw-bold">{service.title}</h4>
                                    <p>{service.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* --- SKILLS SECTION --- */}
                <div className="my-5">
                    <h2 className="text-center mb-5">My Tech Arsenal</h2>
                    <Row>
                        {Object.keys(skills).map(category => (
                            <Col md={6} lg={3} key={category} className="mb-4">
                                <Card className="h-100 p-3 shadow-sm skills-card">
                                    <h5 className="text-center fw-bold mb-3">{category}</h5>
                                    {skills[category].map(skill => (
                                        <div key={skill.name} className="d-flex align-items-center mb-2">
                                            <span className="skill-icon me-2">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* --- JOURNEY/TIMELINE SECTION --- */}
                <div className="my-5">
                    <h2 className="text-center mb-5">My Journey</h2>
                    <div className="journey-timeline">
                        {journey.map((item, index) => (
                            <Card key={index} className="mb-4 shadow-sm journey-card">
                                <Card.Body>
                                    <div className="d-flex align-items-start">
                                        <div className="journey-icon-wrapper me-3">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-muted mb-1 fs-sm">{item.date}</p>
                                            <h5 className="fw-bold mb-1">{item.title}</h5>
                                            <p className="text-muted mb-2">{item.subtitle}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* --- HOBBIES SECTION --- */}
                <div className="my-5">
                    <h2 className="text-center mb-5">Beyond the Code</h2>
                    <Row className="justify-content-center">
                        {hobbies.map(hobby => (
                            <Col key={hobby.name} xs="auto" className="text-center mb-3">
                                <Card className="p-3 shadow-sm hobby-card">
                                    <span className="hobby-icon">{hobby.icon}</span>
                                    <span className="mt-2">{hobby.name}</span>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

            </Container>
        </>
    );
};

export default AboutPage;