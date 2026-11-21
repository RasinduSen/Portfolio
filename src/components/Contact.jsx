import {
    Mail,
    Phone,
    MapPin,
    Send,
    Code2,
    ExternalLink
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <div className="contact-heading">
                    <p className="section-subtitle">GET IN TOUCH</p>

                    <h2 className="section-title">
                        Let's <span>Connect</span>
                    </h2>

                    <p>
                        I'm always open to discussing new opportunities,
                        interesting projects, and ways to grow as a
                        software engineer. Feel free to reach out!
                    </p>
                </div>

                <div className="contact-content">

                    <div className="contact-details">
                        <a href="mailto:rasindusen7@gmail.com" className="contact-item">
                            <div className="contact-icon">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>rasindusen7@gmail.com</p>
                            </div>
                        </a>

                        <a href="tel:+94758809810" className="contact-item">
                            <div className="contact-icon">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+94 75 880 9810</p>
                            </div>
                        </a>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Galle, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-message">
                        <h3>Have a project or opportunity in mind?</h3>

                        <p>
                            Whether it's an internship opportunity,
                            collaboration, or just a conversation,
                            I'd be happy to hear from you.
                        </p>

                        <a
                            href="mailto:rasindusen7@gmail.com"
                            className="contact-button"
                        >
                            Send Me an Email
                            <Send size={18} />
                        </a>

                        <div className="contact-socials">
                            <a
                                href="https://github.com/RasinduSen"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub size={21} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/anjana-senevirathna-b5210729b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={21} />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact
