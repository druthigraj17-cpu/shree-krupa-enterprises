import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { IMG, SITE } from '../data/site.js';

const pageTitle = 'APAR Wires & Cables in Bangalore | Shree Krupa Enterprises';
const pageDescription = 'Shree Krupa Enterprises supplies APAR wires and cables for house wiring, industrial cabling and power distribution projects across Bangalore. Class-1 electrical contractor since 2012.';
const canonicalUrl = 'https://www.shreekrupaenterprise.in/products/apar-wires-cables';

const faqs = [
  {
    q: 'What types of APAR wires does Shree Krupa Enterprises supply?',
    a: 'We supply APAR wires and cables for a range of applications including house wiring, industrial cabling and power distribution. Our team can help you select the right cable for your project requirements.',
  },
  {
    q: 'Which APAR wires are suitable for house wiring?',
    a: 'APAR house wiring cables include single-core and multi-core FR PVC insulated wires suitable for lighting circuits, power points and appliance connections in residential projects.',
  },
  {
    q: 'Do you supply APAR cables for industrial projects?',
    a: 'Yes. We provide APAR power and control cables suited for industrial electrification, HT substations and commercial facilities across Bangalore and Karnataka.',
  },
  {
    q: 'Can I get APAR wires for house wiring in Bangalore?',
    a: 'Yes. We supply APAR house wiring cables suitable for residential projects. Contact us with your requirements and our team will recommend the appropriate wire type and gauge.',
  },
  {
    q: 'Does Shree Krupa Enterprises supply other cable brands besides APAR?',
    a: 'Yes. Alongside APAR, we also supply KEI wires and cables, and can source other brands based on project specifications. We also supply Eaton and Schneider/Luminous UPS systems.',
  },
  {
    q: 'How do I request a quote for APAR wires and cables?',
    a: 'You can call us at ' + SITE.phone1 + ', email ' + SITE.email + ' or visit our office in Yelahanka, Bangalore. Share your project requirements and we will provide a quotation.',
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": pageTitle,
  "description": pageDescription,
  "url": canonicalUrl,
  "isPartOf": {
    "@type": "WebSite",
    "name": "Shree Krupa Enterprises",
    "url": "https://www.shreekrupaenterprise.in"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shreekrupaenterprise.in/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.shreekrupaenterprise.in/products" },
      { "@type": "ListItem", "position": 3, "name": "APAR Wires & Cables", "item": canonicalUrl }
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "APAR Wires & Cables",
    "description": "APAR wires and cables supplied by Shree Krupa Enterprises in Bangalore",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "APAR House Wiring Cables" },
      { "@type": "ListItem", "position": 2, "name": "APAR Power Cables" },
      { "@type": "ListItem", "position": 3, "name": "APAR Control Cables" },
      { "@type": "ListItem", "position": 4, "name": "APAR Industrial Cables" }
    ]
  }
};

export default function AparWiresCables() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogImage={IMG.apar}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Electrical Wires & Cables"
        title="APAR Wires & Cables in Bangalore"
        lead="Shree Krupa Enterprises supplies APAR wires and cables for residential, commercial and industrial projects across Bangalore. From house wiring to power distribution, we help you find the right cable for the job."
        crumb="APAR Wires & Cables"
        asideTitle="Product range"
        asideItems={[
          'House wiring cables',
          'Power cables',
          'Control cables',
          'Industrial cabling',
          'Single-core & multi-core',
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="About APAR"
            title="A trusted name in Indian wire manufacturing"
            lead="APAR Industries is one of India's largest wire and cable manufacturers, producing cables for power distribution, industrial infrastructure and residential wiring. Shree Krupa Enterprises supplies APAR products to projects across Bangalore and Karnataka."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>APAR wires are used in housing projects, commercial buildings, factories and substations. Their range covers everything from single-core house wiring cables to heavy-duty power cables for HT installations. When you need reliable cabling that meets Indian Standards, APAR is a go-to choice for contractors and project owners alike.</p>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>At Shree Krupa Enterprises, we help you select the right APAR cable for your application — whether it's a new house wiring job, an industrial power feed or a commercial distribution panel. We supply across Bangalore and can deliver to project sites across Karnataka.</p>
            </Reveal>
            <Reveal>
              <div className="product" style={{ maxWidth: 280, margin: '0 auto' }}>
                <div className="product-img" style={{ height: 180 }}>
                  <img src={IMG.apar} alt="APAR Wires and Cables logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 16 }} loading="lazy" />
                </div>
                <h4>APAR Wires & Cables</h4>
                <div className="brand">Available through Shree Krupa Enterprises</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Applications"
            title="What are APAR wires and cables used for?"
            lead="APAR wires and cables serve a wide range of electrical installations. Here are the common applications we supply for."
          />
          <div className="panel-row panel-row-2">
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏠</div>
                <div>
                  <h3>House Wiring</h3>
                  <p>Single-core and multi-core FR PVC insulated wires for residential electrical wiring — lighting circuits, power points and appliance connections.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏭</div>
                <div>
                  <h3>Industrial Cabling</h3>
                  <p>Power and control cables for factories, manufacturing plants and industrial facilities — designed for durability under continuous load.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">⚡</div>
                <div>
                  <h3>Power Distribution</h3>
                  <p>LT and HT power cables for substations, distribution panels and commercial buildings — connecting transformers to end loads.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏢</div>
                <div>
                  <h3>Commercial Projects</h3>
                  <p>Cabling for offices, retail spaces, hospitals and institutions — where reliable, long-life wiring reduces maintenance costs.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Why Shree Krupa"
            title="Your Bangalore electrical supplier"
            lead="We are a Class-1 Licensed Electrical Contractor based in Yelahanka, Bangalore. We supply APAR wires and cables alongside our full range of MEP services."
          />
          <div className="check-list" style={{ maxWidth: 700 }}>
            <li>Class-1 Licensed Electrical Contractor since 2012</li>
            <li>Based in Yelahanka, serving Bangalore and Karnataka</li>
            <li>Supply APAR wires and cables for residential, commercial and industrial projects</li>
            <li>Technical guidance on cable selection for your specific application</li>
            <li>Also supply KEI wires, Eaton UPS, Schneider/Luminous UPS and electrical tools — browse our <Link to="/products">electrical products in Bangalore</Link></li>
            <li>Full MEP services — from design to installation and commissioning</li>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title">APAR Wires & Cables — Common Questions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Need APAR Wires or Cables?</span>
          <h2>Get a Quote for Your Project</h2>
          <p>Tell us about your wiring requirements — project type, cable specifications and quantity. Our team will get back to you with pricing and availability.</p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          <a href={`tel:${SITE.phone1Tel}`} className="btn btn-outline" style={{ marginLeft: 8 }}>Call {SITE.phone1}</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Related"
            title="Explore more from Shree Krupa Enterprises"
            lead="We supply a range of electrical products and services beyond APAR cables."
          />
          <div className="tile-row tile-grid-2">
            <Reveal>
              <div className="tile">
                <h3>Luminous Inverters & UPS</h3>
                <p>Authorized channel partner for Eaton Powerware and Schneider/Luminous UPS systems — power backup solutions for homes and offices.</p>
                <Link to="/products/luminous-inverters-batteries" className="tile-link">View Luminous Products &rarr;</Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="tile">
                <h3>Electrical Services</h3>
                <p>Complete MEP services — internal and external electrification, HT power, ELV, AMC and statutory approvals across Bangalore.</p>
                <Link to="/services" className="tile-link">Our Services &rarr;</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
