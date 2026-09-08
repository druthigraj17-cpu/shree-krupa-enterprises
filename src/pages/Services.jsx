import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO from '../components/SEO.jsx';
import { IMG } from '../data/site.js';
import { services, processSteps } from '../data/services.js';

const indexItems = [
  '01 · Electrification & Turnkey Projects',
  '02 · Design & Engineering',
  '03 · Statutory Approvals',
  '04 · Eaton & Schneider UPS',
  '05 · Data & Networking',
  '06 · Safety & Energy Audits',
  '07 · ELV — Fire, CCTV, PAVA',
  '08 · HT Power & AMC',
  '09 · Interior Fit-Outs & More',
];

export default function Services() {
  return (
    <>
      <SEO title="Services — MEP Electrical ELV HT AMC" description="Comprehensive MEP services — electrification, design, statutory approvals, UPS, data networking, ELV, HT power, lightning protection, energy audits and interior fit-outs." />

      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        lead="A diverse selection of specialized MEP services, tailored to the different specifications of our clients."
        crumb="Services"
        asideTitle="Service index"
        asideItems={indexItems}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="MEP Solutions" title="Specialized services, tailored delivery" lead="Thirteen capability areas, one accountable partner — scroll through the services you need." />
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

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Custom Requirement?</span>
          <h2>We Engineer Solutions That Fit</h2>
          <p>Every facility is unique. Share your requirements and our engineers will architect the right MEP solution for your project.</p>
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
    </>
  );
}
