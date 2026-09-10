import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../data/site.js';
import { IconFB, IconLI, IconIG, IconWA } from './icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-contact">
          <div className="container header-contact-inner">
            <div className="hc-left">
              <a href={`tel:${SITE.phone1Tel}`}><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-.9-1-.9z"/></svg> {SITE.phone1}</a>
              <a href={`tel:${SITE.phone2Tel}`}><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-.9-1-.9z"/></svg> {SITE.phone2}</a>
              <a href={`mailto:${SITE.email}`}><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg> {SITE.email}</a>
            </div>
            <div className="hc-right">
              <a href="#" aria-label="Facebook">{IconFB}</a>
              <a href="#" aria-label="LinkedIn">{IconLI}</a>
              <a href="#" aria-label="Instagram">{IconIG}</a>
              <a href={`https://wa.me/${SITE.phone1Tel.replace('+', '')}`} aria-label="WhatsApp">{IconWA}</a>
            </div>
          </div>
        </div>
        <div className="container header-inner">
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
        color: "#1e7fee",
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
          <nav className={`nav ${open ? 'open' : ''}`} id="mainNav" aria-label="Main">
            <button className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
            {NAV.map((p) => (
              <NavLink key={p.to} to={p.to} end={p.to === '/'}>
                {p.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-primary nav-cta">Contact</Link>
          </nav>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </header>
    </>
  );
}
