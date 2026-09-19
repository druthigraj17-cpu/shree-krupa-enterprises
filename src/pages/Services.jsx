import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { IMG, SITE } from '../data/site.js';
import { services, processSteps } from '../data/services.js';

const pageTitle = 'MEP Electrical Services in Bangalore — Licensed Contractor | Shree Krupa Enterprises';
const pageDescription = 'Shree Krupa Enterprises provides MEP electrical services in Bangalore including electrification, HT works, ELV, UPS, AMC, testing and commissioning. Authorized APAR & Luminous dealer.';
const canonicalUrl = 'https://www.shreekrupaenterprise.in/services';

const indexItems = [
  '01 · APAR Wires & Luminous UPS',
  '02 · Electrification & Turnkey Projects',
  '03 · Design & Engineering',
  '04 · Statutory Approvals',
  '05 · Data & Networking',
  '06 · Safety & Energy Audits',
  '07 · ELV — Fire, CCTV, PAVA',
  '08 · HT Power & AMC',
];

const serviceFaqs = [
  { q: 'What does an MEP electrical contractor do?', a: 'An MEP electrical contractor handles the mechanical, electrical and plumbing aspects of building construction and renovation — including design, installation, testing and commissioning of electrical systems.' },
  { q: 'What MEP services does Shree Krupa Enterprises provide?', a: 'We provide comprehensive MEP services including internal and external electrification, design and engineering, statutory approvals (CEIG, ESCOMS, Fire Office, KSPCB), ELV works, HT power, AMC, energy audits and interior fit-outs.' },
  { q: 'Is Shree Krupa Enterprises a licensed electrical contractor?', a: 'Yes. Shree Krupa Enterprises is a Licensed Electrical Contracting company incorporated in Bangalore in 2012. We are also authorized APAR and Luminous dealers.' },
  { q: 'Does Shree Krupa handle HT and ELV electrical works?', a: 'Yes. We handle HT power sanctioning and HT works, as well as ELV systems including fire alarm, CCTV, PAVA and access control across Bangalore.' },
  { q: 'What is included in turnkey electrification?', a: 'Our turnkey electrification covers all phases of the project lifecycle — from planning and design of the electrical infrastructure to installation, testing and commissioning, compliant with CEIG, NBC and IS/IEC codes.' },
  { q: 'Does Shree Krupa handle statutory approvals?', a: 'Yes. We provide complete assistance for safety clearances from CEIG, ESCOMS, Fire Office and KSPCB, including document preparation, submission and follow-up.' },
  { q: 'Does Shree Krupa provide electrical AMC services?', a: 'Yes. We offer comprehensive electro-mechanical AMC and facility management contracts, plus electrical safety and energy audits for commercial and industrial facilities in Bangalore.' },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "MEP Electrical Services in Bangalore",
      "description": "Comprehensive MEP services including electrification, HT works, ELV, UPS, AMC, testing and commissioning in Bangalore. Also supply APAR wires and Luminous batteries.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Shree Krupa Enterprises — APAR & Luminous Dealer in Bangalore",
        "url": "https://www.shreekrupaenterprise.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "#35, 1st Floor, 8th Main, Anantapur, Yelahanka",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560064",
          "addressCountry": "IN"
        },
        "telephone": SITE.phone1,
        "areaServed": ["Bangalore", "Karnataka", "India"]
      },
      "serviceType": ["Electrical Contractor", "MEP Services", "HT Power Works", "ELV Systems", "AMC Services", "APAR Wires Dealer", "Luminous Battery Supplier"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shreekrupaenterprise.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": canonicalUrl }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": serviceFaqs.map(faq => ({
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

export default function Services() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogImage={IMG.electrification}
        ogType="website"
        jsonLd={jsonLd}
        keywords="MEP electrical services Bangalore, electrical contractor Bangalore, APAR wires dealer, Luminous battery supplier, HT power works, ELV systems, AMC services, Yelahanka electrical contractor, APAR cables, Luminous inverter"
      />

      <PageHero
        eyebrow="What We Offer"
        title="MEP Electrical Services in Bangalore"
        lead="A diverse selection of specialized MEP services, tailored to the different specifications of our clients. Licensed electrical contractor and authorized APAR & Luminous dealer based in Yelahanka, serving Bangalore and Karnataka."
        crumb="Services"
        asideTitle="Service index"
        asideItems={indexItems}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="MEP Solutions" title="Specialized services, tailored delivery" />
          {services.map((s, i) => (
            <div className="service-feature" key={i}>
              <div className="sf-img"><img src={IMG[s.image]} alt={s.alt} loading="lazy" /></div>
              <div className="sf-body">
                <span className="num-tag">SERVICE {s.no}</span>
                <h3>{s.title}</h3>
                {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                {s.bullets && (
                  <ul>{s.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Related Products" title="APAR wires, Luminous batteries & power backup in Bangalore" lead="Alongside our services, we are an authorized APAR wires dealer and Luminous battery supplier in Bangalore. Browse our full range of electrical products." />
          <div className="tile-row tile-grid-2">
            <Reveal>
              <div className="tile">
                <h3>APAR Wires & Cables — Authorized Dealer</h3>
                <p>House wiring, industrial cabling and power distribution — APAR E-Beam wires and cables across Bangalore. Get APAR wire prices.</p>
                <Link to="/products/apar-wires-cables" className="tile-link">View APAR Products &rarr;</Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="tile">
                <h3>Luminous Batteries & Inverters — Authorized Dealer</h3>
                <p>Luminous batteries, inverters, Eaton and Schneider UPS systems for homes and offices in Bangalore.</p>
                <Link to="/products/luminous-inverters-batteries" className="tile-link">View Luminous Products &rarr;</Link>
              </div>
            </Reveal>
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Custom Requirement?</span>
          <h2>We Engineer Solutions That Fit</h2>
          <p>Every facility is unique. Share your requirements and our engineers will architect the right MEP solution for your project. We also supply APAR wires and Luminous batteries.</p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Our Process" title="How we deliver" />
          <div style={{ maxWidth: 760, margin: '20px auto 0' }}>
            <div className="timeline">
              {processSteps.map((p, i) => (
                <Reveal key={i}>
                  <div className="timeline-item">
                    <div className="yr">{p.step}</div>
                    <h4>{p.title}</h4>
                    <p style={{ color: 'var(--muted)' }}>{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title">MEP Services — Common Questions</h2>
          </div>
          <FaqAccordion items={serviceFaqs} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Ready to Start?</span>
          <h2>Let's Discuss Your Project</h2>
          <p>Contact us for a free consultation and site assessment. We serve commercial and industrial clients across Bangalore and Karnataka. Also supply APAR wires and Luminous batteries.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          <a href={`tel:${SITE.phone1Tel}`} className="btn btn-outline" style={{ marginLeft: 8 }}>Call {SITE.phone1}</a>
        </div>
      </section>
    </>
  );
}
