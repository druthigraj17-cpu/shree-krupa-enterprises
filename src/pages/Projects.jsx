import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Gallery from '../components/Gallery.jsx';
import SEO from '../components/SEO.jsx';
import { IMG } from '../data/site.js';
import { projectCards, references, galleryImages } from '../data/projects.js';

export default function Projects() {
  return (
    <>
      <SEO title="Projects" description="A look at the landmark facilities we power — Page Industries, Foxconn, Continental, Qualcomm, Arvind and more across manufacturing, technology, retail and healthcare." />

      <PageHero
        eyebrow="Featured Work"
        title="Our Projects"
        lead="A look at the landmark facilities we power across manufacturing, technology, retail and healthcare."
        crumb="Projects"
        asideTitle="Key engagement types"
        asideItems={['Greenfield & brownfield electrification', 'Base building, earthing & LPS', 'HVAC & interiors', 'AMC & repetitive order programs']}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Portfolio" title="Powering India's landmark facilities" lead="The network of clients we work with includes prominent companies across manufacturing, technology, retail and healthcare." />
          <div className="grid grid-3">
            {projectCards.map((p, i) => (
              <Reveal key={i}>
                <div className="project">
                  <div className="project-img"><img src={IMG[p.img]} alt={`Project for ${p.name}`} loading="lazy" style={{ objectFit: 'contain', padding: '12px' }} /></div>
                  <div className="project-body">
                    <span className="tag">{p.tag}</span>
                    <h3>{p.name}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '.92rem' }}>{p.desc}</p>
                    <div className="meta"><span>Order Value</span><span className="value">{p.value}</span></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="References" title="Project references" lead="A snapshot of client / customer engagements and the nature of works we deliver." />
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
      </section> */}

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Site Gallery" title="On-site snapshots" lead="Real installations, testing and commissioning from across our project sites." />
          <Gallery images={galleryImages} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Your Project Next</span>
          <h2>Let's Deliver Excellence Together</h2>
          <p>Whether it's a greenfield facility or a brownfield expansion — our team has the capabilities to deliver on time and on budget.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
        </div>
      </section>
    </>
  );
}
