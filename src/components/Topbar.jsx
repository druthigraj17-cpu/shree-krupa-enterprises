import { SITE } from '../data/site.js';
import { IconFB, IconLI, IconIG, IconWA } from './icons.jsx';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-left">
          <a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a>
          <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
        <div className="topbar-right">
          <a href="#" aria-label="Facebook">{IconFB}</a>
          <a href="#" aria-label="LinkedIn">{IconLI}</a>
          <a href="#" aria-label="Instagram">{IconIG}</a>
          <a href={`https://wa.me/${SITE.phone1Tel.replace('+', '')}`} aria-label="WhatsApp">{IconWA}</a>
        </div>
      </div>
    </div>
  );
}
