import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { IMG, SITE } from '../data/site.js';

const pageTitle = 'Authorized APAR Wires & Cables Dealer';
const pageDescription = 'Shree Krupa Enterprises is an authorized APAR office in Bangalore supplying APAR wires and cables for house wiring, industrial cabling and power distribution. Get APAR wire prices in Yelahanka, Bangalore.';
const canonicalUrl = 'https://www.shreekrupaenterprise.in/products/apar-wires-cables';

const faqs = [
  {
    q: 'Is Shree Krupa Enterprises an authorized APAR dealer in Bangalore?',
    a: 'Yes. Shree Krupa Enterprises is an authorized APAR distributor and dealer in Bangalore. We are located in Yelahanka and supply the full range of APAR wires and cables across Bangalore and Karnataka.',
  },
  {
    q: 'What types of APAR wires does Shree Krupa Enterprises supply?',
    a: 'We supply APAR wires and cables for a range of applications including house wiring, industrial cabling and power distribution. Our APAR product range includes E-Beam wires, FR PVC insulated cables, power cables, control cables and heavy-duty industrial cables.',
  },
  {
    q: 'What is the APAR wire price in Bangalore?',
    a: 'APAR wire prices vary based on cable type, gauge and quantity. Contact us at ' + SITE.phone1 + ' or visit our APAR office in Yelahanka, Bangalore for the latest APAR wire prices and bulk order discounts.',
  },
  {
    q: 'Which APAR wires are suitable for house wiring?',
    a: 'APAR house wiring cables include single-core and multi-core FR PVC insulated wires suitable for lighting circuits, power points and appliance connections in residential projects across Bangalore.',
  },
  {
    q: 'Do you supply APAR cables for industrial projects in Bangalore?',
    a: 'Yes. We provide APAR power and control cables suited for industrial electrification, HT substations and commercial facilities across Bangalore and Karnataka. Visit our APAR office in Yelahanka for industrial cable inquiries.',
  },
  {
    q: 'Can I get APAR E-Beam wires in Bangalore?',
    a: 'Yes. As an authorized APAR dealer in Bangalore, we supply the complete range of APAR E-Beam wires for house wiring and industrial applications. Contact us for E-Beam wire prices and availability.',
  },
  {
    q: 'Does Shree Krupa Enterprises supply other cable brands besides APAR?',
    a: 'Yes. Alongside APAR, we also supply KEI wires and cables, and can source other brands based on project specifications. We also supply Eaton and Schneider/Luminous UPS systems.',
  },
  {
    q: 'Where is the APAR office in Bangalore located?',
    a: 'Shree Krupa Enterprises, an authorized APAR dealer, is located at #35, 1st Floor, 8th Main, Anantapur, Yelahanka, Bangalore - 560064. You can visit our office for APAR wire samples, prices and orders.',
  },
  {
    q: 'How do I request a quote for APAR wires and cables?',
    a: 'You can call us at ' + SITE.phone1 + ', email ' + SITE.email + ' or visit our APAR office in Yelahanka, Bangalore. Share your project requirements and we will provide a competitive quotation.',
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
          { "@type": "ListItem", "position": 3, "name": "APAR Wires & Cables", "item": canonicalUrl }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "APAR Wires & Cables — Authorized Dealer in Bangalore",
        "description": "APAR wires and cables supplied by Shree Krupa Enterprises, an authorized APAR dealer in Bangalore",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "APAR E-Beam House Wiring Cables" },
          { "@type": "ListItem", "position": 2, "name": "APAR Power Cables" },
          { "@type": "ListItem", "position": 3, "name": "APAR Control Cables" },
          { "@type": "ListItem", "position": 4, "name": "APAR Industrial Cables" }
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
        { "@type": "ListItem", "position": 3, "name": "APAR Wires & Cables", "item": canonicalUrl }
      ]
    }
  ]
};

export default function AparWiresCables() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogImage={IMG.apar}
        ogType="product"
        jsonLd={jsonLd}
        keywords="APAR office in Bangalore, APAR wires dealer Bangalore, APAR cables Bangalore, APAR E-Beam wires, APAR wire price, APAR house wiring, APAR power cables, authorized APAR dealer, Yelahanka APAR dealer"
      />

      <PageHero
        eyebrow="Authorized APAR Dealer in Bangalore"
        title="APAR Office in Bangalore — Wires & Cables"
        lead="Shree Krupa Enterprises is an authorized APAR office in Bangalore supplying APAR wires and cables for residential, commercial and industrial projects. Get competitive APAR wire prices in Yelahanka, Bangalore."
        crumb="APAR Wires & Cables"
        asideTitle="APAR Product Range"
        asideItems={[
          'APAR E-Beam House Wiring Cables',
          'APAR Power Cables',
          'APAR Control Cables',
          'APAR Industrial Cabling',
          'Single-core & multi-core FR PVC',
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="About APAR"
            title="APAR — India's trusted wire and cable manufacturer"
            lead="APAR Industries is one of India's largest wire and cable manufacturers. Shree Krupa Enterprises is an authorized APAR dealer in Bangalore, supplying APAR products to projects across Bangalore and Karnataka."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>APAR wires are used in housing projects, commercial buildings, factories and substations across India. Their range covers everything from single-core E-Beam house wiring cables to heavy-duty power cables for HT installations. When you need reliable cabling that meets Indian Standards, APAR is the go-to choice for contractors and project owners alike.</p>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>At our <strong>APAR office in Yelahanka, Bangalore</strong>, we help you select the right APAR cable for your application — whether it's a new house wiring job, an industrial power feed or a commercial distribution panel. We supply APAR wires across Bangalore and can deliver to project sites across Karnataka.</p>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>Looking for <strong>APAR wire prices in Bangalore</strong>? Contact us for the latest APAR wire price list, bulk order discounts and free technical consultation on cable selection for your project.</p>
            </Reveal>
            <Reveal>
              <div className="product" style={{ maxWidth: 280, margin: '0 auto' }}>
                <div className="product-img" style={{ height: 180 }}>
                  <img src={IMG.apar} alt="APAR Wires and Cables — Authorized Dealer in Bangalore" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 16 }} loading="lazy" />
                </div>
                <h4>APAR Wires & Cables — Authorized Bangalore Dealer</h4>
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
            title="What are APAR wires and cables used for?"
            lead="APAR wires and cables serve a wide range of electrical installations. Here are the common applications we supply for across Bangalore."
          />
          <div className="panel-row panel-row-2">
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏠</div>
                <div>
                  <h3>APAR House Wiring in Bangalore</h3>
                  <p>Single-core and multi-core FR PVC insulated APAR wires for residential electrical wiring — lighting circuits, power points and apartment connections. Get APAR house wire prices at our Bangalore office.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏭</div>
                <div>
                  <h3>APAR Industrial Cabling</h3>
                  <p>Power and control cables for factories, manufacturing plants and industrial facilities — heavy-duty APAR cables designed for durability under continuous load.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">⚡</div>
                <div>
                  <h3>APAR Power Distribution Cables</h3>
                  <p>LT and HT APAR power cables for substations, distribution panels and commercial buildings — connecting transformers to end loads across Bangalore.</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel">
                <div className="panel-ic">🏢</div>
                <div>
                  <h3>APAR Commercial Project Cables</h3>
                  <p>APAR cabling for offices, retail spaces, hospitals and institutions — reliable, long-life wiring that reduces maintenance costs in Bangalore commercial projects.</p>
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
            title="Your authorized APAR dealer in Bangalore"
            lead="We are a Licensed Electrical Contractor and authorized APAR office in Yelahanka, Bangalore. We supply APAR wires and cables alongside our full range of MEP services."
          />
          <div className="check-list" style={{ maxWidth: 700 }}>
            <li>Authorized APAR dealer and distributor in Bangalore</li>
            <li>Licensed Electrical Contractor since 2012</li>
            <li>APAR office located in Yelahanka, serving Bangalore and Karnataka</li>
            <li>Full range of APAR E-Beam, power and control cables</li>
            <li>Competitive APAR wire prices for bulk and retail orders</li>
            <li>Technical guidance on APAR cable selection for your application</li>
            <li>Also supply KEI wires, Luminous batteries, Eaton UPS — browse our <Link to="/products">electrical products in Bangalore</Link></li>
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
          <h2>Visit Our APAR Office in Bangalore</h2>
          <p>Visit our APAR office at Yelahanka, Bangalore for the latest APAR wire prices, samples and expert consultation. Or call us for a free quote on your wiring requirements.</p>
          <Link to="/contact" className="btn btn-primary">Visit Our APAR Office</Link>
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
                <h3>Luminous Batteries & Inverters</h3>
                <p>Authorized channel partner for Luminous/Schneider UPS — inverters, batteries and power backup solutions for homes and offices in Bangalore.</p>
                <Link to="/products/luminous-inverters-batteries" className="tile-link">View Luminous Products &rarr;</Link>
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
