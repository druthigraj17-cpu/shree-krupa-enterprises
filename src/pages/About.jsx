import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO from '../components/SEO.jsx';
import { IMG } from '../data/site.js';

const storyChecklist = [
    'UPS sales — Eaton Powerware, Luminous/Schneider',
    'Apar Wires & Cables — authorized distributor',
  'Internal & external electrification works',
  'Data & networking works',
  'ELV works — fire system, CCTV, PAVA, access control',
  'Design & detailed engineering services',
  'Turnkey project management',
  'HT power sanctioning & HT works',
  'AMC services & facility management',
  'Electrical safety & energy audits',
  'Statutory approvals — CEIG, ESCOMS, Fire Office, KSPCB',
];

const pm = [
  { ic: '◎', h: 'Our Vision', p: 'To be a leading MEP service provider in India, empowering clients with technical expertise, quality and sustainable solutions.' },
  { ic: '➤', h: 'Our Mission', p: 'To consistently deliver innovation with result-driven and reliable MEP services that forge long-term successful client partnerships.' },
];

const values = [
  { ic: '💡', h: 'Innovation', p: 'New technology applied to develop efficient, customized MEP solutions.' },
  { ic: '🏆', h: 'Excellence', p: 'High-quality services that boost our clients\' businesses.' },
  { ic: '🤝', h: 'Integrity', p: 'Transparent, ethical business practices in every engagement.' },
  { ic: '🦺', h: 'Safety', p: 'Prioritizing the safety of staff, clients and partners per industry protocols.' },
  { ic: '🌱', h: 'Sustainability', p: 'Environmental responsibility for a better tomorrow.' },
  { ic: '🎯', h: 'Client-Centric', p: 'Every solution engineered around client needs, timelines and budgets.' },
];

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Shree Krupa Enterprises — a Class-1 Licensed Electrical Contracting company in Bangalore providing MEP, ELV, HT and AMC services since 2012." />

      <PageHero
        eyebrow="About Us"
        title="Symbol of excellence in MEP solutions"
        lead="Driving innovation and exceeding client expectations across the MEP project lifecycle."
        crumb="About Us"
        asideTitle="At a glance"
        asideItems={[
          'Class-1 Licensed Electrical Contractor',
          'Incorporated 2012 · Bangalore',
          'Serving clients across India',
          'CEIG · ESCOMS · Fire · KSPCB liaisoning',
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our Story"
            title="Driving innovation in MEP since 2012"
            lead="A Class-1 Licensed Electrical Contracting company built on innovation, quality and a client-first culture."
          />
          <div className="intro-split">
            <Reveal>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>Shree Krupa Enterprises is a <strong>Authorized Distributor For Luminous and Apar Wires</strong>  </p>
              <p style={{ color: 'var(--muted)', marginTop: 14 }}>Incorporated in 2012 in Bangalore, our team believes in driving innovation and exceeding our clients' expectations — from design and detailed engineering to installation, testing and commissioning.</p>
              <div className="pill-row">
                <span className="pill">MEP · Mechanical · Electrical · Plumbing</span>
                <span className="pill">Pan-India presence</span>
                <span className="pill">Since 2012</span>
              </div>
            </Reveal>
            <Reveal>
              <div className="about-clip" style={{ padding: 0 }}>
                <div className="about-inner">
                  <img src={IMG.n5} alt="Shree Krupa Enterprises team" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: '16px 16px 0 0', marginBottom: 16 }} loading="lazy" />
                  <ul className="check-list" style={{ gridTemplateColumns: '1fr', margin: 0 }}>
                    {storyChecklist.map((it, i) => <li key={i}>{it}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="stat-band">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-cell"><CountUp className="snum" to={12} suffix="+" /><div className="slab">Years of Excellence</div></div>
            <div className="stat-cell"><CountUp className="snum" to={450} suffix="+" /><div className="slab">Projects Delivered</div></div>
            <div className="stat-cell"><CountUp className="snum" to={120} suffix="+" /><div className="slab">Enterprise Clients</div></div>
            <div className="stat-cell"><CountUp className="snum" to={100} suffix="%" /><div className="slab">Compliance Focus</div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Vision & Mission" title="Where we are headed, and how we get there" />
          <div className="panel-row panel-row-2">
            {pm.map((v, i) => (
              <Reveal key={i}>
                <div className="panel"><div className="panel-ic">{v.ic}</div><div><h3>{v.h}</h3><p>{v.p}</p></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Core Values" title="The principles that guide us" />
          <div className="tile-row tile-grid-2">
            {values.map((v, i) => (
              <Reveal key={i}>
                <div className="panel"><div className="panel-ic">{v.ic}</div><div><h3>{v.h}</h3><p>{v.p}</p></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Beyond Business</span>
          <h2>Building a better tomorrow</h2>
          <p>We conduct electrical fire-safety and awareness programs at schools and colleges, run tree-plantation drives around Bengaluru, and extend financial support to charitable organizations.</p>
        </div>
      </section>
    </>
  );
}
