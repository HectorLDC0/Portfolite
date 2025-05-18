import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-brand-section">
          <div className="footer-brand">
            <div className="footer-brand-name">Portfolite</div>
          </div>
          
        </div>
        
        <div className="footer-links-section">
          <div className="footer-links-grid">
            <div className="footer-link-column">
              <div className="footer-column-title">Explore</div>
              <a href="#xxx" className="footer-link">Features</a>
              <a href="#xxx" className="footer-link">Docs</a>
              <a href="#xxx" className="footer-link">Pricing</a>
              <a href="#xxx" className="footer-link">Security</a>
            </div>
            
            <div className="footer-link-column">
              <div className="footer-column-title">Comany</div>
              <a href="#xxx" className="footer-link">About Us</a>
              <a href="#xxx" className="footer-link">Contact</a>
              <a href="#xxx" className="footer-link">Support</a>
              <a href="#xxx" className="footer-link">News</a>
            </div>
            
            <div className="footer-link-column">
              <div className="footer-column-title">Legal</div>
              <a href="#xxx" className="footer-link">Imprint</a>
              <a href="#xxx" className="footer-link">Privacy Policy</a>
              <a href="#xxx" className="footer-link">Terms of Use</a>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <div className="footer-column-title">Newsletter</div>
            <p>Subscribe to our newsletter.</p>
            <form className="footer-newsletter-form">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
                autoComplete="off"
                required
              />
              <button type="submit" className="footer-newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      <div className="footer-copyright">© 2025 Portfolite - All rights reserved.</div>
    </div>
  );
};

export default Footer;