import './Hero.css'
import { ArrowDown, Download } from 'lucide-react'
import profilePic from '../assets/profile.jpg'

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-greeting">HELLO, I'M</p>

                <h1>
                    Anjana Rasindu Senevirathna<span>.</span>
                </h1>

                <h2>Software Engineering Student & Developer</h2>

                <p className="hero-description">
                    I'm passionate about building software solutions,
                    exploring new technologies, and turning ideas into
                    practical applications.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn-primary">
                        View My Projects <ArrowDown size={18} />
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1Z3qxMgpnowWRaN87DGNUrxVL7ptMmafu/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        Download CV <Download size={18} />
                    </a>

                    <a href="#contact" className="btn-secondary">
                        Contact Me
                    </a>
                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/RasinduSen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a href="#" aria-label="LinkedIn">
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-circle">
                    <img src={profilePic} alt="My profile picture" />
                    {/* <div className="hero-circle-dot"></div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero
