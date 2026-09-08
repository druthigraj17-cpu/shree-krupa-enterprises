import { useEffect, useState } from 'react';
import { IMG } from '../data/site.js';

export default function Gallery({ images }) {
  const [lb, setLb] = useState(null);

  useEffect(() => {
    document.body.style.overflow = lb ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lb]);

  return (
    <>
      <div className="gallery mt-lg">
        {images.map((key, i) => (
          <div className="gallery-item" key={i} onClick={() => setLb(IMG[key])}>
            <img src={IMG[key]} alt={`Project site ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      {lb && (
        <div className="lightbox show" onClick={(e) => { if (e.target === e.currentTarget || e.target.classList.contains('lightbox-close')) setLb(null); }}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setLb(null)}>&times;</button>
          <img src={lb} alt="Project site" />
        </div>
      )}
    </>
  );
}
