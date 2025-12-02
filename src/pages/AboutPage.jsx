import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { FaCode, FaReact, FaNodeJs, FaUnity, FaGit, FaGithub, FaAndroid, FaMicrosoft, FaUsers, FaComments, FaLightbulb, FaHandshake, FaGraduationCap, FaAward } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';
import './AboutPage.css';

const skills = {
    languages: [
        { name: 'C#', icon: <FaCode /> },
        { name: 'JavaScript', icon: <FaCode /> },
        { name: 'HTML', icon: <FaCode /> },
        { name: 'CSS', icon: <FaCode /> },
        { name: 'Python', icon: <FaCode /> }
    ],
    technologies: [
        { name: 'MERN Stack', icon: <FaReact /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <FaReact /> },
        { name: 'Unity', icon: <FaUnity /> }
    ],
    tools: [
        { name: 'Git', icon: <FaGit /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Android Studio', icon: <FaAndroid /> },
        { name: 'Visual Studio', icon: <FaMicrosoft /> }
    ],
    softSkills: [
        { name: 'Teamwork', icon: <FaUsers /> },
        { name: 'Communication', icon: <FaComments /> },
        { name: 'Adaptability', icon: <FaLightbulb /> },
        { name: 'Problem-solving', icon: <FaHandshake /> }
    ]
};

const journey = [
    {
        type: 'education',
        date: '2020-2022',
        title: 'Master of Science in Computer Science',
        subtitle: 'University of Example',
        description: 'Graduated with a focus on Artificial Intelligence and Machine Learning. My thesis was on the application of neural networks in natural language processing.',
        icon: <FaGraduationCap />
    },
    {
        type: 'achievement',
        date: '2021',
        title: 'First Place in Hackathon',
        description: 'Won first place in a 24-hour hackathon for developing a mobile application that helps users find nearby volunteering opportunities.',
        icon: <FaAward />
    },
    {
        type: 'education',
        date: '2016-2020',
        title: 'Bachelor of Science in Computer Science',
        subtitle: 'University of Example',
        description: 'Completed a comprehensive curriculum covering fundamental computer science concepts, including data structures, algorithms, and software engineering principles.',
        icon: <FaGraduationCap />
    },
    {
        type: 'achievement',
        date: '2019',
        title: 'Published Research Paper',
        description: 'Co-authored a research paper on the use of machine learning in financial forecasting, which was published in a peer-reviewed journal.',
        icon: <FaAward />
    },
    {
        type: 'achievement',
        date: '2018',
        title: 'Employee of the Month',
        description: 'Recognized for outstanding performance and contributions to the team.',
        icon: <FaAward />
    }
];

const AboutPage = () => {
    return (
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
                        Hello! I'm Nakul B, a software developer with a passion for building innovative and user-friendly applications. My journey in tech started with a curiosity for how things work, and it has since grown into a fulfilling career where I can solve problems and create meaningful experiences.
                    </p>
                    <p>
                        I specialize in front-end development with expertise in React, and I'm always eager to learn new technologies. I'm a firm believer in lifelong learning and constantly seek out opportunities to grow my skills. When I'm not coding, you can find me exploring the great outdoors, reading a good book, or experimenting with new recipes in the kitchen.
                    </p>
                </Col>
            </Row>

            {/* --- SKILLS SECTION --- */}
            <div className="mb-5">
                <h2 className="text-center mb-4">My Tech Stack</h2>
                <Row>
                    {Object.keys(skills).map(category => (
                        <Col md={6} key={category} className="mb-4">
                            <h4 className="text-capitalize mb-3">{category.replace(/([A-Z])/g, ' $1')}</h4>
                            <div>
                                {skills[category].map(skill => (
                                    <Badge pill bg="light" text="dark" key={skill.name} className="me-2 mb-2 p-2 skill-badge">
                                        {skill.icon} <span className="ms-1">{skill.name}</span>
                                    </Badge>
                                ))}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* --- JOURNEY/TIMELINE SECTION --- */}
            <div>
                <h2 className="text-center mb-5">My Journey</h2>
                <div className="timeline">
                    {journey.map((item, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <div className="timeline-icon">{item.icon}</div>
                                <div className="timeline-date">{item.date}</div>
                                <h5 className="fw-bold">{item.title}</h5>
                                <p className="text-muted mb-2">{item.subtitle}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AboutPage;