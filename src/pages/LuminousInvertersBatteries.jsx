import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { IMG, SITE } from '../data/site.js';

const pageTitle = 'Luminous Inverters & Batteries in Bangalore | Shree Krupa Enterprises';
const pageDescription = 'Shree Krupa Enterprises supplies Luminous inverters, UPS systems and power backup solutions for homes, offices and commercial facilities across Bangalore. Class-1 electrical contractor since 2012.';
const canonicalUrl = 'https://www.shreekrupaenterprise.in/products/luminous-inverters-batteries';

const faqs = [
  {
    q: 'What Luminous products does Shree Krupa Enterprises supply?',
    a: 'We supply Luminous inverters, Luminous/Schneider UPS systems and solar panels. Our team can help you choose the right power backup solution for your home, office or commercial facility.',
  },
  {
    q: 'Which Luminous inverter is suitable for home power backup?',
    a: 'Luminous offers single-phase inverters suitable for apartments and villas, keeping lights, fans, refrigerators and Wi-Fi running during outages. Contact us with your load requirements for a recommendation.',
  },
  {
    q: 'What is the difference between an inverter and a UPS?',
    a: 'An inverter converts DC battery power to AC for your appliances with a slight delay. A UPS provides instant switchover with no delay — critical for computers, servers and sensitive electronics.',
  },
  {
    q: 'Is Shree Krupa Enterprises an authorized partner for Luminous?',
    a: 'Yes. We are an authorized channel partner for Luminous/Schneider UPS systems. We also supply Luminous inverters and solar panels for residential and commercial power backup needs.',
  },
  {
    q: 'Do you provide installation support for Luminous inverters and UPS?',
    a: 'Yes. We provide complete installation, testing and commissioning for Luminous UPS and inverter systems. We also offer Annual Maintenance Contracts (AMC) for ongoing support.',
  },
  {
    q: 'Do you supply inverter batteries as well?',
    a: 'Yes. We supply inverter batteries and can recommend the right battery type and capacity to pair with your Luminous inverter or UPS system.',
  },
  {
    q: 'How do I request a quote for a Luminous inverter or UPS?',
    a: 'You can call us at ' + SITE.phone1 + ', email ' + SITE.email + ' or visit our office in Yelahanka, Bangalore. Share your power backup requirements and we will provide a quotation.',
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
      { "@type": "ListItem", "position": 3, "name": "Luminous Inverters & Batteries", "item": canonicalUrl }
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Luminous Inverters, UPS & Batteries",
    "description": "Luminous power backup products supplied by Shree Krupa Enterprises in Bangalore",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Luminous Inverters" },
      { "@type": "ListItem", "position": 2, "name": "Luminous/Schneider UPS Systems" },
      { "@type": "ListItem", "position": 3, "name": "Inverter Batteries" },
      { "@type": "ListItem", "position": 4, "name": "Luminous Solar Panels" }
    ]
  }
};

export default function LuminousInvertersBatteries() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogImage={IMG.luminous}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Power Backup Solutions"
        title="Luminous Inverters & Batteries in Bangalore"
        lead="Shree Krupa Enterprises supplies Luminous inverters, UPS systems and power backup solutions for homes, offices and commercial facilities across Bangalore. Authorized channel partner for Luminous/Schneider UPS."
        crumb="Luminous Inverters & Batteries"
        asideTitle="Product range"
        asideItems={[
          'Luminous inverters',
          'Luminous/Schneider UPS',
          'Inverter batteries',
          'Solar panels',
          'AMC & support',
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="About Luminous"
            title="India's trusted power backup brand"
            lead="Luminous Power Technologies is one of India's largest manufacturers of inverters, UPS systems and batteries. Shree Krupa Enterprises supplies Luminous products across Bangalore and Karnataka, backed by professional installation and after-sales support."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>Power cuts are a reality across many parts of Bangalore and Karnataka. A reliable inverter or UPS system keeps your home, office or business running without disruption. Luminous has been a household name in Indian power backup for decades, offering a wide range of inverters, batteries and solar solutions.</p>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>At Shree Krupa Enterprises, we supply the full Luminous range — from single-phase home inverters to three-phase commercial UPS systems. We also supply Eaton Powerware UPS for larger installations. Our team helps you size the right system, handles installation, and provides ongoing maintenance through our AMC services.</p>
            </Reveal>
            <Reveal>
              <div className="product" style={{ maxWidth: 280, margin: '0 auto' }}>
                <div className="product-img" style={{ height: 180 }}>
                  <img src={IMG.luminous} alt="Luminous Power Technologies logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 16 }} loading="lazy" />
                </div>
                <h4>Luminous Inverters & Solar Panels</h4>
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
            title="Who needs a Luminous inverter or UPS?"
            lead="Power backup is essential across homes, offices, shops and institutions. Here are the common use cases we supply for."
          />
          <div className="panel-row panel-row-2">
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏠</div>
                <div>
                  <h3>Home Power Backup</h3>
                  <p>Single-phase inverters and inverter batteries for apartments, villas and independent houses — keeping lights, fans, refrigerators and Wi-Fi running during outages.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏢</div>
                <div>
                  <h3>Offices & Commercial</h3>
                  <p>UPS systems for workstations, servers, POS terminals and office equipment — preventing data loss and downtime during power interruptions.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏥</div>
                <div>
                  <h3>Institutions & Healthcare</h3>
                  <p>Reliable power backup for clinics, hospitals, schools and laboratories where uninterrupted power is critical for equipment and safety.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏭</div>
                <div>
                  <h3>Industrial & IT</h3>
                  <p>Three-phase UPS and power backup for server rooms, data centres, manufacturing lines and industrial control systems.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Inverter + Battery"
            title="How do inverter and battery systems work?"
            lead="An inverter converts DC power from a battery into AC power for your appliances. The battery stores energy when mains power is available and releases it when the power goes out. Choosing the right inverter and battery combination depends on your load requirements and backup duration."
          />
          <div className="check-list" style={{ maxWidth: 700 }}>
            <li><strong>Inverter:</strong> Converts DC battery power to AC for your appliances — available in single-phase and three-phase models.</li>
            <li><strong>Battery:</strong> Stores energy for use during outages — tubular and flat-plate batteries are common choices for home and commercial use.</li>
            <li><strong>UPS:</strong> An uninterruptible power supply provides instant switchover — critical for computers, servers and sensitive electronics.</li>
            <li><strong>Solar:</strong> Luminous also offers solar panels and solar inverters for renewable energy-based power backup.</li>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Why Shree Krupa"
            title="Your Bangalore power backup partner"
            lead="We are a Class-1 Licensed Electrical Contractor based in Yelahanka, Bangalore. We supply Luminous inverters, UPS systems and batteries alongside our full range of MEP services."
          />
          <div className="check-list" style={{ maxWidth: 700 }}>
            <li>Class-1 Licensed Electrical Contractor since 2012</li>
            <li>Authorized channel partner for Luminous/Schneider UPS systems</li>
            <li>Based in Yelahanka, serving Bangalore and Karnataka</li>
            <li>Supply Luminous inverters, UPS, batteries and solar panels</li>
            <li>Professional installation, testing and commissioning</li>
            <li>Annual Maintenance Contracts (AMC) for ongoing support</li>
            <li>Also supply Eaton Powerware UPS, APAR wires and electrical tools — browse our <Link to="/products">electrical products in Bangalore</Link></li>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title">Luminous Inverters & Batteries — Common Questions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Need a Luminous Inverter or UPS?</span>
          <h2>Get a Quote for Your Power Backup Needs</h2>
          <p>Tell us about your requirements — home, office or commercial, load capacity and desired backup duration. Our team will recommend the right Luminous inverter, UPS or battery setup for your project.</p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          <a href={`tel:${SITE.phone1Tel}`} className="btn btn-outline" style={{ marginLeft: 8 }}>Call {SITE.phone1}</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Related"
            title="Explore more from Shree Krupa Enterprises"
            lead="We supply a range of electrical products and services beyond Luminous power backup."
          />
          <div className="tile-row tile-grid-2">
            <Reveal>
              <div className="tile">
                <h3>APAR Wires & Cables</h3>
                <p>Supplying APAR wires and cables for house wiring, industrial cabling and power distribution projects across Bangalore.</p>
                <Link to="/products/apar-wires-cables" className="tile-link">View APAR Products &rarr;</Link>
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
