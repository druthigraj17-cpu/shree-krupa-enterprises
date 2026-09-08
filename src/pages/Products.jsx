import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO from '../components/SEO.jsx';
import { IMG } from '../data/site.js';
import { tools, productBrands } from '../data/products.js';

export default function Products() {
  return (
    <>
      <SEO title="Products — UPS Systems & Tools" description="Authorized channel partner for Eaton Powerware and Luminous/Schneider UPS systems. High-grade tools and tackles for precise, safe electrical execution." />

      <PageHero
        eyebrow="UPS & Equipment"
        title="Our Products"
        lead="Authorized power-protection partnerships and high-grade tools & tackles for precise, safe execution."
        crumb="Products"
        asideTitle="Product lines"
        asideItems={['UPS Systems — Eaton & Schneider', 'Inverters & Solar (Luminous)', 'Wires & Cables (Apar, KEI)', 'Pumps · Fans · Lighting · Heaters', 'Tools, Meters & Test Equipment']}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Authorized Channel Partner" title="Eaton & Schneider UPS systems" lead="Sales, installation and after-sales support for high-performance power protection." />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)' }}>Given our specialization in electrical systems, Shree Krupa Enterprises is a proud authorized channel partner for <strong>Eaton Powerware</strong> and <strong>Luminous/Schneider UPS</strong> — prominent names in the UPS market known for high-performance devices that ensure reliable power supply.</p>
              <p style={{ color: 'var(--muted)', marginTop: 12 }}>Our collaboration with these brands aligns with our project scope. Whether you need a single-phase UPS for lesser loads or a three-phase system for large-scale operations, we recommend and support the right product for your energy needs.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 18 }}>Enquire About UPS</Link>
            </Reveal>
            <Reveal>
              <div className="panel-row" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="product"><div className="product-img"><img src={IMG.ups} alt="Eaton Powerware UPS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /></div><h4>Eaton Powerware UPS</h4><div className="brand">Authorized Partner</div></div>
                <div className="product"><div className="product-img"><img src={IMG.luminous} alt="Schneider / Luminous UPS" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div><h4>Schneider / Luminous UPS</h4><div className="brand">Authorized Partner</div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Product Catalog" title="Sales & supply partners" lead="We supply and service high-performance electrical and power products through trusted brand partnerships." />
          <div className="product-grid">
            {productBrands.map((p, i) => (
              <div className="product" key={i}><div className="product-img"><img src={IMG[p.img]} alt={p.name} loading="lazy" /></div><h4>{p.name}</h4></div>
            ))}
            <div className="product"><div className="product-img"><img src={IMG.ups} alt="Eaton Powerware UPS" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" /></div><h4>Eaton Powerware UPS</h4><div className="brand">Eaton</div></div>
            <div className="product"><div className="product-img"><img src={IMG.luminous} alt="Schneider / Luminous UPS" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }} loading="lazy" /></div><h4>Schneider / Luminous UPS</h4><div className="brand">Schneider</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Tools & Tackles" title="List of tools & tackles" lead="High-grade tools and tackles that ensure precise services and enhanced safety for our team." />
          <div className="chip-grid">
            {tools.map((t, i) => (
              <div className="chip" key={i}><strong>{t[0]}</strong><span>{t[1]}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">UPS Systems</span>
          <h2>Authorized Channel Partner — Eaton & Schneider</h2>
          <p>We supply and service Eaton Powerware and Schneider / Luminous UPS systems with full installation and AMC support.</p>
          <Link to="/contact" className="btn btn-primary">Enquire About UPS</Link>
        </div>
      </section>
    </>
  );
}
