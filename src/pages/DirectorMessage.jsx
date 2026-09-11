import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO from '../components/SEO.jsx';
import { IMG } from '../data/site.js';

const directorBoxes = [
  { initials: 'LR', name: 'Mr. Lokesh Rai', role: 'Director — Operations', desc: 'Manages the business functions of the company.', items: ['Sales & Marketing', 'Accounts & Statutory', 'HR / Recruitment'], img: 'n11' },
];

export default function DirectorMessage() {
  return (
    <>
      <SEO title="Director Message" description="Message from the Directors of Shree Krupa Enterprises and the organizational structure that drives quality MEP delivery." />

      <PageHero
        eyebrow="Leadership"
        title="Message From Our Directors"
        lead="Two capable directors lead Shree Krupa Enterprises — one focused on business, the other on technical excellence."
        crumb="Director Message"
        asideTitle="Board & leadership"
        asideItems={['Lokesh Rai — Operations',  'Class-1 Licensed Contractor', 'Guided by quality & safety']}
      />

      <section className="section">
        <div className="container">
          <div className="intro-split" style={{ alignItems: 'start' }}>
            <Reveal>
              <div className="director" style={{ gridTemplateColumns: '1fr' }}>
                <div className="director-avatar" style={{ width: '100%', maxWidth: 320, height: 260, margin: '0 auto', overflow: 'hidden', borderRadius: 16 }}>
                  <img src={IMG.n11} alt="Lokesh Rai - Director" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="director-info">
                <span className="eyebrow">Message From the Director</span>
                <h2 style={{ color: 'var(--teal-800)', fontSize: '1.9rem' }}>Mr. Lokesh Rai</h2>
                <div className="role">Director — Operations, Shree Krupa Enterprises</div>
                <p style={{ color: 'var(--muted)' }}>Welcome to Shree Krupa Enterprises, where we are committed to giving the right value in the Authorized Dealers. Since our incorporation over a decade ago, we have maintained an excellent reputation for delivering high-quality projects that have exceeded the expectations of our clients.</p>
                <p style={{ color: 'var(--muted)', marginTop: 12 }}>Our core strengths of delivering quality and safety through our technical expertise and client-centric approaches are what set our team apart in the industry. This has guided our progression and led to the successful completion of our projects. We aim to keep developing our abilities according to technological advancements and utilizing their full potential to cater to the diverse MEP needs of our clients.</p>
                <div className="quote"><p>I thank you for taking the time to understand our background and capabilities, and we are eager to manage all the requirements for the growth of your business.</p></div>
                <div className="sign">Best wishes,<br />Lokesh Rai<br />Director, Shree Krupa Enterprises.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Our Leadership" title="Two capable directors, one goal" lead="Mr. Lokesh Rai manages sales, finance and recruitment, while Mrs. Prathibha leads the engineers, designers and technical staff." />
          <div className="grid grid-2">
            {directorBoxes.map((d, i) => (
              <Reveal key={i}>
                <div className="team-card">
                  <div className="team-avatar" style={{ overflow: 'hidden' }}>
                    <img src={IMG[d.img]} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                  <h3>{d.name}</h3>
                  <div className="role">{d.role}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.94rem' }}>{d.desc}</p>
                  <ul>{d.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Who We Are" title="Organizational chart" lead="A lean structure that pairs strong commercial leadership with deep technical delivery." />
          <div className="org-chart" style={{ marginTop: 20 }}>
            <Reveal>
              <div className="org-node board"><h4>SHREE KRUPA ENTERPRISES</h4><span>Class-1 Licensed Electrical Contractor</span></div>
            </Reveal>
            <Reveal><div className="org-connector">&#8595;</div></Reveal>
            <div className="org-rows">
              <Reveal>
                <div className="org-col">
                  <h3>Director — Operations: Lokesh Rai</h3>
                  <div className="org-list">
                    <div className="org-node"><strong>Sales &amp; Marketing</strong></div>
                    <div className="org-node"><strong>Accounts &amp; Statutory</strong></div>
                    <div className="org-node"><strong>HR / Recruitment</strong></div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="org-col">
                  <h3>Director — Technical: Mrs. Prathibha</h3>
                  <div className="org-list">
                    <div className="org-node"><strong>Project Head</strong></div>
                    <div className="org-node"><strong>Tendering &amp; Procurement Team</strong></div>
                    <div className="org-node"><strong>Designing &amp; Drafting Team</strong></div>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal><div className="org-connector">&#8595;</div></Reveal>
            <div className="org-rows">
              <Reveal>
                <div className="org-col">
                  <h3>Site Execution</h3>
                  <div className="org-list">
                    <div className="org-node"><strong>Site Engineers</strong></div>
                    <div className="org-node"><strong>Quality Engineers</strong></div>
                    <div className="org-node"><strong>Safety Engineers</strong></div>
                    <div className="org-node"><strong>Quantity Surveyor</strong></div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="org-col">
                  <h3>Workforce</h3>
                  <div className="org-list">
                    <div className="org-node"><strong>Electricians</strong><span>On roll — 8 Nos</span></div>
                    <div className="org-node"><strong>Contract Team</strong><span>20 to 40 Nos</span></div>
                    <div className="org-node"><strong>Additional Manpower</strong><span>Need basis</span></div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Work With Us</span>
          <h2>Let's Build Excellence Together</h2>
          <p>Connect with our leadership team to understand how Shree Krupa Enterprises can power your next MEP requirement.</p>
        </div>
      </section> */}
    </>
  );
}
