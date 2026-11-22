import {
    ExternalLink,
    Code2
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'
import say2checkImage from '../assets/Say2Check.png'
import studymateImage from '../assets/StudyMate.png'
import rescueRadarImage from '../assets/RescueRadar.png'

function Projects() {
    const projects = [
        {
            title: 'Say2Check',
            image: say2checkImage,
            category: 'Final Year Project',
            description:
                'A voice-controlled chess accessibility overlay designed to make online chess more accessible through speech recognition and machine learning.',
            technologies: [
                'Python',
                'PyQt5',
                'Speech Recognition',
                'OpenCV',
                'PyTorch'
            ],
            github: 'https://github.com/RasinduSen/Say2Check',
            demo: ''
        },
        {
            title: 'StudyMate',
            image: studymateImage,
            category: 'Full-Stack Web Application',
            description:
                'An AI-powered student productivity platform designed to help students organise academic assignments and study activities.',
            technologies: [
                'React',
                'Node.js',
                'Express.js',
                'MySQL',
                'Sequelize'
            ],
            github: 'https://github.com/RasinduSen/StudyMate',
            demo: ''
        },
        {
            title: 'Rescue Radar',
            image: rescueRadarImage,
            category: 'Mobile Application',
            description:
                'A disaster-reporting mobile application that allows users to capture and submit disaster photos while automatically notifying relevant authorities.',
            technologies: [
                'React Native',
                'Node.js'
            ],
            github: 'https://github.com/RasinduSen/Rescue-Radar-SE-70---Public',
            demo: ''
        }
    ]
    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                <div className="projects-heading">
                    <p className="section-subtitle">MY WORK</p>

                    <h2 className="section-title">
                        Featured <span>Projects</span>
                    </h2>

                    <p className="projects-description">
                        A selection of projects I've worked on,
                        exploring different areas of software development.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>

                            <div className="project-image">
                                <img src={project.image} alt={`${project.title} project preview`} />
                            </div>

                            <div className="project-content">
                                <span className="project-category">
                                    {project.category}
                                </span>

                                <h3>{project.title}</h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub size={18} />
                                            GitHub
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects
