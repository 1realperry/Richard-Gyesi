import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';
import './About.css';

const About = () => {
    // Placeholder profile image - update with Richard's actual photo URL
    const profileImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";

    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>01.</span> About Me</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>{personalDetails.about}</p>
                        <p>
                            My journey in digital marketing began with a passion for storytelling and connecting brands with their audiences.
                            Over time, I've honed my skills in content creation, social media strategy, and campaign management.
                        </p>
                        <p>
                            Today, I work with a diverse range of clients—from major betting platforms to acclaimed music artists—helping them
                            build their digital presence and achieve measurable results.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">10+</span>
                                <span className="highlight-label">Brands Served</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">50+</span>
                                <span className="highlight-label">Campaigns</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">3+</span>
                                <span className="highlight-label">Years Experience</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            className="profile-image-container"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={profileImageUrl}
                                alt="Richard Gyesi"
                                className="profile-image"
                            />
                            <div className="image-overlay"></div>
                            <div className="image-border"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
