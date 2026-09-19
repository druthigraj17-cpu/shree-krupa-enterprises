import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO from '../components/SEO.jsx';
import { IMG } from '../data/site.js';
import { marqueeClients, clientChips, references } from '../data/projects.js';

export default function Clients() {
  return (
    <>
      <SEO title="Clients" description="The network of clients we work with — Jockey, Qualcomm, Foxconn, Continental, Accenture, Capgemini, Manipal Hospitals and more across India." />

      <PageHero
        eyebrow="Trusted By Industry Leaders"
        title="Our Clients"
        lead="From manufacturing floors to tech campuses, we help India's leading enterprises run on reliable power."
        crumb="Clients"
        asideTitle="Who we serve"
        asideItems={['Manufacturing & apparel', 'Technology & engineering', 'Real estate & construction', 'Retail, healthcare & more']}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Network of Clients" title="Prominent companies we work with" lead="The network of clients we work with includes prominent companies across manufacturing, technology, retail, engineering and healthcare." />
          <div className="marquee">
            <div className="marquee-track">
              {[...marqueeClients, ...marqueeClients].map((c, i) => (
                <div className="marquee-item" key={i}>{c}</div>
              ))}
            </div>
          </div>
          <div className="client-logo-grid mt-lg">
            {clientChips.map((c, i) => (
              <div className="client-logo-card" key={i}>
                <div className="client-logo-img">
                  <img src={IMG[c.img]} alt={`Project site for ${c.name}`} loading="lazy" />
                  <div className="client-logo-overlay" style={{ background: `linear-gradient(135deg, ${c.color}dd, ${c.color}88)` }}>
                    <span>{c.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="References" title="Our project references" lead="A snapshot of client / customer engagements and the nature of works we have delivered." />
          <div className="table-wrap mt-lg">
            <table className="proj-table">
              <thead>
                <tr><th>Client / Customer</th><th>Nature of Works</th><th>Order Value</th></tr>
              </thead>
              <tbody>
                {references.map((r, i) => (
                  <tr key={i}><td><strong>{r.client}</strong></td><td>{r.works}</td><td className="value">{r.value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Become Our Next Success Story</span>
          <h2>Join India's Leading Enterprises</h2>
          <p>Partner with a licensed MEP contractor committed to quality, safety and on-time delivery.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
