import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const categories = Object.keys(skillsByCategory);

    return (
        <section id="skills" className="skills-section">
            <div className="container skills-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>02.</span> Skills & Tools</h2>
                </motion.div>

                <div className="skills-content">
                    {categories.map((category, catIndex) => (
                        <div key={category} className="skills-category-group">
                            <motion.h3
                                className="category-title"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                            >
                                {category}
                            </motion.h3>

                            <div className="skills-grid">
                                {skillsByCategory[category].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <motion.div
                                                className="skill-bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
