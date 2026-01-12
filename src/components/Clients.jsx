import { motion } from 'framer-motion';
import { clients } from '../data/portfolioData';
import './Clients.css';

const Clients = () => {
    return (
        <section id="clients" className="clients-section">
            <div className="container clients-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>03.</span> Selected Clients & Brands</h2>
                    <p className="section-subtitle">
                        Trusted by leading brands and talented artists across diverse industries
                    </p>
                </motion.div>

                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            className="client-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className="client-content">
                                <span className="client-name">{client.name}</span>
                                <span className="client-type">{client.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
