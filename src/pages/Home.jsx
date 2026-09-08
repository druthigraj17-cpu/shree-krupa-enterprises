import { Link } from 'react-router-dom';
import { IMG, SITE } from '../data/site.js';
import { marqueeClients, references } from '../data/projects.js';
import { serviceTiles } from '../data/services.js';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { faqs } from '../data/products.js';

const values = [
  { ic: '💡', h: 'Innovation', p: 'New technology applied to develop efficient, customized MEP solutions.' },
  { ic: '🏆', h: 'Excellence', p: 'High-quality services that boost our clients\' businesses.' },
  { ic: '🤝', h: 'Integrity', p: 'Transparent, ethical business practices in every project.' },
  { ic: '🦺', h: 'Safety', p: 'The safety of staff, clients and partners, per industry-approved protocols.' },
];

const tileImages = ['electrification', 'design', 'statutory', 'elv', 'ht', 'ups'];

export default function Home() {
  return (
    <>
      <SEO title="Class-1 MEP Electrical Contractor Bangalore" description="Shree Krupa Enterprises is a Class-1 Licensed Electrical Contracting company delivering comprehensive MEP solutions — electrical, ELV, HT, UPS, fire safety and facility management — across India since 2012." />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">Symbol of Excellence · Est. 2012</span>
            <h1>Reaching possibilities with expert MEP solutions.</h1>
            <p>We are a Class-1 Licensed Electrical Contracting company delivering end-to-end Mechanical, Electrical &amp; Plumbing services to India's most prominent enterprises — from design to commissioning.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              <Link to="/services" className="btn btn-outline">Explore Our Services &rarr;</Link>
            </div>
            <div className="pill-row">
              <span className="pill">Internal &amp; External Electrification</span>
              <span className="pill">ELV · Fire · CCTV · PAVA</span>
              <span className="pill">HT Power &amp; AMC</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hv-main"><img src={IMG.n4} alt="MEP team at work" /></div>
            <div className="hv-card hv-card-a"><CountUp className="hv-num" to={12} suffix="+" /><div className="hv-lbl">Years of Excellence</div></div>
            <div className="hv-card hv-card-b"><CountUp className="hv-num" to={450} suffix="+" /><div className="hv-lbl">Projects Delivered</div></div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="brand-strip">
        <div className="container">
          <p className="brand-label">Trusted by industry leaders</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...marqueeClients, ...marqueeClients].map((c, i) => (
                <div className="marquee-item" key={i}>{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Who We Are</span><h2>An MEP partner built on quality, safety &amp; innovation</h2></div>
            <p className="head-lead">Incorporated in Bangalore in 2012, we help prominent companies across India electrify, secure and manage their facilities — end to end.</p>
          </div>
          <Reveal>
            <div className="about-clip">
              <div className="about-inner">
                <div className="split">
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--teal-800)', marginBottom: 12 }}>Shree Krupa Enterprises</h3>
                    <p style={{ color: 'var(--muted)' }}>A Class-1 Licensed Electrical Contracting company that provides extensive services in the MEP (Mechanical, Electrical and Plumbing) segment. Our team believes in driving innovation and exceeding our clients' expectations across every touchpoint of the project lifecycle.</p>
                    <p style={{ color: 'var(--muted)', marginTop: 10 }}>We also extend financial support to charitable organizations, run tree-plantation drives around Bengaluru and conduct electrical fire-safety awareness programs in schools and colleges.</p>
                  </div>
                  <div>
                    <ul className="check-list">
                      <li>Internal &amp; External Electrification</li>
                      <li>Turnkey Project Management</li>
                      <li>Data &amp; Networking Works</li>
                      <li>Design &amp; Detailed Engineering</li>
                      <li>HT Power Sanction &amp; HT Works</li>
                      <li>AMC &amp; Facility Management</li>
                      <li>Electrical Safety &amp; Energy Audits</li>
                      <li>UPS Sales (Eaton · Schneider)</li>
                    </ul>
                    <Link to="/about" className="btn btn-primary" style={{ marginTop: 6 }}>More About Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES TILES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">What We Deliver</span><h2>Specialized MEP services, tailored to you</h2></div>
            <p className="head-lead">From a single audit to full-facility turnkey execution — one accountable partner across the entire MEP lifecycle.</p>
          </div>
          <div className="tile-row tile-grid-2">
            {serviceTiles.map((t, i) => (
              <Reveal key={i}>
                <div className="tile" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={IMG[tileImages[i]]} alt={t.title} style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, objectFit: 'cover', borderRadius: '0 16px 0 24px', opacity: 0.18 }} loading="lazy" />
                  <span className="tile-no">{t.no}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <Link to="/services" className="tile-link">View service &rarr;</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Why Choose Us</span><h2>The principles behind every project</h2></div>
            <p className="head-lead">Quality and safety through technical expertise and a client-centric approach — that is what sets our team apart.</p>
          </div>
          <div className="panel-row panel-row-2">
            {values.map((v, i) => (
              <Reveal key={i}>
                <div className="panel"><div className="panel-ic">{v.ic}</div><div><h3>{v.h}</h3><p>{v.p}</p></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="stat-band">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-cell"><CountUp className="snum" to={12} suffix="+" /><div className="slab">Years of Excellence</div></div>
            <div className="stat-cell"><CountUp className="snum" to={450} suffix="+" /><div className="slab">Projects Delivered</div></div>
            <div className="stat-cell"><CountUp className="snum" to={120} suffix="+" /><div className="slab">Enterprise Clients</div></div>
            <div className="stat-cell"><CountUp className="snum" to={24} suffix="/7" /><div className="slab">AMC Support</div></div>
          </div>
        </div>
      </section>

      {/* PARTNERS / QUOTE */}
      <section className="section">
        <div className="container">
          <div className="intro-split">
            <Reveal>
              <span className="eyebrow">Authorized Channel Partner</span>
              <h2>Eaton &amp; Schneider UPS systems</h2>
              <p style={{ color: 'var(--muted)', margin: '16px 0' }}>As an authorized channel partner for Eaton Powerware and Luminous/Schneider UPS, we recommend, supply and maintain the right power-protection products for your loads — single-phase or three-phase.</p>
              <Link to="/products" className="btn btn-primary">View Products</Link>
            </Reveal>
            <Reveal>
              <div className="quote-ribbon">"Our core strengths of delivering quality and safety through technical expertise set our team apart in the industry."<span>— Lokesh Rai, Director</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center"><span className="eyebrow">FAQs</span><h2 className="section-title">Frequently Asked Questions</h2></div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Ready to Get Started?</span>
          <h2>Let's Power Your Next Project</h2>
          <p>From a single UPS installation to full-facility MEP turnkey — our team is ready with a free consultation and site assessment.</p>
          <Link to="/contact" className="btn btn-primary">Talk to an Expert</Link>
          <a href={`tel:${SITE.phone1Tel}`} className="btn btn-outline" style={{ marginLeft: 8 }}>Call {SITE.phone1}</a>
        </div>
      </section>
    </>
  );
}
