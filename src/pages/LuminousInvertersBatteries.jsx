import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { IMG, SITE } from '../data/site.js';

const pageTitle = 'Luminous Batteries & Inverters in Bangalore — Authorized Dealer';
const pageDescription = 'Shree Krupa Enterprises is an authorized Luminous dealer in Bangalore supplying Luminous batteries, inverters, UPS systems and solar panels. Get Luminous battery prices in Yelahanka, Bangalore.';
const canonicalUrl = 'https://www.shreekrupaenterprise.in/products/luminous-inverters-batteries';

const faqs = [
  {
    q: 'Is Shree Krupa Enterprises an authorized Luminous dealer in Bangalore?',
    a: 'Yes. Shree Krupa Enterprises is an authorized channel partner for Luminous/Schneider UPS systems and supplies Luminous inverters, batteries and solar panels across Bangalore and Karnataka.',
  },
  {
    q: 'What is the Luminous battery price in Bangalore?',
    a: 'Luminous battery prices vary based on battery type, capacity and model. Contact us at ' + SITE.phone1 + ' or visit our office in Yelahanka, Bangalore for the latest Luminous battery prices and available offers.',
  },
  {
    q: 'What Luminous products does Shree Krupa Enterprises supply?',
    a: 'We supply the full Luminous range including inverters, Luminous/Schneider UPS systems, inverter batteries, solar panels and solar inverters. Our team helps you choose the right power backup solution for your home, office or commercial facility.',
  },
  {
    q: 'Which Luminous inverter is suitable for home power backup?',
    a: 'Luminous offers single-phase inverters suitable for apartments and villas, keeping lights, fans, refrigerators and Wi-Fi running during outages. Contact us for Luminous inverter prices and load-based recommendations.',
  },
  {
    q: 'What is the difference between an inverter and a UPS?',
    a: 'An inverter converts DC battery power to AC for your appliances with a slight delay. A UPS provides instant switchover with no delay — critical for computers, servers and sensitive electronics.',
  },
  {
    q: 'Do you provide installation support for Luminous inverters and UPS?',
    a: 'Yes. We provide complete installation, testing and commissioning for Luminous UPS and inverter systems. We also offer Annual Maintenance Contracts (AMC) for ongoing support in Bangalore.',
  },
  {
    q: 'Do you supply Luminous inverter batteries as well?',
    a: 'Yes. We supply Luminous inverter batteries and can recommend the right battery type and capacity to pair with your Luminous inverter or UPS system. Get Luminous battery prices at our Bangalore office.',
  },
  {
    q: 'Where can I buy Luminous batteries in Bangalore?',
    a: 'You can buy Luminous batteries at our office in Yelahanka, Bangalore or call us at ' + SITE.phone1 + ' for home delivery. We stock the full range of Luminous inverter batteries.',
  },
  {
    q: 'How do I request a quote for a Luminous inverter or UPS?',
    a: 'You can call us at ' + SITE.phone1 + ', email ' + SITE.email + ' or visit our office in Yelahanka, Bangalore. Share your power backup requirements and we will provide a quotation with Luminous battery prices.',
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
        "name": "Luminous Batteries, Inverters & UPS — Authorized Dealer in Bangalore",
        "description": "Luminous power backup products supplied by Shree Krupa Enterprises, an authorized Luminous dealer in Bangalore",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Luminous Inverters" },
          { "@type": "ListItem", "position": 2, "name": "Luminous Batteries" },
          { "@type": "ListItem", "position": 3, "name": "Luminous/Schneider UPS Systems" },
          { "@type": "ListItem", "position": 4, "name": "Luminous Solar Panels" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shreekrupaenterprise.in/" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.shreekrupaenterprise.in/products" },
        { "@type": "ListItem", "position": 3, "name": "Luminous Inverters & Batteries", "item": canonicalUrl }
      ]
    }
  ]
};

export default function LuminousInvertersBatteries() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogImage={IMG.luminous}
        ogType="product"
        jsonLd={jsonLd}
        keywords="Luminous batteries, Luminous battery price, Luminous inverter Bangalore, Luminous dealer Bangalore, Luminous UPS, Luminous solar panels, inverter battery price, Luminous inverter battery, home inverter Bangalore, power backup solutions Bangalore"
      />

      <PageHero
        eyebrow="Authorized Luminous Dealer in Bangalore"
        title="Luminous Batteries, Inverters & UPS in Bangalore"
        lead="Shree Krupa Enterprises is an authorized Luminous dealer in Bangalore supplying Luminous batteries, inverters, UPS systems and solar panels for homes, offices and commercial facilities. Get Luminous battery prices in Yelahanka, Bangalore."
        crumb="Luminous Inverters & Batteries"
        asideTitle="Luminous Product Range"
        asideItems={[
          'Luminous Inverters',
          'Luminous Batteries',
          'Luminous/Schneider UPS',
          'Solar Panels',
          'AMC & Installation Support',
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="About Luminous"
            title="India's most trusted power backup brand"
            lead="Luminous Power Technologies is one of India's largest manufacturers of inverters, UPS systems and batteries. Shree Krupa Enterprises is an authorized Luminous dealer in Bangalore, supplying the full Luminous range across Bangalore and Karnataka."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>Power cuts are a reality across many parts of Bangalore and Karnataka. A reliable Luminous inverter or UPS system keeps your home, office or business running without disruption. Luminous has been a household name in Indian power backup for decades, offering a wide range of inverters, batteries and solar solutions.</p>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>At our <strong>Luminous dealer office in Yelahanka, Bangalore</strong>, we supply the full Luminous range — from single-phase home inverters to three-phase commercial UPS systems. We also supply Eaton Powerware UPS for larger installations.</p>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>Looking for <strong>Luminous battery prices in Bangalore</strong>? Contact us for the latest Luminous inverter prices, battery prices and solar panel quotes. Our team helps you size the right system, handles installation, and provides ongoing maintenance through our AMC services.</p>
            </Reveal>
            <Reveal>
              <div className="product" style={{ maxWidth: 280, margin: '0 auto' }}>
                <div className="product-img" style={{ height: 180 }}>
                  <img src={IMG.luminous} alt="Luminous Batteries and Inverters — Authorized Dealer in Bangalore" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 16 }} loading="lazy" />
                </div>
                <h4>Luminous Batteries, Inverters & Solar — Authorized Bangalore Dealer</h4>
                <div className="brand">Shree Krupa Enterprises, Yelahanka, Bangalore</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Applications"
            title="Who needs a Luminous inverter or battery?"
            lead="Power backup is essential across homes, offices, shops and institutions. Here are the common Luminous product use cases we supply for in Bangalore."
          />
          <div className="panel-row panel-row-2">
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏠</div>
                <div>
                  <h3>Home Luminous Inverter & Battery</h3>
                  <p>Single-phase Luminous inverters and inverter batteries for apartments, villas and independent houses — keeping lights, fans, refrigerators and Wi-Fi running during outages. Get Luminous home inverter prices.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏢</div>
                <div>
                  <h3>Office & Commercial Luminous UPS</h3>
                  <p>Luminous UPS systems for workstations, servers, POS terminals and office equipment — preventing data loss and downtime during power interruptions.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏥</div>
                <div>
                  <h3>Institution & Healthcare Luminous Backup</h3>
                  <p>Reliable Luminous power backup for clinics, hospitals, schools and laboratories where uninterrupted power is critical for equipment and safety.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏭</div>
                <div>
                  <h3>Industrial & IT Luminous UPS</h3>
                  <p>Three-phase Luminous UPS and power backup for server rooms, data centres, manufacturing lines and industrial control systems in Bangalore.</p>
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
            title="How do Luminous inverter and battery systems work?"
            lead="A Luminous inverter converts DC power from a battery into AC power for your appliances. The battery stores energy when mains power is available and releases it when the power goes out. Choosing the right Luminous inverter and battery combination depends on your load requirements and backup duration."
          />
          <div className="check-list" style={{ maxWidth: 700 }}>
            <li><strong>Luminous Inverter:</strong> Converts DC battery power to AC for your appliances — available in single-phase and three-phase models for homes and businesses.</li>
            <li><strong>Luminous Battery:</strong> Stores energy for use during outages — tubular and flat-plate batteries are common choices for home and commercial use. Get Luminous battery prices at our Bangalore office.</li>
            <li><strong>Luminous UPS:</strong> An uninterruptible power supply provides instant switchover — critical for computers, servers and sensitive electronics.</li>
            <li><strong>Luminous Solar:</strong> Luminous also offers solar panels and solar inverters for renewable energy-based power backup in Bangalore.</li>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Why Shree Krupa"
            title="Your authorized Luminous dealer in Bangalore"
            lead="We are a Licensed Electrical Contractor and authorized Luminous dealer in Yelahanka, Bangalore. We supply Luminous inverters, UPS systems and batteries alongside our full range of MEP services."
          />
          <div className="check-list" style={{ maxWidth: 700 }}>
            <li>Authorized Luminous dealer and distributor in Bangalore</li>
            <li>Licensed Electrical Contractor since 2012</li>
            <li>Luminous dealer office in Yelahanka, serving Bangalore and Karnataka</li>
            <li>Full range of Luminous inverters, batteries, UPS and solar panels</li>
            <li>Competitive Luminous battery prices for homes and businesses</li>
            <li>Professional installation, testing and commissioning</li>
            <li>Annual Maintenance Contracts (AMC) for ongoing support</li>
            <li>Also supply Eaton Powerware UPS, APAR wires — browse our <Link to="/products">electrical products in Bangalore</Link></li>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title">Luminous Batteries & Inverters — Common Questions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Need Luminous Batteries or Inverters?</span>
          <h2>Get Luminous Battery Prices in Bangalore</h2>
          <p>Visit our Luminous dealer office in Yelahanka, Bangalore or call us for Luminous battery prices, inverter quotes and power backup solutions. Free consultation and site assessment.</p>
          <Link to="/contact" className="btn btn-primary">Visit Our Luminous Office</Link>
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
                <h3>APAR Wires & Cables — Authorized Dealer</h3>
                <p>Authorized APAR dealer in Bangalore — house wiring, industrial cabling and power distribution. Get APAR wire prices.</p>
                <Link to="/products/apar-wires-cables" className="tile-link">View APAR Products &rarr;</Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="tile">
                <h3>Electrical Services in Bangalore</h3>
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
