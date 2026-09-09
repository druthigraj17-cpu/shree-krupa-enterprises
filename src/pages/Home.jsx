import { Link } from 'react-router-dom';
import { IMG, SITE } from '../data/site.js';
import { marqueeClients, references } from '../data/projects.js';
import { serviceTiles } from '../data/services.js';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';

const values = [
  { ic: '💡', h: 'Innovation', p: 'New technology applied to develop efficient, customized MEP solutions.' },
  { ic: '🏆', h: 'Excellence', p: 'High-quality services that boost our clients\' businesses.' },
  { ic: '🤝', h: 'Integrity', p: 'Transparent, ethical business practices in every project.' },
  { ic: '🦺', h: 'Safety', p: 'The safety of staff, clients and partners, per industry-approved protocols.' },
];

const tileImages = ['electrification', 'design', 'statutory', 'elv', 'ht', 'ups'];

const homeFaqs = [
  { q: 'What services does Shree Krupa Enterprises provide?', a: 'We provide comprehensive MEP services including internal and external electrification, design and engineering, statutory approvals (CEIG, ESCOMS, Fire Office, KSPCB), ELV works, HT power, AMC, energy audits and interior fit-outs.' },
  { q: 'Where is Shree Krupa Enterprises located?', a: 'We are based in Yelahanka, Bangalore, Karnataka. Our office is at #35, 1st Floor, 8th Main, Anantapur, Yelahanka, Bangalore - 560064.' },
  { q: 'What areas does Shree Krupa Enterprises serve?', a: 'We serve industrial and commercial companies across India, with our base in Yelahanka, Bangalore, Karnataka.' },
  { q: 'Does Shree Krupa handle commercial and industrial electrical works?', a: 'Yes. We handle turnkey electrification projects for commercial and industrial facilities — from design and installation to testing and commissioning, compliant with CEIG, NBC and IS/IEC codes.' },
  { q: 'What electrical products does Shree Krupa supply?', a: 'We supply APAR and KEI wires and cables, Luminous inverters and solar panels, Eaton and Schneider/Luminous UPS systems, inverter batteries, pumps, fans, lighting and solar water heaters.' },
  { q: 'How can I contact Shree Krupa for an electrical project?', a: 'You can call us at ' + SITE.phone1 + ', email ' + SITE.email + ' or visit our office in Yelahanka, Bangalore. Share your requirements and our team will provide a quotation.' },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.shreekrupaenterprise.in/#organization",
      "name": "Shree Krupa Enterprises",
      "url": "https://www.shreekrupaenterprise.in",
      "description": "Class-1 Licensed Electrical Contracting company delivering comprehensive MEP solutions — electrical, ELV, HT, UPS, fire safety and facility management — across India since 2012.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#35, 1st Floor, 8th Main, Anantapur, Yelahanka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "telephone": SITE.phone1,
      "email": SITE.email,
      "foundingDate": "2012",
      "sameAs": []
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.shreekrupaenterprise.in/#localbusiness",
      "name": "Shree Krupa Enterprises",
      "parentOrganization": { "@id": "https://www.shreekrupaenterprise.in/#organization" },
      "url": "https://www.shreekrupaenterprise.in",
      "description": "Class-1 Licensed Electrical Contractor in Bangalore providing MEP services, electrical wires and cables, Luminous inverters, UPS systems and power backup solutions.",
      "image": "https://www.shreekrupaenterprise.in/images/4.jpg",
      "telephone": SITE.phone1,
      "email": SITE.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#35, 1st Floor, 8th Main, Anantapur, Yelahanka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "areaServed": ["Bangalore", "Karnataka", "India"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Electrical Services and Products",
        "itemListElement": [
          { "@type": "OfferCatalog", "name": "MEP Electrical Services" },
          { "@type": "OfferCatalog", "name": "Wires and Cables Supply" },
          { "@type": "OfferCatalog", "name": "Inverters, UPS and Power Backup" },
          { "@type": "OfferCatalog", "name": "ELV and Fire Safety Systems" }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.shreekrupaenterprise.in/#website",
      "name": "Shree Krupa Enterprises",
      "url": "https://www.shreekrupaenterprise.in",
      "publisher": { "@id": "https://www.shreekrupaenterprise.in/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.shreekrupaenterprise.in/#webpage",
      "name": "Shree Krupa Enterprises | Class-1 MEP Electrical Contractor Bangalore",
      "description": "Shree Krupa Enterprises is a Class-1 Licensed Electrical Contracting company delivering comprehensive MEP solutions across India since 2012.",
      "url": "https://www.shreekrupaenterprise.in",
      "isPartOf": { "@id": "https://www.shreekrupaenterprise.in/#website" },
      "about": { "@id": "https://www.shreekrupaenterprise.in/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shreekrupaenterprise.in/" }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO
        title="Class-1 MEP & Electrical Contractor in Bangalore"
        description="Shree Krupa Enterprises is a Class-1 Licensed Electrical Contractor in Bangalore providing MEP services, electrical wires and cables, Luminous inverters, UPS systems and power backup solutions across India since 2012."
        canonical="https://www.shreekrupaenterprise.in/"
        ogImage="https://www.shreekrupaenterprise.in/images/4.jpg"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">Symbol of Excellence · Est. 2012 · Yelahanka, Bangalore</span>
            <h1>Class-1 MEP & Electrical Contractor in Bangalore</h1>
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
                    <p style={{ color: 'var(--muted)', marginTop: 10 }}>We supply APAR and KEI wires and cables, Luminous inverters and batteries, Eaton and Schneider UPS systems, and complete power backup solutions for homes, offices and industrial facilities across Bangalore and Karnataka.</p>
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
                      <li>UPS Sales (Eaton · Schneider · Luminous)</li>
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

      {/* PRODUCTS HIGHLIGHT */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">Electrical Products</span><h2>Trusted brands, genuine products</h2></div>
            <p className="head-lead">We supply APAR and KEI wires, Luminous inverters and batteries, UPS systems, and power backup solutions for residential, commercial and industrial projects across Bangalore.</p>
          </div>
          <div className="tile-row tile-grid-2">
            <Reveal>
              <div className="tile">
                <h3>APAR Wires & Cables</h3>
                <p>House wiring, industrial cabling and power distribution — supplying APAR and KEI wires and cables across Bangalore.</p>
                <Link to="/products/apar-wires-cables" className="tile-link">View APAR Products &rarr;</Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="tile">
                <h3>Luminous Inverters & UPS</h3>
                <p>Luminous inverters, Eaton and Schneider UPS systems, and power backup solutions for homes, offices and commercial facilities.</p>
                <Link to="/products/luminous-inverters-batteries" className="tile-link">View Luminous Products &rarr;</Link>
              </div>
            </Reveal>
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-alt">
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
              <h2>Eaton, Schneider &amp; Luminous UPS systems</h2>
              <p style={{ color: 'var(--muted)', margin: '16px 0' }}>As an authorized channel partner for Eaton Powerware and Luminous/Schneider UPS, and a supplier of APAR wires and Luminous inverters, we recommend, supply and maintain the right electrical products for your project.</p>
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
          <FaqAccordion items={homeFaqs} />
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
