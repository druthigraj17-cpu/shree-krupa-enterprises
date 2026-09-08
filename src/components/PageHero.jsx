import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export default function PageHero({ eyebrow, title, lead, crumb, asideTitle, asideItems = [] }) {
  return (
    <section className="page-hero split-hero">
      <div className="container">
        <div>
          {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {lead && <p style={{ color: '#E3E3E3', marginTop: 16, maxWidth: 560 }}>{lead}</p>}
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{crumb || title}</span>
          </div>
        </div>
        {asideItems.length > 0 && (
          <Reveal>
            <div className="hero-aside">
              <h4>{asideTitle || 'At a glance'}</h4>
              <ul>
                {asideItems.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
