import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header center"
                >
                    <h2 className="section-title"><span>07.</span> Get In Touch</h2>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="contact-intro">
                            I'm currently open to new opportunities and collaborations. Whether you need help with digital marketing,
                            content creation, or brand strategy, I'd love to hear from you!
                        </p>

                        <div className="contact-methods">
                            <a href={`mailto:${personalDetails.email}`} className="contact-method">
                                <Mail className="icon" size={24} />
                                <span>{personalDetails.email}</span>
                            </a>
                            <a href={`tel:${personalDetails.phone.replace(/\s/g, '')}`} className="contact-method">
                                <Phone className="icon" size={24} />
                                <span>{personalDetails.phone}</span>
                            </a>
                            <div className="contact-method">
                                <MapPin className="icon" size={24} />
                                <span>{personalDetails.location}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">
                                <User size={18} />
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                <Mail size={18} />
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">
                                <Phone size={18} />
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                <MessageSquare size={18} />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or inquiry..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            <Send size={18} />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
