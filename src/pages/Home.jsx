import { useState, useEffect } from 'react';
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
  { q: 'Is Shree Krupa Enterprises an authorized APAR dealer in Bangalore?', a: 'Yes. Shree Krupa Enterprises is an authorized distributor and dealer for APAR wires and cables in Bangalore. We supply APAR house wiring cables, power cables, control cables and industrial cabling across Bangalore and Karnataka.' },
  { q: 'Does Shree Krupa Enterprises sell Luminous batteries in Bangalore?', a: 'Yes. We are an authorized channel partner for Luminous/Schneider UPS systems and supply Luminous inverters, batteries and solar panels across Bangalore. Contact us for Luminous battery prices and installation.' },
  { q: 'What areas does Shree Krupa Enterprises serve?', a: 'We serve industrial and commercial companies across India, with our base in Yelahanka, Bangalore, Karnataka.' },
  { q: 'Does Shree Krupa handle commercial and industrial electrical works?', a: 'Yes. We handle turnkey electrification projects for commercial and industrial facilities — from design and installation to testing and commissioning, compliant with CEIG, NBC and IS/IEC codes.' },
  { q: 'What electrical products does Shree Krupa supply?', a: 'We supply APAR and KEI wires and cables, Luminous inverters, Eaton and Schneider/Luminous UPS systems, inverter batteries, pumps, fans, lighting and solar water heaters.' },
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
      "description": "Class-1 Licensed Electrical Contracting company and authorized APAR & Luminous dealer delivering comprehensive MEP solutions across India since 2012.",
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
      "sameAs": [
        SITE.social.facebook,
        SITE.social.linkedin,
        SITE.social.instagram
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.shreekrupaenterprise.in/#localbusiness",
      "name": "Shree Krupa Enterprises — APAR Dealer & Luminous Battery Supplier in Bangalore",
      "parentOrganization": { "@id": "https://www.shreekrupaenterprise.in/#organization" },
      "url": "https://www.shreekrupaenterprise.in",
      "description": "Authorized APAR wires & cables dealer and Luminous batteries, inverters & UPS distributor in Bangalore. Class-1 MEP electrical contractor since 2012.",
      "image": "https://www.shreekrupaenterprise.in/images/4.jpg",
      "telephone": SITE.phone1,
      "email": SITE.email,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#35, 1st Floor, 8th Main, Anantapur, Yelahanka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE.geo.latitude,
        "longitude": SITE.geo.longitude
      },
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "State", "name": "Karnataka" },
        { "@type": "Country", "name": "India" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Electrical Products and Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "APAR Wires and Cables",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "APAR House Wiring Cables", "brand": { "@type": "Brand", "name": "APAR" } } },
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "APAR Power Cables", "brand": { "@type": "Brand", "name": "APAR" } } },
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "APAR Control Cables", "brand": { "@type": "Brand", "name": "APAR" } } }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Luminous Power Backup Products",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Luminous Inverters", "brand": { "@type": "Brand", "name": "Luminous" } } },
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Luminous Batteries", "brand": { "@type": "Brand", "name": "Luminous" } } },
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Luminous/Schneider UPS", "brand": { "@type": "Brand", "name": "Luminous" } } },
              { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Luminous Solar Panels", "brand": { "@type": "Brand", "name": "Luminous" } } }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "MEP Electrical Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internal & External Electrification" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HT Power Works" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ELV Systems" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AMC & Facility Management" } }
            ]
          }
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
      "name": "APAR Wires & Cables, Luminous Batteries & UPS — Shree Krupa Enterprises Bangalore",
      "description": "Authorized APAR wires & cables dealer and Luminous batteries, inverters & UPS distributor in Bangalore. Class-1 MEP electrical contractor since 2012.",
      "url": "https://www.shreekrupaenterprise.in",
      "isPartOf": { "@id": "https://www.shreekrupaenterprise.in/#website" },
      "about": { "@id": "https://www.shreekrupaenterprise.in/#organization" },
      "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.shreekrupaenterprise.in/images/4.jpg" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shreekrupaenterprise.in/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": homeFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
};

export default function Home() {
  const heroImages = [
    { src: '/images/backgoround_image_1.jpeg', alt: 'Shree Krupa Enterprises electrical services in Bangalore' },
    { src: '/images/backgoround_image_2.jpeg', alt: 'APAR wires and Luminous batteries dealer Yelahanka' },
    { src: '/images/backgoround_image_3.jpg', alt: 'MEP electrical contractor office Bangalore' },
    { src: '/images/backgoround_image_4.jpg', alt: 'Luminous inverters and UPS systems supplier' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO
        title="APAR Office in Bangalore — Authorized APAR Dealer & Luminous Battery Supplier"
        description="Shree Krupa Enterprises is an authorized APAR wires & cables office in Bangalore and Luminous batteries, inverters & UPS distributor. Get APAR wire prices and Luminous battery quotes in Yelahanka, Bangalore."
        canonical="https://www.shreekrupaenterprise.in/"
        ogImage="https://www.shreekrupaenterprise.in/images/4.jpg"
        ogType="website"
        jsonLd={jsonLd}
        keywords="APAR office in Bangalore, APAR wires dealer Bangalore, APAR cables Bangalore, Luminous batteries, Luminous inverter Bangalore, Luminous battery price, electrical contractor Bangalore, MEP contractor Bangalore, Yelahanka electrical contractor, APAR E-Beam wires, Eaton UPS Bangalore, Schneider UPS Bangalore"
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">Authorized APAR & Luminous Dealer · Est. 2012 · Yelahanka, Bangalore</span>
            <h1>APAR Office in Bangalore — Authorized APAR Dealer & Luminous Battery Supplier</h1>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              <Link to="/products" className="btn btn-outline">View Products &rarr;</Link>
            </div>
            <div className="pill-row">
              <span className="pill">Luminous Batteries & Inverters</span>
              <span className="pill">APAR Wires & Cables</span>
              <span className="pill">Eaton & Schneider UPS</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hv-main" style={{ position: 'relative', height: '420px' }}>
              {heroImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    opacity: i === currentIndex ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                  }}
                >
                  <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
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
            <div><span className="eyebrow">Who We Are</span><h2>Authorized APAR Dealer & Luminous Battery Supplier in Bangalore</h2></div>
            <p className="head-lead">Incorporated in Bangalore in 2012, Shree Krupa Enterprises is an authorized APAR wires & cables distributor and Luminous batteries, inverters & UPS supplier — helping companies across India electrify, secure and manage their facilities.</p>
          </div>
          <Reveal>
            <div className="about-clip">
              <div className="about-inner">
                <div className="split">
                  <div>
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        color: 'var(--teal-800)',
                        marginBottom: 16,
                      }}
                    >
                      Shree Krupa Enterprises — APAR Office in Bangalore
                    </h3>

                    <p
                      style={{
                        color: 'var(--muted)',
                        margin: '0 0 16px 0',
                        lineHeight: '1.8',
                        textAlign: 'left',
                      }}
                    >
                      We are an <strong>Authorized Distributor of APAR Industries</strong> and a trusted <strong>APAR office in Bangalore</strong>,
                      specializing in <strong>E-Beam wires and cables</strong>. We supply APAR house wiring cables, power cables, control cables and industrial cabling
                      for residential, commercial and industrial projects across Bangalore and Karnataka.
                    </p>

                    <p
                      style={{
                        color: 'var(--muted)',
                        margin: '0 0 16px 0',
                        lineHeight: '1.8',
                        textAlign: 'left',
                      }}
                    >
                      As an authorized <strong>Luminous battery supplier in Bangalore</strong>, we provide a
                      comprehensive range of <strong>Luminous inverters, batteries, solar power
                        systems and power backup solutions</strong> for homes, offices and commercial facilities.
                    </p>

                    <p
                      style={{
                        color: 'var(--muted)',
                        margin: '0 0 16px 0',
                        lineHeight: '1.8',
                        textAlign: 'left',
                      }}
                    >
                      We are also a trusted channel partner for{' '}
                      <strong>Eaton Powerware UPS, Schneider Electric UPS</strong>{' '}
                      and other reputed electrical brands — your one-stop electrical products supplier in Bangalore.
                    </p>


                  </div>
                  <div>
                    <ul className="check-list">
                      <li>APAR Wires & Cables — Authorized Distributor</li>
                      <li>Luminous Batteries, Inverters & Solar</li>
                      <li>UPS Sales (Eaton · Schneider · Luminous)</li>
                      <li>Internal &amp; External Electrification</li>
                      <li>Turnkey Project Management</li>
                      <li>Data &amp; Networking Works</li>
                      <li>HT Power Sanction &amp; HT Works</li>
                      <li>AMC &amp; Facility Management</li>
                      <li>Electrical Safety &amp; Energy Audits</li>
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
            <div><span className="eyebrow">Electrical Products</span><h2>APAR wires, Luminous batteries & power backup in Bangalore</h2></div>
            <p className="head-lead">We are an authorized APAR wires & cables dealer and Luminous battery supplier in Bangalore. Get genuine APAR wire prices, Luminous inverter battery quotes and Eaton UPS systems for your project.</p>
          </div>
          <div className="tile-row tile-grid-2">
            <Reveal>
              <div className="tile">
                <h3>APAR Wires & Cables — Authorized Dealer in Bangalore</h3>
                <p>House wiring, industrial cabling and power distribution — APAR E-Beam wires, power cables and control cables. Get APAR wire prices in Bangalore.</p>
                <Link to="/products/apar-wires-cables" className="tile-link">View APAR Products &rarr;</Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="tile">
                <h3>Luminous Batteries, Inverters & UPS — Authorized Supplier</h3>
                <p>Luminous inverters, batteries, solar panels and Eaton/Schneider UPS systems. Get Luminous battery prices and power backup solutions.</p>
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
              <h2>APAR, Luminous, Eaton & Schneider — your electrical products partner in Bangalore</h2>
              <p style={{ color: 'var(--muted)', margin: '16px 0' }}>As an authorized APAR wires dealer, Luminous battery supplier and channel partner for Eaton Powerware and Luminous/Schneider UPS, we recommend, supply and maintain the right electrical products for your project. Visit our APAR office in Yelahanka, Bangalore for the best prices.</p>
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
          <h2>Get APAR Wires & Luminous Batteries in Bangalore</h2>
          <p>Visit our APAR office in Yelahanka, Bangalore or call us for APAR wire prices, Luminous battery quotes and power backup solutions. Free consultation and site assessment.</p>
          <Link to="/contact" className="btn btn-primary">Talk to an Expert</Link>
          <a href={`tel:${SITE.phone1Tel}`} className="btn btn-outline" style={{ marginLeft: 8 }}>Call {SITE.phone1}</a>
        </div>
      </section>
    </>
  );
}
