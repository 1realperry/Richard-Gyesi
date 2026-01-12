import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, ExternalLink, ArrowUpRight, X, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { campaigns } from '../data/portfolioData';
import './Campaigns.css';

const Campaigns = () => {
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    const openModal = (campaign) => {
        setSelectedCampaign(campaign);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCampaign(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="campaigns" className="campaigns-section">
            <div className="container campaigns-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title"><span>04.</span> Selected Campaigns</h2>
                </motion.div>

                <div className="campaigns-grid">
                    {campaigns.map((campaign, index) => (
                        <motion.div
                            key={index}
                            className="campaign-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            onClick={() => openModal(campaign)}
                        >
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <div className="card-header">
                                    <div className="folder-icon-wrapper">
                                        <Megaphone size={40} className="folder-icon" />
                                    </div>
                                    {campaign.isSample && (
                                        <span className="sample-badge">Sample Case Study</span>
                                    )}
                                </div>

                                <h3 className="campaign-title">
                                    {campaign.title}
                                    <ArrowUpRight className="title-arrow" size={18} />
                                </h3>
                                <p className="campaign-client">Client: {campaign.client}</p>
                                <p className="campaign-description">{campaign.description}</p>

                                <ul className="campaign-tech-list">
                                    {campaign.tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>

                                <button className="view-case-study-btn">
                                    View Case Study
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCampaign && (
                    <>
                        <motion.div
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        />
                        <motion.div
                            className="modal-container"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", damping: 25 }}
                        >
                            <div className="modal-content">
                                <button className="modal-close" onClick={closeModal}>
                                    <X size={24} />
                                </button>

                                <div className="modal-header">
                                    <h2>{selectedCampaign.title}</h2>
                                    <p className="modal-client">Client: {selectedCampaign.client}</p>
                                    {selectedCampaign.isSample && (
                                        <div className="sample-notice">
                                            ⚠️ Sample Case Study — Edit with real metrics
                                        </div>
                                    )}
                                </div>

                                <div className="modal-body">
                                    <div className="case-study-section">
                                        <div className="case-study-item">
                                            <div className="case-study-icon">
                                                <Target size={24} />
                                            </div>
                                            <div>
                                                <h3>Objective</h3>
                                                <p>{selectedCampaign.objective}</p>
                                            </div>
                                        </div>

                                        <div className="case-study-item">
                                            <div className="case-study-icon">
                                                <Lightbulb size={24} />
                                            </div>
                                            <div>
                                                <h3>Approach</h3>
                                                <p>{selectedCampaign.approach}</p>
                                            </div>
                                        </div>

                                        <div className="case-study-item">
                                            <div className="case-study-icon">
                                                <TrendingUp size={24} />
                                            </div>
                                            <div>
                                                <h3>Results</h3>
                                                <p>{selectedCampaign.results}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-tags">
                                        {selectedCampaign.tags.map((tag) => (
                                            <span key={tag} className="modal-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Campaigns;
