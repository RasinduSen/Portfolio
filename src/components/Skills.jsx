import {
    Code2,
    Globe,
    Smartphone,
    Server,
    Database,
    BrainCircuit,
    Wrench
} from 'lucide-react'

import './Skills.css'

function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: Code2,
            skills: ['Python', 'Java', 'JavaScript']
        },
        {
            title: 'Frontend Development',
            icon: Globe,
            skills: ['HTML', 'CSS', 'React']
        },
        {
            title: 'Mobile Development',
            icon: Smartphone,
            skills: ['React Native']
        },
        {
            title: 'Backend Development',
            icon: Server,
            skills: ['Node.js', 'Express.js', 'REST APIs']
        },
        {
            title: 'Databases & ORM',
            icon: Database,
            skills: ['MySQL', 'Sequelize']
        },
        {
            title: 'Machine Learning & Computer Vision',
            icon: BrainCircuit,
            skills: ['OpenCV', 'PyTorch']
        },
        // {
        //     title: 'Frameworks & Tools',
        //     icon: Wrench,
        //     skills: ['PyQt5']
        // }
    ]

    return (
        <section className="skills" id="skills">
            <div className="skills-container">

                <div className="skills-heading">
                    <p className="section-subtitle">WHAT I WORK WITH</p>
                    <h2 className="section-title">
                        My <span>Skills</span>
                    </h2>
                    <p className="skills-description">
                        Technologies and tools I've explored and used
                        throughout my software development journey.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category) => {
                        const Icon = category.icon

                        return (
                            <div className="skill-card" key={category.title}>
                                <div className="skill-card-heading">
                                    <Icon size={24} />
                                    <h3>{category.title}</h3>
                                </div>

                                <div className="skill-list">
                                    {category.skills.map((skill) => (
                                        <span className="skill-tag" key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Skills
