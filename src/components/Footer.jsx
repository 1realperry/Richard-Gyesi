import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                {personalDetails.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.platform}
                        >
                            <Icon size={20} />
                        </a>
                    );
                })}
            </div>
            <p className="availability">
                🟢 Available for freelance projects and collaborations
            </p>
            <p className="copyright">
                © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
