import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container services-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>02.</span> Core Services</h2>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className="service-icon-wrapper">
                                    <Icon size={32} className="service-icon" />
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
