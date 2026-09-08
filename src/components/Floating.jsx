import { SITE } from '../data/site.js';
import { IconCall, IconWA } from './icons.jsx';

export default function Floating() {
  return (
    <div className="floating">
      <a href={`tel:${SITE.phone1Tel}`} className="call" aria-label="Call">{IconCall}</a>
      <a href={`https://wa.me/${SITE.phone1Tel.replace('+', '')}?text=Hello%20Shree%20Krupa%20Enterprises`} className="wa" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">{IconWA}</a>
    </div>
  );
}
