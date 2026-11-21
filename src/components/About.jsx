import './About.css'
import { GraduationCap, Code2, Lightbulb } from 'lucide-react'

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">

                <div className="about-content">
                    <p className="section-subtitle">GET TO KNOW ME</p>

                    <h2 className="section-title">
                        About <span>Me</span>
                    </h2>

                    <p>
                        I'm a Software Engineering undergraduate at the
                        University of Westminster, studying at the
                        Informatics Institute of Technology (IIT). I have
                        a broad interest in software development, emerging
                        technologies, and building applications that solve
                        practical problems.
                    </p>

                    <p>
                        Throughout my academic journey, I've explored
                        different areas of development through hands-on
                        projects, including full-stack web applications,
                        mobile development, machine learning, and
                        accessibility-focused software. These experiences
                        have helped me develop my technical knowledge,
                        problem-solving abilities, and appreciation for
                        building software that makes a difference.
                    </p>

                    <p>
                        I'm always eager to learn, take on new challenges,
                        and grow as a software engineer.
                    </p>
                </div>

                <div className="about-highlights">
                    <div className="about-card">
                        <GraduationCap size={28} />
                        <h3>Education</h3>
                        <h4>BEng (Hons)</h4>
                        <p>Software Engineering</p>
                    </div>

                    <div className="about-card">
                        <Code2 size={28} />
                        <h3>Development</h3>
                        <h4>multiple Projects</h4>
                        <p>Academic and personal projects</p>
                    </div>

                    <div className="about-card">
                        <Lightbulb size={28} />
                        <h3>Mindset</h3>
                        <h4>Always Learning</h4>
                        <p>Exploring new technologies and ideas</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
