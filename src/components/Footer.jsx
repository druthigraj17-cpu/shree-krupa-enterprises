import { Link } from 'react-router-dom';
import { SITE } from '../data/site.js';
import { IconFB, IconLI, IconIG } from './icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link
  to="/"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  }}
>
  <img
    src="/images/logo.jpeg"
    alt="Shree Krupa Enterprises"
    style={{
      width: "65px",
      height: "55px",
      objectFit: "contain",
      display: "block",
      borderRadius: "8px",
    }}
  />

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      lineHeight: "1.1",
    }}
  >
    <span
      style={{
        fontSize: "21px",
        fontWeight: "800",
        color: "#0a96ed",
        letterSpacing: "-0.3px",
      }}
    >
      Shree Krupa
    </span>

    <span
      style={{
        fontSize: "13px",
        fontWeight: "600",
        color: "#555",
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginTop: "5px",
      }}
    >
      Enterprises
    </span>
  </div>
</Link>
            <div className="footer-about">
            </div>
            <div className="social-row">
              <a href="#" aria-label="Facebook">{IconFB}</a>
              <a href="#" aria-label="LinkedIn">{IconLI}</a>
              <a href="#" aria-label="Instagram">{IconIG}</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/director-message">Director Message</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/projects">Projects</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a>
            <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <p style={{ marginTop: 8 }}>{SITE.address1}<br />{SITE.address2}</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} {SITE.legal}. All rights reserved. &nbsp;|&nbsp; <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
