import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';
import { referees } from '../data/portfolioData';
import './Referees.css';

const Referees = () => {
    return (
        <section id="referees" className="referees-section">
            <div className="container referees-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>06.</span> Referees</h2>
                </motion.div>

                <div className="referees-grid">
                    {referees.map((referee, index) => (
                        <motion.div
                            key={referee.name}
                            className="referee-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="referee-icon-wrapper">
                                <User size={28} className="referee-icon" />
                            </div>
                            <div className="referee-info">
                                <h3 className="referee-name">{referee.name}</h3>
                                <p className="referee-role">{referee.role}</p>
                                <p className="referee-org">{referee.organization}</p>
                                {referee.note && (
                                    <p className="referee-note">{referee.note}</p>
                                )}
                            </div>
                            <div className="referee-contact">
                                <a href={`tel:${referee.phone}`} className="referee-contact-item">
                                    <Phone size={16} />
                                    <span>{referee.phone}</span>
                                </a>
                                <a href={`mailto:${referee.email}`} className="referee-contact-item">
                                    <Mail size={16} />
                                    <span>{referee.email}</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Referees;
