import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ maxWidth: 820, margin: '30px auto 0' }}>
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}
          </div>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
