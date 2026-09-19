import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import SEO from '../components/SEO.jsx';
import { IMG, SITE } from '../data/site.js';
import { tools, productBrands } from '../data/products.js';

const pageTitle = 'Electrical Products in Bangalore — APAR Wires, Luminous Batteries, UPS & Power Backup';
const pageDescription = 'Shree Krupa Enterprises supplies APAR wires, Luminous batteries, inverters, UPS systems and power backup solutions in Bangalore. Authorized dealer for APAR, Luminous, Eaton and Schneider.';
const canonicalUrl = 'https://www.shreekrupaenterprise.in/products';

const faqs = [
  {
    q: 'What electrical products does Shree Krupa Enterprises supply in Bangalore?',
    a: 'We supply a wide range of electrical products including APAR and KEI wires and cables, Luminous inverters, batteries and solar panels, Eaton and Schneider/Luminous UPS systems, Laxmi pumps, Khul fans, Crescent lighting and Supreme solar water heaters.',
  },
  {
    q: 'Do you have an APAR office in Bangalore?',
    a: 'Yes. Shree Krupa Enterprises is an authorized APAR dealer with an office in Yelahanka, Bangalore. We supply the full range of APAR wires and cables for house wiring, industrial cabling and power distribution.',
  },
  {
    q: 'Do you sell Luminous batteries in Bangalore?',
    a: 'Yes. We are an authorized Luminous dealer in Bangalore supplying Luminous batteries, inverters, UPS systems and solar panels. Visit our office in Yelahanka for Luminous battery prices.',
  },
  {
    q: 'Do you provide installation support for UPS and inverters?',
    a: 'Yes. We provide complete installation, testing and commissioning for all UPS and inverter systems we supply, including Luminous and Eaton products. We also offer Annual Maintenance Contracts (AMC) for ongoing support.',
  },
  {
    q: 'What electrical tools does Shree Krupa use?',
    a: 'We use professional-grade tools including crimping tools, welding machines, megger, earth tester, multi-meter, clamp meter, power analyzer, cutting and grinding machines from brands like Bosch, Fluke, Meco and Taparia.',
  },
  {
    q: 'How do I request a quote for electrical products in Bangalore?',
    a: 'You can call us at ' + SITE.phone1 + ', email ' + SITE.email + ' or visit our office in Yelahanka, Bangalore. Share your product requirements and we will provide a competitive quotation.',
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
          { "@type": "ListItem", "position": 2, "name": "Products", "item": canonicalUrl }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Electrical Products — APAR Wires, Luminous Batteries, UPS in Bangalore",
        "description": "Electrical wires, cables, inverters, batteries, UPS systems and power backup products supplied by Shree Krupa Enterprises across Bangalore",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "APAR Wires & Cables", "item": "https://www.shreekrupaenterprise.in/products/apar-wires-cables" },
          { "@type": "ListItem", "position": 2, "name": "Luminous Batteries & Inverters", "item": "https://www.shreekrupaenterprise.in/products/luminous-inverters-batteries" },
          { "@type": "ListItem", "position": 3, "name": "Eaton & Schneider UPS Systems" },
          { "@type": "ListItem", "position": 4, "name": "KEI Wires & Cables" },
          { "@type": "ListItem", "position": 5, "name": "Electrical Tools & Test Equipment" }
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
        { "@type": "ListItem", "position": 2, "name": "Products", "item": canonicalUrl }
      ]
    }
  ]
};

export default function Products() {
  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        ogImage={IMG.ups}
        ogType="product"
        jsonLd={jsonLd}
        keywords="electrical products Bangalore, APAR wires Bangalore, Luminous batteries Bangalore, Eaton UPS Bangalore, Schneider UPS, KEI wires, electrical contractor products, Yelahanka electrical shop, APAR wire price, Luminous battery price"
      />

      <PageHero
        eyebrow="Electrical Products & Equipment"
        title="Electrical Products in Bangalore — APAR, Luminous, Eaton"
        lead="Shree Krupa Enterprises supplies APAR wires, Luminous batteries, inverters, UPS systems and power backup solutions for residential, commercial and industrial projects across Bangalore. Authorized dealer for leading electrical brands."
        crumb="Products"
        asideTitle="Product categories"
        asideItems={[
          'Wires & Cables — APAR, KEI',
          'Batteries & Inverters — Luminous',
          'UPS Systems — Eaton, Schneider',
          'Pumps, Fans & Lighting',
          'Tools & Test Equipment',
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Wires & Cables"
            title="APAR & KEI Wires and Cables — Authorized Dealer in Bangalore"
            lead="We are an authorized APAR wires dealer in Bangalore, supplying APAR and KEI wires and cables for house wiring, industrial cabling and power distribution projects. Get competitive APAR wire prices in Yelahanka."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>APAR and KEI are among India's most trusted wire and cable manufacturers. Their products are used in housing projects, commercial buildings, factories and substations. We supply their full range — house wiring cables, power cables, control cables and industrial cabling — to projects across Bangalore and Karnataka.</p>
              <Link to="/products/apar-wires-cables" className="btn btn-primary" style={{ marginTop: 18 }}>View APAR Wires & Cables &rarr;</Link>
            </Reveal>
            <Reveal>
              <div className="panel-row" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="product">
                  <div className="product-img"><img src={IMG.apar} alt="APAR Wires and Cables — Authorized Dealer in Bangalore" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div>
                  <h4>APAR Wires & Cables</h4>
                  <div className="brand">Authorized Dealer in Bangalore</div>
                </div>
                <div className="product">
                  <div className="product-img"><img src={IMG.kei} alt="KEI Wires and Cables — Available in Bangalore" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div>
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
            title="Luminous Batteries, Inverters & UPS — Authorized Dealer"
            lead="We are an authorized Luminous dealer in Bangalore supplying Luminous batteries, inverters, UPS systems and solar panels for homes, offices and commercial facilities. Get Luminous battery prices."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>Power cuts can disrupt homes, offices and businesses. A reliable Luminous inverter or UPS system keeps your essential equipment running without interruption. We supply Luminous inverters, Luminous batteries, Eaton Powerware UPS and Schneider/Luminous UPS systems — from single-phase home inverters to three-phase commercial installations.</p>
              <Link to="/products/luminous-inverters-batteries" className="btn btn-primary" style={{ marginTop: 18 }}>View Luminous Batteries & Inverters &rarr;</Link>
            </Reveal>
            <Reveal>
              <div className="panel-row" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="product">
                  <div className="product-img"><img src={IMG.luminous} alt="Luminous Batteries, Inverters and Solar Panels — Authorized Dealer Bangalore" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div>
                  <h4>Luminous Batteries & Solar</h4>
                  <div className="brand">Authorized Dealer in Bangalore</div>
                </div>
                <div className="product">
                  <div className="product-img"><img src={IMG.ups} alt="Eaton Powerware UPS — Available in Bangalore" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /></div>
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
            lead="We supply and service high-performance electrical and power products through trusted brand partnerships. Our range covers wires, cables, power backup, pumps, fans, lighting and solar water heaters across Bangalore."
          />
          <div className="product-grid">
            {productBrands.map((p, i) => (
              <div className="product" key={i}><div className="product-img"><img src={IMG[p.img]} alt={p.name} loading="lazy" /></div><h4>{p.name}</h4></div>
            ))}
            <div className="product"><div className="product-img"><img src={IMG.ups} alt="Eaton Powerware UPS in Bangalore" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /></div><h4>Eaton Powerware UPS</h4><div className="brand">Eaton</div></div>
            <div className="product"><div className="product-img"><img src={IMG.luminous} alt="Schneider Luminous UPS in Bangalore" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div><h4>Schneider / Luminous UPS</h4><div className="brand">Schneider</div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Tools & Tackles"
            title="Electrical Tools & Test Equipment"
            lead="High-grade tools and tackles that ensure precise services and enhanced safety for our team. We use professional-grade equipment for all our electrical installations in Bangalore."
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
          <h2>Get APAR Wire & Luminous Battery Prices in Bangalore</h2>
          <p>Tell us about your project — whether you need APAR wires, Luminous batteries, a UPS system or any other electrical product. Our team will recommend the right solution and provide a quotation.</p>
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
                <h3>MEP Electrical Services in Bangalore</h3>
                <p>Complete internal and external electrification, HT power, ELV, AMC and statutory approvals across Bangalore.</p>
                <Link to="/services" className="tile-link">View Services &rarr;</Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="tile">
                <h3>APAR Wires & Cables — Authorized Dealer</h3>
                <p>Authorized APAR dealer in Bangalore — house wiring, industrial cabling and power distribution.</p>
                <Link to="/products/apar-wires-cables" className="tile-link">View APAR Products &rarr;</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
