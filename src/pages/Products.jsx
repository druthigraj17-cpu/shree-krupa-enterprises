import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { IMG, SITE } from '../data/site.js';
import { tools, productBrands } from '../data/products.js';

const pageTitle = 'Electrical Products in Bangalore — Wires, Cables, UPS & Power Backup | Shree Krupa Enterprises';
const pageDescription = 'Shree Krupa Enterprises supplies electrical wires, cables, APAR products, Luminous inverters, UPS systems and power backup solutions across Bangalore. Class-1 electrical contractor since 2012.';
const canonicalUrl = 'https://www.shreekrupaenterprise.in/products';

const faqs = [
  {
    q: 'What electrical products does Shree Krupa Enterprises supply?',
    a: 'We supply a wide range of electrical products including APAR and KEI wires and cables, Luminous inverters and solar panels, Eaton and Schneider/Luminous UPS systems, Laxmi pumps, Khul fans, Crescent lighting and Supreme solar water heaters.',
  },
  {
    q: 'Do you supply APAR wires and cables in Bangalore?',
    a: 'Yes. We supply APAR wires and cables for house wiring, industrial cabling and power distribution projects. Visit our APAR Wires & Cables page for more details.',
  },
  {
    q: 'Do you supply Luminous inverters and batteries?',
    a: 'Yes. We are an authorized channel partner for Luminous/Schneider UPS systems and also supply Luminous inverters, batteries and solar panels. Visit our Luminous Inverters & Batteries page for more details.',
  },
  {
    q: 'Do you provide installation support for UPS and inverters?',
    a: 'Yes. We provide complete installation, testing and commissioning for all UPS and inverter systems we supply. We also offer Annual Maintenance Contracts (AMC) for ongoing support.',
  },
  {
    q: 'What electrical tools does Shree Krupa use?',
    a: 'We use professional-grade tools including crimping tools, welding machines, megger, earth tester, multi-meter, clamp meter, power analyzer, cutting and grinding machines from brands like Bosch, Fluke, Meco and Taparia.',
  },
  {
    q: 'How do I request a quote for electrical products?',
    a: 'You can call us at ' + SITE.phone1 + ', email ' + SITE.email + ' or visit our office in Yelahanka, Bangalore. Share your product requirements and we will provide a quotation.',
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
      { "@type": "ListItem", "position": 2, "name": "Products", "item": canonicalUrl }
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Electrical Products by Shree Krupa Enterprises",
    "description": "Electrical wires, cables, inverters, UPS systems and power backup products supplied across Bangalore",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "APAR Wires & Cables", "item": "https://www.shreekrupaenterprise.in/products/apar-wires-cables" },
      { "@type": "ListItem", "position": 2, "name": "Luminous Inverters & Batteries", "item": "https://www.shreekrupaenterprise.in/products/luminous-inverters-batteries" },
      { "@type": "ListItem", "position": 3, "name": "Eaton & Schneider UPS Systems" },
      { "@type": "ListItem", "position": 4, "name": "KEI Wires & Cables" },
      { "@type": "ListItem", "position": 5, "name": "Electrical Tools & Test Equipment" }
    ]
  }
};

export default function Products() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogImage={IMG.ups}
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Electrical Products & Equipment"
        title="Electrical Products in Bangalore"
        lead="Shree Krupa Enterprises supplies wires, cables, inverters, UPS systems and power backup solutions for residential, commercial and industrial projects across Bangalore. Authorized partner for leading electrical brands."
        crumb="Products"
        asideTitle="Product categories"
        asideItems={[
          'Wires & Cables — APAR, KEI',
          'Inverters & Batteries — Luminous',
          'UPS Systems — Eaton, Schneider',
          'Pumps, Fans & Lighting',
          'Tools & Test Equipment',
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Wires & Cables"
            title="APAR & KEI Wires and Cables"
            lead="We supply APAR and KEI wires and cables for house wiring, industrial cabling and power distribution projects across Bangalore. From single-core house wires to heavy-duty power cables, we help you find the right product for your application."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>APAR and KEI are among India's most trusted wire and cable manufacturers. Their products are used in housing projects, commercial buildings, factories and substations. We supply their full range — house wiring cables, power cables, control cables and industrial cabling — to projects across Bangalore and Karnataka.</p>
              <Link to="/products/apar-wires-cables" className="btn btn-primary" style={{ marginTop: 18 }}>View APAR Wires & Cables &rarr;</Link>
            </Reveal>
            <Reveal>
              <div className="panel-row" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="product">
                  <div className="product-img"><img src={IMG.apar} alt="APAR Wires and Cables" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div>
                  <h4>Apar Wires & Cables</h4>
                  <div className="brand">Available in Bangalore</div>
                </div>
                <div className="product">
                  <div className="product-img"><img src={IMG.kei} alt="KEI Wires and Cables" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div>
                  <h4>KEI Wires & Cables</h4>
                  <div className="brand">Available in Bangalore</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Power Backup"
            title="Luminous Inverters, UPS & Batteries"
            lead="We are an authorized channel partner for Luminous/Schneider UPS systems. We also supply Luminous inverters, batteries and solar panels for homes, offices and commercial facilities across Bangalore."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>Power cuts can disrupt homes, offices and businesses. A reliable inverter or UPS system keeps your essential equipment running without interruption. We supply Luminous inverters, Eaton Powerware UPS and Schneider/Luminous UPS systems — from single-phase home inverters to three-phase commercial installations.</p>
              <Link to="/products/luminous-inverters-batteries" className="btn btn-primary" style={{ marginTop: 18 }}>View Luminous Inverters & Batteries &rarr;</Link>
            </Reveal>
            <Reveal>
              <div className="panel-row" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="product">
                  <div className="product-img"><img src={IMG.luminous} alt="Luminous Inverters and Solar Panels" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div>
                  <h4>Luminous Inverters & Solar Panels</h4>
                  <div className="brand">Authorized Partner</div>
                </div>
                <div className="product">
                  <div className="product-img"><img src={IMG.ups} alt="Eaton Powerware UPS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /></div>
                  <h4>Eaton Powerware UPS</h4>
                  <div className="brand">Authorized Partner</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Product Catalog"
            title="Sales & supply partners"
            lead="We supply and service high-performance electrical and power products through trusted brand partnerships. Our range covers wires, cables, power backup, pumps, fans, lighting and solar water heaters."
          />
          <div className="product-grid">
            {productBrands.map((p, i) => (
              <div className="product" key={i}><div className="product-img"><img src={IMG[p.img]} alt={p.name} loading="lazy" /></div><h4>{p.name}</h4></div>
            ))}
            <div className="product"><div className="product-img"><img src={IMG.ups} alt="Eaton Powerware UPS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /></div><h4>Eaton Powerware UPS</h4><div className="brand">Eaton</div></div>
            <div className="product"><div className="product-img"><img src={IMG.luminous} alt="Schneider / Luminous UPS" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div><h4>Schneider / Luminous UPS</h4><div className="brand">Schneider</div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Tools & Tackles"
            title="Electrical Tools & Test Equipment"
            lead="High-grade tools and tackles that ensure precise services and enhanced safety for our team. We use professional-grade equipment for all our electrical installations."
          />
          <div className="chip-grid">
            {tools.map((t, i) => (
              <div className="chip" key={i}><strong>{t[0]}</strong><span>{t[1]}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title">Electrical Products — Common Questions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Need Electrical Products?</span>
          <h2>Get a Quote for Your Requirements</h2>
          <p>Tell us about your project — whether you need wires and cables, a UPS system, inverter or any other electrical product. Our team will recommend the right solution and provide a quotation.</p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          <a href={`tel:${SITE.phone1Tel}`} className="btn btn-outline" style={{ marginLeft: 8 }}>Call {SITE.phone1}</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Related"
            title="Our Services & Expertise"
            lead="Beyond product supply, we offer complete MEP services for your project."
          />
          <div className="tile-row tile-grid-2">
            <Reveal>
              <div className="tile">
                <h3>MEP Electrical Services</h3>
                <p>Complete internal and external electrification, HT power, ELV, AMC and statutory approvals across Bangalore.</p>
                <Link to="/services" className="tile-link">View Services &rarr;</Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="tile">
                <h3>APAR Wires & Cables</h3>
                <p>Dedicated page for APAR wires and cables — house wiring, industrial cabling and power distribution in Bangalore.</p>
                <Link to="/products/apar-wires-cables" className="tile-link">View APAR Products &rarr;</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
